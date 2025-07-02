import { defineComponent as e, openBlock as o, createElementBlock as t } from "vue";
const n = { class: "text-red-500" }, m = /* @__PURE__ */ e({
  __name: "MyComponent",
  setup(r) {
    return (c, s) => (o(), t("div", n, "Hello from shared lib"));
  }
});
export {
  m as MyComponent
};
