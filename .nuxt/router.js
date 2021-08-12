import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a842c33c = () => interopDefault(import('../pages/newgiveaway/index.vue' /* webpackChunkName: "pages/newgiveaway/index" */))
const _360cb268 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _0a136e0e = () => interopDefault(import('../pages/referrals/index.vue' /* webpackChunkName: "pages/referrals/index" */))
const _3f9c9be3 = () => interopDefault(import('../pages/reservedusers/index.vue' /* webpackChunkName: "pages/reservedusers/index" */))
const _ced65cd4 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _cca1b4fa = () => interopDefault(import('../pages/socialaccounts.vue' /* webpackChunkName: "pages/socialaccounts" */))
const _99c50770 = () => interopDefault(import('../pages/transactions/index.vue' /* webpackChunkName: "pages/transactions/index" */))
const _536b77ea = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _622a49a0 = () => interopDefault(import('../pages/giveaways/givers/index.vue' /* webpackChunkName: "pages/giveaways/givers/index" */))
const _10f466c8 = () => interopDefault(import('../pages/giveaways/winners/index.vue' /* webpackChunkName: "pages/giveaways/winners/index" */))
const _f44c0356 = () => interopDefault(import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */))
const _78fe3408 = () => interopDefault(import('../pages/giveaways/givers/_id.vue' /* webpackChunkName: "pages/giveaways/givers/_id" */))
const _74164604 = () => interopDefault(import('../pages/giveaways/winners/_id.vue' /* webpackChunkName: "pages/giveaways/winners/_id" */))
const _e97794be = () => interopDefault(import('../pages/referrals/_id.vue' /* webpackChunkName: "pages/referrals/_id" */))
const _f2241ea0 = () => interopDefault(import('../pages/transactions/_id.vue' /* webpackChunkName: "pages/transactions/_id" */))
const _21c0659a = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _b11aad5c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a842c33c,
    name: "newgiveaway"
  }, {
    path: "/notifications",
    component: _360cb268,
    name: "notifications"
  }, {
    path: "/referrals",
    component: _0a136e0e,
    name: "referrals"
  }, {
    path: "/reservedusers",
    component: _3f9c9be3,
    name: "reservedusers"
  }, {
    path: "/settings",
    component: _ced65cd4,
    name: "settings"
  }, {
    path: "/socialaccounts",
    component: _cca1b4fa,
    name: "socialaccounts"
  }, {
    path: "/transactions",
    component: _99c50770,
    name: "transactions"
  }, {
    path: "/users",
    component: _536b77ea,
    name: "users"
  }, {
    path: "/giveaways/givers",
    component: _622a49a0,
    name: "giveaways-givers"
  }, {
    path: "/giveaways/winners",
    component: _10f466c8,
    name: "giveaways-winners"
  }, {
    path: "/user/login",
    component: _f44c0356,
    name: "user-login"
  }, {
    path: "/giveaways/givers/:id",
    component: _78fe3408,
    name: "giveaways-givers-id"
  }, {
    path: "/giveaways/winners/:id",
    component: _74164604,
    name: "giveaways-winners-id"
  }, {
    path: "/referrals/:id",
    component: _e97794be,
    name: "referrals-id"
  }, {
    path: "/transactions/:id",
    component: _f2241ea0,
    name: "transactions-id"
  }, {
    path: "/users/:id",
    component: _21c0659a,
    name: "users-id"
  }, {
    path: "/",
    component: _b11aad5c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
