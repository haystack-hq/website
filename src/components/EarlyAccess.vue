<template>
    <layout-base>
        <!-- Main Wrapper -->
        <div class="main no-hero" slot="content" role="main">
            <!--  Section -->
            <div class="section contact-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="section-heading mb-2">
                                <h1 class="heading">Get it Early</h1>
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
                                            <input autocomplete="email" class="input form-control" data-validation="email" name="EMAIL" placeholder="Email Address *">
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-block">Submit</button>
                                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                    <input type="text" name="b_77142ece814d3cff52058a51f_f300c9cce8" tabindex="-1" value="">
                                </div>
                            </form>
                        </div>
                        <contact-info/>
                    </div>
                </div><!-- .container -->
            </div><!-- .section -->
        </div><!-- .main -->
    </layout-base>
</template>

<script>
import LayoutBase from '@/components/layouts/Base'
import ContactInfo from '@/components/includes/ContactInfo'

export default {
  name: 'EarlyAccess',
  components: {LayoutBase, ContactInfo},
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
    nav.navbar.transparent {
        background-color: #0277BD !important;
    }
</style>
