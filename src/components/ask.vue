<template>
	<div class="page-cell">
		<mt-cell class="textwidth" v-for="item in items" :key="item.index" :title="item.title" is-link>
			<!-- <span>icon 是图片</span> -->
			<img slot="icon" v-bind:src="item.author['avatar_url']" width="24" height="24">
		</mt-cell>
	</div>
</template>
<style>

</style>
<script>
export default{
	data:function (){
		return{
			items:[],
			// authors:{},
			getUrl:'https://cnodejs.org/api/v1/topics?tab=ask'
		}
	},
	mounted:function (){
		this.getItem();
	},
	methods:{
			getItem:function (){
				var that=this;
				that.$http({
					method:'GET',
					url:this.getUrl
				}).then(
				function (response){
					this.items=response.data.data;
					// this.authors=response.data.data.author;
				},function(error){
					// 忽略
				})
			}
	}
}
</script>