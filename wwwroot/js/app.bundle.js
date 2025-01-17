import { m } from "./vendors.bundle.js";
class LayoutComponent {
  view(vnode) {
    const { page, options } = vnode.attrs;
    return m(".container-fluid.h-100", [
      m(page, {
        ...options
      })
    ]);
  }
}
function Layout(page, options = {}) {
  return {
    render: () => {
      return m(LayoutComponent, {
        page,
        ...options
      });
    }
  };
}
const FileSvg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">\r\n  <g transform="translate(0,-4.5)">\r\n    <path fill="#000" d="M17.22,4.76H3.66a2.1,2.1,0,0,0-2.1,2.1V26.14a2.1,2.1,0,0,0,2.1,2.1H20.34a2.1,2.1,0,0,0,2.1-2.1V9.72Zm4.17,21.38a1.06,1.06,0,0,1-1.05,1.06H3.66a1.06,1.06,0,0,1-1.05-1.06V6.86A1.06,1.06,0,0,1,3.66,5.8H16.17V7.59a3.18,3.18,0,0,0,3.18,3.17h2Z" />\r\n    <path fill="#fff" d="M21.39,10.76V26.14a1.06,1.06,0,0,1-1.05,1.06H3.66a1.06,1.06,0,0,1-1.05-1.06V6.86A1.06,1.06,0,0,1,3.66,5.8H16.17V7.59a3.18,3.18,0,0,0,3.18,3.17Z" />\r\n    <rect fill="#da1113" x="0.52" y="12.8" width="22.96" height="11.48" rx="2.49" />\r\n    <path fill="#fff" d="M8.13,17.23A2.11,2.11,0,0,1,7.43,19a3,3,0,0,1-2,.6H4.79V22H3.31v-7H5.54a3,3,0,0,1,1.93.54A2,2,0,0,1,8.13,17.23ZM4.79,18.34h.49a1.59,1.59,0,0,0,1-.27.94.94,0,0,0,.34-.79,1,1,0,0,0-.28-.76,1.31,1.31,0,0,0-.89-.25H4.79Z" />\r\n    <path fill="#fff" d="M15.24,18.48a3.46,3.46,0,0,1-1,2.64,4,4,0,0,1-2.83.91h-2v-7h2.19a3.71,3.71,0,0,1,2.66.9A3.31,3.31,0,0,1,15.24,18.48Zm-1.54,0q0-2.25-2-2.25h-.79v4.54h.64C13,20.81,13.7,20.05,13.7,18.52Z" />\r\n    <path fill="#fff" d="M18.14,22H16.69v-7h4v1.21H18.14v1.8h2.37v1.2H18.14Z" />\r\n  </g>\r\n</svg>';
function HomePage() {
  return {
    view() {
      return /* @__PURE__ */ m("div", { class: "text-success" }, /* @__PURE__ */ m("div", null, "Hello World"), /* @__PURE__ */ m("div", { class: "svg-icon", style: "--svg-icon-width: 24px;" }, m.trust(FileSvg)));
    }
  };
}
const route = {
  "/": Layout(HomePage)
};
function render() {
  m.route(document.body, "/", route);
}
document.addEventListener("DOMContentLoaded", (event) => {
  render();
});
