export const WHIRL_VEC = {

    compute(quadrat, cause = 3, whirl = "W") {

        const axis = {
            W: [0,-1],
            A: [-1,0],
            S: [0,1],
            D: [1,0]
        };

        const a = axis[whirl] || axis.W;

        return {
            // ALT
            VEC: [
                quadrat.W1,
                quadrat.W2,
                quadrat.W3,
                quadrat.W4
            ],
            orbit: "WHIRL-360°",
            axiom: 4,

            // NEU
            axis: whirl,
            cause,
            wind: cause * 4,
            whrlcausewind: {
                x: a[0] * cause * 4,
                y: a[1] * cause * 4
            }
        };
    }
};
