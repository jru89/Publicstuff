# Rijbewijs A Exam Trainer

A free, installable study app for the Belgian motorcycle (rijbewijs A/A1/A2)
theory exam. English content translated from the official Dutch source
material. Static site, no backend, no build step — designed to be hosted for
free on GitHub Pages and installed on iPhone/iPad via Safari's "Add to Home
Screen."

See [specs/001-exam-trainer/spec.md](specs/001-exam-trainer/spec.md) and
[specs/001-exam-trainer/plan.md](specs/001-exam-trainer/plan.md) for the full
requirements and architecture decisions.

## Running it locally

No build step needed — any static file server works, for example:

```bash
python -m http.server 8531
```

Then open `http://localhost:8531`. (Opening `index.html` directly via
`file://` will NOT work — ES modules and the service worker both require a
real HTTP origin.)

## Deploying to GitHub Pages (free)

1. Create a new **public** GitHub repository (Pages' free tier requires a
   public repo).
2. Push this project's contents to the repository's `main` branch:
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```
3. In the repository's Settings → Pages, set "Source" to "Deploy from a
   branch," branch `main`, folder `/ (root)`.
4. After a minute or two, the app will be live at
   `https://<your-username>.github.io/<repo-name>/`.
5. Send that link to whoever will use it. On iPhone/iPad: open the link in
   **Safari** (not Chrome — "Add to Home Screen" for a full PWA install only
   works from Safari), tap the Share icon, then "Add to Home Screen."

Any future changes: edit the files and `git push` again — Pages redeploys
automatically.

## Project structure

```
index.html              App shell
css/style.css            All styling
js/app.js                Router, wires views together
js/data/lessons.js       English lesson content (31 sections, 8 categories)
js/data/questions.js     Practice question bank (Category F overweighted)
js/lib/shuffle.js        Fisher-Yates shuffle + weighted exam sampling
js/lib/history.js        On-device (localStorage) attempt history
js/views/lessons-view.js Lesson browser (category list -> lesson detail)
js/views/exam-view.js    Timed 50-question practice exam engine
js/views/results-view.js Score, pass/fail, and wrong-answer review
manifest.json             PWA manifest
service-worker.js         Offline app-shell caching
icons/                    Generated app icons (scripts/gen_icons.py)
```
