(function () {
  var cfg = window.SITE_CONFIG || {};

  // Apply Ko-Fi link
  if (cfg.kofiUrl) {
    document.querySelectorAll("[data-kofi]").forEach(function (a) { a.href = cfg.kofiUrl; });
  }

  // Apply server IP
  if (cfg.serverIp) {
    document.querySelectorAll(".copy-ip").forEach(function (b) {
      b.dataset.ip = cfg.serverIp;
      var ip = b.querySelector(".ip");
      if (ip) ip.textContent = cfg.serverIp;
    });
  }

  // Copy IP button
  document.querySelectorAll(".copy-ip").forEach(function (b) {
    var label = b.querySelector(".copy-label");
    b.addEventListener("click", function () {
      var done = function () {
        if (!label) return;
        label.textContent = "Copied!";
        setTimeout(function () { label.textContent = "Copy IP"; }, 1600);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(b.dataset.ip).then(done, done);
      } else {
        done();
      }
    });
  });

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
