<template>
  <div id="app">
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <!--<div class="preloader" v-bind:style="{ display: loaderDisplay }">-->
      <!--<svg class="circular" viewBox="25 25 50 50">-->
        <!--<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>-->
    <!--</div>-->

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    this.loaderDisplay = 'none'
  },
  data () {
    return {
      loaderDisplay: 'block'
    }
  }
}
</script>

<style>

</style>
