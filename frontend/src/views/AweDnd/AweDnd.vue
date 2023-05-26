<template>
  <div>{{ message }}</div>
  <grid-layout
    v-model:layout="layout"
    :col-num="4"
    :row-height="60"
    style="width: calc(100vw - 100px)">
  <template #default="{ gridItemProps }"> 
        <grid-item
          v-for="item in layout"
          :key="item.i"
          v-bind="gridItemProps"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :min-h="item.minh"
          :max-h="item.maxh"
          :min-w="item.minw"
          :max-w="item.maxW"
          @resize="resize"
          @move="move"
          @moved="moved"
          :static="!item.change"
          :is-resizable="true"
        >
          <div>
              <p>
                  <span style="color:red">{{ item.i }}</span>
              </p>
              <el-button type="primary" @click="Scale(1,item)">1倍</el-button>
              <el-button type="primary" @click="Scale(2,item)">2倍</el-button>
          </div>
        </grid-item>
        </template>
  </grid-layout>
  <SwEp />
</template>

<script setup>
    import { onBeforeUnmount, ref, shallowRef, onMounted,getCurrentInstance,watch,reactive } from 'vue'
    import { GridLayout,GridItem } from "vue3-drr-grid-layout";
    import "vue3-drr-grid-layout/dist/style.css";
    import SwEp from './SwEp.vue'
    const layout = ref([
        { x: 0, y: 0, w: 2, h: 4, i: 0 ,minw:1,minh:4,maxh:4,maxW:2,change:true},
        { x: 2, y: 0, w: 1, h: 4, i: 1 ,minw:1,minh:4,maxh:4,maxW:2,change:true},
        { x: 3, y: 0, w: 1, h: 4, i: 2 ,minw:1,minh:4,maxh:4,maxW:2,change:true},
        { x: 0, y: 1, w: 1, h: 4, i: 3 ,minw:1,minh:4,maxh:4,maxW:2,change:true},
        { x: 1, y: 1, w: 1, h: 4, i: 4 ,minw:1,minh:4,maxh:4,maxW:2,change:true},
        { x: 2, y: 1, w: 1, h: 4, i: 5 ,minw:1,minh:4,maxh:4,maxW:2,change:true},
        { x: 3, y: 1, w: 1, h: 4, i: 6 ,minw:1,minh:4,maxh:4,maxW:2,change:true}, 
    ]);
    const screenW = ref(0)
    const Scale = (multiple,item)=>{
        console.log(layout)
    }
    const setScreenW = (width)=>{
        console.log(width)
        if(width>1200) screenW.value = 16
        if(width<1200&&width>996) screenW.value = 12
        if(width<996&&width>768) screenW.value = 8
        if(width<768) screenW.value = 4
    }

    onMounted(()=>{
        setScreenW(document.body.clientWidth)
        window.addEventListener('resize',()=>{
            setScreenW(document.body.clientWidth)
        });
    })

    const message = ref("");
    //缩放事件
    const resize= (i, newH, newW,newHPx, newWPx)=> {
        message.value  = "缩放中 i=" + i + ", X=" + newHPx + ", Y=" + newWPx;
    }
    //单元格移动中的事件
    const move = (i, newX, newY) => {
        message.value = "移动中 i=" + i + ", X=" + newX + ", Y=" + newY;
        
    };
    //单元格移动后的事件
    const moved = (i, newX, newY) => {
        console.log(layout.value)
        const keys = new Map();
        layout.value.map((obj,idx)=>{
            if(keys.has(obj.y)){
                const arr = keys.get(obj.y)
                arr.push(obj)
                arr.sort((a,b)=>a.x-b.x)
                keys.set(obj.y,arr)
            }else{
                keys.set(obj.y,[])
                keys.set(obj.y,[obj])
            }
            // console.log(keys)
        })
        const arr = []
        for(let [key,val] of keys) {
            console.log(val,key);
            arr.concat(val.sort((a,b)=>a.x-b.x))
        }
        console.log(arr)
        message.value = "移动中 i=" + i + ", X=" + newX + ", Y=" + newY;
    };
</script>

<style scoped>

</style>