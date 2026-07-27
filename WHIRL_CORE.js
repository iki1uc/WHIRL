export const WHIRL_CORE = {

    spin(pool) {
        return {
            mode: "WHIRL-6D",
            whirl: pool.WHIRL,
            respo: pool.RESPO,
            geo: pool.GEO,
            modi: pool.MODI,
            nc: pool.NC,
            api: pool.API,
            id: pool.ID,
            effect: "SPIN-STABILISATION"
        };
    }
};
