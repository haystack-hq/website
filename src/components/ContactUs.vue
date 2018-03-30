<template>
    <layout-base>
        <div slot="title">
            <!-- Hero -->
            <div class="ui-hero title-hero hero-xs">
                <div class="container">
                    <h3 class="heading">
                        Early Access
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
                                <h3 class="heading text-indigo">Send a message</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <!-- Form -->
                            <form autocomplete="on" id="contact-form" name="contact-form">
                                <div class="form-group">
                                    <div class="form-group">
                                        <!-- Name Input -->
                                        <input autocomplete="name" class="input form-control" data-validation="required"
                                               data-validation-error-msg="Please enter your full name." name="name"
                                               placeholder="Your Name *">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <!-- Email Input -->
                                            <input autocomplete="email" class="input form-control" data-validation="required"
                                                   data-validation-error-msg="Please enter your email address." name="email"
                                                   placeholder="Email Address *">
                                        </div>
                                        <div class="col-sm-6">
                                            <!-- Phone Input -->
                                            <input autocomplete="tel" class="input form-control" data-validation="required"
                                                   data-validation-error-msg="Please enter your phone number." name="phone"
                                                   placeholder="Phone Number *">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea class="input form-control" data-validation="required" data-validation-error-msg="Please leave a message." name="message" placeholder="Your Message" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-block shadow-md">Submit</button>
                            </form><!-- Form -->
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

            <!-- Google Maps  !!
            1. Add your latitude to the data-lat attribute here
            2. Add your longitude to the data-long attribute here
            3. Add your API Key to the GoogleMaps include script at the bottom of this Page
            -->
            <div id="gmap" class="ui-map" data-lat="47.605409" data-lng="-122.336438" data-marker="/static/img/map/map_marker.png"
                 data-style="style-1" data-zoom="13"></div>

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
            complement: 'Contact Us'
        },
        meta: [
            { n: 'description', c: 'Contact Us', id: 'desc' },
            // Twitter
            { n: 'twitter:card', c: 'summary_large_image' },
            { n: 'twitter:title', c: 'Haystack - Contact Us' },
            { n: 'twitter:description', c: 'Contact Us'},
            { n: 'twitter:url', c: 'http://www.haystackhq.com/early-access' },
            { n: 'twitter:site', c: '@haystackdev' },
            { n: 'twitter:image', c: '/static/img/logo/backgroundHaystack.png' },

            // Facebook / Open Graph
            { p: 'og:url', c: 'http://www.haystackhq.com/early-access' },
            { p: 'og:title', c: 'Haystack - Contact Us' },
            { p: 'og:description', c: 'Contact Us' },
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
