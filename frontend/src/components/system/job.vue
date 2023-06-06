<template>
  <div id="app-base-jobs">
    <div class="one-block-1">
      <span>
        1. 任务 / 并发任务
      </span>
    </div>  
    <div class="one-block-2">
      <el-space>
        <el-button @click="runJob(1, 'create')">执行任务1</el-button>
        进度：{{ progress1 }} ， 进程pid：{{ progress1_pid }}
        <el-button @click="runJob(1, 'close')">关闭</el-button>
      </el-space>
      <p></p>
      <el-space>
        <el-button @click="runJob(2, 'create')">执行任务2</el-button>
        进度：{{ progress2 }} ， 进程pid：{{ progress2_pid }}
        <el-button @click="runJob(2, 'close')">关闭</el-button>
      </el-space>            
    </div>
    <div class="one-block-1">
      <span>
        2. 任务池 / 并发任务
      </span>
    </div>  
    <div class="one-block-2">
      <el-space>
        <el-button @click="createPool()">创建进程池</el-button>
        进程pids：{{ processPids }}
      </el-space>
      <p></p>      
      <el-space>
        <el-button @click="runJobByPool(3, 'run')">执行任务3</el-button>
        进度：{{ progress3 }} ， 进程pid：{{ progress3_pid }}
      </el-space>
      <p></p>
      <el-space>
        <el-button @click="runJobByPool(4, 'run')">执行任务4</el-button>
        进度：{{ progress4 }} ， 进程pid：{{ progress4_pid }}
      </el-space>            
    </div>            
  </div>
</template>
<script setup>
    import { ipcApiRoute } from '@/api/main'
    import {reactive, toRefs,getCurrentInstance,onMounted,h,ref} from 'vue'
    import { ElMessage } from 'element-plus'
    const { proxy } = getCurrentInstance()
    const { $t } = getCurrentInstance().proxy;
    const { $ipc } = proxy
    const progress1 = ref(0),
    progress1_pid = ref(0),
    progress2 = ref(0),
    progress2_pid = ref(0),
    progress3 = ref(0),
    progress3_pid = ref(0),
    progress4 = ref(0),
    progress4_pid = ref(0),
    processPids = ref('')

    const init = ()=> {
        // 避免重复监听，或者将 on 功能写到一个统一的地方，只加载一次
        $ipc.removeAllListeners(ipcApiRoute.timerJobProgress);
        $ipc.removeAllListeners(ipcApiRoute.createPoolNotice);

        // 监听任务进度
        $ipc.on(ipcApiRoute.timerJobProgress, (event, result) => {
        switch (result.jobId) {
            case 1:
                progress1.value = result.number;
                progress1_pid.value = result.pid == 0 ? result.pid : progress1_pid.value;
                break;
            case 2:
                progress2.value = result.number;
                progress2_pid.value = result.pid == 0 ? result.pid : progress2_pid.value;
                break;
            case 3:
                progress3.value = result.number;
                progress3_pid.value = result.pid == 0 ? result.pid : progress3_pid.value;
                break;
            case 4:
                progress4.value = result.number;  
                progress4_pid.value = result.pid == 0 ? result.pid : progress4_pid.value;        
                break;
        }
        })
        // 监听pool
        $ipc.on(ipcApiRoute.createPoolNotice, (event, result) => {
        let pidsStr = JSON.stringify(result);
        processPids.value = pidsStr;
        })   
    },
    runJob = (jobId, operation)=> {
        let params = {
            id: jobId,
            type: 'timer',
            action: operation
        }
        $ipc.invoke(ipcApiRoute.someJob, params).then(data => {
            switch (data.jobId) {
                case 1:
                    if (data.action == 'create') {
                        progress1_pid.value = data.result.pid;
                    }
                break;
                case 2:
                    if (data.action == 'create') {
                        progress2_pid.value = data.result.pid;
                    }
                break;
            }
        })
    },
    createPool = ()=> {
      let params = {
        number: 3,
      }
      $ipc.send(ipcApiRoute.createPool, params);
    },
    runJobByPool = (jobId, operation)=> {
      let params = {
        id: jobId,
        type: 'timer',
        action: operation
      }
      $ipc.invoke(ipcApiRoute.someJobByPool, params).then(data => {
        switch (data.jobId) {
          case 3:
            if (data.action == 'run') {
              progress3_pid.value = data.result.pid;
            }
            break;
          case 4:
            if (data.action == 'run') {
              progress4_pid.value = data.result.pid;
            }
            break;
        }
      })
    }
    onMounted(()=>{
        init()
    })
</script>
<style lang="scss" scoped>
#app-base-jobs {
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
