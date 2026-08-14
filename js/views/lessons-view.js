import { CATEGORIES, LESSONS } from "../data/lessons.js";
import { SIGN_CATEGORIES } from "../data/signs.js";

export function renderLessons(container, params, navigate) {
  if (params.lessonId) {
    renderLessonDetail(container, Number(params.lessonId), params.signCategoryId, navigate);
  } else if (params.categoryId) {
    renderCategoryLessons(container, params.categoryId, navigate);
  } else {
    renderCategoryList(container, navigate);
  }
}

function renderCategoryList(container, navigate) {
  container.innerHTML = `
    <h2 class="section-title">Lesson Reference</h2>
    <div class="category-list">
      ${CATEGORIES.map(
        (cat) => `
        <button class="category-card" data-cat="${cat.id}">
          <span class="category-letter">${cat.id}</span>
          <span class="category-name">${cat.title}</span>
          <span class="category-count">${cat.lessonIds.length} lesson${cat.lessonIds.length > 1 ? "s" : ""}</span>
        </button>`
      ).join("")}
    </div>
  `;
  container.querySelectorAll(".category-card").forEach((btn) => {
    btn.addEventListener("click", () => navigate(`#/lessons/${btn.dataset.cat}`));
  });
}

function renderCategoryLessons(container, categoryId, navigate) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) {
    navigate("#/lessons");
    return;
  }
  const lessons = cat.lessonIds.map((id) => LESSONS.find((l) => l.id === id));
  container.innerHTML = `
    <button class="back-link" id="back-btn">&larr; All categories</button>
    <h2 class="section-title">${cat.id}. ${cat.title}</h2>
    <div class="lesson-list">
      ${lessons
        .map(
          (l) => `
        <button class="lesson-card" data-lesson="${l.id}">
          <span class="lesson-num">${l.id}</span>
          <span class="lesson-title">${l.title}</span>
        </button>`
        )
        .join("")}
    </div>
  `;
  container.querySelector("#back-btn").addEventListener("click", () => navigate("#/lessons"));
  container.querySelectorAll(".lesson-card").forEach((btn) => {
    btn.addEventListener("click", () => navigate(`#/lessons/${categoryId}/${btn.dataset.lesson}`));
  });
}

function renderLessonDetail(container, lessonId, signCategoryId, navigate) {
  const lesson = LESSONS.find((l) => l.id === lessonId);
  if (!lesson) {
    navigate("#/lessons");
    return;
  }

  if (lesson.signage) {
    if (signCategoryId) {
      renderSignGrid(container, lesson, signCategoryId, navigate);
    } else {
      renderSignCategoryList(container, lesson, navigate);
    }
    return;
  }

  container.innerHTML = `
    <button class="back-link" id="back-btn">&larr; ${lesson.category}. lessons</button>
    <h2 class="section-title">${lesson.id}. ${lesson.title}</h2>
    <div class="lesson-body">${lesson.html}</div>
    ${
      lesson.sourceUrl
        ? `<a class="source-link" href="${lesson.sourceUrl}" target="_blank" rel="noopener noreferrer">View original Dutch lesson &#8594;</a>`
        : ""
    }
  `;
  container.querySelector("#back-btn").addEventListener("click", () => navigate(`#/lessons/${lesson.category}`));
}

function renderSignCategoryList(container, lesson, navigate) {
  container.innerHTML = `
    <button class="back-link" id="back-btn">&larr; ${lesson.category}. lessons</button>
    <h2 class="section-title">${lesson.id}. ${lesson.title}</h2>
    <div class="lesson-body">${lesson.html}</div>
    <div class="category-list">
      ${SIGN_CATEGORIES.map(
        (sc) => `
        <button class="category-card" data-signcat="${sc.id}">
          <span class="category-letter">${sc.signs.length}</span>
          <span class="category-name">${sc.title}</span>
          <span class="category-count">${sc.shape}</span>
        </button>`
      ).join("")}
    </div>
  `;
  container.querySelector("#back-btn").addEventListener("click", () => navigate(`#/lessons/${lesson.category}`));
  container.querySelectorAll(".category-card").forEach((btn) => {
    btn.addEventListener("click", () => navigate(`#/lessons/${lesson.category}/${lesson.id}/${btn.dataset.signcat}`));
  });
}

function renderSignGrid(container, lesson, signCategoryId, navigate) {
  const signCat = SIGN_CATEGORIES.find((sc) => sc.id === signCategoryId);
  if (!signCat) {
    navigate(`#/lessons/${lesson.category}/${lesson.id}`);
    return;
  }
  container.innerHTML = `
    <button class="back-link" id="back-btn">&larr; All sign categories</button>
    <h2 class="section-title">${signCat.title}</h2>
    <p class="sign-shape-note">${signCat.shape}</p>
    <div class="sign-grid">
      ${signCat.signs
        .map(
          (s) => `
        <div class="sign-card">
          <img class="sign-img" src="assets/signs/${signCat.id}/${s.code}.png" alt="${s.code}" loading="lazy" />
          <div class="sign-code">${s.code}</div>
          <div class="sign-meaning">${s.meaning}</div>
        </div>`
        )
        .join("")}
    </div>
  `;
  container.querySelector("#back-btn").addEventListener("click", () => navigate(`#/lessons/${lesson.category}/${lesson.id}`));
}
