/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm';
import App from '../components/app.vue';
import ElementUI from 'element-ui';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import TurbolinksAdapter from 'vue-turbolinks';


Vue.use(TurbolinksAdapter);
Vue.use(ElementUI);


import { Button, Select } from 'element-ui';
Vue.component(Button.name, Button);


document.addEventListener('DOMContentLoaded', () => {
  
  new Vue({
    el: '#app',
    render: h => h(App)
  })

  console.log(app)
})

