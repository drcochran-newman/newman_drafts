/* ============================================================
   The Newman Institute — board experience interactions
   ============================================================ */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header scroll state + progress ---------- */
  var header = document.getElementById("siteHeader");
  var progressBar = document.getElementById("progressBar");
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (progressBar) {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      progressBar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal, .t-item");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-target"));
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";
    if (reduce) { el.textContent = prefix + target + suffix; return; }
    var dur = 1500, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll(".stat-num, .proof-num");
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Philosophy wall ---------- */
  var commitments = {
    "Human Dignity": {
      text: "Every person is more than data, labor, output, or cost. AI must be judged first by whether it honors the human person.",
      quote: "Artificial intelligence must always respect and promote the intrinsic dignity of every human being.",
      cite: "Antiqua et Nova \u00b7 Dicastery for the Doctrine of the Faith, 2025"
    },
    "Meaningful Work": {
      text: "AI should strengthen work, skill, participation, and agency \u2014 never reduce workers to replaceable inputs.",
      quote: "Work is \u2018for man\u2019 and not man \u2018for work.\u2019",
      cite: "Pope John Paul II \u00b7 Laborem Exercens, 1981"
    },
    "Wisdom": {
      text: "Knowledge is not wisdom. The Institute preserves the judgment, institutional memory, and discernment no dataset can contain.",
      quote: "Technological progress must be accompanied by the wisdom of the heart.",
      cite: "Pope Francis \u00b7 World Communications Day Message, 2024"
    },
    "Responsibility": {
      text: "AI may assist a decision, but it cannot bear conscience. People and institutions remain accountable for consequential choices.",
      quote: "AI is the augmentation of human capability, not a substitute for it; the human person remains the criterion of value for any technology.",
      cite: "Pope Leo XIV \u00b7 Magnifica Humanitas, 2026"
    },
    "Restraint": {
      text: "AI readiness includes knowing when not to use AI, when to verify, when to slow down, and when relationship matters more than efficiency.",
      quote: "Trustworthiness is contextual: responsible use includes determining when an AI system should not be deployed at all.",
      cite: "NIST AI Risk Management Framework (AI RMF 1.0), 2023"
    },
    "Governance": {
      text: "Responsible AI requires clear rules, visible accountability, appeal paths, and practical safeguards inside real workflows.",
      quote: "Trustworthy AI is accountable and transparent \u2014 clear responsibility and openness across the system and the setting it operates in.",
      cite: "NIST AI Risk Management Framework (AI RMF 1.0), 2023"
    },
    "Community": {
      text: "The people and communities affected by AI should have a genuine voice in how it is adopted, governed, and measured.",
      quote: "By the principle of subsidiarity, decisions should be made as close as possible to the people they affect.",
      cite: "Catholic social teaching \u00b7 Quadragesimo Anno, 1931"
    },
    "The Common Good": {
      text: "The shared good created through interdependence, participation, mutual responsibility, and justice.",
      quote: "The common good is the sum total of social conditions which allow people, as groups and individuals, to reach their fulfillment more fully and more easily.",
      cite: "Second Vatican Council \u00b7 Gaudium et Spes, \u00a726"
    }
  };
  var cTitle = document.getElementById("cTitle");
  var cText = document.getElementById("cText");
  var cQuote = document.getElementById("cQuote");
  var cCite = document.getElementById("cCite");
  document.querySelectorAll(".pcard").forEach(function (card) {
    card.addEventListener("click", function () {
      var key = card.getAttribute("data-c");
      var data = commitments[key];
      document.querySelectorAll(".pcard").forEach(function (c) { c.classList.toggle("is-selected", c === card); });
      if (data) {
        if (cTitle) cTitle.textContent = key;
        if (cText) cText.textContent = data.text;
        if (cQuote) cQuote.textContent = "\u201c" + data.quote + "\u201d";
        if (cCite) cCite.textContent = data.cite;
      }
    });
  });

  /* ---------- Scenario bars ---------- */
  function showBars(container) {
    container.querySelectorAll(".bar").forEach(function (bar) {
      var w = parseFloat(bar.getAttribute("data-w"));
      var cap = bar.getAttribute("data-cap");
      if (cap) w = Math.min(w, parseFloat(cap));
      requestAnimationFrame(function () { bar.style.width = w + "%"; bar.classList.add("shown"); });
    });
  }
  var scenario = document.querySelector(".scenario");
  if (scenario) {
    if ("IntersectionObserver" in window && !reduce) {
      var sio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { showBars(scenario); sio.disconnect(); } });
      }, { threshold: 0.4 });
      sio.observe(scenario);
    } else { showBars(scenario); }
  }

})();
