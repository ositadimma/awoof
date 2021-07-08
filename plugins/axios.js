export default function ({ $axios, redirect, $toast }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    const message = error.response.data.message !== undefined ? error.response.data.message : error.response.data
    // $toast.global.custom_error(message)
    if ((code === 400 && message.includes('Invalid token')) || (code === 401)) {
      $toast.global.custom_error('Token expired')
      redirect('/user/login')
    } else {
      $toast.global.custom_error(message)
    }
  })
}
