<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="pcDac">
      <div class="padd-tb-ba backGra">
        <div
          class="flex align-center justify-between malrCont padding-right-xl coloBBs"
        >
          <div class="">
            <div class="flex align-center letter_spac2">
              <h3 style="font-size: 100px" class="margin-right-xs coloBls">
                SINSO
              </h3>
              <h3 style="font-size: 100px">DAC</h3>
            </div>
            <div class="fontSize-22 coloFFF letter_spac2 margin-bottom-qi">
              SINSO-Powered Solutions
            </div>
            <div class="fontSize-22 coloFFF letter_spac2 coloBls">
              <div>A contractual framework for community</div>
              <div>governance and incentives</div>
            </div>
          </div>
          <img style="height: 460px" src="/dac/dacBanner.png" />
        </div>
      </div>
      <div class="backGra">
        <div
          class="padd-tb-ba marlrAuto fontSize-20 coloFFF lin-height-14 widthSma marlrAuto"
        >
          <div class="flex margin-bottom">
            <img class="biaImg" src="/getWay/biao.png" />
            <div class="textWid">
              SINSO DAC is the technical framework for SINSO community autonomy.
            </div>
          </div>
          <div class="flex margin-bottom">
            <img class="biaImg" src="/getWay/biao.png" />
            <div class="textWid">
              SINSO DAC aims to establish a transparent and fair value system
              that everyone can participate in and contribute to.
            </div>
          </div>
          <div class="flex margin-bottom">
            <img class="biaImg" src="/getWay/biao.png" />
            <div class="textWid">
              It meets the following characteristics of DAC: distributed and
              decentralized, autonomy and automation, organized and orderly,
              intelligent and tokenized. SINSO DAC will be built on a smart
              contract-driven FVM side chain.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backGra coloFFF mobDac">
      <div class="text-center padding-tb mobCont">
        <div class="padding-tb">
          <h3 class="fontSize-30 margin-bottom-xs coloBs">SINSO DAC</h3>
          <div class="fontSize-20 margin-bottom-xs">
            SINSO-Powered Solutions
          </div>
          <div>A contractual framework for community</div>
          <div>governance and incentives</div>
        </div>
        <img style="width: 50vw" src="/dac/dacBanner.png" />
      </div>
      <div class="lin-height-2 padding-tb mobCont">
        <p class="margin-bottom-sm">
          SINSO DAC is the technical framework for SINSO community autonomy.
        </p>
        <p class="margin-bottom-sm">
          SINSO DAC aims to establish a transparent and fair value system that
          everyone can participate in and contribute to.
        </p>

        <p>
          It meets the following characteristics of DAC: distributed and
          decentralized, autonomy and automation, organized and orderly,
          intelligent and tokenized. SINSO DAC will be built on a smart
          contract-driven FVM side chain.
        </p>
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
    return {
      obj: {
        a: "SINSO DAC",
        b: "A contractual framework for community governance and incentives, enabling the creation of future data index companies based on NFT collections. It is a must-have tool for building community-governed distributed business entities that unlock tremendous value from data assets in a collective manner.",
      },
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.pcDac {
  display: block;
}
.mobDac {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcDac {
    display: none;
  }
  .mobDac {
    display: block;
  }
}
.bors {
  border-bottom: #19dcfe 2px dashed;
}
.textDac {
  width: 600px;
  height: 197px;
  background: url("/dac/dacc.png") no-repeat;
  background-size: cover;
  padding: 10px 0px 0px 20px;
}
.biaImg {
  height: 28px;
  margin-right: 10px;
  margin-top: 6px;
}
.textWid {
  width: 1000px;
  letter-spacing: 2px;
  line-height: 1.6;
}
</style>
