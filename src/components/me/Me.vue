<template>
	<div class="me">
		<img src="../../assets/avatar.png"/>
		<ul>
			<li v-for="(item,index) in meArr" :key="index">
				<router-link :to="item.url">
					<i class="fas" :class="item.icon"></i>
					<span>{{item.msg}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			meArr: [
				{
					msg: '卡卡西',
					icon: 'fa-user',
					url: '/'
				},
				{
					msg: 'location',
					icon: 'fa-map-marker',
					url: '/location'
				},
				{
					msg: 'archive',
					icon: 'fa-archive',
					url: '/archive'
				},
				{
					msg: 'comment',
					icon: 'fa-comment',
					url: '/comment'
				},
			]
		}
	}
}
</script>
<style lang="less" scoped>
	.me {
		position: fixed;
    margin-left: -160px;
		top: 110px;
		img {
			width: 100px;
   	  height: 100px;
    	border-radius: 55%;
    	box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.20), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
		}
		ul {
			padding-left: 15px;
			line-height: 2;
			font-size: 14px;
			color: #878c93;
			line-height: 2;
			text-align: left;
			li {
				padding: 3px 0;
				list-style: none;
				color: #878c93;
				text-transform: uppercase;
				:hover {
					color: #42b983;
				}
				:active {
					color: #42b983;
				}
				a {
					color: #878c93;
					padding: 0 10px;
					text-decoration: none;
					i {
						padding-right: 5px;
						font-size: 16px;
					}
				}
			}
		}
	}
</style>


