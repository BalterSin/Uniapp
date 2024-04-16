<template>
  <view class="container">
    <view class="box1" v-for="items in items" :key="item.id">
      {{ item.text }}
    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .box1 {
    flex: 1;
    text-align: center;
    margin: 5px;
    background-color: #178764;
  }
</style>