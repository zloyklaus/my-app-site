// Анонимная статистика сайта: сколько зашло и на какие кнопки нажимают.
// Отправляется только название события (например «dl_win»): без cookie, без адресов и идентификаторов. Описано в политике конфиденциальности.
// Если в браузере включено «Не отслеживать» (Do Not Track), ничего не отправляется.
(function () {
  "use strict";
  try {
    var dnt = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.msDoNotTrack === "1";
    var cfg = window.MY_APP || {};
    if (dnt || !cfg.licenseUrl) return;
    var url = cfg.licenseUrl.replace(/\/license\/?$/, "/service");
    if (url === cfg.licenseUrl) return;

    function send(event) {
      try {
        // text/plain: запрос без предварительной проверки CORS; сервер читает тело как JSON
        fetch(url, { method: "POST", headers: { "content-type": "text/plain" }, body: JSON.stringify({ action: "hit", event: event }), keepalive: true })
          .catch(function () {});
      } catch (e) {}
    }
    // Один раз за вкладку (чтобы обновление страницы не раздувало счётчик)
    function once(event) {
      try {
        if (sessionStorage.getItem("st_" + event)) return;
        sessionStorage.setItem("st_" + event, "1");
      } catch (e) {}
      send(event);
    }

    // Страница
    var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (page === "" || page === "index.html") {
      once("visit");
      var ref = "";
      try { ref = new URL(document.referrer).hostname.toLowerCase(); } catch (e) {}
      var src = !ref ? "src_direct"
        : /(google|yandex|bing|duckduckgo|mail\.ru|rambler|ya\.ru)/.test(ref) ? "src_search"
        : /(t\.me|telegram|vk\.com|vkontakte|youtube|youtu\.be|instagram|facebook|ok\.ru|reddit|twitter|x\.com|dzen)/.test(ref) ? "src_social"
        : /github\.io$/.test(ref) ? null : "src_other";
      if (src) once(src);
    } else if (page === "help.html") once("page_help");
    else if (page === "guide.html") once("page_guide");
    else if (page === "bonus.html") once("page_bonus");

    // Кнопки (по идентификатору элемента)
    var map = { dlWinTop: "dl_win", dlWin: "dl_win", dlMacArm: "dl_mac_arm", dlMacIntel: "dl_mac_intel",
                buyMonth: "buy_month", buyHalf: "buy_half", buyYear: "buy_year", promoBtn: "promo_apply" };
    document.addEventListener("click", function (e) {
      var el = e.target;
      while (el && el !== document) {
        if (el.id && map[el.id]) { send(map[el.id]); return; }
        el = el.parentNode;
      }
    }, true);
  } catch (e) {}
})();
