import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e6b1903 = () => interopDefault(import('../pages/newgiveaway/index.vue' /* webpackChunkName: "pages/newgiveaway/index" */))
const _cc1a104c = () => interopDefault(import('../pages/referrals/index.vue' /* webpackChunkName: "pages/referrals/index" */))
const _be161b78 = () => interopDefault(import('../pages/reservedusers/index.vue' /* webpackChunkName: "pages/reservedusers/index" */))
const _40737ad6 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _3e3ed2fc = () => interopDefault(import('../pages/socialaccounts.vue' /* webpackChunkName: "pages/socialaccounts" */))
const _322055c7 = () => interopDefault(import('../pages/transactions/index.vue' /* webpackChunkName: "pages/transactions/index" */))
const _3feb8b6c = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _edd368c2 = () => interopDefault(import('../pages/giveaways/givers/index.vue' /* webpackChunkName: "pages/giveaways/givers/index" */))
const _a3cbeb06 = () => interopDefault(import('../pages/giveaways/winners/index.vue' /* webpackChunkName: "pages/giveaways/winners/index" */))
const _4731c6d4 = () => interopDefault(import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */))
const _42b0a9c7 = () => interopDefault(import('../pages/giveaways/givers/_id.vue' /* webpackChunkName: "pages/giveaways/givers/_id" */))
const _3e9aefb6 = () => interopDefault(import('../pages/giveaways/winners/_id.vue' /* webpackChunkName: "pages/giveaways/winners/_id" */))
const _11b128c2 = () => interopDefault(import('../pages/referrals/_id.vue' /* webpackChunkName: "pages/referrals/_id" */))
const _70f1c422 = () => interopDefault(import('../pages/transactions/_id.vue' /* webpackChunkName: "pages/transactions/_id" */))
const _797d78d4 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _d01d651a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7e6b1903,
    name: "newgiveaway"
  }, {
    path: "/referrals",
    component: _cc1a104c,
    name: "referrals"
  }, {
    path: "/reservedusers",
    component: _be161b78,
    name: "reservedusers"
  }, {
    path: "/settings",
    component: _40737ad6,
    name: "settings"
  }, {
    path: "/socialaccounts",
    component: _3e3ed2fc,
    name: "socialaccounts"
  }, {
    path: "/transactions",
    component: _322055c7,
    name: "transactions"
  }, {
    path: "/users",
    component: _3feb8b6c,
    name: "users"
  }, {
    path: "/giveaways/givers",
    component: _edd368c2,
    name: "giveaways-givers"
  }, {
    path: "/giveaways/winners",
    component: _a3cbeb06,
    name: "giveaways-winners"
  }, {
    path: "/user/login",
    component: _4731c6d4,
    name: "user-login"
  }, {
    path: "/giveaways/givers/:id",
    component: _42b0a9c7,
    name: "giveaways-givers-id"
  }, {
    path: "/giveaways/winners/:id",
    component: _3e9aefb6,
    name: "giveaways-winners-id"
  }, {
    path: "/referrals/:id",
    component: _11b128c2,
    name: "referrals-id"
  }, {
    path: "/transactions/:id",
    component: _70f1c422,
    name: "transactions-id"
  }, {
    path: "/users/:id",
    component: _797d78d4,
    name: "users-id"
  }, {
    path: "/",
    component: _d01d651a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
