import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Hello',
		component: Hello
	},{
		path:'/topic/:id',
		name: '文章',
		component: require('../components/article.vue')
	}
	]
})
