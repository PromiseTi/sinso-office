<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="coloFFF">
    <div class="pcNews">
      <div class="padd-tb-ba backGra">
        <div class="flex justify-between malrCont">
          <div class="flex align-center lin-height-16 margin-bottom-xl">
            <div style="width: 700px">
              <div class="flex align-center margin-bottom-xs">
                <h3 style="font-size: 70px" class="margin-right-xs coloBls">
                  SINSO
                </h3>
                <h3 style="font-size: 70px" class="coloFFF">DAC</h3>
              </div>
              <div class="fontSize-24 lin-heihgt-12 letter_spac2">
                A contractual framework for community governance and incentives,
                enabling the creation of future data index companies based on
                NFT collections. It is a must-have tool for building
                community-governed distributed business entities that unlock
                tremendous value from data assets in a collective manner.
              </div>
            </div>
          </div>
          <img class="banImg" src="/introduction/banner.png" />
        </div>
      </div>
      <div class="padd-tb-ba backGra">
        <div class="malrCont">
          <div class="text-center">
            <div class="flex align-center justify-center margin-bottom-xs">
              <h3 style="font-size: 60px" class="margin-right-xs coloBls">
                SINSO
              </h3>
              <h3 style="font-size: 60px" class="coloFFF">DAC</h3>
            </div>
            <div class="fontSize-28 margin-bottom letter_spac2 coloFFF">
              Governed by the <a class="coloBs">SINSO</a> DAC
            </div>
            <div
              class="lin-height-18 fontSize-18 margin-bottom-qi"
              style="padding: 0px 100px"
            >
              A contractual framework for community governance and incentives,
              enabling the creation of future data index companies based on NFT
              collections. It is a must-have tool for building
              community-governed distributed business entities that unlock
              tremendous value from data assets in a collective manner.
            </div>
          </div>
          <div class="flex justify-center margin-bottom-qi">
            <div
              class="padding-tb-xs text-center pointer coloFFF hvr-wobble-horizontal lanBor"
              style="width: 300px"
              @click="hrefCli('https://t.co/LE9MRW014m')"
            >
              Learn more about SINSO DAC
            </div>
          </div>
          <div class="text-center">
            <img
              style="width: 80%"
              class="margin-top-xl"
              src="/introduction/zuhe.png"
            />
          </div>
        </div>
      </div>
      <div class="padd-tb-ba backGra">
        <div class="widthSma marlrAuto">
          <div class="line-height-16 text-center fontSize-50 margin-bottom-qi">
            Don't be a stranger, <a class="coloBs">join SINSO</a> DAO
          </div>
          <div>
            <img
              style="width: 100%"
              class="margin-tb-xl"
              src="/introduction/xian.png"
            />
            <div
              class="flex justify-between padding-right-xs padding-left-xl margin-bottom-xl"
            >
              <div class="wids">
                <div class="fontSize-20 heigh">
                  Join the SINSO Sonior Program
                </div>
                <div class="fontSize-16 lin-height-16">
                  Sonior is the name for SINSO contributors who share the vision
                  and responsibility to make SINSO stronger and more valuable
                  through voluntary dedication in and out of the SINSO
                  community. 
                </div>
              </div>
              <div class="wids">
                <div class="fontSize-20 heigh">
                  Get rewards after three months of Sonior tasks
                </div>
                <div class="fontSize-16 lin-height-16">
                  SINSO DAO access requires at least three months of completion
                  of tasks and receiving rewards as a Sonior.
                </div>
              </div>
              <div class="wids">
                <div class="fontSize-20 heigh">Get a SINSO DAO membership</div>
                <div class="fontSize-16 lin-height-16">
                  SINSO DAC is a contractual framework for community governance
                  and incentives, like a data governance DAO system.
                </div>
              </div>
            </div>

            <div class="margin-top-sm flex justify-center">
              <NuxtLink
                :to="localePath({ name: 'sonior' })"
                class="hvr-wobble-horizontal"
              >
                <div
                  class="flex justify-between lanBor borButs"
                  style="width: 220px"
                >
                  <div class="borPaTe">Apply Now</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backGra mobNews">
      <div class="text-center padding-tb-xl mobCont">
        <div class="fontBlod fontSize-40 margin-bottom-xs">SINSO DAC</div>
        <div class="margin-bottom fontSize-18">
          A contractual framework for community governance and incentives,
          enabling the creation of future data index companies based on NFT
          collections. It is a must-have tool for building community-governed
          distributed business entities that unlock tremendous value from data
          assets in a collective manner.
        </div>
        <img
          style="height: 260px"
          class="margin-tb-lg"
          src="/introduction/banner.png"
        />
        <div class="flex justify-center margin-bottom-qi">
          <div
            class="padding-tb-xs text-center pointer coloFFF hvr-wobble-horizontal lanBor"
            style="width: 300px"
            @click="hrefCli('https://t.co/LE9MRW014m')"
          >
            Learn more about SINSO DAC
          </div>
        </div>
        <div class="margin-bottom">
          <img style="width: 140px" src="/introduction/robot-1.png" />
          <img style="width: 120px" src="/introduction/robot-2.png" />
        </div>
        <img style="width: 120px" src="/introduction/robot-3.png" />

        <img style="width: 120px" src="/introduction/robot-4.png" />
        <img style="width: 120px" src="/introduction/robot-5.png" />
        <div class="margin-tb-xl fontBlod fontSize-22">
          Don't be a stranger, join SINSO DAO
        </div>
        <div class="margin-bottom">
          <div class="fontSize-20 coloBs margin-bottom-xs">
            Join the SINSO Sonior Program
          </div>
          <div class="fontSize-16 lin-height-16">
            Sonior is the name for SINSO contributors who share the vision and
            responsibility to make SINSO stronger and more valuable through
            voluntary dedication in and out of the SINSO community. 
          </div>
        </div>
        <div class="margin-bottom">
          <div class="fontSize-20 coloBs margin-bottom-xs">
            Get rewards after three months of Sonior tasks
          </div>
          <div class="fontSize-16 lin-height-16">
            SINSO DAO access requires at least three months of completion of
            tasks and receiving rewards as a Sonior.
          </div>
        </div>
        <div class="margin-bottom">
          <div class="fontSize-20 coloBs margin-bottom-xs">
            Get a SINSO DAO membership
          </div>
          <div class="fontSize-16 lin-height-16">
            SINSO DAC is a contractual framework for community governance and
            incentives, like a data governance DAO system.
          </div>
        </div>
        <div class="margin-top-sm flex justify-center">
          <NuxtLink :to="localePath({ name: 'sonior' })">
            <div
              class="flex justify-between lanBor borButs"
              style="width: 220px"
            >
              <div class="borPaTe">Apply Now</div>
            </div>
          </NuxtLink>
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
  }
}
.banImg {
  height: 480px;
}
.wids {
  width: 300px;
}
.heigh {
  height: 70px;
  font-size: 400;
  color: #4facfe;
}
</style>
