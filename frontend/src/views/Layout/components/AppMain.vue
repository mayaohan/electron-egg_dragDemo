<template>
  <section class="app-main" style="min-height: 100%">
    {{cachedViews}}
    
      <!-- <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive> -->
            <div>
              <router-view v-slot="{ Component }">
                
                <!-- <transition name="fade" mode="out-in"> -->
                  <keep-alive :include="cachedViews" :max="8">
                      <component :is="Component" />
                  </keep-alive>
                <!-- </transition> -->
              </router-view>
            </div>

            
      
    
  </section>
</template>

<script setup>
  import { tagsView } from "@/stores/modules/tagsView";
  import {computed} from 'vue';
  const authStore = tagsView();
  const cachedViews = computed(() => authStore.cachedViews);
</script>
