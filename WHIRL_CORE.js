export function WHIRL_CORE(v, t){
    const w = Math.sin(v.x + v.y + v.z + t * 0.33);

    return {
        S1: w * 0.5,
        S2: w * 0.75,
        S3: w * 1.25,
        S4: (v.x + v.y + v.z) * w,
        core: w,
        seq: [w, w*2, w*3, w*4]
    };
}
