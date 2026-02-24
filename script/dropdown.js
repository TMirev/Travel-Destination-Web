(function () {
    "use strict";
    var ENDPOINT = "http://127.0.0.1:7242/ingest/9e3a60f3-4b9b-46b8-a472-f3349009ff19";

    function log(location, message, data, hypothesisId) {
        var payload = { location: location, message: message, data: data || {}, timestamp: Date.now(), hypothesisId: hypothesisId || "" };
        fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }).catch(function () {});
    }

    // #region agent log
    var dropdown = document.querySelector(".dropdown");
    var dropbtn = document.querySelector(".dropbtn");
    var content = document.querySelector(".dropdown-content");
    var viewportW = typeof window !== "undefined" ? window.innerWidth : 0;
    log("dropdown.js:init", "Dropdown script loaded", { viewportWidth: viewportW, hasDropdown: !!dropdown, hasButton: !!dropbtn, hasContent: !!content }, "H1");
    // #endregion

    if (!dropdown || !dropbtn || !content) return;

    function isOpen() {
        return dropdown.classList.contains("dropdown-open");
    }

    function setOpen(open) {
        if (open) dropdown.classList.add("dropdown-open"); else dropdown.classList.remove("dropdown-open");
    }

    function toggle() {
        var open = !isOpen();
        setOpen(open);
        // #region agent log
        log("dropdown.js:toggle", "Button clicked", { viewportWidth: window.innerWidth, openAfter: open, pointerType: (window.lastPointerType || "unknown") }, "H1");
        // #endregion
    }

    function close() {
        if (isOpen()) {
            setOpen(false);
            // #region agent log
            log("dropdown.js:close", "Closed by outside click", { viewportWidth: window.innerWidth }, "H4");
            // #endregion
        }
    }

    dropbtn.addEventListener("pointerdown", function (e) {
        window.lastPointerType = (e && e.pointerType) || "unknown";
    }, { passive: true });

    dropbtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggle();
    });

    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) close();
    });

    document.addEventListener("touchstart", function (e) {
        if (e.target && dropbtn.contains && dropbtn.contains(e.target)) window.lastPointerType = "touch";
    }, { passive: true });
})();
