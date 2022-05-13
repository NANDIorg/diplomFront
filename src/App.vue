<template>
<div class="main-container">
  <header-co/>
  <router-view/>
</div>
<Footer/>
</template>

<script>
import cssMain from '@/assets/css/main.css'
import cssHeader from '@/assets/css/header.css'
import headerCo from '@/views/header.vue'
import Footer from '@/views/footer.vue'

export default {
  components: {
    headerCo,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(assets/img/bac1.jpg);
}

#nav {
  padding: 30px;
}

a{
  text-decoration: none;
  color: black;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
