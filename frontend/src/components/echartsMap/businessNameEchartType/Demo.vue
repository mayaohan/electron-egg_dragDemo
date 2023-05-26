<template>
    <div ref="chart" id="chart"></div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance,defineComponent } from 'vue'
​
export default defineComponent({
    props:{
        data:{
            type:,
            required: true,
            default:e=>null
        },
    },
    emits:['callback'],
    setup (props,context) {
        const data = reactive({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        })
        // 图表初始化
        const { proxy } = getCurrentInstance() // proxy是组件实例化对象
        const initChart = async () => {
            // 渲染图表
            const chart = proxy.$echarts.init(document.getElementById('chart'))
            chart.setOption(data.options)
            chart.on('click',e=>{
                context.emit('callback',e)
            })
            window.onresize = () => {
                chart.resize()
            }
        }
        // 执行初始化数据函数
        initChart()
        watch(e=>props.params, (newValue, oldValue) => {\
            data.options.series[0].data.value = newValue
        })
        return {
            // ...toRefs(data),
            data,
            initChart,
        }
    }
})
</script>