<template>
    <layout-base>
        <!-- Main Wrapper -->
        <div class="main" slot="content" role="main">
            <div class="error404-wrapper">
                <img src="/static/img/404/404.svg" alt="Haystack"/>
                <h1 class="heading">Dead End!</h1>
                <p class="lead mb-3">The page you are looking for doesn't exist.</p>
                <a href="/" class="btn">Home Page</a>
            </div>
        </div><!-- .main -->
    </layout-base>
</template>

<script>
import LayoutBase from '@/components/layouts/Base'

export default {
  name: 'Home',
  components: {LayoutBase},
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .navbar.transparent {
        background-color: #4f2a8a !important;
    }

</style>

<style scoped>
    .main {
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        padding: 4rem 0;
    }
    .error404-wrapper {
        width: 100%;
        padding: 4rem 1rem 0 1rem;
    }
    @media (min-width: 992px) {
        .error404-wrapper {
            max-width: 900px;
        }
    }
    @media (min-width: 740px) {
        .error404-wrapper {
            max-width: 800px;
        }
    }

    .error404-wrapper img {
        width: 100%;
        max-width: 100%;
        height: auto;
    }
</style>