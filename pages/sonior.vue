<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="coloFFF pcSonior">
      <div class="backGra sonCont">
        <div class="flex justify-between malrCont">
          <div>
            <div class="margin-bottom">
              <h3
                style="font-size: 70px"
                class="margin-right-xs coloBls lin-height-12"
              >
                Sonior &
              </h3>
              <h3 class="lin-height-12" style="font-size: 70px">Ambassador</h3>
            </div>
            <div class="lin-height-2 fontSize-24 marlrAuto">
              {{ obj.amb1 }}
              {{ obj.amb2 }}
              {{ obj.amb3 }}
              {{ obj.amb4 }}
              {{ obj.amb5 }}
            </div>
          </div>
          <img
            class="margin-left-xl"
            style="height: 550px"
            src="/sonior/banners.png"
          />
        </div>
      </div>
      <div class="backGra">
        <div class="malrCont">
          <div class="flex justify-center" style="margin-bottom: 40px">
            <h3 style="font-size: 50px" class="margin-right-xs coloBls">
              What is
            </h3>
            <h3 style="font-size: 50px">Sonior?</h3>
          </div>
          <div class="fontSize-24 text-center lin-height-18 margin-bottom-qi">
            Sonior is the name for SINSO contributors who share the vision and
            responsibility to make SINSO stronger and more valuable through
            voluntary dedication in and out of the SINSO community. With great
            faith in Filecoin and the ecosystem, they recognize the idea and
            potential of SINSO and are willing tobring added value and expand
            the popularity of the SINSO project.
          </div>
          <div class="sonsCont">
            <div class="marlrAuto widthSma coloBs margin-bottom-bai">
              <div class="flex flex-wrap bors">
                <div
                  class="kusWid"
                  v-for="(item, index) in obj.list"
                  :key="index"
                >
                  <h2 class="margin-bottom-sm fontSize-30">{{ item.a }}</h2>
                  <div class="lin-height-18 fontSize-18">
                    <div
                      v-for="itemm in item.b"
                      :key="itemm.cont"
                      class="coloFFF"
                    >
                      {{ itemm.cont }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center margin-tb-xl">
              <NuxtLink
                :to="
                  localePath({
                    name: 'member',
                  })
                "
                class="buttons"
                >Apply Now</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>

      <div class="padd-tb-ba text-center backGra">
        <div class="flex justify-center" style="margin-bottom: 50px">
          <h3 style="font-size: 60px" class="margin-right-xs coloBls">
            To be an
          </h3>
          <h3 style="font-size: 60px">Ambassador</h3>
        </div>
        <div class="malrCont ambList">
          <div
            class="onePiece"
            v-for="(item, index) in obj.ambSteps"
            :key="index"
          >
            <div class="coloBs hhs">{{ item.title }}</div>
            <div class="positRe">
              <img src="/getWay/biao.png" class="jiaoImg" />

              <div
                v-for="(items, index) in item.list"
                :key="index"
                class="line-height-16 step"
              >
                <p>{{ items.value }}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between align-center fontSize-20 coloBs malrCont"
        >
          <div
            v-for="(item, index) in obj.comaList"
            :key="index"
            class="text-center comIt"
          >
            <img
              class="margin-tb-sm comaImg"
              :src="'/sonior/icon-' + index + '.png'"
            />
            <div class="fontBlod">{{ item }}</div>
          </div>
        </div>
      </div>

      <div class="padd-tb-ba backGra">
        <div class="malrCont">
          <h3 class="fontSize-40 coloBs text-center margin-bottom-xs">
            Benefilts
          </h3>
          <p
            class="text-center letter_spac1 fontSize-20"
            style="margin-bottom: 120px"
          >
            {{ obj.combh2 }}
          </p>
          <div class="flex justify-between">
            <div class="comBot">
              <div class="text-center">
                <img class="coImg1" src="/sonior/ea0.png" />
                <h3 class="margin-tb-sm fontSize-24 coloBs">
                  {{ obj.comss1 }}
                </h3>
              </div>
              <p class="text-center">{{ obj.comst1 }}</p>
            </div>
            <div class="comBot">
              <div class="text-center">
                <img class="coImg1" src="/sonior/ea1.png" />
                <h3 class="margin-tb-sm fontSize-24 coloBs">
                  {{ obj.comss2 }}
                </h3>
              </div>
              <p class="margin-bottom-xs">{{ obj.comst2 }}</p>
              <p class="margin-bottom-xs">{{ obj.comst4 }}</p>
              <p class="margin-bottom-xs">{{ obj.comst5 }}</p>
            </div>
            <div class="comBot">
              <div class="text-center">
                <img class="coImg1" src="/sonior/ea2.png" />
                <h3 class="margin-tb-sm fontSize-24 coloBs">
                  {{ obj.comss3 }}
                </h3>
              </div>
              <p class="text-center">{{ obj.comst3 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobSonior coloFFF backGra">
      <div class="mobComm">
        <div class="text-center padding-top">
          <img style="width: 300px" src="/sonior/banners.png" />
        </div>
        <div class="text-center fontSize-20 lin-height-16 mobBack">
          {{ obj.amb1 }}{{ obj.amb2 }}{{ obj.amb3 }}{{ obj.amb4 }}{{ obj.amb5 }}
        </div>

        <div class="padding-tb mobCont text-center">
          <h1 class="margin-bottom">{{ obj.hs1 }}</h1>
          <div class="lin-height-2 fontSize-14">
            <p class="margin-bottom">
              {{ obj.son1 }} {{ obj.son2 }}{{ obj.son3 }}
            </p>
          </div>
          <NuxtLink
            :to="
              localePath({
                name: 'member',
              })
            "
            class="marlrAuto margin-tb-xl widbutt"
            >Apply Now</NuxtLink
          >
        </div>
        <div class="sonsCont" style="padding-bottom: 40px">
          <div class="marlrAuto mobCont">
            <div
              v-for="(item, index) in obj.list"
              :key="index"
              class="mobSonItem"
            >
              <h3 class="margin-bottom-sm coloBls">{{ item.a }}</h3>
              <div
                v-for="(itemm, indexx) in item.b"
                :key="indexx"
                class="lin-height-2 fontSize-14"
                :class="itemm.is && 'disps'"
              >
                <a>{{ itemm.cont }}</a>
              </div>
            </div>
            <NuxtLink
              :to="
                localePath({
                  name: 'member',
                })
              "
              class="marlrAuto margin-tb-xl widbutt"
              >Apply Now</NuxtLink
            >
          </div>
        </div>

        <div class="padding-tb-xl mobCont marlrAuto">
          <div class="text-center margin-bottom-xl">
            <h2 class="margin-bottom fontSize-28">{{ obj.di1 }}</h2>
          </div>
          <div class="margin-bottom-liu mobCont">
            <div
              v-for="(item, index) in obj.comList"
              :key="index"
              class="margin-bottom-xl"
            >
              <div class="margin-bottom-xs fontSize-20 coloBls">
                {{ item.a }}
              </div>
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
        </div>
        <div class="padding-tb">
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
                  :src="'/sonior/icon-' + index + '.png'"
                />
                <div class="fontSize-12 padding-bottom-xs fontBlod">
                  {{ item }}
                </div>
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
                <img class="coImg1" src="/sonior/ea0.png" />
                <h3 class="margin-tb-xs">{{ obj.comss1 }}</h3>
                <p>{{ obj.comst1 }}</p>
              </div>
              <div class="mobComBot">
                <img class="coImg1" src="/sonior/ea1.png" />
                <h3 class="margin-tb-xs">{{ obj.comss2 }}</h3>
                <p>{{ obj.comst2 }}</p>
                <p>{{ obj.comst4 }}</p>
                <p>{{ obj.comst5 }}</p>
              </div>
              <div class="mobComBot">
                <img class="coImg1" src="/sonior/ea2.png" />
                <h3 class="margin-tb-xs">{{ obj.comss3 }}</h3>
                <p>{{ obj.comst3 }}</p>
              </div>
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
        amb1: "When Web3.0 ushered in the booming DAPP market, the significance of on-chain storage brought new challenges and opportunities. ",
        amb2: "SINSO addresses on-chain storage through high-speed Decentralized Cache and Data-Governance based on FVM,  ",
        amb3: "providing various toolkits and components for DAPP developers to migrate data to Web3.0. ",
        amb4: "In our pursuit of the vision to Bring Humankind to the New Era of Metaverse, ",
        amb5: "your joining may be part of the driving force for the development SINSO Ecosystem. ",
        ambH1: "To be an Ambassador ",
        ambSteps: [
          {
            title: "How to become an ambassador?",
            list: [
              { imgStatus: true, value: "Step 1: Register as a Sonior;" },
              {
                imgStatus: true,
                value:
                  "Step 2: Give play to your talents and meet Ambassadorship",
              },
              { imgStatus: false, value: "  admission requirements;" },
              {
                imgStatus: true,
                value: "Step 3: Pass the mission assessment;",
              },
              {
                imgStatus: true,
                value:
                  "Ambassador gets more advantages in the SINSO ecosystem over",
              },
              {
                imgStatus: false,
                value: "bonuses, priorities, resources, etc.",
              },
            ],
          },
          {
            title: "What You Can Do?",
            list: [
              {
                imgStatus: true,
                value:
                  "Continued promotion on social media to help SINSO improve its ",
              },
              { imgStatus: false, value: "influence;" },
              {
                imgStatus: true,
                value:
                  "Output content by blogging or contributing to product tutorials;",
              },
              {
                imgStatus: true,
                value:
                  "Continue to participate in SINSO's ecosystem development;",
              },
              {
                imgStatus: true,
                value:
                  "Host and attend meetings and events on behalf of SINSO ",
              },
              { imgStatus: false, value: "as ambassador;" },
              {
                imgStatus: true,
                value:
                  "Get support for initiatives that support the SINSO mission.",
              },
            ],
          },
        ],
        hs1: "What is Sonior?",
        son1: "Sonior is the name for SINSO contributors who share the vision and responsibility to make SINSO stronger and more valuable through voluntary dedication in and ",
        son2: "out of the SINSO community. With great faith in Filecoin and the ecosystem, they recognize the idea and potential of SINSO and are willing to",
        son3: "bring added value and expand the popularity of the SINSO project.",
        list: [
          {
            a: "The Soniors We are Looking for...",
            b: [
              {
                cont: "Those with expertise in marketing, translation, content creation,",
                is: true,
              },
              { cont: "design, community management, etc.,", is: true },
              { cont: "Or aspire to be a Web3.0 pioneer,", is: false },
              { cont: "Or who is a wise sage,", is: false },
              { cont: "Or a lone ranger with a unique belief,", is: false },
              {
                cont: "Or who with a mission to impart history and culture.",
                is: false,
              },
            ],
          },
          {
            a: "How to Become a Sonior?",
            b: [
              {
                cont: "To join SINSO plus share the duties and well-being of a Sonior,",
                is: true,
              },
              {
                cont: "you are expected to meet the above requirements and need to submit an application. ",
                is: true,
              },
              {
                cont: "SINSO will respond to your request within 7 days through email - please be patient and note your inbox messages.",
                is: true,
              },
            ],
          },
          {
            a: "What Sonior Will Do?",
            b: [
              {
                cont: "Contribute your expertise and skill sets in Soniors tasks on ",
                is: true,
              },
              {
                cont: "social media promotion, content creation, and spread the word",
                is: true,
              },
              {
                cont: "for SINSO, thus expanding the awareness and influence of SINSO. ",
                is: true,
              },
              {
                cont: "As to the detailed task list, we will post it on our Sonior Channel on Discord.",
                is: false,
              },
            ],
          },
          {
            a: "As a Sonior, You Can Get...",
            b: [
              {
                cont: "You can start your adventure with your unique Sonior number, ",
                is: false,
              },
              {
                cont: "which will record your growth with SINSO as an honorary title and ",
                is: true,
              },
              { cont: "used to receive exclusive bonuses.", is: true },
              {
                cont: "You can get monthly token rewards based on task completion.",
                is: false,
              },
              {
                cont: "When you meet one or more requirements regarding social media ",
                is: true,
              },
              {
                cont: "influence, community operation, strong calling in the local area, and",
                is: true,
              },
              {
                cont: "content creation, you'll have the chance to advance to SINSO",
                is: true,
              },
              { cont: "Ambassadorship and earn higher rewards.", is: true },
            ],
          },
        ],
        comh: "To Be a SINSO Ambassador",
        comb: "SUNMIT AN APPLICATION",
        di1: "To be an Ambassador ",
        comList: [
          {
            a: "How to become an ambassador?",
            b: [
              "Step 1: Register as a Sonior;",
              "Step 2: Give play to your talents and meet Ambassadorship admission requirements;",
              "Step 3: Pass the mission assessment;",
              "Ambassador gets more advantages in the SINSO ecosystem over bonuses, priorities, resources, etc.",
            ],
          },
          {
            a: "What You Can Do",
            b: [
              "Continued promotion on social media to help SINSO improve its influence;",
              "Output content by blogging or contributing to product tutorials;",
              "Continue to participate in SINSO's ecosystem development;",
              "Host and attend meetings and events on behalf of SINSO as ambassador;",
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
        combh2: `As you help advance SINSO's vision, you will get corresponding benefits at each stage.`,
        comss1: "Early Access",
        comst1:
          "Priority access and first-call to events, bounties, hackathons, and more.",
        comss2: "Swag & Prizes",
        comst2:
          "- Earn exclusive ambassador title in SINSO communities and MOH NFT.",
        comst4:
          "- Exclusive monthly compensation, bonus for those with the highest score.",
        comst5:
          "- Get exclusive event funds and gifts for yourself and any events you host.",
        comss3: "Resources",
        comst3: "Direct access to the SINSO team and leadership.",
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
#app .lin-heights {
  line-height: 1.4;
}
.pl-40 {
  padding-left: 40px;
}
.ambList {
  display: flex;
  justify-content: center;
  margin-bottom: 110px;
}
.onePiece {
  display: flex;
  width: 580px;
  flex-direction: column;
}
.hhs {
  font-size: 30px;
  text-align: left;
  margin-bottom: 30px;
}
.step {
  display: flex;
  align-items: center;
  line-height: 2;
  font-size: 18px;
}
.step > img {
  width: 20px;
  height: 18px;
  margin-right: 20px;
}
.jiaoImg {
  position: absolute;
  width: 30px;
  top: -65px;
  left: -50px;
}
.sonCont {
  padding-bottom: 220px;
  padding-top: 120px;
}
.pcSonior {
  display: block;
}
.mobSonior {
  display: none;
}
@media screen and (max-width: 900px) {
  .disps {
    display: inline;
  }
  .pcSonior {
    display: none;
  }
  .mobSonior {
    display: block;
  }
  .mobSonItem {
    border: 1px solid #307bb3;
    border-radius: 10px;

    margin-bottom: 30px;
    padding: 10px;
  }
  .mobBack {
    padding: 40px 10px;
  }
}
.sonItem {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 1px rgba(163, 175, 178, 0.2);
  width: 48%;
  margin-bottom: 50px;
  padding: 40px 30px;
}
.sonMar {
  margin-right: 4%;
}
.sonsCont {
  /* background: linear-gradient(0deg, #d4eaf3 0%, rgba(255, 255, 255, 0) 100%); */
  padding-bottom: 70px;
}

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
    border-radius: 4px;
    width: 48%;
    border: 1px solid #4facfe;
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
}
.comaImg {
  height: 70px;
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
  /* background: url("/community/botts.png") no-repeat;
  background-size: cover; */
}
.comBot {
  padding: 30px 44px 0px 30px;
  border-radius: 10px;
  width: 360px;
  height: 420px;
  line-height: 1.6;
  border: 1px solid #307bb3;
  color: #ffffff;
}
.coImg1 {
  height: 60px;
}
.buttons {
  display: inline-block;
  border-radius: 6px;
  padding: 10px 68px;
  border: 1px solid #4facfe;
  color: #ffffff;
}
.kusWid {
  width: 50%;
  padding: 40px 30px;
}
.bors {
  border: 2px solid #4facfe;
}
/* .kua0 {
  border: 1px solid #4facfe;
}
.kua1 {
  border-right: 1px solid #4facfe;
  border-top: 1px solid #4facfe;
  border-bottom: 1px solid #4facfe;
}
.kua2 {
  border-right: 1px solid #4facfe;
  border-left: 1px solid #4facfe;
  border-bottom: 1px solid #4facfe;
}
.kua3 {
  border-right: 1px solid #4facfe;
  border-bottom: 1px solid #4facfe;
} */
</style>
