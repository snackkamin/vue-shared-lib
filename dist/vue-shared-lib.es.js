import { openBlock as n, createElementBlock as s } from "vue";
const _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [c, r] of e)
    o[c] = r;
  return o;
}, a = {}, d = { class: "my-10 w-48 text-red-400 border" };
function f(t, e) {
  return n(), s("div", d, "test lib");
}
const l = /* @__PURE__ */ _(a, [["render", f]]);
export {
  l as MyComponent
};
