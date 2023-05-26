<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useRouter,useRoute } from 'vue-router'
import {reactive, toRefs,getCurrentInstance,onMounted,h,ref} from 'vue'
const { proxy } = getCurrentInstance()
const router = useRouter()
const route = useRoute()
const routeArr = router.getRoutes();
console.log(router.getRoutes(),route,proxy.$props)
const toTher = (param)=>{
  router.push(param)
}
const activeIndex = ref('/home')
</script>

<template>

  <div class="wrapper">

    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/createwindow">createwindow</RouterLink>
      <RouterLink to="/aweDnd">aweDnd</RouterLink>
      <RouterLink to="/Grid">Grid</RouterLink>
    </nav> -->
    <el-container>
      <el-menu mode="horizontal" style="width:100%" :default-active="activeIndex">
        <el-menu-item @click="toTher(obj.path)" v-for="(obj,idx) in routeArr" :index="obj.path">{{obj.name}}</el-menu-item>
      </el-menu>
    </el-container>
    
    <el-container class="layout-container-demo" style="height:calc(100vh - 80px)">
      <!-- <el-aside width="0px">
        <el-scrollbar>
          
        </el-scrollbar>
      </el-aside> -->

      <el-main>
          <!-- <el-scrollbar> -->
          <RouterView />
          <!-- </el-scrollbar> -->
      </el-main>
    </el-container>
  </div>

  
</template>

<style scoped>
.wrapper {
  place-items: flex-start;
  flex-wrap: wrap;
  width:100%;
}
.el-main{
  width:100%;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  /* .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
