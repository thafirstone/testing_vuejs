import Vue from 'vue';
import Router from 'vue-router';
import User from '../components/communication/User';
import DefaultForm from '../components/form/DefaultForm';
import Home from '../components/Home';
import Http from '../components/connect/Http';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '', component: Home, name: 'home' },
    { path: '/user/:id', component: User, name: 'user', props: true },
    { path: '/form', component: DefaultForm, name: 'form' },
    { path: '/http', component: Http, name: 'http' },
    { path: '*', redirect: '/' },
  ],
  mode: 'history',
});
