
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';



import {router, Router} from './router';

import Index from './components/App.vue';

Vue.use(Router);




new Vue({
	router,
	render: h => h(Index)
}).$mount('#app');
