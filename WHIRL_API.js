export const WHIRL_API = {

    fuse(pool) {
        return {
            system: pool.API,
            id: pool.ID,
            mode: "API-FUSION",
            status: "ACTIVE"
        };
    }
};
