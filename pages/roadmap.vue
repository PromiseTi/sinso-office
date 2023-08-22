<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="coloFFF pcNews">
      <div class="backGra padding-bottom-xl">
        <div style="height: 100%; padding-top: 80px" class="malrCont">
          <div class="flex justify-between margin-bottom-sm">
            <div class="fontBlod lin-height-12">
              <h3 style="font-size: 70px">Discover</h3>
              <div class="flex align-center">
                <h3 class="margin-right-xs coloBls" style="font-size: 70px">
                  SINSO's
                </h3>
                <h3 style="font-size: 70px">Roadmap</h3>
              </div>
              <h3 style="font-size: 70px">in its journey</h3>
            </div>
            <img style="height: 250px" src="/index/qit/dacRight.png" />
          </div>
          <div class="borts">
            <div class="flex justify-between fontSize-18 margin-bottom-xs">
              <div class="roadQ">
                <div class="lin-height-2 raoPC">
                  <div class="fontSize-36 fontBlod coloBls">2023 Q1</div>
                  <p>SINSO Amstar mainnet launched,</p>
                  <p>SINSO Dataland v2（Integrate chatGPT）,</p>
                  <p>Hot Data Mainnet Mining Online (2023.02.06) ,</p>
                  <p class="margin-bottom-xs">Launch xt.com exchange</p>
                </div>
              </div>
              <div class="roadQ">
                <div class="lin-height-2 raoPC">
                  <div class="fontSize-36 fontBlod coloBls">2023 Q2</div>
                  <p>SINSO Getway v2.0,</p>
                  <p>SINSO Dataland v3.0,</p>
                  <p>SINSO Mining software v3.0,</p>
                </div>
              </div>
              <div class="roadQ">
                <div class="lin-height-2 raoPC">
                  <div class="fontSize-36 fontBlod coloBls">2023 Q3</div>
                  <p>SINSO DAC v1.0</p>
                  <p>（Cross-chain construction of DAC with filecoin FVM）,</p>
                  <p>SINSO Donors Network v3.0,</p>
                  <p class="margin-bottom-xs">SINSO Dataland v4.0,</p>
                  <p>Launch next exchange</p>
                </div>
              </div>
              <div class="roadQ">
                <div class="lin-height-2 raoPC">
                  <div class="fontSize-36 fontBlod coloBls">2023 Q4</div>
                  <p>SINSO DAC v2.0,</p>
                  <p>SINSO Donors Network v4.0,</p>
                  <p>SINSO Dataland v5.0,</p>
                  <p>SINSO Mining software v4.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backGra mobNews">
      <div class="text-center mobCont">
        <div class="margin-tb-xl fontBlod fontSize-30">
          Discover SINSO's roadmap in its journey
        </div>
        <img style="height: 200px" src="/index/qit/dacRight.png" />
        <div class="roadQ">
          <div class="lin-height-2 raoPC">
            <div class="fontSize-24">2023 Q1</div>
            <p>SINSO Amstar mainnet launched,</p>
            <p>SINSO Dataland v2（Integrate chatGPT）,</p>
            <p>Hot Data Mainnet Mining Online (2023.02.06) ,</p>
            <p class="margin-bottom-xs">Launch xt.com exchange</p>
          </div>
        </div>
        <div class="roadQ">
          <div class="lin-height-2 raoPC">
            <div class="fontSize-24">2023 Q2</div>
            <p>SINSO Getway v2.0,</p>
            <p>SINSO Dataland v3.0,</p>
            <p>SINSO Mining software v3.0,</p>
          </div>
        </div>
        <div class="roadQ">
          <div class="lin-height-2 raoPC">
            <div class="fontSize-24">2023 Q3</div>
            <p>SINSO DAC v1.0</p>
            <p>（Cross-chain construction of DAC with filecoin FVM）,</p>
            <p>SINSO Donors Network v3.0,</p>
            <p class="margin-bottom-xs">SINSO Dataland v4.0,</p>
            <p>Launch next exchange</p>
          </div>
        </div>
        <div class="roadQ">
          <div class="lin-height-2 raoPC">
            <div class="fontSize-24">2023 Q4</div>
            <p>SINSO DAC v2.0,</p>
            <p>SINSO Donors Network v4.0,</p>
            <p>SINSO Dataland v5.0,</p>
            <p>SINSO Mining software v4.0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.pcNews {
  display: block;
}
.mobNews {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcNews {
    display: none;
  }
  .mobNews {
    display: block;
    height: calc(100% - 190px);
    padding-top: 40px;
    color: #ffffff;
  }
  .roadQ {
    padding-bottom: 30px;
  }
}
/* .backs {
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
} */
.borts {
  border: 2px solid #46c3fe;
  box-shadow: 0px 4px 10px #46c3fe;
  padding: 35px 50px;
}
.textImg {
  width: 1200px;
}
.raoPC p {
  font-size: 16px;
}
</style>
