export const WHIRL_SCAN = {

    scan(pool) {
        return {
            hub: "SCAN-HUB",

            // ALT (CSV ersetzt durch interne Daten)
            geo: pool.GEO,
            modi: pool.MODI,
            respo: pool.RESPO,
            nc: pool.NC,

            // NEU
            cause: pool.causeLevel,
            nextCause: pool.causeCascade[
                pool.causeCascade.indexOf(pool.causeLevel) + 1
            ] || pool.causeLevel,

            wind: pool.windLevel,
            zooog: pool.zooogBoost,
            whrlcausewind: pool.whrlcausewind,

            status: "SCAN-READY"
        };
    }
};
