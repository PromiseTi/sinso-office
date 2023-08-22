<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="pcTeam">
      <div class="padd-tb-ba backGra teams">
        <div class="flex justify-between align-center malrCont">
          <div class="lin-height-16 leftWid">
            <div class="flex align-center" style="margin-bottom: 40px">
              <h3 style="font-size: 70px">About</h3>
              <h3 style="font-size: 70px" class="margin-left-xs coloBls">Us</h3>
            </div>
            <div class="fontSize-20 linns">
              <div class="margin-bottom">
                SINSO Team is working on the construction of a Web3.0
                infrastructure to simplify for DAPPs the use of decentralized
                storage and the adoption of Data DAO governance.
              </div>
              <div class="margin-bottom">
                In addition to seamlessly migrating business data to the Web3.0
                ecosystem, SINSO also provides a distributed cache network that
                can quickly store valid data into distributed storage networks
                such as Filecoin, Arweave, and Crust.
              </div>
              <div class="margin-bottom">
                Facing individual users, SINSO provides a personal data resource
                manager; as for the enterprise level, SINSO provides a series of
                data-oriented application service protocol layer tools.
              </div>
              <div class="margin-bottom-xl">
                Next, SINSO will provide efficient and stable distributed
                storage infrastructure for SocialFi, AIGC, and various
                blockchain honor assets. And build a series of application
                extension components for this purpose.
              </div>
              <div
                class="flex justify-between lanBor borButs"
                style="width: 160px"
              >
                <div class="borPaTe">Learn More</div>
                <div class="padding-lr-xs bor_back">
                  <img style="width: 20px" src="/index/xiaImg.png" />
                </div>
              </div>
            </div>
          </div>
          <img src="/team/freams.png" style="width: 480px" />
        </div>
      </div>
      <div class="padd-tb-ba backGra">
        <div class="malrCont margin-bottom-qi">
          <div class="flex align-center">
            <div
              v-for="(item, index) in obj.tt1List"
              :key="index"
              class="pcItem"
            >
              <div class="teamBor">
                <img :src="item.f" />
                <div class="buAbs">
                  <div v-for="itemm in item.itList" :key="itemm">
                    {{ itemm }}
                  </div>
                </div>
              </div>
              <div class="flex justify-center align-center fontSize-18">
                <div class="coloFFF">{{ item.hh1 }}</div>
                <div class="margin-left-xs coloBs">( {{ item.hh2 }} )</div>
              </div>
            </div>
          </div>
          <div class="flex justify-between align-center">
            <div
              v-for="(item, index) in obj.tt2List"
              :key="index"
              class="pcItem"
            >
              <div class="teamBor">
                <img :src="item.f" />
                <div class="buAbs">
                  <div v-for="itemm in item.itList" :key="itemm">
                    {{ itemm }}
                  </div>
                </div>
              </div>
              <div class="flex justify-center align-center fontSize-18">
                <div class="coloFFF">{{ item.hh1 }}</div>
                <div
                  :class="item.hh2Index == 14 && 'fontSize-14'"
                  class="margin-left-xs coloBs"
                >
                  ( {{ item.hh2 }} )
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between align-center">
            <div
              v-for="(item, index) in obj.tt3List"
              :key="index"
              class="pcItem"
            >
              <div class="teamBor">
                <img :src="item.f" />
                <div class="buAbs">
                  <div v-for="itemm in item.itList" :key="itemm">
                    {{ itemm }}
                  </div>
                </div>
              </div>
              <div class="flex justify-center align-center fontSize-18">
                <div class="coloFFF">{{ item.hh1 }}</div>
                <div class="margin-left-xs coloBs">( {{ item.hh2 }} )</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backGra mobTeam">
      <div class="padding-tb colofbc mobTeams" style="height: auto">
        <div class="mobCont">
          <h3 class="margin-bottom fontSize-30">{{ obj.a }}</h3>
          <div class="lin-height-16 fontSize-18">
            <p>{{ obj.bCont }}</p>
          </div>
          <img src="/team/freams.png" class="margin-tb" style="width: 100%" />
        </div>
      </div>
      <div class="coloBls padding-tb">
        <div class="mobCont teaItem">
          <client-only>
            <swiper class="swiper" :options="swiperOption1">
              <swiper-slide v-for="(item, index) in obj.team3List" :key="index">
                <div class="mobTeaBlock">
                  <img class="teamPh" :src="item.f" />
                  <h3 class="margin-tb-xs">{{ item.hh1 }}</h3>
                  <p>{{ item.hh2 }}</p>
                </div>
                <div class="mobWid">
                  <div
                    v-for="itemm in item.itList"
                    :key="itemm"
                    class="lin-height-18"
                  >
                    <img src="/zhuangshi.png" class="kenPos" />
                    <p>{{ itemm }}</p>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </client-only>
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
      //轮播
      swiperOption1: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      obj: {
        a: "About Us",
        b1: "SINSO Team is working on the construction of a Web3.0 infrastructure to simplify for DAPPs the use of decentralized storage and the adoption of Data DAO governance.",
        b2: "In addition to seamlessly migrating business data to the Web3.0 ecosystem,",
        b3: " Facing individual users, SINSO also provides a distributed cache network that can quickly store valid data into distributed storage networks such as Filecoin, Arweave, and Crust.",
        b4: "SINSO provides a personal data resource manager; as for the enterprise level, SINSO provides a series of data-oriented application service protocol layer tools.",
        b5: "Next, SINSO will provide efficient and stable distributed storage infrastructure for SocialFi, AIGC, and various blockchain honor assets. And build a series of application extension components for this purpose.",
        bCont:
          "SINSO Team is working on the construction of a Web3.0 infrastructure to simplify for DAPPs the use of decentralized storage and the adoption of Data DAO governance. In addition to seamlessly migrating business data to the Web3.0 ecosystem, SINSO also provides a distributed cache network that can quickly store valid data into distributed storage networks such as Filecoin, Arweave, and Crust. Facing individual users, SINSO provides a personal data resource manager; as for the enterprise level, SINSO provides a series of data-oriented application service protocol layer tools.Next, SINSO will provide efficient and stable distributed storage infrastructure for SocialFi, AIGC, and various blockchain honor assets. And build a series of application extension components for this purpose.",
        tt1List: [
          {
            hh1: "Michael Karin",
            hh2: "CEO",
            itList: [
              "Fellow of the National Academy of Sciences;",
              "American National Research Expert Immunology",
              "Fellow of the American Association for Cancer Research;",
              "Fellow of the European Molecular Biology Society (EMBO).",
            ],
            f: require("../static/team/team1.png"),
          },
          {
            hh1: "Franklin Jiang",
            hh2: "CTO",
            itList: [
              "15 years+ of medical  IT experience;",
              "Founder of China's earliest medical research and development team of Ethereum",
              "IPFS distributed storage application expert",
              "Initiator of the Global Web3 Medical Foundation.",
            ],
            f: require("../static/team/team3.png"),
          },
          {
            hh1: "Najeeb Zaidi",
            hh2: "CFO&CRO",
            itList: [
              "25 years+ of diversified international banking & investment management experience;",
              "Fellow of the Association for the Advancement of Artificial Intelligence(AAAl);",
              "Fellow of the CFA Institute of Risk Professionals (USA).",
            ],
            f: require("../static/team/team2.png"),
          },
        ],
        tt2List: [
          {
            hh1: "Azmat Muhtar",
            hh2: "CCO",
            itList: [
              "MBA in Digital Marketing & Management;",
              "5+years experience in Branding, Public Relations & Communication;",
              "Focuses on Blockchain & Web3.0 Development;",
            ],
            f: require("../static/team/team6.png"),
          },
          {
            hh1: "Brian Lau",
            hh2: "CBO",
            itList: [
              "5 years+ of experience in PR, Social Media  and corporate operation",
              "An industry expert in brand strategic , overseas cooperation  with considerable international corporate resources.",
              "Responsible for strategic planning,  BD and PR work for the SINSO project as well as the establishment and implementation of the SINSO ecosystem.",
            ],
            f: require("../static/team/team11.png"),
          },
          {
            hh1: "Una",
            hh2: "VP PR & Communications",
            itList: [
              "a seasoned Operations Director, excels in Cryptocurrency PR. Her strategic branding and innovative marketing prowess have proven instrumental in enhancing brand visibility in the competitive crypto market",
            ],
            f: require("../static/team/team14.png"),
            hh2Index: 14,
          },
          // {
          //   hh1: "Elias Hohl",
          //   hh2: "Advisor",
          //   itList: [
          //     "Physicist; Cybersecurity Expert & Programmer;",
          //     "International Physics Olympiad Gold Medal Winner;",
          //     "Specialised in Web Cybersecurity with 5+years experience;",
          //   ],
          //   f: require("../static/team/team7.png"),
          // },
        ],
        tt3List: [
          {
            hh1: "Marcus Lee",
            hh2: "CSO",
            itList: [
              "20+ years of experience in the global financial firms (JP Morgan, W. I. Carr Futures, Morgan Stanley, etc), and advanced algorithm trading experiences in derivatives market.",
              "Bachelor's degree at UNL in the USA.",
              "Now focused on blockchain industry and DeFi market.",
            ],
            f: require("../static/team/team12.png"),
          },
          {
            hh1: "Don Ko",
            hh2: "CMO",
            itList: [
              "Deloitte FAS(Financial Advisory Service) ",
              "IPFS KOREA CEO, SINSO KOREA",
            ],
            f: require("../static/team/team13.png"),
          },
        ],
        team3List: [],
      },
    };
  },
  computed: {},
  methods: {},
  created() {
    // this.obj.team3List = [...this.obj.teamList, ...this.obj.team2List];
    this.obj.team3List = [
      ...this.obj.tt1List,
      ...this.obj.tt2List,
      ...this.obj.tt3List,
    ];
  },
  mounted() {},
};
</script>
<style scoped>
.pcTeam {
  display: block;
}
.mobTeam {
  display: none;
}
.borBots {
  display: inline-block;
  line-height: 2;
}
::v-deep .swiper-button-next,
.swiper-button-prev {
  width: auto;
}
::v-deep .swiper-button-prev::after {
  content: "";
  background: url("/index/img-left.png") no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
}
::v-deep .swiper-button-next::after {
  content: "";
  background: url("/index/img-right.png") no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 900px) {
  .pcTeam {
    display: none;
  }
  .mobTeam {
    display: block;
  }
  .mobTeaBlock {
    margin: 30px auto;
    padding-top: 10px;
    width: 280px;
    height: 200px;
    box-shadow: 0px 2px 10px 1px rgba(163, 175, 178, 0.2);
    border-radius: 10px;
    text-align: center;
  }
  .mobWid {
    padding: 30px 10px 30px 30px;
    font-size: 14px;
  }
  .mobWid > div {
    position: relative;
    padding-left: 30px;
  }
  .mobTeams {
    height: 500px;
    text-align: center;
    color: #ffffff;
  }
}
.teams {
  color: #ffffff;
}
.teaItem {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 1px rgba(163, 175, 178, 0.2);
}
.teamPh {
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 2px 10px 1px rgba(163, 175, 178, 0.2);
}
.pcTe {
  display: flex;
  align-items: center;
}

.teaWid > div {
  position: relative;
  padding-left: 30px;
}
.kenPos {
  position: absolute;
  left: 0;
  top: 8px;
  width: 15px;
}
.colofbc {
  /* color: #3ddfbc; */
  color: #00abeb;
}
.leftWid {
  width: 800px;
}
.leftWid > div {
  padding-left: 20px;
}
.pcItem {
  position: relative;
  margin: 50px 110px 140px 110px;
}
.teamBor {
  border: 4px solid #00abeb;
  margin-bottom: 30px;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 21px #42e8e0);
  position: relative;
  height: 248px;
}
.teamBor > img {
  height: 240px;
  border-radius: 50%;
  cursor: pointer;
}
.teamBor:hover .buAbs {
  top: 310px;
  opacity: 1;
}
.buAbs {
  width: 400px;
  position: absolute;
  top: 410px;
  left: calc(50% - 180px);
  opacity: 0;
  font-size: 16px;
  pointer-events: none;
  font-weight: 300;
  background-color: #ffffff;
  box-shadow: 0px 3px 4px 3px rgba(164, 164, 164, 0.02);
  border-radius: 10px;
  padding: 10px;
  line-height: 1.6;
  z-index: 100;
}

.hooksImg {
  position: absolute;
  width: 60px;
  bottom: 16px;
  left: -6px;
}

.coloBls {
  /* color: #09eafe; */
}
/* .linns {
  border-left: 1px solid #4facfe;
} */
</style>
