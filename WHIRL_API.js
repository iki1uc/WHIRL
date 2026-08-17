export const WHIRL_API = {

    fuse(pool) {
        return {
            // ALT
            system: pool.API,
            id: pool.ID,
            mode: "API-FUSION",
            status: "ACTIVE",

            // NEU
            cause: pool.causeLevel,
            wind: pool.windLevel,
            whrlcausewind: pool.whrlcausewind
        };
    }
};
