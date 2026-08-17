// Datei: ID_UNIT.js
window.ID_UNIT = {

    // Minimaler Kern
    mode: "sqrt",
    level: 3,
    vector: true,

    // Minimaler Info‑Call
    info() {
        return "ID‑Einheit aktiv · SQRT‑Modus";
    },

    // ANDERSRUM:
    // ID speichert NICHT cause/wind/zooog.
    // ID gibt NUR EIN SIGNAL raus.
    // WHIRL übernimmt ALLES.
    pulse() {
        return {
            id: this.level,
            mode: this.mode,
            vector: this.vector,
            pulse: "ID-PULSE"   // WHIRL erkennt das und startet CAUSE/WIND/ZOOOG
        };
    }
};
