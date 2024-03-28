void main() {
  gl_FragColor = vec4(0.52,0.52,0.95,1.0);
  // 点の中心からの距離を元に透明度を指定し、丸くする
  float alpha = 1. - smoothstep(0.4995, 0.5005, length(gl_PointCoord - vec2(0.5)));

}