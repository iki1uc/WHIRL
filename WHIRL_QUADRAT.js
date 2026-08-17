export const WHIRL_QUADRAT = {

    live(pool) {
        return {
            // ALT
            W1: pool.WHIRL,
            W2: pool.RESPO,
            W3: pool.GEO,
            W4: pool.MODI,

            form: "WHIRL-QUADRAT",
            orbit: "WHIRL-360°",

            // NEU
            cause: pool.causeLevel,
            wind: pool.windLevel,
            whrlcausewind: pool.whrlcausewind
        };
    }
};
