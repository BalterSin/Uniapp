"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "recycle",
  setup(__props) {
    const router = common_vendor.useRouter();
    function navigateTo(route) {
      switch (route) {
        case "home":
          router.push({
            path: "/pages/index/index"
          });
          break;
        case "recycle":
          router.push({
            path: "/pages/recycle/recycle"
          });
          break;
        case "mine":
          router.push({
            path: "/pages/mine/mine"
          });
          break;
        default:
          console.error("Unknown route:", route);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: _ctx.currentPage === "home" ? 1 : "",
        b: common_vendor.o(($event) => navigateTo("home")),
        c: _ctx.currentPage === "recycle" ? 1 : "",
        d: common_vendor.o(($event) => navigateTo("recycle")),
        e: _ctx.currentPage === "mine" ? 1 : "",
        f: common_vendor.o(($event) => navigateTo("mine"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-04dc3bbb"], ["__file", "D:/PM/UniApp/hello uni-app/pages/recycle/recycle.vue"]]);
wx.createPage(MiniProgramPage);
