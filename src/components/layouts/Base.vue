<template>
    <div>
        <!-- Navbar Fixed + Default -->
        <nav class="navbar navbar-fixed-top navbar-dark ">
            <div class="container">
                <!-- Navbar Logo -->
                <a class="ui-variable-logo navbar-brand" href="/" title="Haystack - Fast simple development environments">
                    <!-- Default Logo -->
                    <img class="logo-default" src="/static/img/logo/haystack-logo.svg"
                         alt="Haystack - Fast simple development environments" data-uhd>
                    <!-- Transparent Logo -->
                    <img class="logo-transparent" src="/static/img/logo/haystack-logo.svg"
                         alt="Haystack - Fast simple development environments" data-uhd>
                </a><!-- .navbar-brand -->

                <!-- Navbar Navigation -->
                <div class="ui-navigation navbar-right">
                    <ul class="nav navbar-nav">
                        <!--
                        <li class="menu-link docs">
                            <a href="#">Docs</a>
                        </li>
                        -->
                        <li class="menu-link pricing">
                            <a href="/#pricing">Pricing</a>
                        </li>
                        <li class="menu-link blog">
                            <a href="http://blog.haystackhq.com">Blog</a>
                        </li>
                        <li class="menu-link contact">
                            <a href="/contact-us">Contact Us</a>
                        </li>
                        <li class="d-md-block d-lg-none d-sm-block d-xs-block menu-link git">
                            <a href="https://github.com/haystack-hq" target="_blank"><span class="github"></span></a>
                        </li>
                    </ul><!--.navbar-nav -->
                </div><!--.ui-navigation -->

                <!-- Navbar Button -->
                <a href="https://github.com/haystack-hq" target="_blank" class="navbar-github"><span class="github"></span></a>
                <a href="/early-access"
                   class="btn early-access btn-sm pull-right">Get Early Access</a>

                <!-- Navbar Toggle -->
                <a href="#" class="ui-mobile-nav-toggle pull-right"></a>

            </div><!-- .container -->
        </nav> <!-- nav -->

        <slot name="title"></slot>
        <slot name="content"></slot>

        <!-- Footer -->
        <footer class="ui-footer">
            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-md-4 col-sm-12 footer-about footer-col center-on-sm">
                        <img src="/static/img/logo/haystack-logo.svg" data-uhd
                             alt="Haystack - Fast simple development environments"/>
                        <p class="mt-1">
                            Haystack is the fastest and simplest way to spin up a full stack dev environment. We are a group of developers that are helping other developers focus on the code by abstracting away the infrastructure.
                        </p>
                    </div>
                    <div class="col-md-2 offset-md-1 col-sm-6 center-on-xs footer-col">
                        <h6 class="heading footer-heading">Navigation</h6>
                        <ul class="footer-nav">
                            <li>
                                <a href="/early-access">Get Early Access</a>
                            </li>
                            <!--
                            <li>
                                <a href="#">Docs</a>
                            </li>
                            -->
                            <li>
                                <a href="/contact-us">Contact Us</a>
                            </li>
                            <li>
                                <a href="http://blog.haystackhq.com">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 offset-md-1 col-sm-6 footer-col center-on-sm">
                        <!--
                        <h6 class="heading footer-heading">Newsletter</h6>
                        <form autocomplete="on" id="sign-up-form" name="sign-up-form">
                            <div class="form-group">
                                <div class="input-group">
                                    <input autocomplete="email" class="input form-control" data-validation="email" name="email" placeholder="Email">
                                    <div class="input-group-append">
                                        <button class="btn ">Subscribe <span class="fa fa-send"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                       -->
                        <div>
                            <a href="https://www.facebook.com/haystackhq" target="_blank" class="btn bg-white btn-circle shadow-md">
                                <span class="fa fa-facebook"></span>
                            </a>
                            <a href="https://twitter.com/haystackdev" target="_blank" class="btn bg-white btn-circle shadow-md">
                                <span class="fa fa-twitter"></span>
                            </a>
                            <a href="https://github.com/haystack-hq" target="_blank" class="btn btn-circle shadow-md">
                                <span class="github"></span>
                            </a>
                        </div>
                    </div>
                </div><!-- .row -->
            </div><!-- .container -->

            <!-- Footer Copyright -->
            <div class="footer-copyright">
                <div class="container">
                    <div class="row">
                        <!-- Copyright -->
                        <div class="col-sm-6 center-on-sm">
                            <p>
                                &copy; 2018 <a href="http://haystackhq.com" title="Haystack">Haystack</a>
                            </p>
                        </div>
                    </div>
                </div><!-- .container -->
            </div><!-- .footer-copyright -->

        </footer><!-- .ui-footer -->
    </div>
</template>

<script>
export default {
  name: 'Base',
  data () {
    return {

    }
  },
  head: {
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?' + process.env.GA_ID, async: true },
      { inner: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'' + process.env.GA_ID + '\');' }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
