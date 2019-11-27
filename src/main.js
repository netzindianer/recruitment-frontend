import Vue from 'vue'

const App = {};

App.components = {
  ...require('./components.js').default
};

if (process.env.NODE_ENV == "development") {
  const Sandbox = () => import('./Sandbox/components/Sandbox.vue')
  App.render = h => h(Sandbox)
}

new Vue(App).$mount('#app')
