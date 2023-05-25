import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07ed5206 = () => interopDefault(import('..\\pages\\newgiveaway\\index.vue' /* webpackChunkName: "pages/newgiveaway/index" */))
const _0077efae = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _941f5474 = () => interopDefault(import('..\\pages\\referrals\\index.vue' /* webpackChunkName: "pages/referrals/index" */))
const _16fd531c = () => interopDefault(import('..\\pages\\reservedusers\\index.vue' /* webpackChunkName: "pages/reservedusers/index" */))
const _19b720d6 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _1cab90fd = () => interopDefault(import('..\\pages\\socialaccounts.vue' /* webpackChunkName: "pages/socialaccounts" */))
const _a3446fba = () => interopDefault(import('..\\pages\\transactions\\index.vue' /* webpackChunkName: "pages/transactions/index" */))
const _7b0e1189 = () => interopDefault(import('..\\pages\\transferrequests\\index.vue' /* webpackChunkName: "pages/transferrequests/index" */))
const _4bc149f4 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _5303cae5 = () => interopDefault(import('..\\pages\\usersrefresh\\index.vue' /* webpackChunkName: "pages/usersrefresh/index" */))
const _4ab042d6 = () => interopDefault(import('..\\pages\\giveaways\\givers\\index.vue' /* webpackChunkName: "pages/giveaways/givers/index" */))
const _2b283dd8 = () => interopDefault(import('..\\pages\\giveaways\\winners\\index.vue' /* webpackChunkName: "pages/giveaways/winners/index" */))
const _04d49104 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages/user/login" */))
const _b405fa84 = () => interopDefault(import('..\\pages\\giveaways\\givers\\_id.vue' /* webpackChunkName: "pages/giveaways/givers/_id" */))
const _42dbd640 = () => interopDefault(import('..\\pages\\giveaways\\winners\\_id.vue' /* webpackChunkName: "pages/giveaways/winners/_id" */))
const _330511ae = () => interopDefault(import('..\\pages\\referrals\\_id.vue' /* webpackChunkName: "pages/referrals/_id" */))
const _25f5774b = () => interopDefault(import('..\\pages\\transactions\\_id.vue' /* webpackChunkName: "pages/transactions/_id" */))
const _2cd4e231 = () => interopDefault(import('..\\pages\\transferrequests\\_id.vue' /* webpackChunkName: "pages/transferrequests/_id" */))
const _317d8d48 = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _6fba8c98 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _07ed5206,
    name: "newgiveaway"
  }, {
    path: "/notifications",
    component: _0077efae,
    name: "notifications"
  }, {
    path: "/referrals",
    component: _941f5474,
    name: "referrals"
  }, {
    path: "/reservedusers",
    component: _16fd531c,
    name: "reservedusers"
  }, {
    path: "/settings",
    component: _19b720d6,
    name: "settings"
  }, {
    path: "/socialaccounts",
    component: _1cab90fd,
    name: "socialaccounts"
  }, {
    path: "/transactions",
    component: _a3446fba,
    name: "transactions"
  }, {
    path: "/transferrequests",
    component: _7b0e1189,
    name: "transferrequests"
  }, {
    path: "/users",
    component: _4bc149f4,
    name: "users"
  }, {
    path: "/usersrefresh",
    component: _5303cae5,
    name: "usersrefresh"
  }, {
    path: "/giveaways/givers",
    component: _4ab042d6,
    name: "giveaways-givers"
  }, {
    path: "/giveaways/winners",
    component: _2b283dd8,
    name: "giveaways-winners"
  }, {
    path: "/user/login",
    component: _04d49104,
    name: "user-login"
  }, {
    path: "/giveaways/givers/:id",
    component: _b405fa84,
    name: "giveaways-givers-id"
  }, {
    path: "/giveaways/winners/:id",
    component: _42dbd640,
    name: "giveaways-winners-id"
  }, {
    path: "/referrals/:id",
    component: _330511ae,
    name: "referrals-id"
  }, {
    path: "/transactions/:id",
    component: _25f5774b,
    name: "transactions-id"
  }, {
    path: "/transferrequests/:id",
    component: _2cd4e231,
    name: "transferrequests-id"
  }, {
    path: "/users/:id",
    component: _317d8d48,
    name: "users-id"
  }, {
    path: "/",
    component: _6fba8c98,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
