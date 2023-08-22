<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="">
    <div class="pcgetWay">
      <div class="coloFFF bor_bottbb4 backGra">
        <div class="malrCont wayCont">
          <div class="lin-height-16">
            <div class="flex align-center margin-bottom-xs">
              <h3 style="font-size: 70px">SINSO</h3>
              <h3 style="font-size: 70px" class="margin-left-xs coloBls">
                GetWay
              </h3>
            </div>
            <div class="fontSize-24 letter_spac2" style="margin-bottom: 80px">
              SINSO-Powered Solutions
            </div>
            <div class="letter_spac4 coloBls fontSize-22">
              <div>A high-speed distributed-cache network</div>
              <div>built for DAPP response</div>
            </div>
          </div>
          <img style="height: 560px" src="/getWay/getWayBanner.png" />
        </div>
      </div>
      <div class="backGra" style="padding-top: 130px">
        <div class="malrCont flex justify-between padding-lr-xl coloFFF">
          <div class="flex">
            <img class="biaImg" src="/getWay/biao.png" />
            <div class="textWid">
              As a secondary distributed-cache network based on Filecoin, SINSO
              Getway is built for current use scenarios required by GameFi, VR,
              AR, Video Streaming, as well as high-speed CDN and DAPP response.
              In addition to ensuring decentralization, user data privacy and
              security, SINSO Getway meanwhile focuses on improving efficiency.
              The valid data upload interface provided by SINSO makes it easy
              for individuals and institutions to use Filecoin‘s storage
              resources.
            </div>
          </div>
          <div>
            <div class="flex margin-bottom">
              <img class="biaImg" src="/getWay/biao.png" />
              <div class="textWid">
                When we build DAPPs, we usually use centralized storage or build
                IPFS nodes ourselves, which wastes resources and cannot
                guarantee the security of data.
              </div>
            </div>
            <div class="flex">
              <img class="biaImg" src="/getWay/biao.png" />
              <div class="textWid">
                Using SINSO Getway, you don’t have to worry about how to
                technically realize the data storage in the Filecoin ecosystem,
                We can layer the persistent data layer and the cache layer, and
                we can encrypt the data. we provide comprehensive technical
                support, and you are able to efficiently complete your data
                storage.
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center padd-tb-ba">
          <div
            class="flex justify-between lanBor borButs"
            style="width: 180px"
            @click="hrefCli('https://getway.sinso.io/')"
          >
            <div class="borPaTe">Learn More</div>
            <div class="padding-lr-xs bor_back">
              <img style="width: 20px" src="/index/qit/imgRight.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coloBs backGra mobgetWay">
      <div class="text-center padding-tb mobCont">
        <div class="fontBlod fontSize-44 margin-tb-sm">SINSO GetWay</div>
        <img style="width: 300px" src="/getWay/getWayBanner.png" />

        <div class="fontSize-22 margin-bottom-xs" style="color: #25bdf5">
          SINSO-Powered Solutions
        </div>
        <div style="color: #25bdf5">
          A high-speed distributed-cache network built for DAPP response
        </div>
      </div>

      <div class="mobCont margin-bottom">
        <div class="flex margin-bottom fontSize-18">
          <img class="mobBiaImg" src="/getWay/biao.png" />
          <div>
            As a secondary distributed-cache network based on Filecoin, SINSO
            Getway is built for current use scenarios required by GameFi, VR,
            AR, Video Streaming, as well as high-speed CDN and DAPP response. In
            addition to ensuring decentralization, user data privacy and
            security, SINSO Getway meanwhile focuses on improving efficiency.
            The valid data upload interface provided by SINSO makes it easy for
            individuals and institutions to use Filecoin‘s storage resources.
          </div>
        </div>
        <div class="flex margin-bottom">
          <img class="mobBiaImg" src="/getWay/biao.png" />
          <div>
            When we build DAPPs, we usually use centralized storage or build
            IPFS nodes ourselves, which wastes resources and cannot guarantee
            the security of data.
          </div>
        </div>
        <div class="flex">
          <img class="mobBiaImg" src="/getWay/biao.png" />
          <div>
            Using SINSO Getway, you don’t have to worry about how to technically
            realize the data storage in the Filecoin ecosystem, We can layer the
            persistent data layer and the cache layer, and we can encrypt the
            data. we provide comprehensive technical support, and you are able
            to efficiently complete your data storage.
          </div>
        </div>
      </div>
      <div class="text-center padding-bottom-xl">
        <div class="bus" @click="hrefCli('https://getway.sinso.io/')">
          Learn More
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
  methods: {
    hrefCli(item) {
      item && window.open(item);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.pcgetWay {
  display: block;
}
.mobgetWay {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcgetWay {
    display: none;
  }
  .mobgetWay {
    display: block;
    width: 100vw;
  }
  .mobBiaImg {
    height: 20px;
    margin-right: 18px;
    flex-shrink: 0;
  }
  .mobTextImg {
    width: calc(96vw - 40px);
  }
}
.wayCont {
  padding: 100px 0px 130px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.biaImg {
  height: 28px;
  margin-right: 10px;
}
.textImg {
  width: 400px;
}
.bors {
  margin-top: 10px;
  border: 1px solid #25bdf5;
  padding: 4px;
  color: #25bdf5;
}
.bus {
  display: inline-block;
  border-radius: 50px;
  padding: 10px 50px;
  border: 1px solid #14b1eb;
  color: #14b1eb;
}
.textWid {
  width: 600px;
  font-size: 22px;
  line-height: 1.4;
}
</style>
