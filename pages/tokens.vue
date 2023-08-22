<!--
* tokens   f
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="pcToken">
      <div class="text-center kenCont">
        <h1>{{ $t("f.tokh") }}</h1>
        <div class="lin-height-2">
          <p>{{ $t("f.tokp1") }}</p>
          <p>{{ $t("f.tokp2") }}</p>
          <p>{{ $t("f.tokp3") }}</p>
        </div>
      </div>
      <div class="padd-tb-ba backF3f5">
        <div class="malrCont">
          <div class="text-center lin-height-18 margin-bottom-qi">
            <h1 class="margin-bottom-xl">{{ $t("f.tokyh") }}</h1>
            <p>{{ $t("f.toky1") }}</p>
            <p>{{ $t("f.toky2") }}</p>
          </div>
          <div class="flex flex-wrap">
            <div
              v-for="(item, index) in $t('f.toList')"
              :key="index"
              class="flex kenItem"
            >
              <img src="/tokens/zhuangshi.png" class="kenPos" />
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="padd-tb-ba malrCont">
        <div class="lin-height-18 margin-bottom-qi">
          <h1 class="text-center margin-bottom-xl">{{ $t("f.toky3") }}</h1>
          <p class="widTo">{{ $t("f.toky4") }}</p>
          <p class="widTo">{{ $t("f.toky5") }}</p>
        </div>
        <!-- <div id="echart-main"></div> -->
        <img class="pcEcha" src="/tokens/back1.png" />
      </div>
    </div>
    <div class="mobToken overHidd">
      <div class="text-center padding-tb kenCont" style="height: auto">
        <h2 class="margin-bottom">{{ $t("f.tokh") }}</h2>
        <div class="lin-height-16">
          <p>{{ $t("f.tokp1") }}</p>
          <p>{{ $t("f.tokp2") }}</p>
          <p>{{ $t("f.tokp3") }}</p>
        </div>
      </div>
      <div class="padding-tb backF3f5">
        <div class="mobCont">
          <div class="text-center lin-height-18 margin-bottom">
            <h2 class="margin-bottom">{{ $t("f.tokyh") }}</h2>
            <p class="fontSize-16">{{ $t("f.toky1") }}</p>
            <p class="fontSize-16">{{ $t("f.toky2") }}</p>
          </div>
          <div class="">
            <div
              v-for="(item, index) in $t('f.toList')"
              :key="index"
              class="flex margin-bottom"
            >
              <img src="/tokens/zhuangshi.png" class="kenPos" />
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="padding-tb mobCont">
        <div class="lin-height-18 margin-bottom">
          <h1 class="text-center margin-bottom-xl">{{ $t("f.toky3") }}</h1>
          <p class="widTo">{{ $t("f.toky4") }}</p>
          <p class="widTo">{{ $t("f.toky5") }}</p>
        </div>
        <!-- <div id="echart-main2"></div> -->
        <img class="mobEcha" src="/tokens/back1.png" />
      </div>
    </div>
  </div>
</template>

<script>
// import * as echarts from "echarts";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    // init(myChart) {
    //   myChart.setOption({
    //     legend: {
    //       top: "bottom",
    //       show: false,
    //     },
    //     series: [
    //       {
    //         type: "pie",
    //         radius: "80%",
    //         center: ["50%", "50%"],
    //         roseType: "angle",
    //         hoverAnimation: false,
    //         silent: true,
    //         data: [
    //           { value: 60, name: "Pool" },
    //           { value: 10, name: "Team" },
    //           { value: 12.3, name: "Investors" },
    //           { value: 7.7, name: "Foundation" },
    //           { value: 10, name: "Community" },
    //         ],
    //         itemStyle: {
    //           normal: {
    //             label: {
    //               show: true, //数据标签显示
    //               position: "outer",
    //               //数据标签的字体配置，与其他组件相同
    //               textStyle: {
    //                 fontSize: 20, //字号
    //                 fontWeight: "normal", //粗细【normal\bold\bolder\lighter】
    //                 fontFamily: "Microsoft YaHei", //字体【 'serif'\'monospace'\'Arial'\'Courier New'\'Microsoft YaHei'】
    //                 color: "black", //颜色各异
    //               },
    //             },
    //             labelLine: {
    //               show: true, //数据标签引导线
    //               length: 50,
    //               lineStyle: {
    //                 width: 3,
    //                 type: "solid",
    //               },
    //             },
    //             color: function (params) {
    //               var colorList = [
    //                 {
    //                   c1: " #00F2F3", //管理
    //                   c2: "#00FFFF",
    //                 },
    //                 {
    //                   c1: " #00BAD3  ", //实践
    //                   c2: "#00E6FE",
    //                 },
    //                 {
    //                   c1: "#00B2E0", //操作
    //                   c2: "#00CCFC",
    //                 },
    //                 {
    //                   c1: "#0088D8", //操作
    //                   c2: "#00A4FF",
    //                 },
    //                 {
    //                   c1: "#0055D0", //操作
    //                   c2: "#0056D2",
    //                 },
    //               ];
    //               return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
    //                 {
    //                   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
    //                   offset: 0,
    //                   color: colorList[params.dataIndex].c1,
    //                 },
    //                 {
    //                   offset: 1,
    //                   color: colorList[params.dataIndex].c2,
    //                 },
    //               ]);
    //             },
    //           },
    //         },
    //       },
    //       {
    //         name: "Nightingale Chart",
    //         type: "pie",
    //         radius: "80%",
    //         center: ["50%", "50%"],
    //         label: {
    //           position: "inner",
    //           fontSize: 24,
    //           color: "white",
    //         },
    //         data: [
    //           { value: 60, name: "60%" },
    //           { value: 10, name: "10%" },
    //           { value: 12.3, name: "12.3%" },
    //           { value: 7.7, name: "7.7%" },
    //           { value: 10, name: "10%" },
    //         ],
    //         itemStyle: {
    //           normal: {
    //             color: function (params) {
    //               var colorList = [
    //                 {
    //                   c1: " #00F2F3", //管理
    //                   c2: "#00FFFF",
    //                 },
    //                 {
    //                   c1: " #00BAD3  ", //实践
    //                   c2: "#00E6FE",
    //                 },
    //                 {
    //                   c1: "#00B2E0", //操作
    //                   c2: "#00CCFC",
    //                 },
    //                 {
    //                   c1: "#0088D8", //操作
    //                   c2: "#00A4FF",
    //                 },
    //                 {
    //                   c1: "#0055D0", //操作
    //                   c2: "#0056D2",
    //                 },
    //               ];
    //               return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
    //                 {
    //                   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
    //                   offset: 0,
    //                   color: colorList[params.dataIndex].c1,
    //                 },
    //                 {
    //                   offset: 1,
    //                   color: colorList[params.dataIndex].c2,
    //                 },
    //               ]);
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   });
    // },
  },
  created() {},
  mounted() {
    // // 基于准备好的dom，初始化echarts实例
    // var myChart1 = echarts.init(document.getElementById("echart-main"));
    // this.init(myChart1);
    // // 绘制图表
    // var myChart2 = echarts.init(document.getElementById("echart-main2"));
    // this.init(myChart2);
  },
};
</script>
<style scoped>
.pcToken {
  display: block;
}
.mobToken {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcToken {
    display: none;
  }
  .mobToken {
    display: block;
  }
  .mobEcha {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
.kenCont {
  height: 440px;
  width: 100%;
  background: url("/tokens/img-token-banner@2x.png") no-repeat;
  background-size: cover;
  color: #ffffff;
}
.kenCont > h1 {
  padding: 70px 0px;
}
.kenItem {
  width: 48%;
  padding: 0px 12%;
  height: 240px;
}
.kenPos {
  width: 27px;
  height: 24px;
  margin-right: 14px;
}
#echart-main {
  height: 675px;
  width: 100%;
}
#echart-main2 {
  height: 400px;
  width: auto;
}
.widTo {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.pcEcha {
  width: 60vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
