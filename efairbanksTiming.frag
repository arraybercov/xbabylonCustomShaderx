/* { "osc": 4000, "audio": false } */
precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform sampler2D backbuffer;
uniform sampler2D osc_808bd;
uniform sampler2D osc_808sd;
uniform sampler2D osc_808oh;
uniform sampler2D osc_808;
uniform sampler2D osc_cycle;
uniform sampler2D samples;
uniform sampler2D spectrum;
vec2 rotate(in vec2 p, in float t) {
    return mat2(cos(t), -sin(t), sin(t), cos(t)) * p;
}
float random(in vec2 st) {
    return fract(abs(sin(dot(st, vec2(94.2984, 488.923))) * 234.9892));
}
float rects(in vec2 p, in float t) {
    return random(vec2(p.x * .0001 + t * .008, floor(p.y * 17.)));
}
vec2 uv2p(vec2 uv) {return ((uv*resolution) * 2. - resolution) / min(resolution.x, resolution.y);}
vec2 p2uv(vec2 p) {return ((p*min(resolution.x, resolution.y))+resolution)/(2.*resolution);}
void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    vec2 p = uv2p(uv);
    vec2 oldp = p;

    float pi = 3.145;
    float bd = texture2D(osc_808bd,vec2(0.0)).r;
    float sd = texture2D(osc_808sd,vec2(0.0)).r;
    float hh = texture2D(osc_808oh,vec2(0.0)).r;
    float eight08 = texture2D(osc_808,vec2(0.0)).r;
    float cycle = mod(texture2D(osc_cycle, vec2(0.)).r,8.)/8.;

    float shade = 0.;
    if(uv.y>cycle-0.01&&uv.y<cycle+0.3)
    if(uv.x<0.25) {
      shade = bd;
    } else if(uv.x<0.5) {
      shade = sd;
    } else if(uv.x<0.75) {
      shade = hh;
    } else shade = eight08;

    float line = 0.;
    // if(abs(texture2D(samples,vec2(uv.x))-uv.y).r<0.01) line = 1.;

    gl_FragColor = vec4(0.95*shade);
    // gl_FragColor += texture2D(backbuffer,vec2(uv.x,uv.y-0.03))*0.3;
    // gl_FragColor += texture2D(backbuffer,vec2(uv.x,uv.y+0.03))*0.3;
    // gl_FragColor += texture2D(spectrum, vec2(uv.x),0.1)*0.15;
    gl_FragColor += line;

    //gl_FragColor = vec4(0.);
}
