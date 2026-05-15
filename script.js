const courses = [
  {
    id: "html-css-responsive-layouts",
    title: "HTML, CSS, and Responsive Layouts",
    level: "Beginner",
    category: "Frontend",
    lessons: 18,
    duration: "6h 20m",
    instructor: "Maya Patel",
    nextLesson: "CSS Grid for course catalogs",
    progress: 82,
    color: "#4777b8",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    videos: [
      {
        title: "HTML and CSS Full Course - Beginner to Pro",
        provider: "SuperSimpleDev",
        videoId: "G3e-cpL7ofc"
      },
      {
        title: "CSS Grid for course catalogs",
        provider: "SuperSimpleDev",
        videoId: "G3e-cpL7ofc",
        start: 11818
      },
      {
        title: "Flexbox layout practice",
        provider: "SuperSimpleDev",
        videoId: "G3e-cpL7ofc",
        start: 13438
      }
    ],
    sortOrder: 1
  },
  {
    id: "javascript-essentials",
    title: "JavaScript Essentials for Web Apps",
    level: "Beginner",
    category: "Programming",
    lessons: 22,
    duration: "8h 10m",
    instructor: "Noah Williams",
    nextLesson: "Array methods in real interfaces",
    progress: 68,
    color: "#2d8f88",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    videos: [
      {
        title: "JavaScript Full Course for Beginners",
        provider: "freeCodeCamp",
        videoId: "PkZNo7MFNFg"
      },
      {
        title: "Variables, strings, and operators",
        provider: "freeCodeCamp",
        videoId: "PkZNo7MFNFg",
        start: 84
      },
      {
        title: "Functions and reusable logic",
        provider: "freeCodeCamp",
        videoId: "PkZNo7MFNFg",
        start: 3776
      }
    ],
    sortOrder: 2
  },
  {
    id: "react-component-systems",
    title: "React Component Systems",
    level: "Intermediate",
    category: "Frontend",
    lessons: 24,
    duration: "9h 35m",
    instructor: "Elena Brooks",
    nextLesson: "Reusable card and list patterns",
    progress: 46,
    color: "#254f66",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
    videos: [
      {
        title: "React Course for Beginners",
        provider: "freeCodeCamp",
        videoId: "bMknfKXIFA8"
      },
      {
        title: "Components and props",
        provider: "freeCodeCamp",
        videoId: "bMknfKXIFA8",
        start: 2450
      },
      {
        title: "State and interactive UI",
        provider: "freeCodeCamp",
        videoId: "bMknfKXIFA8",
        start: 7050
      }
    ],
    sortOrder: 3
  },
  {
    id: "accessible-product-design",
    title: "Accessible Product Design",
    level: "Intermediate",
    category: "Accessibility",
    lessons: 14,
    duration: "5h 45m",
    instructor: "Aisha Morgan",
    nextLesson: "Keyboard-first navigation",
    progress: 64,
    color: "#e4573d",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=900&q=80",
    videos: [
      {
        title: "Accessibility 101 - Build Your Accessible Website",
        provider: "Wix Learn",
        videoId: "20SHvU2PKsM"
      },
      {
        title: "10 Web Accessibility Topics in 7 Minutes",
        provider: "WebAIM",
        videoId: "3f31oufqFSM"
      },
      {
        title: "Accessibility Matters",
        provider: "ShopAccessible",
        videoId: "t64ax5dqLF0"
      }
    ],
    sortOrder: 4
  },
  {
    id: "learning-analytics-dashboards",
    title: "Learning Analytics Dashboards",
    level: "Advanced",
    category: "Data",
    lessons: 16,
    duration: "7h 50m",
    instructor: "Priya Nair",
    nextLesson: "Cohort progress signals",
    progress: 32,
    color: "#6f5aa8",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    videos: [
      {
        title: "Chart.js Tutorial for Beginners",
        provider: "freeCodeCamp",
        videoId: "sE08f4iuOhA"
      },
      {
        title: "Build dashboard charts",
        provider: "freeCodeCamp",
        videoId: "sE08f4iuOhA",
        start: 1200
      },
      {
        title: "Polish dashboard interactions",
        provider: "freeCodeCamp",
        videoId: "sE08f4iuOhA",
        start: 1100
      }
    ],
    sortOrder: 5
  },
  {
    id: "advanced-css-architecture",
    title: "Advanced CSS Architecture",
    level: "Advanced",
    category: "Frontend",
    lessons: 20,
    duration: "8h 25m",
    instructor: "Daniel Kim",
    nextLesson: "Token-driven responsive systems",
    progress: 28,
    color: "#f1a51b",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&w=900&q=80",
    videos: [
      {
        title: "CSS Full Course - Flexbox and Grid",
        provider: "freeCodeCamp",
        videoId: "ieTHC78giGQ"
      },
      {
        title: "CSS Grid architecture",
        provider: "freeCodeCamp",
        videoId: "ieTHC78giGQ",
        start: 900
      },
      {
        title: "Responsive CSS patterns",
        provider: "freeCodeCamp",
        videoId: "ieTHC78giGQ",
        start: 2200
      }
    ],
    sortOrder: 6
  }
].sort((a, b) => a.sortOrder - b.sortOrder);

const agenda = [
  { time: "09:30", title: "Finish CSS Grid lab", detail: "Course catalog layout" },
  { time: "13:00", title: "Live mentor review", detail: "Responsive card feedback" },
  { time: "17:30", title: "Accessibility quiz", detail: "12 questions, 15 minutes" }
];

const page = document.body.dataset.page;
const usersKey = "learnSphereUsers";
const sessionKey = "learnSphereCurrentUser";

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(sessionKey));
  } catch {
    return null;
  }
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(usersKey)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(usersKey, JSON.stringify(users));
}

function getRedirectTarget() {
  const params = new URLSearchParams(window.location.search);
  return params.get("redirect") || "index.html";
}

function courseUrl(course) {
  return `lesson.html?course=${encodeURIComponent(course.id)}`;
}

function protectedCourseUrl(course) {
  const href = courseUrl(course);
  return getCurrentUser()
    ? href
    : `login.html?redirect=${encodeURIComponent(href)}`;
}

function embedUrl(video) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1"
  });

  if (video.start) {
    params.set("start", video.start);
  }

  return `https://www.youtube.com/embed/${video.videoId}?${params.toString()}`;
}

function courseCard(course) {
  return `
    <article class="course-card">
      <img class="course-image" src="${course.image}" alt="${course.title} course preview" loading="lazy">
      <div class="course-body">
        <div class="course-meta">
          <span class="pill">${course.level}</span>
          <span class="pill">${course.category}</span>
          <span class="pill">${course.duration}</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.lessons} lessons with ${course.instructor}. Next: ${course.nextLesson}.</p>
        <div class="course-progress">
          <span>${course.progress}% complete</span>
          <span>${course.lessons} lessons</span>
        </div>
        <div class="bar" aria-label="${course.progress}% complete">
          <span style="--progress:${course.progress}%; --bar-color:${course.color}"></span>
        </div>
        <a class="course-link" href="${protectedCourseUrl(course)}">Start course</a>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const target = document.querySelector("#featuredCourses");
  if (!target) return;
  target.innerHTML = courses.slice(0, 2).map(courseCard).join("");
}

function renderCourses(filter = "All", query = "") {
  const target = document.querySelector("#courseGrid");
  if (!target) return;

  const normalizedQuery = query.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => {
    const searchable = `${course.title} ${course.category} ${course.level} ${course.instructor}`;
    const matchesFilter = filter === "All" || course.level === filter;
    const matchesQuery = searchable.toLowerCase().includes(normalizedQuery);
    return matchesFilter && matchesQuery;
  });

  target.innerHTML = visibleCourses.length
    ? visibleCourses.map(courseCard).join("")
    : `<p class="empty-state">No courses match this search.</p>`;
}

function bindCourseFilters() {
  const search = document.querySelector("#courseSearch");
  const segments = Array.from(document.querySelectorAll(".segment"));
  if (!search || !segments.length) return;

  let activeFilter = "All";
  const update = () => renderCourses(activeFilter, search.value);

  segments.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      segments.forEach((item) => item.classList.toggle("active", item === button));
      update();
    });
  });

  search.addEventListener("input", update);
}

function renderProgress() {
  const target = document.querySelector("#progressList");
  if (!target) return;

  target.innerHTML = courses.map((course) => `
    <article class="progress-item">
      <div>
        <div class="progress-title">
          <h3>${course.title}</h3>
          <span>${course.level}</span>
        </div>
        <p>${course.nextLesson}</p>
        <div class="bar" aria-label="${course.progress}% complete">
          <span style="--progress:${course.progress}%; --bar-color:${course.color}"></span>
        </div>
      </div>
      <strong>${course.progress}%</strong>
    </article>
  `).join("");
}

function renderAgenda() {
  const target = document.querySelector("#agendaList");
  if (!target) return;

  target.innerHTML = agenda.map((item) => `
    <li>
      <span class="time">${item.time}</span>
      <span>
        <strong>${item.title}</strong>
        <small>${item.detail}</small>
      </span>
    </li>
  `).join("");
}

function bindLessonCompletion() {
  const button = document.querySelector("#completeLesson");
  if (!button) return;

  const setState = (isComplete) => {
    button.textContent = isComplete ? "Completed" : "Mark complete";
    button.classList.toggle("is-complete", isComplete);
  };

  button.addEventListener("click", () => {
    const completed = localStorage.getItem("lessonComplete") === "true";
    localStorage.setItem("lessonComplete", String(!completed));
    setState(!completed);
  });

  setState(localStorage.getItem("lessonComplete") === "true");
}

function renderLessonPlayer() {
  const frame = document.querySelector("#lessonFrame");
  const list = document.querySelector("#lessonPlaylist");
  const title = document.querySelector("#lessonTitle");
  const eyebrow = document.querySelector("#lessonEyebrow");
  const notes = document.querySelector("#lessonNotes");
  if (!frame || !list || !title) return;

  const params = new URLSearchParams(window.location.search);
  const requestedCourse = params.get("course");
  const course = courses.find((item) => item.id === requestedCourse) || courses[0];
  const activeVideo = course.videos[0];

  title.textContent = course.title;
  if (eyebrow) {
    eyebrow.textContent = `${course.category} course`;
  }
  if (notes) {
    notes.textContent = `${course.instructor} guides this ${course.level.toLowerCase()} course across ${course.lessons} lessons. Continue with "${course.nextLesson}" after the current video.`;
  }

  const setVideo = (video, index) => {
    frame.src = embedUrl(video);
    frame.title = video.title;
    Array.from(list.querySelectorAll(".lesson-item")).forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
    });
  };

  list.innerHTML = course.videos.map((video, index) => `
    <button class="lesson-item ${index === 0 ? "active" : ""}" type="button" data-index="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <span class="lesson-copy">
        <strong>${video.title}</strong>
        <small>${video.provider}</small>
      </span>
    </button>
  `).join("");

  list.addEventListener("click", (event) => {
    const button = event.target.closest(".lesson-item");
    if (!button) return;
    const index = Number(button.dataset.index);
    setVideo(course.videos[index], index);
  });

  setVideo(activeVideo, 0);
}

function bindAuthForms() {
  const signupForm = document.querySelector("#signupForm");
  const loginForm = document.querySelector("#loginForm");
  const message = document.querySelector("#authMessage");
  const authSwitchLink = document.querySelector(".auth-switch a");
  const redirect = getRedirectTarget();

  if (authSwitchLink) {
    const targetPage = page === "login" ? "signup.html" : "login.html";
    authSwitchLink.href = `${targetPage}?redirect=${encodeURIComponent(redirect)}`;
  }

  if ((page === "login" || page === "signup") && getCurrentUser()) {
    window.location.href = redirect;
    return;
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(signupForm);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim().toLowerCase();
      const password = String(data.get("password") || "");
      const users = getUsers();

      if (!name || !email || password.length < 6) {
        message.textContent = "Enter a name, valid email, and at least 6 password characters.";
        return;
      }

      if (users.some((user) => user.email === email)) {
        message.textContent = "An account with this email already exists.";
        return;
      }

      const user = { name, email };
      users.push({ ...user, password });
      saveUsers(users);
      localStorage.setItem(sessionKey, JSON.stringify(user));
      window.location.href = getRedirectTarget();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(loginForm);
      const email = String(data.get("email") || "").trim().toLowerCase();
      const password = String(data.get("password") || "");
      const user = getUsers().find((item) => item.email === email && item.password === password);

      if (!user) {
        message.textContent = "Email or password is incorrect.";
        return;
      }

      localStorage.setItem(sessionKey, JSON.stringify({ name: user.name, email: user.email }));
      window.location.href = getRedirectTarget();
    });
  }
}

function renderAuthState() {
  const target = document.querySelector("#authLinks");
  if (!target) return;

  const user = getCurrentUser();
  if (!user) {
    target.innerHTML = `
      <a href="login.html" class="auth-link">Login</a>
      <a href="signup.html" class="auth-link is-strong">Sign up</a>
    `;
    return;
  }

  target.innerHTML = `
    <span class="auth-user">${user.name}</span>
    <button class="auth-link" type="button" id="logoutButton">Sign out</button>
  `;

  document.querySelector("#logoutButton")?.addEventListener("click", () => {
    localStorage.removeItem(sessionKey);
    window.location.href = "login.html";
  });
}

function guardLessonAccess() {
  if (page !== "lesson" || getCurrentUser()) return;
  const redirect = `lesson.html${window.location.search}`;
  window.location.href = `login.html?redirect=${encodeURIComponent(redirect)}`;
}

guardLessonAccess();
renderFeatured();
renderCourses();
renderProgress();
renderAgenda();
renderLessonPlayer();
renderAuthState();
bindCourseFilters();
bindLessonCompletion();
bindAuthForms();
