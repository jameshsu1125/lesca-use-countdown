import { useState as f, useRef as T, useEffect as w } from "react";
const M = new Date(2060, 0, 1, 0, 0, 0, 0), h = 1e3, i = h * 60, d = i * 60, l = d * 24, m = (n) => {
  const o = n.getTime(), s = (/* @__PURE__ */ new Date()).getTime(), t = o - s, r = Math.floor(t / l), c = Math.floor(t % l / d), a = Math.floor(t % d / i), e = Math.floor(t % i / h);
  return e < 0 ? [0, 0, 0, 0] : [r, c, a, e];
}, x = (n = M) => {
  const [o, s] = f(n), [t, r] = f(0), [c, a] = f(m(o)), e = T(null);
  return w(() => (t !== 0 && a(m(o)), e.current = setTimeout(() => r((u) => u + 1), 1e3), () => {
    e.current && clearTimeout(e.current);
  }), [t]), [
    c,
    (u) => {
      s(u);
    }
  ];
};
export {
  x as default,
  x as useCountdown
};
