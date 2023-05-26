<script setup>
  import WelcomeItem from './WelcomeItem.vue'
  import DocumentationIcon from './icons/IconDocumentation.vue'
  import ToolingIcon from './icons/IconTooling.vue'
  import EcosystemIcon from './icons/IconEcosystem.vue'
  import CommunityIcon from './icons/IconCommunity.vue'
  import SupportIcon from './icons/IconSupport.vue'
  import { ipcApiRoute,specialIpcRoute } from '@/api/main'
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from '@element-plus/icons-vue'
  import {reactive, toRefs,getCurrentInstance,onMounted,h} from 'vue'
  import { ElMessage } from 'element-plus'
  import BusinessModule from '@/components/BusinessModule.vue'
  import { loginApi, getUserInfoApi } from '@/api'
  const { proxy } = getCurrentInstance()
  const { $ipc } = proxy
  const views = [
    {
      type: 'vue',
      content: '/createwindow',
      windowName: 'window-1',
      windowTitle: 'new window'
    },    
  ]
  const popFormData = reactive({})
  const options = [
    {label:'菜单1',value:1},
    {label:'菜单2',value:2},
    {label:'菜单3',value:3},
  ]
  // 模拟登陆
  const login = ()=> {
    loginApi({ username: "lzp", password: "666" }).then((res) => {
      console.log(res);
    });
  }
  // 表单提交
  const submit = ()=>{
    console.log(popFormData)
  }
  // 打开新窗口并打开新路由
  const createWindow = ()=>{
    $ipc.invoke(ipcApiRoute.createWindow, views[0]).then(id => {
      console.log('[createWindow] id:', id);
    })
  }
  // 给新窗口传递消息
  const sendTosubWindow = async ()=> {
    // 新窗口id
    const newWcId = await $ipc.invoke(ipcApiRoute.getWCid, views[0].windowName);
    console.log(newWcId)
    $ipc.sendTo(newWcId, specialIpcRoute.window2ToWindow1, '窗口1通过 sendTo 给窗口2发送消息');
  }
  // 系统通知
  const sendNotification = (e)=> {
    $ipc.send(ipcApiRoute.sendNotification, {
      type: 'main',
      title: '提示音',
      subtitle: '副标题-提示音',
      body: '这是通知内容-提示音',
      silent: false,
      clickEvent:true
    });
  }
  onMounted(e=>{
    // 监听系统通知
      $ipc.removeAllListeners(ipcApiRoute.sendNotification);
      $ipc.on(ipcApiRoute.sendNotification, (event, result) => {
        if (Object.prototype.toString.call(result) == '[object Object]') {
          ElMessage({
            message: h('p', null, [
            // h('span', null, arg),
            h('i', { style: 'color: teal' }, result.msg),
            ]),
          })
        }  
      })
    // 监听新窗口消息
    $ipc.removeAllListeners(specialIpcRoute.window1ToWindow2);
    $ipc.on(specialIpcRoute.window1ToWindow2, (event, arg) => {
      console.log(arg)
      ElMessage({
          message: h('p', null, [
          // h('span', null, arg),
          h('i', { style: 'color: teal' }, arg),
          ]),
      })
    })
  })
  // JSON数据存储
  const setData = (param)=>{
    const params = {
      action: 'all',//触发方式
      addParam:{name:'friend',value:[{a:1,b:2}]},//添加
      delete_name:'friend',//删除
      updateParam:{name:'ax',value:1222},//更新
      search:'ax',//查询
    }
    $ipc.invoke(ipcApiRoute.dbOperation, params).then(res => {
      console.log('res:', res);
      if (res.all_list.length == 0) {
        return false;
      }
      self.all_list = res.all_list;
    })
  }
  const system = ()=>{
    
  }
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>
  <!--el-form 父组件-->
  <el-form
    ref="ruleForm"
    label-position="top"
    label-width="110px"
    :model="popFormData"
    style="padding: 20px"
    > 
    <!--封装的子组件-->
    <business-module :child-form-data="popFormData" :select-option="options"/>
    <el-button @click="submit" type="primary">提交</el-button>
  </el-form>
  <el-button type="primary" @click="createWindow">打开新窗口</el-button>
  <el-button type="primary" @click="sendTosubWindow">向子发送消息</el-button>
  <el-button type="primary" @click="setData('add')">添加数据</el-button>
  <el-button type="primary" @click="setData('get')">获取数据</el-button>
  <el-button type="primary" @click="setData('update')">更新数据</el-button>
  <el-button type="primary" @click="setData('all')">获取全部数据</el-button>
  <el-button type="primary" @click="setData('del')">删除数据</el-button>
  <!-- <el-button type="primary" @click="system('del')">删除数据</el-button> -->
  <el-button type="primary" @click="login">登录</el-button>
  <el-button type="primary" @click="sendNotification">系统通知</el-button>
</template>
