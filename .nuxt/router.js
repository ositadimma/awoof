import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b6ed494 = () => interopDefault(import('..\\pages\\newgiveaway\\index.vue' /* webpackChunkName: "pages/newgiveaway/index" */))
const _3ef64d1d = () => interopDefault(import('..\\pages\\referrals\\index.vue' /* webpackChunkName: "pages/referrals/index" */))
const _32f9c6f3 = () => interopDefault(import('..\\pages\\reservedusers\\index.vue' /* webpackChunkName: "pages/reservedusers/index" */))
const _5266b15e = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _86b51bd8 = () => interopDefault(import('..\\pages\\socialaccounts.vue' /* webpackChunkName: "pages/socialaccounts" */))
const _3ba7fd6c = () => interopDefault(import('..\\pages\\transactions\\index.vue' /* webpackChunkName: "pages/transactions/index" */))
const _0e1e84cb = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _6910f32d = () => interopDefault(import('..\\pages\\giveaways\\givers\\index.vue' /* webpackChunkName: "pages/giveaways/givers/index" */))
const _4e44cf3e = () => interopDefault(import('..\\pages\\giveaways\\winners\\index.vue' /* webpackChunkName: "pages/giveaways/winners/index" */))
const _6dedc166 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages/user/login" */))
const _96a84656 = () => interopDefault(import('..\\pages\\giveaways\\givers\\_id.vue' /* webpackChunkName: "pages/giveaways/givers/_id" */))
const _0a083f09 = () => interopDefault(import('..\\pages\\giveaways\\winners\\_id.vue' /* webpackChunkName: "pages/giveaways/winners/_id" */))
const _5a021a76 = () => interopDefault(import('..\\pages\\referrals\\_id.vue' /* webpackChunkName: "pages/referrals/_id" */))
const _84a32a58 = () => interopDefault(import('..\\pages\\transactions\\_id.vue' /* webpackChunkName: "pages/transactions/_id" */))
const _66e5841a = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _3e3474be = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/newgiveaway",
    component: _5b6ed494,
    name: "newgiveaway"
  }, {
    path: "/referrals",
    component: _3ef64d1d,
    name: "referrals"
  }, {
    path: "/reservedusers",
    component: _32f9c6f3,
    name: "reservedusers"
  }, {
    path: "/settings",
    component: _5266b15e,
    name: "settings"
  }, {
    path: "/socialaccounts",
    component: _86b51bd8,
    name: "socialaccounts"
  }, {
    path: "/transactions",
    component: _3ba7fd6c,
    name: "transactions"
  }, {
    path: "/users",
    component: _0e1e84cb,
    name: "users"
  }, {
    path: "/giveaways/givers",
    component: _6910f32d,
    name: "giveaways-givers"
  }, {
    path: "/giveaways/winners",
    component: _4e44cf3e,
    name: "giveaways-winners"
  }, {
    path: "/user/login",
    component: _6dedc166,
    name: "user-login"
  }, {
    path: "/giveaways/givers/:id",
    component: _96a84656,
    name: "giveaways-givers-id"
  }, {
    path: "/giveaways/winners/:id",
    component: _0a083f09,
    name: "giveaways-winners-id"
  }, {
    path: "/referrals/:id",
    component: _5a021a76,
    name: "referrals-id"
  }, {
    path: "/transactions/:id",
    component: _84a32a58,
    name: "transactions-id"
  }, {
    path: "/users/:id",
    component: _66e5841a,
    name: "users-id"
  }, {
    path: "/",
    component: _3e3474be,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
