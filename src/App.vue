<template>
  <div id="app">
    <div class="main__header">
      <div>
        <div>LOGO</div>
      </div>
      <div class="right__link">
        <h3 class="main__link">
          <router-link :to="{name: 'about'}">About</router-link>
        </h3>
        <h3 class="main__link">
          <router-link :to="{name: 'home'}">Home</router-link>
        </h3>
        <h3 v-if="!loggedIn" class="main__link">
          <router-link :to="{name: 'login'}">Login</router-link>
        </h3>
        <h3 v-if="!loggedIn" class="main__link">
          <router-link to="{name: 'register'}">Register</router-link>
        </h3>
        <h3 v-show="loggedIn" class="main__link">
          <router-link :to="{name: 'logout'}">Logout</router-link>
        </h3>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style>
.main__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
  height: 80px;
}
body {
  margin: 0;
  padding: 0;
}
.main__link {
  margin-left: 15px;
  cursor: pointer;
}
.right__link {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
