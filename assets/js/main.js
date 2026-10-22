(function () {
  "use strict";

  const MOBILE_BP = 768;
  const SCROLL_THRESHOLD = 72;
  const SCROLL_DELTA = 8;

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const mobileNavBackdrop = document.getElementById("mobileNavBackdrop");
  const header = document.getElementById("siteHeader");

  function isMobileNav() {
    return window.innerWidth <= MOBILE_BP;
  }

  function setMobileNavOpen(open) {
    if (!mainNav || !navToggle) return;
    mainNav.classList.toggle("is-open", open);
    navToggle.classList.toggle("is-active", open);
    navToggle.setAttribute("aria-expanded", open);
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("mobile-nav-open", open);
    if (header) {
      header.classList.toggle("mobile-nav-open", open);
      if (open) header.classList.remove("is-hidden");
    }
    if (mobileNavBackdrop) {
      mobileNavBackdrop.hidden = !open;
      mobileNavBackdrop.classList.toggle("is-visible", open);
    }
  }

  function closeMobileNav() {
    setMobileNavOpen(false);
    document.querySelectorAll(".has-dropdown.is-open").forEach((item) => {
      item.classList.remove("is-open");
      const btn = item.querySelector(".nav-link--dropdown");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      setMobileNavOpen(!mainNav.classList.contains("is-open"));
    });
    if (mobileNavBackdrop) {
      mobileNavBackdrop.addEventListener("click", closeMobileNav);
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mainNav.classList.contains("is-open")) {
        closeMobileNav();
      }
    });
    mainNav.querySelectorAll(".nav-list a").forEach((link) => {
      link.addEventListener("click", () => {
        if (isMobileNav()) closeMobileNav();
      });
    });
    document.querySelectorAll(".nav-link--dropdown").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (!isMobileNav()) return;
        e.preventDefault();
        const item = btn.closest(".has-dropdown");
        const open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open);
      });
    });
    window.addEventListener("resize", () => {
      if (!isMobileNav() && mainNav.classList.contains("is-open")) {
        closeMobileNav();
      }
    });
  }

  // Smart sticky header — hide on scroll down, show on scroll up
  if (header) {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
      const scrollY = window.scrollY;
      const menuOpen = mainNav && mainNav.classList.contains("is-open");
      const pastThreshold = scrollY > SCROLL_THRESHOLD;

      header.classList.toggle("is-scrolled", pastThreshold);
      header.classList.toggle("topbar-hidden", pastThreshold && !menuOpen);

      if (!pastThreshold || menuOpen) {
        header.classList.remove("is-hidden");
      } else if (scrollY > lastScrollY + SCROLL_DELTA) {
        header.classList.add("is-hidden");
      } else if (scrollY < lastScrollY - SCROLL_DELTA) {
        header.classList.remove("is-hidden");
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });

    updateHeader();
  }

  // Hero slider
  const slider = document.querySelector(".hero-slider");
  if (slider) {
    const track = slider.querySelector(".hero-slider__track");
    const slides = slider.querySelectorAll(".hero-slide");
    const dots = slider.querySelectorAll(".hero-slider__dot");
    const prevBtn = slider.querySelector(".hero-slider__arrow--prev");
    const nextBtn = slider.querySelector(".hero-slider__arrow--next");
    let current = 0;
    let autoplay;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
      slides.forEach((slide, i) => {
        slide.classList.toggle("is-active", i === current);
        const bg = slide.querySelector(".hero-slide__bg img");
        if (bg) {
          bg.style.animation = "none";
          void bg.offsetWidth;
          if (i === current) bg.style.animation = "";
        }
      });
    }

    function startAutoplay() {
      autoplay = setInterval(() => goTo(current + 1), 6000);
    }
    function stopAutoplay() {
      clearInterval(autoplay);
    }

    dots.forEach((dot, i) => dot.addEventListener("click", () => { goTo(i); stopAutoplay(); startAutoplay(); }));
    if (prevBtn) prevBtn.addEventListener("click", () => { goTo(current - 1); stopAutoplay(); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { goTo(current + 1); stopAutoplay(); startAutoplay(); });
    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
    startAutoplay();
  }

  // Stats counter animation
  const stats = document.querySelectorAll(
    ".stats-grid .stat-item__number[data-count], .about-stats-panel .stat-item__number[data-count]"
  );
  if (stats.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.dataset.animated === "true") return;
        const el = entry.target;
        el.dataset.animated = "true";
        const target = parseInt(el.dataset.count, 10);
        if (!Number.isFinite(target)) return;
        const duration = 1500;
        const start = performance.now();
        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor(progress * target);
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target;
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    stats.forEach((s) => observer.observe(s));
  }

  // Back to top
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 400);
    });
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Form submissions via Cloudflare Email Sending (Turnstile verified server-side)
  function getTurnstileToken(form) {
    return form.querySelector('[name="cf-turnstile-response"]')?.value || "";
  }

  function resetTurnstile() {
    if (window.turnstile) window.turnstile.reset();
  }

  async function submitProtectedForm({ form, endpoint, payload, turnstileError, successEl, errorEl, submitButton }) {
    const formsConfig = window.AQUALINE_FORMS;

    if (!formsConfig?.enabled || !formsConfig.workerUrl) {
      return { ok: false, reason: "not_configured" };
    }

    const token = getTurnstileToken(form);
    if (!token) {
      if (turnstileError) turnstileError.hidden = false;
      return { ok: false, reason: "turnstile_missing" };
    }

    if (turnstileError) turnstileError.hidden = true;
    if (errorEl) errorEl.hidden = true;
    if (successEl) successEl.hidden = true;
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(`${formsConfig.workerUrl}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, token }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        if (turnstileError && data.error === "turnstile_failed") turnstileError.hidden = false;
        if (errorEl) errorEl.hidden = false;
        resetTurnstile();
        return { ok: false, reason: data.error || "request_failed" };
      }
      if (successEl) successEl.hidden = false;
      form.reset();
      resetTurnstile();
      return { ok: true };
    } catch {
      if (errorEl) errorEl.hidden = false;
      resetTurnstile();
      return { ok: false, reason: "network_error" };
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const turnstileError = document.getElementById("turnstileError");
    const contactSuccess = document.getElementById("contactSuccess");
    const contactError = document.getElementById("contactError");
    const submitButton = document.getElementById("contactSubmit");

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const payload = {
        name: contactForm.querySelector('[name="name"]').value,
        email: contactForm.querySelector('[name="email"]').value,
        company: contactForm.querySelector('[name="company"]')?.value || "",
        phone: contactForm.querySelector('[name="phone"]')?.value || "",
        subject: contactForm.querySelector('[name="subject"]')?.value || "General Enquiry",
        message: contactForm.querySelector('[name="message"]').value,
      };

      await submitProtectedForm({
        form: contactForm,
        endpoint: "/contact",
        payload,
        turnstileError,
        successEl: contactSuccess,
        errorEl: contactError,
        submitButton,
      });
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    const turnstileError = document.getElementById("newsletterTurnstileError");
    const successEl = document.getElementById("newsletterSuccess");
    const errorEl = document.getElementById("newsletterError");
    const submitButton = document.getElementById("newsletterSubmit");

    newsletterForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const payload = {
        name: newsletterForm.querySelector('[name="name"]').value,
        email: newsletterForm.querySelector('[name="email"]').value,
      };

      await submitProtectedForm({
        form: newsletterForm,
        endpoint: "/newsletter",
        payload,
        turnstileError,
        successEl,
        errorEl,
        submitButton,
      });
    });
  }
})();
