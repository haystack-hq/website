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
  name: 'NotFound',
  components: {LayoutBase},
  data () {
    return {

    }
  },
  head: {
    title: {
      inner: 'Haystack',
      separator: '-',
      complement: 'Not Found'
    },
    meta: [
      { n: 'description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.', id: 'desc' },
      // Twitter
      { n: 'twitter:card', c: 'summary_large_image' },
      { n: 'twitter:title', c: 'Haystack' },
      { n: 'twitter:description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.' },
      { n: 'twitter:url', c: 'http://www.haystackhq.com' },
      { n: 'twitter:site', c: '@haystackdev' },
      { n: 'twitter:image', c: '/static/img/logo/backgroundHaystack.png' },
      // Facebook / Open Graph
      { p: 'og:url', c: 'http://www.haystackhq.com' },
      { p: 'og:title', c: 'Haystack' },
      { p: 'og:description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.' },
      { p: 'og:image', c: '/static/img/logo/backgroundHaystack.png' }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .navbar.transparent {
        background-color: #0277BD !important;
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
