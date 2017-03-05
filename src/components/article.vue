<template>
	<div>
		<h3>{{topic.title}}</h3>
		<section v-html="topic.content"></section>
	</div>
</template>

<script>
	export default{
		data:function (){
			return{
				topic:{},
				topicId:""
			}
		},
		mounted:function (){
			this.topicId = this.$route.params.id;
            this.$http.get('https://cnodejs.org/api/v1/topic/' + this.topicId)
            .then((response)=>{
            	this.topic = response.data.data;
            })
		}
	}
</script>