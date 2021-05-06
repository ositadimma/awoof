import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"top-right"})

const globals = [{"name":"custom_success","message":message => message,"options":{"type":"success","theme":"bubble","duration":1003000,"className":"toast-container","action":{"icon":"close","onClick":(e, toastObject) => {
              toastObject.goAway(0)
            }}}},{"name":"custom_error","message":message => message,"options":{"type":"error","theme":"bubble","duration":3000,"className":"toast-container","action":{"icon":"close","onClick":(e, toastObject) => {
              toastObject.goAway(0)
            }}}}]
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
