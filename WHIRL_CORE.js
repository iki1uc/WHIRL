export function WHIRL_CORE(v, t, cause = 3, whirl = "W"){
    // ALT: ursprünglicher Kern
    const w = Math.sin(v.x + v.y + v.z + t * 0.33);

    // NEU: WASD‑Achsen
    const axis = {
        W:  {x: 0,  y:-1},
        A:  {x:-1, y: 0},
        S:  {x: 0,  y: 1},
        D:  {x: 1,  y: 0}
    };

    const a = axis[whirl] || axis.W;

    // NEU: CAUSE‑Kaskade (3‑9‑27‑81)
    const causeCascade = [3, 9, 27, 81];
    const nextCause = (lvl) => {
        const i = causeCascade.indexOf(lvl);
        return causeCascade[i+1] || lvl;
    };

    // NEU: WIND (×4)
    const wind = w * 4;

    // NEU: ZOOOG‑Boost
    const zooog = w * cause * 1.333;

    // NEU: WHIRLCAUSEWIND‑Impuls
    const whrlcausewind = {
        x: a.x * cause * wind,
        y: a.y * cause * wind,
        lvl: nextCause(cause)
    };

    return {
        // ALT
        S1: w * 0.5,
        S2: w * 0.75,
        S3: w * 1.25,
        S4: (v.x + v.y + v.z) * w,
        core: w,
        seq: [w, w*2, w*3, w*4],

        // NEU
        axis: whirl,
        cause,
        nextCause: nextCause(cause),
        wind,
        zooog,
        whrlcausewind
    };
}
