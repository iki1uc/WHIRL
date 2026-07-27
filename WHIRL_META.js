export const WHIRL_META = {

    drift(pool) {
        return {
            mode: "META-DRIFT",
            geo: pool.GEO,
            modi: pool.MODI,
            effect: "DRIFT-CONTROL"
        };
    }
};
