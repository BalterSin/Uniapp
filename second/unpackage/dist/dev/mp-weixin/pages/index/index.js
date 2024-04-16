"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(_ctx.items, (items, k0, i0) => {
      return {};
    }),
    b: common_vendor.t(_ctx.item.text),
    c: _ctx.item.id
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/PM/UniApp/second/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
