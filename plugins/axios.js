export default function ({ $axios, redirect, $toast }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      $toast.global.custom_error('Token expired')
      redirect('/user/login')
    }
  })
}
