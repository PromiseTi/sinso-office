<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="coloFFF pcNews">
      <div class="padd-tb-ba bor_bottbb4 backGra">
        <div class="malrCont">
          <div class="flex align-center justify-between">
            <div>
              <div class="flex align-center">
                <h3 style="font-size: 70px" class="coloBls">SINSO</h3>
                <h3 style="font-size: 70px" class="margin-left-xs coloFFF">
                  Donors
                </h3>
              </div>
              <h3 style="font-size: 70px" class="margin-left-xs coloFFF">
                Network
              </h3>
              <div class="flex margin-top-xl">
                <div class="blocS">SINSO-Powered Solutions</div>
                <div class="blocS">An incentive economy model</div>
              </div>
              <div class="blocS">based on deep phenotype analysis model</div>
            </div>
            <img style="height: 500px" src="/donorsNetwork/banners.png" />
          </div>
        </div>
      </div>
      <div class="padd-tb-ba coloBs backGra">
        <div class="malrCont">
          <div class="flex justify-between fontSize-20 donsImg">
            <div>
              SINSO Donors Network is an economic and incentive model based on a
              deep phenotype analysismodel of data and a middleware system for
              data trading
            </div>
            <div>
              It automates the matching of data purchasers for completing data
              transactions while providing incen-tives to storage miners and
              related contributors
            </div>
            <div>
              Its various NFT data templates fory all-industr dynamic data set
              ag-gregate data resources and enable users, research institutions,
              and others to better leverage and realze data assets
            </div>
            <div>
              SINSO Donors Network also used SINSO Getway in a more flexibleway
              of cooperation, allowing SINSO Getway to build a complete
              incentive model
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backGra coloFFF mobNews">
      <div class="padding-tb mobCont">
        <div class="flex align-center">
          <h3 style="font-size: 40px" class="coloBls">SINSO</h3>
          <h3 style="font-size: 40px" class="margin-left-xs coloFFF">Donors</h3>
        </div>
        <h3 style="font-size: 40px" class="coloFFF margin-bottom">Network</h3>
        <div class="lin-height-18">SINSO-Powered Solutions</div>
        <div class="lin-height-18">An incentive economy model</div>
        <div class="lin-height-18">based on deep phenotype analysis model</div>
        <div class="text-center padding-top">
          <img style="height: 300px" src="/donorsNetwork/banners.png" />
        </div>
      </div>
      <client-only>
        <el-card class="margin-xs">
          <p class="color">
            SINSO Donors Network is an economic and incentive model based on a
            deep phenotype analysismodel of data and a middleware system for
            data trading
          </p>
        </el-card>

        <el-card class="margin-xs">
          <p class="color">
            It automates the matching of data purchasers for completing data
            transactions while providing incen-tives to storage miners and
            related contributors
          </p>
        </el-card>

        <el-card class="margin-xs">
          <p class="color">
            its various NFT data templates fory all-industr dynamic data set
            ag-gregate data resources and enable users, research institutions,
            and others to better leverage and realze data assets
          </p>
        </el-card>

        <el-card class="margin-xs">
          <p class="color">
            SINSO Donors Network also used SINSO Getway in a more flexibleway of
            cooperation, allowing SINSO Getway to build a complete incentive
            model
          </p>
        </el-card>
      </client-only>
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

.imgTop {
  margin-top: 165px;
}

.imgDivider {
  margin: 52px 0 52px 0;
}

.imgDescribe {
  margin-bottom: 231px;
}
.donsImg > div {
  width: 300px;
}
.mobNews {
  display: none;
}
.blocS {
  font-size: 24px;
  display: inline-block;
  padding: 20px 40px;
  box-shadow: 0px 0px 6px #42beff;
  border-radius: 50px;
  margin-right: 30px;
  margin-bottom: 30px;
}
@media screen and (max-width: 900px) {
  .pcNews {
    display: none;
  }
  .mobNews {
    display: block;
  }

  .mobTopImage {
    margin-top: 20px;
  }

  .mobDivider {
    margin-top: 200px;
  }
}
</style>
