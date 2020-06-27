<template>
  <div :class="className" :style="{height:height,width:width}" />
  
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "@/utils/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: [
            "2020-06-12",
            "2020-06-13",
            "2020-06-14",
            "2020-06-15",
            "2020-06-16",
            "2020-06-17",
            "2020-06-18"
          ],
          boundaryGap: true,
          axisTick: {
            show: true
          }
        },
        grid: {
          left: 0,
          right: 30,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            textStyle:{
              color: '#257AF6'
            }
          },
          backgroundColor:'transparent',
          padding: [30, 5],
          formatter:(params) => {
            let str =`
              <div style="width:150px;height:90px;padding:0;">
              <div style="background:#257AF6;color:#fff;text-align:center;width:100%;height:36px;line-height:36px">${params[0].axisValue}</div>
              <div style="background:#fff;color:#333;text-align:center;width:100%;height:54px;line-height:54px">${params[0].seriesName}${params[0].data}</div>

            </div>
            `

            return str
          }
        },
        yAxis: {
          axisTick: {
            show: true
          },
          boundaryGap: false
        },
        series: [
          {
            name: "新增订单",
            color:'#000',
            smooth: false,
            type: "line",
            itemStyle: {
              normal: {
                color: "#0BBDD6",
                lineStyle: {
                  color: "#3888fa",
                  width: 2
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      // 1代表上面
                      offset: 0,
                      color: "#0BBDD6"
                    },
                    {
                      offset: 1,
                      color: "#fff"
                    }
                  ])
                }
              }
            },
            data: actualData
            // animationDuration: 2800,
            // animationEasing: "quadraticOut"
          }
        ]
      });
    }
  }
};
</script>
