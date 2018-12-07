<template>
	<div class="nav">
		<div class="tips">一蓑烟雨任平生</div>
		<div class="menu">
			<router-link to="/">首页</router-link> |
			<router-link to="/about">关于我</router-link>
			<router-link to="/speak">碎碎念</router-link>
			<router-link to="/read">日记簿</router-link>
			<router-link to="/code">代码录</router-link>		
			<router-link to="/photo">留影</router-link>      
			<router-link to="/music">歌单</router-link>
		</div>

	</div>
</template>
<script>

export default {
  name: 'Nav',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav {
	padding: 30px 0 0;
	background: #fff;
	z-index: 9999;
	height: 40px;
	border-bottom: 1px solid #f1f3f5;
	.tips {
		float: left;
    width: 155px;
	}
	.menu {
		a {
			color: #2c3e50;
			padding: 0 10px;
			text-decoration: none;
			&.router-link-exact-active {
				color: #42b983;
			}
			:hover {
				color: #42b983;
			}
		}
	}

}
</style>
