import Router from 'vue-router';
import Example from './components/Example.vue';
import demo from './components/demo.vue';

const router = new Router({
	routes: [
		{
			path: '/',
			component: Example,
			name: 'Example'
		},
		{
			path: '/demo',
			component: demo,
			name: 'demo'
		}
	],
});


export {Router, router};