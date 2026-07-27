export const WHIRL_SCAN = {

    scan(pool) {
        return {
            hub: "SCAN-HUB",
            geo: pool.GEO,
            modi: pool.MODI,
            respo: pool.RESPO,
            nc: pool.NC,
            status: "SCAN-READY"
        };
    }
};
