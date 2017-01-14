webpackJsonp([1,0,2],[
/* 0 */
/***/ function(module, exports) {

	import Vue from 'vue';
	import VueResource from 'vue-resource';
	import VeeValidate from 'vee-validate';
	
	import Rx from 'rxjs/Rx';
	import VueRx from 'vue-rx';
	import { sync } from 'vuex-router-sync';
	
	import router from './router';
	import store from './vuex/store';
	
	/* eslint-disable no-new */
	Vue.use(VueRx, Rx);
	Vue.use(VueResource);
	Vue.use(VeeValidate);
	
	sync(store, router);
	
	/* mount vue app */
	new Vue({
	  store,
	  router
	}).$mount('#app');

/***/ }
]);
//# sourceMappingURL=app.cd924eadef44f152b083.js.map