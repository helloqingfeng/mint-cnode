<template>
	<div id="container">
		<ul>
			<li v-for="item in list">
				<mt-badge size="large"  type="success">{{item.desc}}</mt-badge>
				<img v-lazy.container="item.url" >
			</li>
		</ul>
	</div>
</template>
<style>
	#container ul{
		list-style: none;
		text-align: center;
	}
	img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
	img[lazy=loaded]{
		width: 90%;
	}
</style>

<script>
	export default{
		data:function (){
			return{
				list:[]
			}
		},
		mounted:function (){
			this.getImg();
		},
		methods:{
			getImg:function (){
				var that=this;
				that.$http.get("http://gank.io/api/data/%E7%A6%8F%E5%88%A9/30/1").then(response => {
					this.list = response.body.results;
				}, response => {
				// error callback
			});
		}
	}
}
</script>