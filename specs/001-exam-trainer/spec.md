# Feature Spec: Rijbewijs A (Motorcycle) Theory Exam Trainer — iOS PWA

## Summary

A free, installable (iOS/iPadOS home-screen PWA) study app to help the user's
sister-in-law prepare for the Belgian motorcycle (rijbewijs A/A1/A2) theory
exam. Content is translated to English from the official Dutch source
material. The app has two modes: (1) a browsable lesson reference and (2) a
realistic practice exam that mirrors the real Belgian exam center format.

## Background / Source Material

- Source content: 31-section Dutch study document already scraped and
  compiled at `A:\_code\rijbewijs-A-leerstof.md` (originally from
  gratisrijbewijsonline.be), organized into 8 categories (A–H).
- Real exam format (confirmed by user, quoting the official exam description):
  - 50 multiple-choice questions per exam.
  - Pass mark: 41/50.
  - Each wrong or unanswered question costs 1 point.
  - 15 seconds allotted per question (timed).
  - In the real exam, questions are read aloud and shown on-screen; wrong
    answers can be reviewed immediately after finishing, not afterward.

## Users

- Primary: sister-in-law. iPhone/iPad only (no Android, no desktop assumed).
  Non-technical end user. English speaker — source material is Dutch, app
  must present English throughout.

## Goals

1. Study lesson content in English, organized by the same 8 categories as the
   source material.
2. Practice with realistic timed exams (50 questions, 15s/question, 41/50
   pass mark) that mirror the real test.
3. Install the app on iPhone/iPad as a home-screen app — no App Store
   account, no login, no cost to her or the developer.
4. See practice history/scores on-device, across sessions.

## Non-Goals (out of scope for v1)

- Audio / text-to-speech reading of questions (see Open Assumption 1).
- User accounts, login, or any backend/server component.
- Cross-device sync of progress — on-device storage only (explicitly
  confirmed by user).
- Native iOS App Store distribution.
- Content for any license category other than A/A1/A2 (motorcycle).

## Functional Requirements

### FR1 — Lesson reference

All 31 sections of the source material, translated to English, browsable by
category (A. Introduction, B. The Motorcycle, C. Public Roads, D. Road Users,
E. Crossing & Overtaking, F. Right of Way, G. On the Road, H. Miscellaneous).

**Acceptance:** every lesson in `rijbewijs-A-leerstof.md` has an English
equivalent reachable from a table of contents / category browser in the app.

### FR2 — Practice exam mode

A 50-question multiple-choice exam, questions drawn at random (no repeats
within a session) from a question bank derived from the lesson content. Each
question is shown once, with a 15-second countdown timer; if time runs out,
the question is auto-marked as unanswered (counts against the score like a
wrong answer). Score = correct out of 50; pass threshold = 41/50.

**Randomization (must be genuine, every attempt):**
- Question *selection* and *order* must be freshly and independently
  shuffled each time an exam starts (e.g. Fisher-Yates over the eligible
  pool), not a fixed rotation or a shuffle seeded/cached across sessions.
- The *order of the multiple-choice answer options* within each question
  must also be shuffled per attempt, so the correct answer isn't
  memorizable by position.
- Two exams started back-to-back should not reliably produce the same
  question set or the same option ordering.

**Acceptance:** a full exam run always presents exactly 50 questions, each
individually timed at 15 seconds, and the final score/pass-fail follows the
"lose 1 point per wrong or unanswered question, need 41/50" rule exactly.
Repeated exam runs demonstrably vary in question set, question order, and
answer-option order.

### FR3 — Results & review

Immediately after finishing an exam (including timing out on remaining
questions), show score, pass/fail, and a review listing every question
answered incorrectly or left unanswered, with the correct answer shown.

**Acceptance:** the review is reachable directly from the results screen and
reflects only that session's wrong/unanswered questions.

### FR4 — Progress history (on-device)

Store past exam attempts (date, score, pass/fail) in on-device local storage,
so she can see improvement across sessions.

**Acceptance:** reloading or reopening the app still shows prior attempt
history. Clearing Safari's site data is the only thing that resets it — this
is a documented limitation, not a bug.

### FR5 — Installable iOS/iPadOS PWA

Installable via Safari's "Add to Home Screen," with a custom icon and app
name, launching full-screen (no Safari chrome) once installed. Requires a
valid web app manifest and iOS-compatible icon sizes.

**Acceptance:** after "Add to Home Screen," the home screen icon launches the
app in standalone display mode, not inside Safari's UI.

### FR6 — Free static hosting via GitHub Pages

The entire app is a static site (no server-side runtime) deployable to GitHub
Pages at no cost.

**Acceptance:** pushing to the configured branch results in the live app
being reachable at the GitHub Pages URL with no manual server management.

## Non-Functional Requirements

- **NFR1 (Cost):** $0 recurring cost. No paid hosting, no paid APIs, no Apple
  Developer Program membership.
- **NFR2 (Platform):** Must work correctly in Safari on iOS/iPadOS (primary
  target). Working in desktop browsers is a secondary benefit, not a
  requirement.
- **NFR3 (Language):** All UI text and lesson/question content is in English.
- **NFR4 (Offline — nice-to-have):** A service worker caching the app shell
  and content so it still works with no/poor connectivity is desirable but
  not a hard requirement for v1 (see Open Assumption 4).

## Data / Content Plan

- Translate all 31 sections of `rijbewijs-A-leerstof.md` to English as the
  canonical lesson reference content.
- Derive a multiple-choice question bank from that content. Bank size should
  be well above 50 so repeated practice exams vary — exact target count set
  during planning, based on how much material each lesson/category yields.
- **Weighted toward Right of Way (Category F).** Real exams disproportionately
  emphasize right-of-way situations (lessons 17–22: priority signs, right of
  way at intersections, priority-from-the-right, traffic lights, turning/
  yielding, trains/trams/buses). The question bank must generate a larger
  share of questions from Category F relative to its share of total lesson
  content, and exam selection (FR2) must sample from the bank so Category F
  questions appear more frequently across attempts than a uniform
  category-blind draw would produce. Exact overweighting factor to be set
  during planning.

## Open Assumptions (confirm or resolve during planning)

1. **No audio in v1.** The real exam reads questions aloud; v1 shows text
   only. Acceptable, or should text-to-speech (iOS's built-in, still free)
   be added?
2. **Review is not one-time.** The real exam only allows reviewing wrong
   answers immediately after finishing, never again afterward. This spec
   deliberately deviates: history and reviews stay accessible any time
   (more useful for studying). Confirm this deviation is acceptable.
3. **Question bank size** and exact Category F overweighting factor — to be
   set in planning based on actual content yield (per-category distribution
   is otherwise confirmed: Right of Way is intentionally overweighted, see
   Data / Content Plan).
4. **Offline support (NFR4)** — nice-to-have vs. required for v1.

## Success Criteria

- She can install the app from a link, with no App Store, no payment, no
  account.
- She can read all lesson content in English.
- She can take a realistic 50-question, 15-seconds-per-question practice exam
  and get an accurate pass/fail per the real exam's rules.
- The app incurs no hosting cost to keep running long-term.
