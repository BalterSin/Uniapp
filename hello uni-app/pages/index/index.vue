<template>
  <scroll-view class="scroll" scroll-y="true">
    <view class="container">
      <view class="box1" ref="box1">
        <input class="input-box1" type="text" placeholder="请输入想要的物品" />
        <image src="../../static/排列样式.png" class="icon1"></image>
      </view>
    </view>

    <view class="">
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
        <swiper-item v-for="(item,index) in images" :key="index">
          <image :src="item.url" class="slide-image"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="tagTop" :class="{'topfixed-active':topfixed==1}">
      <scroll-view class="scrollable-row" scroll-x="true">
        <view class="button-wrapper">
          <button v-for="category in categories" :key="category" class="scroll-button">{{ category }}</button>
        </view>
      </scroll-view>
    </view>
    <button>这是一个按钮</button>
    <button>这是一个按钮</button>
    <button>这是一个按钮</button>


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



  </scroll-view>


</template>

<script setup>
  import {
    ref
  } from 'vue';

  const images = ref([{
      url: '../../static/新闻1.jpg'
    },
    {
      url: '../../static/新闻2.jpg'
    },
    {
      url: '../../static/武大电气.png'
    }
  ]);
  const categories = ref(["全部", "电子产品", "中古书", "家具", "交通工具", "其他物品", "随心分享"]);

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

<style lang="scss">
  .scroll {
    height: 100%;
  }

  .container {
    display: flex;
    flex-direction: row;
    width: 100%;

  }

  .box1 {
    flex: 1;
    background-color: #178764;
    display: flex;
    position: relative;
  }

  .input-box1 {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: white;
    margin: 5px;
    border-radius: 8px;
  }

  .icon1 {
    width: 47px; // 宽度自适应
    height: 47px; // 高度与输入框一致
    position: absolute; // 绝对定位
    right: 1px; // 从右边界位置开始
    // margin-right: 10px; // 可适当调整间距s
    margin-top: 5px;
    margin-left: 5px;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .scrollable-row {
    width: 100%;
    height: 46px;
    /* 设置固定高度 */
    white-space: nowrap;
    /* 防止内容换行 */
    overflow-x: auto;
    /* 允许水平滚动 */
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  }

  .button-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .scroll-button {
    flex-shrink: 0;
    /* 防止按钮在空间不足时被压缩 */
    margin-right: 10px;
    /* 按钮之间的间距 */
    padding: 8px 16px;
    /* 按钮内边距 */
    background-color: #f1f1f1;
    /* 按钮背景色 */
    border: none;
    /* 去除边框 */
    border-radius: 5px;
    /* 按钮圆角 */
  }

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