<template>
  <view class="">

  </view>

  <view class="footer-nav">
    <view class="nav-item" :class="{'active':currentPage === 'home'}" @click="navigateTo('home')">
      <image src="../../static/首页.png" class="icon"></image>
      <text>首页</text>
    </view>
    <view class="nav-item" :class="{ 'active': currentPage === 'recycle' }" @click="navigateTo('recycle')">
      <image src="../../static/灯泡.png" class="icon"></image>
      <text>回收</text>
    </view>
    <view class="nav-item" :class="{ 'active': currentPage === 'mine' }" @click="navigateTo('mine')">
      <image src="../../static/我的帖子.png" class="icon"></image>
      <text>我的</text>
    </view>
  </view>
</template>

<script setup>
  import {
    useRouter
  } from 'vue-router';

  const router = useRouter();

  function navigateTo(route) {
    // 根据路由参数跳转到对应页面
    switch (route) {
      case 'home':
        router.push({
          path: '/pages/index/index'
        });
        break;
      case 'recycle':
        router.push({
          path: '/pages/recycle/recycle'
        });
        break;
      case 'mine':
        router.push({
          path: '/pages/mine/mine'
        });
        break;
      default:
        console.error('Unknown route:', route);
    }
  }
</script>

<style lang="scss" scoped>
  .footer-nav {
    display: flex;
    justify-content: space-around;
    /* 三个图标平均分布 */
    position: fixed;
    bottom: 0;
    /* 固定在页面底部 */
    width: 100%;
    /* 导航栏宽度占满整个屏幕 */
    background-color: #fff;
    /* 设置背景色 */
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    /* 设置上方的阴影 */
    height: 50px;
    /* 设置导航栏高度 */
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 24px;
    /* 图标大小 */
    height: 24px;
  }

  .text {
    font-size: 12px;
    /* 文字大小 */
  }
</style>