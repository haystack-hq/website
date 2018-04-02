<template>
    <layout-base>
        <div slot="title">
            <!-- Hero -->
            <div class="ui-hero title-hero hero-xs">
                <div class="container">
                    <h3 class="heading">
                        Get Early Access
                    </h3>
                </div><!-- .container -->
            </div><!-- .hero -->
        </div>
        <!-- Main Wrapper -->
        <div class="main" slot="content" role="main">
            <!--  Section -->
            <div class="section contact-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="section-heading mb-2">
                                <h3 class="heading text-indigo">Get it Early</h3>
                                <p>
                                    Haystack v 1.0 is almost here--sign up for early access to be kept in the loop for available downloads, webinars, and user testing events.
                                </p>
                            </div>
                            <!-- Form -->
                            <form method="post" action="https://haystackhq.us17.list-manage.com/subscribe/post?u=e1d72687f4318d88bda6ea018&amp;id=cb7cb01ee6" id="early-access-form" name="contact-form">
                                <div class="form-group">
                                    <div class="form-group">
                                        <!-- Name Input -->
                                        <input autocomplete="name" class="input form-control" data-validation="required"
                                               data-validation-error-msg="Please enter your full name." name="FNAME" id="mce-FNAME"
                                               placeholder="Your Name *">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <!-- Email Input -->
                                            <input autocomplete="email" class="input form-control" data-validation="required"
                                                   data-validation-error-msg="Please enter your email address." name="EMAIL"
                                                   placeholder="Email Address *">
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-block shadow-md">Submit</button>
                                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                    <input type="text" name="b_77142ece814d3cff52058a51f_f300c9cce8" tabindex="-1" value="">
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5">
                            <div class="ui-card form-card shadow-xl">
                                <div class="card-header pb-0">
                                    <h3 class="heading">Contact Info</h3>
                                </div>
                                <div class="card-body">
                                    <ul class="ui-icon-blocks ui-blocks-v">
                                        <li class="ui-icon-block">
                                            <span class="icon icon-clock"></span>
                                            <p>Mon - Fri 09:00am - 5:00pm</p>
                                        </li>
                                        <li class="ui-icon-block">
                                            <span class="icon icon-envelope"></span>
                                            <p>support@haystackhq.com</p>
                                        </li>
                                        <li class="ui-icon-block">
                                            <span class="icon icon-pin"></span>
                                            <p>107 Spring St., <br>Seattle, <br>Washington, <br>98104</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- .container -->
            </div><!-- .section -->
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
  },
  head: {
    title: {
      inner: 'Haystack',
      separator: '-',
      complement: 'Early Access'
    },
    meta: [
      { n: 'description', c: 'Get early access to Haystack', id: 'desc' },
      // Twitter
      { n: 'twitter:card', c: 'summary_large_image' },
      { n: 'twitter:title', c: 'Haystack - Early Access' },
      { n: 'twitter:description', c: 'Get early access to Haystack' },
      { n: 'twitter:url', c: 'http://www.haystackhq.com/early-access' },
      { n: 'twitter:site', c: '@haystackdev' },
      { n: 'twitter:image', c: '/static/img/logo/backgroundHaystack.png' },
      // Facebook / Open Graph
      { p: 'og:url', c: 'http://www.haystackhq.com/early-access' },
      { p: 'og:title', c: 'Haystack - Early Access' },
      { p: 'og:description', c: 'Get early access to Haystack' },
      { p: 'og:image', c: '/static/img/logo/backgroundHaystack.png' }
    ]
  }
}
</script>
<style>
    .navbar.transparent {
        background-color: #0277BD !important;
    }
</style>
