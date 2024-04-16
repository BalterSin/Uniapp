"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const images = common_vendor.ref([
      {
        url: "../../static/新闻1.jpg"
      },
      {
        url: "../../static/新闻2.jpg"
      },
      {
        url: "../../static/武大电气.png"
      }
    ]);
    const categories = common_vendor.ref(["全部", "电子产品", "中古书", "家具", "交通工具", "其他物品", "随心分享"]);
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
        a: common_vendor.f(images.value, (item, index, i0) => {
          return {
            a: item.url,
            b: index
          };
        }),
        b: common_vendor.f(categories.value, (category, k0, i0) => {
          return {
            a: common_vendor.t(category),
            b: category
          };
        }),
        c: _ctx.topfixed == 1 ? 1 : "",
        d: _ctx.currentPage === "home" ? 1 : "",
        e: common_vendor.o(($event) => navigateTo("home")),
        f: _ctx.currentPage === "recycle" ? 1 : "",
        g: common_vendor.o(($event) => navigateTo("recycle")),
        h: _ctx.currentPage === "mine" ? 1 : "",
        i: common_vendor.o(($event) => navigateTo("mine"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PM/UniApp/hello uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
