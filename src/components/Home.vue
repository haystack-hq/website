<template>
    <layout-base>
        <!-- Main Wrapper -->
        <div class="main" slot="content" role="main">

            <!-- Hero -->
            <div class="ui-hero hero-lg hero-center hero-bg ui-curve hero-svg-background">
                <div class="container pb-4">
                    <div class="row pt-2 pb-8">
                        <div class="col-sm-12" data-vertical_center="true" data-vertical_offset="16">
                            <h1 class="heading animate" data-show="fade-in-up-big" data-delay="100">
                                Any Stack in Seconds
                            </h1>

                            <h3 class="text-white">The best way to start developing a full stack application</h3>
                            <!-- * Replace data-video with your youtube video id -->
                            <a href="#" class="ui-video-toggle mt-4" data-video="1C75bKax4Eg">
                                <span class="icon fa fa-play"></span> <span>How Haystack Works</span>
                            </a>
                        </div>
                    </div><!-- .row -->
                </div><!-- .container -->
            </div><!-- .ui-hero -->

            <!-- Intro Image -->
            <div class="section intro-image pt-0">
                <img src="/static/img/mockups/haystack-hero-shot.png" data-uhd data-max_width="1000"
                     class="shadow-xxl responsive-on-lg" alt="Haystack - Fast simple development environments"/>
            </div><!-- .intro-image -->

            <!-- What is Haystack section -->
            <div id="what-is-haystack" class="section bg-light pt-0">
                <div class="container ui-icon-blocks ui-blocks-h icons-lg">
                    <div class="section-heading cente">
                        <h2 class="heading text-dark-gray">
                            What is Haystack?
                        </h2>
                        <p class="paragraph">
                            Haystack is a file. It is a file that describes your entire stack. Think of it as a blueprint for the infrastructure of your application. You define your application in a single file, and can track it in version control. Your co-workers and contributors can easily replicate the entire environment with the <a href="#">hs start</a> command.
                        </p>
                    </div><!-- .section-heading -->
                    <div class="row">
                        <div class="col-sm-4 ui-icon-block">
                            <div class="icon icon-lg icon-circle icon-layers text-orange"></div>
                            <h4 class="text-dark-gray">Prebuilt Popular Stacks</h4>
                            <p>
                                Use our pre-built stacks to create development environments for popular frameworks and platforms — and freely modify them to suit your own development needs.
                            </p>
                        </div>
                        <div class="col-sm-4 ui-icon-block">
                            <div class="icon icon-lg icon-circle icon-equalizer text-orange"></div>
                            <h4 class="text-dark-gray">Your Own Tools</h4>
                            <p>
                                Haystack does not force you to use a web IDE to have a cloud dev environment. Use your own tools, Haystack will take care of the rest.
                            </p>
                        </div>
                        <div class="col-sm-4 ui-icon-block">
                            <div class="icon icon-lg icon-circle icon-grid text-orange"></div>
                            <h4 class="text-dark-gray">Local or Cloud</h4>
                            <p>
                                Use your own machine’s resources, or embrace the power of the cloud. Haystack simplifies the setup process so you can rapidly deploy to multiple environments without losing focus on code.
                            </p>
                        </div>
                    </div><!-- .row -->
                </div><!-- .container -->
            </div><!-- .section -->

            <!-- Sharable Section -->
            <div id="sharable" class="section ">
                <div class="container">
                    <div class="row">
                        <!-- Text Column -->
                        <div class="col-lg-6 col-md-5" data-vertical_center="true">
                            <!-- Section Heading -->
                            <div class="section-heading mb-0 center-on-md">
                                <h2 class="heading">
                                    Sharable URLs, Sharable Environments
                                </h2>
                                <p class="paragraph">
                                    Don’t let distance compromise collaboration.<br /><br />
                                    With Haystack cloud deployments, your environment is given a unique URL that you can you can share with anyone based on your security rules, keeping your team focused on the task at hand. <br /><br />
                                    Any team member can connect to another team member’s service within a stack, encouraging side-by-side problem solving over any distance.
                                </p>
                            </div><!-- .section-heading -->
                        </div>
                        <!-- Image Column -->
                        <div class="col-lg-6 col-md-7 img-block animate" data-show="fade-in-left" data-vertical_center="true">
                            <img src="/static/img/descriptive/haystack-pair.svg" alt="Haystack - Fast simple development environments" data-uhd
                                 class="img-fluid" data-max_width="460"/>
                        </div>
                    </div><!-- .row -->
                </div><!-- .container -->
            </div><!-- .section -->

            <!-- Stacks Section -->
            <div id="stacks" class="section bg-gray">
                <div class="container">
                    <div class="row">

                        <!-- Left Column -->
                        <div class="col-lg-5 col-xl-6" data-vertical_center="true">

                            <!-- Section Heading -->
                            <div class="section-heading mb-2 center-on-md">
                                <h2 class="heading">
                                    Prebuilt Stacks
                                </h2>
                                <p class="paragraph">
                                    Get started developing quickly with the a stack specifically designed for the platform of your choice.
                                </p>
                            </div><!-- .section-heading -->

                            <!-- Left blocks -->
                            <ul class="ui-icon-blocks ui-blocks-v center-on-md icons-sm">
                                <li class="ui-icon-block">
                                    <span class="icon icon-layers"></span>
                                    <a class="btn-link">
                                        Magento 2
                                    </a>
                                </li>
                                <li class="ui-icon-block">
                                    <span class="icon icon-layers"></span>
                                    <a class="btn-link">
                                        Laravel
                                    </a>
                                </li>
                                <li class="ui-icon-block">
                                    <span class="icon icon-layers"></span>
                                    <a class="btn-link">
                                        Wordpress
                                    </a>
                                </li>
                                <!--<li class="ui-icon-block">-->
                                <!--<span class="icon icon-layers"></span>-->
                                <!--<a class="btn-link btn-arrow">-->
                                <!--See More-->
                                <!--</a>-->
                                <!--</li>-->
                            </ul>
                        </div>

                        <!-- Right Column -->
                        <div class="col-lg-7 col-xl-6 d-none d-lg-block">

                            <!-- Logo Cloud -->
                            <div class="ui-logos-cloud">
                                <div data-size="4" class="mt-0 animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/drupal.png" data-uhd alt="Drupal"/>
                                </div>
                                <div data-size="10" class="mt-0 animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/angular.svg" data-uhd alt="Angular.js"/>
                                </div>
                                <div data-size="7" class="mt-0 animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/rubyonrails.png" data-uhd alt="Ruby on Rails"/>
                                </div>

                                <!-- Flex Break -->
                                <span class="flex-break"></span>

                                <div data-size="5" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/meteor-logo.svg" data-uhd alt="Applif App Landing Page"/>
                                </div>
                                <div data-size="10" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/magento.svg" data-uhd alt="Magento"/>
                                </div>
                                <div data-size="4" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/django-logo-positive.svg" data-uhd alt="Applif App Landing Page"/>
                                </div>
                                <div data-size="6" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/node.png" data-uhd alt="Node.js"/>
                                </div>

                                <!-- Flex Break -->
                                <span class="flex-break"></span>

                                <div data-size="8" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/react.png" data-uhd alt="Applif App Landing Page"/>
                                </div>
                                <div data-size="10" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/laravel.svg" data-uhd alt="Applif App Landing Page"/>
                                </div>
                                <div data-size="4" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/symfony.svg" data-uhd alt="Applif App Landing Page"/>
                                </div>

                                <!-- Flex Break -->
                                <span class="flex-break"></span>

                                <div data-size="10" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/wordpress.png" data-uhd alt="Applif App Landing Page"/>
                                </div>
                                <div data-size="7" class="animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/pylons.png" data-uhd alt="Applif App Landing Page"/>
                                </div>

                                <!-- Flex Break -->
                                <span class="flex-break"></span>

                                <div data-size="4" class="mb-0 animate" data-show="fade-in">
                                    <img src="/static/img/3rd-party-logos/Ghost-Logo.svg" data-uhd alt="Applif App Landing Page"/>
                                </div>
                            </div><!-- .ui-logo-cloud  -->

                        </div>
                    </div><!-- .row -->
                </div><!-- .container -->
            </div><!-- .section -->

            <!-- Build Your Own Section -->
            <div id="build-your-own" class="section laptop-showcase">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-lg-4" data-vertical_center="true">
                            <div>
                                <h2 class="heading text-dark-gray">
                                    Build your own stack
                                </h2>
                                <p>
                                    If your application requires something more custom you can start with a prebuilt stack and then modify it or you can build a stack from scratch.  <a href="#">View docs</a>.
                                </p>
                                <a href="/early-access" class="btn early-access">Get Early Access</a>
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-8">
                            <img class="responsive-on-sm laptop" src="/static/img/mockups/custom-stack.png" data-uhd
                                 alt="Haystack - Fast simple development environments" data-max_width="1000"/>
                        </div>
                    </div>

                </div><!-- .container -->
            </div><!-- .section -->

            <!-- Local v Cloud Section -->
            <div id="local-cloud" class="section">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-12 text-center">
                            <h3>Develop locally or against a cloud environment</h3>
                            <p>
                                When you run your stack you can choose to run it locally or in the cloud on most popular cloud platforms.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-responsive" src="/static/img/descriptive/haystack-local.svg" data-uhd
                                 alt="Haystack - Fast simple development environments"/>
                            <h5 class="text-dark-gray">Local Environments</h5>
                            <ul class="ui-checklist mt-2 text-left">
                                <li>
                                    <h6 class="heading text-dark-gray">Haystack manages your local stacks</h6>
                                </li>
                                <li>
                                    <h6 class="heading text-dark-gray">Local stacks are always free</h6>
                                </li>
                                <li>
                                    <h6 class="heading text-dark-gray">Turn your local stack into a cloud stack at any time</h6>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <img class="img-responsive" src="/static/img/descriptive/haystack-cloud.svg" data-uhd
                                 alt="Haystack - Fast simple development environments"/>
                            <h5 class="text-dark-gray">Cloud Environments</h5>
                            <ul class="ui-checklist mt-2 text-left">
                                <li>
                                    <h6 class="heading text-dark-gray">Code is automatically synced with your stack</h6>
                                </li>
                                <li>
                                    <h6 class="heading text-dark-gray">Use our Haystack Cloud or use your own cloud account</h6>
                                </li>
                                <li>
                                    <h6 class="heading text-dark-gray">Enterprise plans available</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div><!-- .container -->
            </div>

            <!-- Steps Section -->
            <div id="running-a-stack" class="section bg-gray">
                <div class="container">
                    <!-- Section Heading -->
                    <div class="section-heading center">
                        <h2 class="heading text-dark-gray">
                            Creating Your First Stack
                        </h2>
                        <p class="paragraph">
                            Install, choose your stack, choose your mode, and click start
                        </p>
                    </div><!-- .section-heading -->

                    <!-- UI Steps -->
                    <div class="ui-showcase-blocks ui-steps">
                        <!-- Step 1 -->
                        <div class="step-wrapper">
                            <span class="step-number">1</span>
                            <div class="row">
                                <div class="col-md-6" data-vertical_center="true">
                                    <h4 class="heading">
                                        Download & Install Haystack
                                    </h4>
                                    <p class="paragraph">
                                        Download the Apple or Windows downloader. The installer will install the Haystack Daemon, CLI and GUI. After install, access the GUI from the toolbar.
                                    </p>
                                    <!--<a href="#" class="btn-link btn-arrow">Explore Documentation</a>-->
                                </div>
                                <div class="col-md-6">
                                    <img class="responsive-on-xs" src="/static/img/mockups/step1-download-haystack.png" data-uhd
                                         alt="Haystack - Fast simple development environments" data-max_width="464"/>
                                </div>
                            </div>
                        </div>
                        <!-- Step 2 -->
                        <div class="step-wrapper">
                            <span class="step-number">2</span>
                            <div class="row">
                                <div class="col-md-6" data-vertical_center="true">
                                    <h4 class="heading">
                                        Choose new stack from the menu
                                    </h4>
                                    <p class="paragraph">
                                        Search popular stacks by keyword, or scroll through a list of available stacks. If you can not find the stack you are looking for, select the <strong>Build Your Own Stack</strong> option.
                                    </p>
                                    <!--<a href="#" class="btn-link btn-arrow">Explore Prebuilt Stacks</a>-->
                                </div>
                                <div class="col-md-6">
                                    <img class="responsive-on-xs" src="/static/img/mockups/step2-pick-your-stack.png" data-uhd
                                         alt="Haystack - Fast simple development environments" data-max_width="445"/>
                                </div>
                            </div>
                        </div>
                        <!-- Step 3 -->
                        <div class="step-wrapper">
                            <span class="step-number">3</span>
                            <div class="row">
                                <div class="col-md-6" data-vertical_center="true">
                                    <h4 class="heading">
                                        Select mode (local, cloud) and click start
                                    </h4>
                                    <p class="paragraph">
                                        By default, all stacks run on your local environment as Docker containers. For developing on the cloud or for creating a stage or test environment, choose a cloud provider.
                                    </p>
                                    <!--<a href="#" class="btn-link btn-arrow">Explore</a>-->
                                </div>
                                <div class="col-sm-6">
                                    <img class="responsive-on-xs" src="/static/img/mockups/step3-choose-your-cloud.png" data-uhd
                                         alt="Haystack - Fast simple development environments" data-max_width="451"/>
                                </div>
                            </div>
                        </div>
                        <!-- Step 4 -->
                        <div class="step-wrapper">
                            <span class="step-number">4</span>
                            <div class="row">
                                <div class="col-md-6" data-vertical_center="true">
                                    <h4 class="heading">
                                        Dev against your stack
                                    </h4>
                                    <p class="paragraph">
                                        Haystack automatically syncs your local code with your local stack or a remote stack on the cloud. This gets around the Docker filesystem speed limitations and allows you to use the IDEs and dev tools you are already familiar with.
                                    </p>
                                    <!--<a href="#" class="btn-link btn-arrow">Explore</a>-->
                                </div>
                                <div class="col-sm-6">
                                    <img class="responsive-on-xs" src="/static/img/mockups/step4-code.png" data-uhd
                                         alt="Haystack - Fast simple development environments" data-max_width="451"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- .container -->
            </div><!-- .section -->

            <!-- CLI Section -->
            <div id="cli" class="section laptop-showcase">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-lg-4" data-vertical_center="true">
                            <div>
                                <h2 class="heading text-dark-gray">
                                    Command Line Interface
                                </h2>
                                <p>
                                    If you prefer to use the command line, you can can control your stacks using the built in CLI.
                                </p>
                                <ul class="ui-checklist mt-2">
                                    <li>
                                        <h6 class="heading text-dark-gray">Create a new Stack</h6>
                                    </li>
                                    <li>
                                        <h6 class="heading text-dark-gray">Stop & Start an existing stack</h6>
                                    </li>
                                    <li>
                                        <h6 class="heading text-dark-gray">View Logs</h6>
                                    </li>
                                    <li>
                                        <h6 class="heading text-dark-gray">SSH Into the services</h6>
                                    </li>
                                </ul>
                                <a href="/early-access" class="btn early-access">Get Early Access</a>
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-8">
                            <img class="responsive-on-sm laptop terminal" src="/static/img/mockups/haystack-cli.png" data-uhd
                                 alt="Haystack - Fast simple development environments" data-max_width="1000"/>
                        </div>
                    </div>

                </div><!-- .container -->
            </div><!-- .section -->

            <!-- Pricing Section -->
            <div id="pricing" class="section bg-gray">
                <div class="container">
                    <!-- Section Heading -->
                    <div class="section-heading center">
                        <h2 class="heading">
                            Pricing
                        </h2>
                        <p class="paragraph">
                            Pick the right plan for you or your team
                        </p>
                    </div><!-- .section-heading -->

                    <!-- UI Pricing Cards / Owl Carousel On Mobile -->
                    <div class="ui-pricing-cards owl-carousel owl-theme">
                        <!-- Card 1 -->
                        <div class="ui-pricing-card animate" data-show="fade-in-left">
                            <div class="ui-card shadow-lg">
                                <div class="card-header">
                                    <!-- Heading -->
                                    <h4 class="heading">Cloud</h4>
                                    <!-- Price -->
                                    <div class="price">
                                        <span class="currency">$</span>
                                        <span class="price">*</span>
                                        <span class="period">/mo</span>
                                    </div>
                                    <h6 class="sub-heading">per stack</h6>
                                </div>
                                <!-- Features -->
                                <div class="card-body">
                                    <ul>
                                        <li>
                                            Unlimited Stacks
                                        </li>
                                        <li>
                                            Local Dev Environments
                                        </li>
                                        <li>
                                            Cloud Environments
                                        </li>
                                        <li>
                                            * Choose a cloud provider
                                        </li>
                                    </ul>
                                    <a href="/contact-us" class="btn shadow-md">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <!-- Card 2 -->
                        <div class="ui-pricing-card active animate" data-show="fade-in">
                            <div class="ui-card color-card shadow-xl">
                                <div class="card-header">
                                    <!-- Heading -->
                                    <h4 class="heading">Open Source</h4>
                                    <!-- Price -->
                                    <div class="price">
                                        <span class="curency">$</span>
                                        <span class="price">0</span>
                                        <span class="period">/mo</span>
                                    </div>
                                    <h6 class="sub-heading">per developer</h6>
                                </div>
                                <!-- Features -->
                                <div class="card-body">
                                    <ul>
                                        <li>
                                            Unlimited Stacks
                                        </li>
                                        <li>
                                            Local Dev Environments
                                        </li>
                                        <li>
                                            Open Source
                                        </li>
                                        <li>
                                            <br/>
                                        </li>
                                    </ul>
                                    <a href="/early-access" class="btn early-access shadow-md">Get Early Access</a>
                                </div>
                            </div>
                        </div>
                        <!-- Card 3 -->
                        <div class="ui-pricing-card animate" data-show="fade-in-right">
                            <div class="ui-card shadow-lg">
                                <div class="card-header">
                                    <!-- Heading -->
                                    <h4 class="heading">Enterprise</h4>
                                    <!-- Price -->
                                    <div class="price">
                                        <span class="curency">$</span>
                                        <span class="price">15</span>
                                        <span class="period">/mo</span>
                                    </div>
                                    <h6 class="sub-heading">per developer</h6>
                                </div>
                                <!-- Features -->
                                <div class="card-body">
                                    <ul>
                                        <li>
                                            Unlimited Stacks
                                        </li>
                                        <li>
                                            Local + Cloud Environments
                                        </li>
                                        <li>
                                            Your own Cloud Account
                                        </li>
                                        <li>
                                            Team Settings + Controls
                                        </li>
                                    </ul>
                                    <a href="/contact-us" class="btn shadow-md">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div><!-- .ui-pricing-cards -->

                    <!--&lt;!&ndash; Pricing Footer &ndash;&gt;-->
                    <!--<div class="ui-pricing-footer">-->
                    <!--<p class="paragraph">-->
                    <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore-->
                    <!--et dolore magna aliqua. Ut enim ad minim veniam, quis.-->
                    <!--</p>-->
                    <!--<div class="actions">-->
                    <!--<a class="btn">Learn More</a>-->
                    <!--</div>-->
                    <!--</div>&lt;!&ndash; .ui-pricing-footer &ndash;&gt;-->

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
    return {}
  },
  head: {
    title: {
      inner: 'Haystack',
      separator: '-',
      complement: 'Home'
    },
    meta: [
      { n: 'description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.', id: 'desc' },
      // Twitter
      { n: 'twitter:card', c: 'summary_large_image' },
      { n: 'twitter:title', c: 'Haystack' },
      { n: 'twitter:description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.' },
      { n: 'twitter:url', c: 'http://haystackhq.com/' },
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
<style scoped>

</style>
