<template>
  <div>
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <aside class="left-sidebar">
      <!-- Sidebar scroll-->
      <div class="scroll-sidebar">
        <!-- User profile -->
        <div class="user-profile">
          <!-- User profile image -->
          <div class="profile-img"> <img src="/static/assets/images/users/1.jpg" alt="user" /> </div>
          <!-- User profile text-->
          <div class="profile-text">{{ username }}</div>
        </div>
        <!-- End User profile text-->
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
          <ul id="sidebarnav">
            <li>
              <a class="" href="/profile" v-on:click.prevent="loadSection('profile')"><i class="mdi mdi-account-card-details"></i><span class="hide-menu">Profile</span></a>
            </li>
            <li>
              <a class="" href="/teams" v-on:click.prevent="loadSection('teams')"><i class="mdi mdi-account-multiple"></i><span class="hide-menu">Teams</span></a>
            </li>
            <li>
              <a class="" href="cloud-providers"><i class="mdi mdi-server"></i><span class="hide-menu">Cloud Providers</span></a>
            </li>
          </ul>
        </nav>
        <!-- End Sidebar navigation -->
      </div>
      <!-- End Sidebar scroll-->
      <!-- Bottom points-->
      <div class="sidebar-footer">
        <!-- item--><a href="" class="link" data-toggle="tooltip" title="Settings"><i class="ti-settings"></i></a>
        <!-- item--><a href="" class="link" data-toggle="tooltip" title="Email"><i class="mdi mdi-gmail"></i></a>
        <!-- item--><a href="logout" class="link" data-toggle="tooltip" title="Logout" v-on:click.prevent="logout"><i class="mdi mdi-power"></i></a> </div>
      <!-- End Bottom points-->
    </aside>
    <!-- ============================================================== -->
    <!-- End Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['username'],
  data () {
    return {}
  },
  methods: {
    loadSection (section) {
      this.$router.push('/' + section)
    },
    logout () {
      this.$currentUser.logout()
      this.$router.push('/')
    }
  }
}
</script>
