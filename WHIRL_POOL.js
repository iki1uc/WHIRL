export const WHIRL_POOL = {

    async load() {
        return {
            WHIRL: await this.fetch("WHIRL.json"),
            NC: await this.fetch("NC.sync"),
            API: await this.fetch("API.system.js"),
            ID: await this.fetch("ID.html"),

            // NEU: interne WHIRL‑Daten statt CSV
            GEO: { field: [1,2,3,4], mode: "GEO-LOCAL" },
            MODI: { state: [0,1,2,3,4,5,6,7,8], mode: "MODI-LOCAL" },
            RESPO: { fn: ["R1","R2","R3","R4","R5","R6"], mode: "RESPO-LOCAL" },

            // NEU: WHIRL Runtime
            causeCascade: [3,9,27,81],
            causeLevel: 3,
            windLevel: 12,
            zooogBoost: "ZOOOG!",
            whrlcausewind: false
        };
    },

    async fetch(repo) {
        return `LOAD:${repo}:OK`;
    }
};
