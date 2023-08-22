<!--
* docs c
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="pcDocs">
      <div class="padd-tb-ba backGra backDocs">
        <div class="malrCont">
          <div class="flex justify-between">
            <div class="fontBlod coloFFF" style="margin-bottom: 150px">
              <div class="flex align-center">
                <h3 style="font-size: 70px">Find The</h3>
                <h3 style="font-size: 70px" class="margin-left-xs coloBls">
                  technical
                </h3>
              </div>
              <h3 style="font-size: 70px">And Economic Papers</h3>
              <div class="flex align-center">
                <h3 style="font-size: 70px">By</h3>
                <h3 style="font-size: 70px" class="margin-left-xs coloBls">
                  SINSO
                </h3>
              </div>
            </div>
            <img style="height: 180px" src="/index/qit/dacTop.png" />
          </div>
          <div class="flex justify-center coloFFF">
            <div class="text-center" style="margin-right: 100px">
              <img src="/docs/white.png" style="height: 100px" />
              <div class="fontSize-34 margin-tb">Economics Whitepaper</div>
              <!--
              https://drive.google.com/file/d/1DUp04GY1xk8Eoh14aN2PjizQoy0gr5Y5/view
              https://drive.google.com/file/d/10zkwbkD_h8FyEspOxHfvFvmgxcSPOZ6u/view
              -->
              <a
                class="flex justify-between lanBor marlrAuto borButs"
                style="width: 180px"
                href="/SINSO_Economics_Whitepaper.pdf"
                download=""
              >
                <div class="borPaTe">View details</div>
                <div class="padding-lr-xs bor_back">
                  <img style="width: 20px" src="/index/qit/imgRight.png" />
                </div>
              </a>
            </div>
            <div class="text-center margin-right-xl">
              <img src="/docs/blog.png" style="height: 100px" />
              <div class="fontSize-34 margin-tb">Blog</div>
              <div
                class="flex justify-between lanBor marlrAuto borButs"
                style="width: 180px"
                @click="hrefCli('https://sinsonetwork.medium.com')"
              >
                <div class="borPaTe">View details</div>
                <div class="padding-lr-xs bor_back">
                  <img style="width: 20px" src="/index/qit/imgRight.png" />
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="text-right">
            <img src="/docs/jianImg.png" style="height: 80px" />
          </div> -->
        </div>
      </div>
    </div>
    <div class="backGra coloFFF mobDocs">
      <div class="mobCont">
        <div class="text-center padding-tb fontSize-30">
          Find The technical And Economic Papers By SINSO
        </div>
        <div class="text-center padding-tb">
          <img style="height: 180px" src="/index/qit/dacTop.png" />
        </div>
        <div class="padding-tb flex flex-wrap">
          <div
            v-for="(item, index) in $t('c.docList')"
            :key="index"
            class="mobDocCont"
            :class="index % 2 == 0 && 'docRig'"
          >
            <div class="flex align-center justify-center mobDocDiv">
              <img style="width: 20vw" :src="'/docs/do' + index + '.png'" />
            </div>
            <p class="margin-bottom-xs colo999 mobPd">{{ item.a }}</p>
            <a href="/SINSO-Economics-Whitepaper.pdf" download="">
              <div class="hvr-float-shadow mobUsi">
                <p class="">{{ item.b }}</p>
                <img class="usiImg2" src="/index/img-jiantou@2x.png" />
              </div>
            </a>
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
.pcDocs {
  display: block;
}
.mobDocs {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcDocs {
    display: none;
  }
  .mobDocs {
    display: block;
  }
  .mobDocCont {
    width: 48%;
    box-shadow: 0px 2px 10px 1px rgba(163, 175, 178, 0.2);
    border-radius: 10px;
    padding: 14px 10px;
    margin-bottom: 20px;
    background: #ffffff;
  }
  .mobDocDiv {
    height: 160px;
    box-shadow: 0px 1px 5px 1px rgba(163, 175, 178, 0.2);
    margin-bottom: 20px;
    border-radius: 8px;
  }
  .mobPd {
    font-size: 14px;
    font-weight: bold;
    height: 40px;
  }
  .mobUsi {
    color: #00abeb;
    width: 38vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #00abeb;
    padding-bottom: 6px;
  }
  .usiImg2 {
    height: 10px;
  }
}
.docRig {
  margin-right: 4%;
}
.backDocs {
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
}
.coloCC {
  color: #00c2cc;
}
.butten {
  display: inline-block;
  border-radius: 50px;
  padding: 10px 40px;
  border: 1px solid #ffffff;
  cursor: pointer;
}
.butten img {
  margin-right: 20px;
}
</style>
