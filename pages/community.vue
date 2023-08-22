<!--
* community
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="pcComm">
      <div class="padd-tb-ba coloFFF teams">
        <h1 class="margin-bottom-qi">{{ obj.comh }}</h1>
        <div class="marlrAuto hvr-wobble-horizontal combut">{{ obj.comb }}</div>
      </div>
      <div class="padd-tb-ba widthSma marlrAuto">
        <div class="text-center margin-bottom-xl">
          <h1 class="margin-bottom-xl">{{ obj.di1 }}</h1>
          <div class="lin-height-2 fontSize-14">
            <p>{{ obj.di2 }}</p>
            <p>{{ obj.di3 }}</p>
          </div>
        </div>
        <div class="flex justify-between margin-bottom-liu">
          <div v-for="(item, index) in obj.comList" :key="index">
            <h4 class="margin-bottom coloBls">{{ item.a }}</h4>
            <div class="teaWid">
              <div
                v-for="itemm in item.b"
                :key="itemm"
                class="lin-height-2 fontSize-14"
              >
                <img src="/zhuangshi.png" class="kenDia" />
                <p>{{ itemm }}</p>
              </div>
            </div>
          </div>
        </div>
        <client-only>
          <el-button class="disBlock marlrAuto" type="primary">{{
            obj.di4
          }}</el-button></client-only
        >
      </div>
      <div class="backF3f5 padd-tb-ba">
        <div class="malrCont">
          <h1 class="text-center margin-bottom-qi">{{ obj.coma }}</h1>
          <div class="flex justify-between align-center">
            <div
              v-for="(item, index) in obj.comaList"
              :key="index"
              class="text-center comIt"
            >
              <img
                class="margin-tb-sm comaImg"
                :src="'/community/comm' + index + '.png'"
              />
              <div class="fontBlod">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="padd-tb-ba">
        <div class="malrCont">
          <h1 class="text-center margin-bottom-qi">{{ obj.comph }}</h1>
          <div class="flex justify-between align-center">
            <div class="backF3f5 munLeft">
              <img src="/community/ji.png" />
              <div class="contrs lef1">
                <img src="/community/jian0.png" />
                <p>{{ obj.comp1 }}</p>
              </div>
              <div class="contrs lef2">
                <img src="/community/jian1.png" />
                <p>{{ obj.comp2 }}</p>
              </div>
              <div class="contrs lef3">
                <img src="/community/jian2.png" />
                <p>{{ obj.comp3 }}</p>
              </div>
            </div>
            <div class="backF3f5 munRight">
              <div class="margin-bottom-sm">
                <h4 class="margin-bottom-xs">{{ obj.comp4 }}</h4>
                <p class="fontSize-14">{{ obj.comp5 }}</p>
              </div>
              <div class="margin-bottom-sm">
                <h4 class="margin-bottom-xs">{{ obj.comp6 }}</h4>
                <p class="fontSize-14">{{ obj.comp7 }}</p>
              </div>
              <div class="margin-bottom">
                <h4 class="margin-bottom-xs">{{ obj.comp8 }}</h4>
                <p class="fontSize-14">{{ obj.comp9 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="padd-tb-ba comsts">
        <div class="malrCont">
          <h1 class="margin-bottom-xl text-center">{{ obj.combh1 }}</h1>
          <p class="margin-bottom-xl text-center">{{ obj.combh2 }}</p>
          <div class="flex justify-between">
            <div class="comBot">
              <img class="coImg1" src="/community/ph0.png" />
              <h3 class="margin-tb-sm">{{ obj.comss1 }}</h3>
              <p>{{ obj.comst1 }}</p>
            </div>
            <div class="comBot">
              <img class="coImg1" src="/community/ph1.png" />
              <h3 class="margin-tb-sm">{{ obj.comss2 }}</h3>
              <p>{{ obj.comst2 }}</p>
            </div>
            <div class="comBot">
              <img class="coImg1" src="/community/ph2.png" />
              <h3 class="margin-tb-sm">{{ obj.comss3 }}</h3>
              <p>{{ obj.comst3 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobComm">
      <div class="padding-tb-xl padding-lr coloFFF teams" style="height: auto">
        <h2 class="margin-bottom">{{ obj.comh }}</h2>
        <div class="marlrAuto mobCombut">{{ obj.comb }}</div>
      </div>
      <div class="padding-tb-xl mobCont marlrAuto">
        <div class="text-center margin-bottom-xl">
          <h2 class="margin-bottom">{{ obj.di1 }}</h2>
          <div class="lin-height-2 fontSize-14">
            <p>{{ obj.di2 }}</p>
            <p>{{ obj.di3 }}</p>
          </div>
        </div>
        <div class="margin-bottom-liu mobCont">
          <div
            v-for="(item, index) in obj.comList"
            :key="index"
            class="margin-bottom-xl"
          >
            <h4 class="margin-bottom-xs coloBls">{{ item.a }}</h4>
            <div>
              <div
                v-for="itemm in item.b"
                :key="itemm"
                class="lin-height-2 fontSize-14 positRe padding-left"
              >
                <img src="/zhuangshi.png" class="kenDia" />
                <p>{{ itemm }}</p>
              </div>
            </div>
          </div>
        </div>
        <client-only>
          <el-button class="disBlock marlrAuto" type="primary">{{
            obj.di4
          }}</el-button></client-only
        >
      </div>
      <div class="backF3f5 padding-tb">
        <div class="mobCont">
          <h2 class="text-center margin-bottom">{{ obj.coma }}</h2>
          <div class="flex flex-wrap">
            <div
              v-for="(item, index) in obj.comaList"
              :key="index"
              class="text-center mobComIt"
              :class="index % 2 == 0 && 'mobComRig'"
            >
              <img
                class="margin-tb-xs"
                style="height: 70px"
                :src="'/community/comm' + index + '.png'"
              />
              <div class="fontSize-12 padding-bottom-xs fontBlod">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="padding-tb">
        <div class="mobCont">
          <h2 class="text-center margin-bottom padding-lr">{{ obj.comph }}</h2>

          <div class="backF3f5 fontSize-14 mobMunLeft">
            <img src="/community/ji.png" />
            <div class="contrs mobLef1">
              <img src="/community/jian0.png" />
              <p>{{ obj.comp1 }}</p>
            </div>
            <div class="contrs mobLef2">
              <img src="/community/jian1.png" />
              <p>{{ obj.comp2 }}</p>
            </div>
            <div class="contrs mobLef3">
              <img src="/community/jian2.png" />
              <p>{{ obj.comp3 }}</p>
            </div>
          </div>
          <div class="backF3f5 radius_10 padding-sm">
            <div class="margin-bottom-sm">
              <h4 class="margin-bottom-xs">{{ obj.comp4 }}</h4>
              <p class="fontSize-14">{{ obj.comp5 }}</p>
            </div>
            <div class="margin-bottom-sm">
              <h4 class="margin-bottom-xs">{{ obj.comp6 }}</h4>
              <p class="fontSize-14">{{ obj.comp7 }}</p>
            </div>
            <div class="">
              <h4 class="margin-bottom-xs">{{ obj.comp8 }}</h4>
              <p class="fontSize-14">{{ obj.comp9 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="padding-tb comsts">
        <div class="mobCont">
          <h2 class="margin-bottom text-center">{{ obj.combh1 }}</h2>
          <p class="margin-bottom padding-lr fontSize-14 text-center">
            {{ obj.combh2 }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="mobComBot">
              <img class="coImg1" src="/community/ph0.png" />
              <h3 class="margin-tb-xs">{{ obj.comss1 }}</h3>
              <p>{{ obj.comst1 }}</p>
            </div>
            <div class="mobComBot">
              <img class="coImg1" src="/community/ph1.png" />
              <h3 class="margin-tb-xs">{{ obj.comss2 }}</h3>
              <p>{{ obj.comst2 }}</p>
            </div>
            <div class="mobComBot">
              <img class="coImg1" src="/community/ph2.png" />
              <h3 class="margin-tb-xs">{{ obj.comss3 }}</h3>
              <p>{{ obj.comst3 }}</p>
            </div>
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
    return {
      obj: {
        comh: "To Be a SINSO Ambassador",
        comb: "SUNMIT AN APPLICATION",
        di1: "About the Ambassador Program",
        di2: `Filecoin is the world's largest zero-knowledge proof network, the most important infrastructure of Web3.0, and the most prosperous distributed storage`,
        di3: "development ecosystem. SINSO is a Layer 2 project officially recommended by Filecoin and an important ecological partner of Protocol Labs.",
        comList: [
          {
            a: "Who Are You",
            b: [
              "Have faith in and passion for Filecoin;",
              "Want to join the SINSO team and support project development;",
              "Interested in connecting with other people or projects in the Filecoin community;",
              "Be able and happy to influence the development of the SINSO network.",
            ],
          },
          {
            a: "What You Can Do",
            b: [
              "Create and manage your social media community connecting local SINSO enthusiasts;",
              "Output content by writing blogging or contributing code and tutorials;",
              "Continue to participate in the SINSO ecological construction;",
              "Host and attend meetings on behalf of SINSO;",
              "Get support for initiatives that support the SINSO mission.",
            ],
          },
        ],
        di4: "Application Entrance",
        coma: "Ambassador Mission",
        comaList: [
          "Community Building",
          "Project Promotion",
          "Contribution to Growth",
          "Mentor Others",
          "Regular Contributions",
        ],
        comph: "Promotion Path to Community Trainees",
        comp1: "Community Ambassador",
        comp2: "Junior Ambassador",
        comp3: "Ambassador Trainees",
        comp4: "Rewards",
        comp5:
          "Community Ambassadors will be rewarded with 20,000$ SINSO Token and othergreat benefits",
        comp6: "How to become a Junior Ambassador?",
        comp7: "Complete the monthly tasks of the second phase",
        comp8: "How to become an Ambassador Trainee?",
        comp9: "File application and pass the first stage task assessment.",
        combh1: "Benefits",
        combh2: `When you help advance SINSO's vision for the future, you will get corresponding benefits at each stage.`,
        comss1: "Early Access",
        comst1:
          "Priority access and first-call to events, bounties, hackathons, and more.",
        comss2: "Swag & Prizes",
        comst2:
          "Earn exclusive ambassador swag for yourself and any meetups you host.",
        comss3: "Resources",
        comst3:
          "Direct access to the SINSO team and leadership for guidance and support.",
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
.pcComm {
  display: block;
}
.mobComm {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcComm {
    display: none;
  }
  .mobComm {
    display: block;
  }
  .mobCombut {
    font-size: 14px;
    padding: 10px 16px;
    display: inline-block;
    background-color: #7fddf5;
    border-radius: 10px;
  }
  .mobComIt {
    width: 46vw;
    border-radius: 10px;
    background-color: #e8edf1;
    margin-bottom: 20px;
  }
  .mobComRig {
    margin-right: 4vw;
  }
  .mobMunLeft {
    position: relative;
    padding: 20px 0px 20px 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    min-height: 230px;
  }
  .mobMunLeft > img {
    position: absolute;
    left: 6px;
    top: 27px;
    height: 170px;
  }
  .mobLef1 {
    margin-left: 60px;
    margin-bottom: 40px;
    margin-top: 10px;
  }
  .mobLef2 {
    margin-left: 100px;
    margin-bottom: 50px;
  }
  .mobLef3 {
    margin-left: 132px;
  }
  .mobComBot {
    padding: 10px 10px 16px 10px;
    border-radius: 10px;
    width: 48%;
    background-color: #ffffff;
    margin-bottom: 20px;
  }
}
.teams {
  height: 400px;
  background: url("/community/banners.png") no-repeat;
  background-size: cover;
  text-align: center;
  color: #ffffff;
}
.combut {
  cursor: pointer;
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #7fddf5;
  border-radius: 10px;
}
.teaWid {
  width: 500px;
}
.teaWid > div {
  position: relative;
  padding-left: 30px;
}
.comIt {
  width: 230px;
  height: 200px;
  border-radius: 10px;
  background-color: #e8edf1;
}
.comaImg {
  height: 80px;
}
.munLeft {
  width: 700px;
  margin-left: 100px;
  position: relative;
  height: 300px;
  padding-top: 50px;
  border-radius: 10px;
}
.munLeft > img {
  position: absolute;
  left: -80px;
  top: 20px;
  height: 300px;
}
.munRight {
  width: 500px;
  height: 300px;
  border-radius: 10px;
  padding: 30px 40px;
}
.contrs {
  font-weight: bold;
  display: flex;
  align-items: center;
}
.contrs > img {
  width: 20px;
  margin-right: 14px;
}
.lef1 {
  margin-left: 100px;
  margin-bottom: 50px;
}
.lef2 {
  margin-left: 130px;
  margin-bottom: 50px;
}
.lef3 {
  margin-left: 180px;
}
.comsts {
  background: url("/community/botts.png") no-repeat;
  background-size: cover;
}
.comBot {
  padding: 30px 44px 0px 30px;
  border-radius: 10px;
  width: 420px;
  height: 240px;
  background-color: #ffffff;
}
.coImg1 {
  width: 40px;
}
</style>
