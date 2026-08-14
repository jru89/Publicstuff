# Implementation Plan: Rijbewijs A Exam Trainer

## Architecture Decision: Vanilla static site, no build step

**Options considered:** React/Vue + bundler vs. plain HTML/CSS/JS (ES modules).

**Decision:** Plain HTML/CSS/JS with native ES modules. No framework, no
bundler, no `node_modules`.

**Rationale:** The whole point of the hosting constraint (FR6, NFR1) is
"push to GitHub, it's live" with zero maintenance. A build step adds a CI
pipeline, a `dist/` output, and a dependency-update burden for an app that
will otherwise sit untouched for months. The app's actual complexity (a
lesson browser + a timed quiz engine) does not need component-framework
machinery.

## Component boundaries (DIRECTIVE_001)

| Component | Responsibility | Depends on |
|---|---|---|
| `data/lessons.js` | Static English lesson content (31 sections, 8 categories) | none |
| `data/questions.js` | Static question bank (English, categorized, weighted per category) | `data/lessons.js` (category IDs only, no runtime coupling) |
| `lib/shuffle.js` | Fisher-Yates shuffle, weighted category sampler | none |
| `lib/history.js` | Read/write past attempts to `localStorage` | none |
| `views/lessons-view.js` | Render category list → lesson detail | `data/lessons.js` |
| `views/exam-view.js` | Run one timed exam session (selection, timer, scoring) | `data/questions.js`, `lib/shuffle.js` |
| `views/results-view.js` | Show score/pass-fail + wrong-answer review | exam session result object only (no direct data-file access) |
| `app.js` | Top-level view router, wires the above together | all views |
| `service-worker.js` | Cache app shell + data for offline use | none (build-time file list only) |

No component reaches into another's internals; views only receive data
through function parameters/return values, never by importing each other's
DOM state.

## Category weighting (resolves spec Open Assumption 3)

Baseline distribution across 8 categories (A–H) would be roughly uniform.
Per the user's confirmed extra focus on Right of Way (Category F: lessons
17–22 — priority signs, right-of-way-from-the-right, traffic lights,
turning/yielding, trains/trams/buses), the plan sets:

- **Question bank:** ~200 questions total. Category F gets ~12 questions
  per lesson (≈72 questions across its 6 lessons); the other 25 lessons get
  ~5 questions each (≈125 questions). This lets Category F be resampled
  across many practice attempts without repeating the same 15 questions
  every time.
- **Per-exam draw (50 questions):** a fixed quota of **15 questions from
  Category F** (30% of the exam, vs. its ~19% share of lesson count — a
  deliberate overweight) drawn without replacement from the F pool, and
  **35 questions** drawn without replacement proportionally from the
  remaining 25 lessons' pooled questions. The two groups are combined and
  Fisher-Yates shuffled together for final on-screen order, so Category F
  questions aren't clustered or predictable in position.
- Each question's 4 answer options are independently shuffled per attempt.

## PWA / offline

- `manifest.json`: name, short_name, start_url, display: standalone,
  theme/background color, icons (180×180 apple-touch-icon via `<link>` tag
  — iOS reads this specifically, not just the manifest — plus 192×192 and
  512×512 for the manifest itself).
- Icons generated programmatically (Python/Pillow available in this
  environment) — simple flat motorcycle/road-sign glyph, no external asset
  dependency.
- `service-worker.js` precaches the app shell (HTML/CSS/JS/data/icons) on
  install, serves cache-first with network fallback. Satisfies NFR4 as a
  real (not just "nice-to-have") feature since it costs nothing extra to
  include once the shell is static.

## Data flow (DIRECTIVE_031 — bounded contexts)

Two bounded contexts: **Content** (lessons/questions, Dutch-source-derived,
static English data) and **Session** (exam runtime state, scoring, history).
Session code never mutates Content data; it only reads it and produces its
own result objects. `lib/history.js` is the only place that touches
`localStorage`, and only ever stores Session-context result summaries
(date, score, pass/fail) — never re-stores Content data.

## Deployment

- Static site served from the repository root on the `main` branch via
  GitHub Pages ("Deploy from a branch" — no Actions workflow needed).
- Requires: a GitHub repository the user controls. Creating that repo and
  the first push is a **publish action** — will be confirmed with the user
  explicitly before it happens, per the standing rule on publishing public
  content.

## Testing approach

- Manual verification in the Browser pane at a mobile (iPhone-sized)
  viewport: lesson browsing, full exam run including timer expiry, review
  screen, history persistence across reload, manifest/service-worker
  registration.
- No automated test framework introduced — app has no server, no build,
  and DIRECTIVE_041 (tests as scaffold, not friction) argues against adding
  test infrastructure disproportionate to a static content app. Correctness
  is verified functionally in-browser instead.
