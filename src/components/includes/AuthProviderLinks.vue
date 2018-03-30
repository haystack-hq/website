<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
      <div class="social">
        <button class="btn btn-github" data-toggle="tooltip" title="Login with Github" @click.prevent="loginWithProvider('github')">
          <i aria-hidden="true" class="fa fa-github"></i>
        </button>
        <button class="btn btn-googleplus" data-toggle="tooltip" title="Login with Google" @click.prevent="loginWithProvider('google')">
          <i aria-hidden="true" class="fa fa-google"></i>
        </button>
        <button class="btn btn-facebook" data-toggle="tooltip" title="Login with Facebook" @click.prevent="loginWithProvider('facebook')">
          <i aria-hidden="true" class="fa fa-facebook"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthProviderLinks',
  data () {
    return {
      baseUrl: 'http://' + window.location.hostname + ':' + window.location.port
    }
  },
  methods: {
    loginWithProvider (provider) {
      window.location = window.axiosConfig.baseURL + '/authenticate/' + provider + '/' + btoa(this.baseUrl + '/auth-consumer/' + provider)
    }
  }
}
</script>
