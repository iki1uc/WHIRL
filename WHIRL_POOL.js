export const WHIRL_POOL = {

    async load() {
        return {
            WHIRL: await this.fetch("WHIRL.json"),
            RESPO: await this.fetch("respo-funktion-6.csv"),
            GEO: await this.fetch("re-zustand-geo-feld-4.csv"),
            MODI: await this.fetch("re-zustand-modi-9-4.csv"),
            NC: await this.fetch("NC.sync"),
            API: await this.fetch("API.system.js"),
            ID: await this.fetch("ID.html")
        };
    },

    async fetch(repo) {
        return `LOAD:${repo}:OK`;
    }
};
