<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="coloBBs">
    <div class="pcNews">
      <div class="backGra padd-tb-ba">
        <div class="malrCont padding-lr-lg padding-tb coloFFF pcTopImage">
          <div class="flex justify-between">
            <div>
              <div class="lin-height-12">
                <h3 style="font-size: 70px" class="coloBls">SINSO</h3>
                <h3 style="font-size: 70px">Dapp Cube</h3>
              </div>
              <div
                class="fontSize-24 letter_spac2 margin-bottom-xs margin-top-sm coloBs"
              >
                SINSO-Powered Solutions
              </div>
              <div class="fontSize-24 letter_spac2 coloBs">
                A set of middleware for data governance service applications.
              </div>
            </div>
            <!-- <img src="/dappCube/cubeBanner.png" height="300px" /> -->
            <img
              class="margin-top margin-right"
              height="240px"
              src="/index/qit/dacLeft.png"
            />
          </div>
        </div>
        <div
          class="fontSize-22 lin-height-16 flex justify-between malrCont coloFFF pcDescribeImage"
        >
          <div>
            SINSO Donors Network also used SINSO Getway in a more flexibleway of
            cooperation , allowing SINSO Getway to build a complete incentive
            model
          </div>
          <div>
            Using the SINSO Dapp Cube, application developers can build
            industry-specific Web30 applications that interact with Filecoin
            storage networks
          </div>
        </div>
      </div>
    </div>

    <div class="backGra coloFFF mobNews">
      <div class="padding-tb-xl">
        <h3 class="margin-xs text-center coloBs fontSize-40">SINSO</h3>
        <h3 class="text-center fontSize-40">Dapp Cube</h3>

        <div class="text-center margin-xs">SINSO-Powered Solutions</div>

        <div class="text-center margin-bottom">
          A set of middleware for data governance service applications.
        </div>
        <div class="text-center">
          <img src="/dappCube/cubeBanner.png" height="200px" />
        </div>
      </div>

      <div class="margin-lr-sm padding-tb-sm text-center content">
        <p>
          SINSO Donors Network also used SINSO Getway in a more flexibleway of
          cooperation , allowing SINSO Getway to build a complete incentive
          model
        </p>
      </div>

      <div class="margin-lr-sm padding-tb-sm text-center content">
        <p>
          Using the SINSO Dapp Cube, application developers can build
          industry-specific Web30 applications that interact with Filecoin
          storage networks
        </p>
      </div>

      <!-- <div class="mobDivider">
        <img src="/dappCube/img-divider.png" alt="" width="100%" />
      </div> -->
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
.pcTopImage {
  border: 2px solid #00abeb;
  box-shadow: 0px 4px 10px #46c3fe;
}

.pcDescribeImage {
  margin-top: 120px;
  margin-bottom: 40px;
}
.pcDescribeImage > div {
  width: 600px;
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
  }

  .content {
    word-break: break-all;
  }
}
</style>
