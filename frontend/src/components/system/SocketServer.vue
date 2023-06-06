<template>
  <div id="app-base-httpserver">
    <div class="one-block-1">
      <span>
        1. 内置socket-io server服务
      </span>
    </div>
    <div class="one-block-2">
      <el-space>
        <p>* 状态：{{ currentStatus }}</p>
      </el-space>
      <p>* 地址：{{ servicAddress }}</p>
    </div>
    <div class="one-block-1">
      <span>
        2. 发送请求
      </span>
    </div>    
    <div class="one-block-2">
      <el-space>
        <el-button @click="sendRequest('downloads')"> 打开【我的下载】 </el-button>
      </el-space>
    </div>
  </div>
</template>
<script setup>
import { io } from 'socket.io-client'
import { ipcApiRoute, requestHttp } from '@/api/main'
import {ref,onMounted} from 'vue'
const currentStatus = ref('关闭'),
      servicAddress = ref('ws://localhost:7070'),
      socket = ref(null)
      const init = ()=> {
        socket.value = io(servicAddress.value);
        socket.value.on('connect', () => {
          console.log('connect!!!!!!!!');
          currentStatus.value = '开启';
        });
      },
      sendRequest = (id)=> {
        if (currentStatus.value == '关闭') {
          console.log('socketio服务未开启');
          return;
        }

        const method = ipcApiRoute.doSocketRequest; 
        socket.value.emit('c1', { cmd: method, params: {id: id} }, (response) => {
          // response为返回值
          console.log('response:', response)
        })
      }
      onMounted(()=>{
        init()
      })
</script>
<style lang="scss" scoped>
#app-base-httpserver {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
  }
}
</style>
