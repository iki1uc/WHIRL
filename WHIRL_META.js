export const WHIRL_META = {

    drift(pool) {
        return {
            mode: "META-DRIFT",

            // ALT bleibt
            geo: pool.GEO,
            modi: pool.MODI,
            effect: "DRIFT-CONTROL",

            // NEU
            causeCascade: pool.causeCascade,
            nextCause: pool.causeCascade[ pool.causeCascade.indexOf(pool.causeLevel)+1 ] || pool.causeLevel,
            wind: pool.windLevel,
            zooog: pool.zooogBoost,
            whrlcausewind: pool.whrlcausewind
        };
    }
};
