(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // copy the example k1 serial on the banknote
  const serial = document.getElementById("noteSerial");
  if (serial) {
    serial.addEventListener("click", async () => {
      const value = "c04a601c24b7abe62c236750bac2e40aa04bb2aada165bf1ae0b1ff126a3ae52";
      try {
        await navigator.clipboard.writeText(value);
      } catch (_) {
        /* clipboard unavailable — still show the acknowledgement */
      }
      serial.classList.add("is-copied");
      window.clearTimeout(serial._copiedTimer);
      serial._copiedTimer = window.setTimeout(() => serial.classList.remove("is-copied"), 1400);
    });
  }

  // subtle pointer-driven tilt on the banknote, disabled for reduced-motion
  const note = document.getElementById("note");
  if (note && !reduceMotion && matchMedia("(hover: hover)").matches) {
    const strength = 6;
    note.addEventListener("pointermove", (e) => {
      const r = note.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      note.style.transform = `rotateX(${(-py * strength).toFixed(2)}deg) rotateY(${(px * strength).toFixed(2)}deg)`;
    });
    note.addEventListener("pointerleave", () => {
      note.style.transform = "";
    });
    note.style.transition = "transform .3s ease";
    note.style.transformStyle = "preserve-3d";
    note.parentElement.style.perspective = "1000px";
  }
})();
