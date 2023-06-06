<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		<!-- <sidebar class="sidebar-container"></sidebar> -->
		<div class="main-container">
			<navbar></navbar>
			<tags-view></tags-view>
			<app-main></app-main>
		</div>
	</div>
</template>

<script setup>
// import { Navbar, Sidebar, AppMain, TagsView } from './components'
import { AppMain, TagsView,Navbar } from './components'
import {ref} from 'vue'
const sidebar = ref({
	opened:true
})
</script>

<style lang="scss" scoped>
	.app-wrapper {
	  .clearfix{
		  &::after {
			content: "";
			display: table;
			clear: both;
		}
	  }
	  position: relative;
	  height: 100%;
	  width: 100%;
	}
</style>
