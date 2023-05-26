<template>
    <div>
        <div>123123123</div>
        <el-button type="primary" @click="sendTosubWindow">向主发送消息</el-button>
    </div>
</template>

<script setup>
    import { ipcApiRoute,specialIpcRoute } from '@/api/main'
    import {reactive, toRefs,getCurrentInstance,onMounted,h} from 'vue'
    import { ElMessage } from 'element-plus'
    const instance = getCurrentInstance()
    const { $ipc } = instance.appContext.config.globalProperties
    const createWindow = ()=>{
        $ipc.invoke(ipcApiRoute.createWindow, views[0]).then(id => {
            console.log('[createWindow] id:', id);
        })
    }
    const openVn = (arg) => {
        ElMessage({
            message: h('p', null, [
            // h('span', null, arg),
            h('i', { style: 'color: teal' }, arg),
            ]),
        })
    }
    const sendTosubWindow = ()=> {
        // 获取主窗口id
        $ipc.invoke(ipcApiRoute.getWCid, 'main').then(id => {
            $ipc.sendTo(id, specialIpcRoute.window1ToWindow2, '窗口2 通过 sendTo 给主窗口发送消息');
        });
    }
    const init = ()=> {
      // 监听 窗口2 发来的消息
      $ipc.removeAllListeners(specialIpcRoute.window2ToWindow1);
      $ipc.on(specialIpcRoute.window2ToWindow1, (event, arg) => {
        // alert(1)
        // $message.info(arg);
        openVn(arg)
      })
    }
    onMounted(e=>{
        init()
    })
</script>

<style scoped>

</style>