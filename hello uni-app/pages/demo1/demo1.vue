<template>
	<view class = "box" hover-class="boxHover">view布局标签
	
		<view class = "inner" hover-class="innerHover" hover-stop-propagation="true">内部元素</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.box{
	width: 200px;
	height: 200px;
	background-color: #ccc;
}
.boxHover{
	background-color: aqua;
	width: 300px;
}
.inner{
	background-color: green;
	width: 150px;
	height: 150px;
}
.innerHover{
	background: greenyellow;
}
</style>
