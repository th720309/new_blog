<template>
	<div class="th-diary">
		<div class="th-title">一蓑烟雨任平生</div>
		<div class="th-content">
            <p>我一向觉得，自身对于他人而言，是一种不可理喻的存在，并且向他人寻求理解，也是一种荒谬不堪的暴力。他人总是超乎想象地难以理解我，但正因为这份不理解，我才得以自由；正因为这份不理解，我才得以活下去。我之所以拥有感受他人可爱之处的能力，也必定出于相同的理由。</p>
		</div>
	</div>
</template>
<script>

export default {
  name: 'Diary',
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