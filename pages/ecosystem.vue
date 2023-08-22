<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="coloBs">
    <div class="coloFFF pcNews">
      <div class="padd-tb-ba backGra">
        <div class="flex align-center justify-between malrCont">
          <div>
            <div class="flex align-center">
              <h3 style="font-size: 70px">Get</h3>
              <h3 style="font-size: 70px" class="margin-left-xs coloBls">
                involved
              </h3>
            </div>
            <h3 style="font-size: 70px">And Be Part Of</h3>
            <div class="flex align-center" style="margin-bottom: 40px">
              <h3 style="font-size: 70px">The</h3>
              <h3 style="font-size: 70px" class="margin-left-xs coloBls">
                Community
              </h3>
            </div>
          </div>
          <img style="height: 500px" src="/ecosystem/banners.png" />
        </div>
      </div>
      <!--   <div class="malrCont " style="height: 100%">
          <div class="fontSize-44 textImg">Parterships</div>
        </div> -->
      <div class="padd-tb-ba backGra">
        <div
          class="text-center fontSize-40 padding-bottom-xl"
          style="color: #42beff"
        >
          Partnerships
        </div>
        <div class="flex flex-wrap malrCont">
          <div
            v-for="(item, index) in obj"
            :key="index"
            :class="index % 2 == 0 && 'margin-right'"
            class="ecoItem"
          >
            <div class="margin-bottom-sm fontSize-36 lin-height-16">
              {{ item.type }}
            </div>
            <div class="flex flex-wrap">
              <div
                v-for="(itemm, indexx) in item.list"
                :key="indexx"
                class="margin-right-sm margin-bottom-xs"
                :class="itemm.b && 'pointer'"
                @click="hrefCli(itemm)"
              >
                <img style="width: 70px" :src="itemm.imgs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coloFFF backGra mobNews">
      <div class="padding-tb-xl mobCont">
        <div class="margin-tb lin-height-16">
          <div class="text-center fontBlod fontSize-28">Get involved and</div>
          <div class="text-center fontBlod fontSize-28">
            part of the community
          </div>
        </div>
        <div class="text-center">
          <img style="height: 200px" src="/ecosystem/banners.png" />
        </div>
        <div class="text-center fontBlod fontSize-28 margin-tb-xl">
          Partnerships
        </div>
        <div
          v-for="(item, index) in obj"
          :key="index"
          :class="index % 2 == 0 && 'margin-right'"
          class="mobItem"
        >
          <div class="margin-bottom-sm fontBlod fontSize-30 lin-height-16">
            {{ item.type }}
          </div>
          <div class="flex flex-wrap text-center">
            <div
              v-for="(itemm, indexx) in item.list"
              :key="indexx"
              class="margin-right-sm margin-bottom-xs pointer"
              @click="hrefCli(itemm)"
            >
              <img style="width: 60px" :src="itemm.imgs" />
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
      obj: [
        {
          type: "Public Chain",
          list: [
            {
              b: "https://en.plugchain.info/",
              imgs: require("../static/ecosystem/es0.png"),
              picIndex: "0",
            },
            {
              b: "https://neo.org/",
              imgs: require("../static/ecosystem/es1.png"),
              picIndex: "1",
            },
            {
              b: "https://v.network/",
              imgs: require("../static/ecosystem/es2.png"),
              picIndex: "2",
            },

            {
              b: "",
              imgs: require("../static/ecosystem/es3.png"),
              picIndex: "43",
            },
            {
              b: "https://zalien.io/#/",
              imgs: require("../static/ecosystem/es4.png"),
              picIndex: "45",
            },
          ],
        },
        {
          type: "Cross-chain Protocol",
          list: [
            {
              b: "https://poly.network/#/",
              imgs: require("../static/ecosystem/es5.png"),
              picIndex: "4",
            },
            {
              b: "https://teleport.network/",
              imgs: require("../static/ecosystem/es6.png"),
              picIndex: "5",
            },
          ],
        },
        {
          type: "Oracle",
          list: [
            {
              b: "https://supraoracles.com/",
              imgs: require("../static/ecosystem/es7.png"),
              picIndex: "6",
            },
          ],
        },
        {
          type: "DApps",
          list: [
            {
              b: "",
              imgs: require("../static/ecosystem/es8.png"),
              picIndex: "7",
            },
            {
              b: "https://memusic.io/",
              imgs: require("../static/ecosystem/es9.png"),
              picIndex: "8",
            },
            {
              b: "https://ortjob.com/",
              imgs: require("../static/ecosystem/es10.png"),
              picIndex: "9",
            },
            {
              b: "https://egoco.in/#",
              imgs: require("../static/ecosystem/es11.png"),
              picIndex: "10",
            },
            {
              b: "https://ortcoin.org/",
              imgs: require("../static/ecosystem/es12.png"),
              picIndex: "11",
            },
          ],
        },
        {
          type: "NFTs",
          list: [
            {
              b: "https://oort.digital/",
              imgs: require("../static/ecosystem/es13.png"),
              picIndex: "12",
            },
            {
              b: "https://www.wonderfulday.io/",
              imgs: require("../static/ecosystem/es14.png"),
              picIndex: "13",
            },
            {
              b: "https://soulmeta.io/",
              imgs: require("../static/ecosystem/es15.png"),
              picIndex: "14",
            },
            {
              b: "https://kakanft.com/",
              imgs: require("../static/ecosystem/es16.png"),
              picIndex: "15",
            },
            {
              b: "https://0xhares.io/",
              imgs: require("../static/ecosystem/es17.png"),
              picIndex: "16",
            },
            {
              b: "https://www.artistone.xyz/#/",
              imgs: require("../static/ecosystem/es18.png"),
              picIndex: "17",
            },
            {
              b: "https://maz.network/",
              imgs: require("../static/ecosystem/es19.png"),
              picIndex: "18",
            },
            {
              b: "https://uniarts.network/",
              imgs: require("../static/ecosystem/es20.png"),
              picIndex: "19",
            },
            {
              b: "https://dataverse.art/",
              imgs: require("../static/ecosystem/es21.png"),
              picIndex: "20",
            },
            {
              b: "https://www.globalcryptoart.org/",
              imgs: require("../static/ecosystem/es22.png"),
              picIndex: "21",
            },
            {
              b: "https://spolalabs.com/",
              imgs: require("../static/ecosystem/es23.png"),
              picIndex: "22",
            },
            {
              b: "https://www.crazyapez.com/",
              imgs: require("../static/ecosystem/es24.png"),
              picIndex: "23",
            },
          ],
        },
        {
          type: "Tools",
          list: [
            {
              b: "https://litentry.com/",
              imgs: require("../static/ecosystem/es25.png"),
              picIndex: "24",
            },
            {
              b: "https://bitscrunch.com/",
              imgs: require("../static/ecosystem/es26.png"),
              picIndex: "25",
            },
            {
              b: "https://www.bitverse.shop/",
              imgs: require("../static/ecosystem/es27.png"),
              picIndex: "26",
            },
            {
              b: "https://cryptosearch.tools/",
              imgs: require("../static/ecosystem/es28.png"),
              picIndex: "44",
            },
            {
              b: "https://fomoin.finance/#/",
              imgs: require("../static/ecosystem/es29.png"),
              picIndex: "46",
            },
            {
              b: "https://www.atomstaking.org/",
              imgs: require("../static/ecosystem/es30.png"),
              picIndex: "47",
            },
            {
              b: "https://twitter.com/Step1_matrix",
              imgs: require("../static/ecosystem/es52.png"),
              picIndex: "52",
            },
          ],
        },
        {
          type: "Wallet",
          list: [
            {
              b: "https://onto.app/",
              imgs: require("../static/ecosystem/es36.png"),
              picIndex: "27",
            },
            {
              b: "https://finx.global/",
              imgs: require("../static/ecosystem/es32.png"),
              picIndex: "28",
            },
            {
              b: "https://mixin.one/",
              imgs: require("../static/ecosystem/es33.png"),
              picIndex: "29",
            },
            {
              b: "https://www.assure.pro/#/",
              imgs: require("../static/ecosystem/es35.png"),
              picIndex: "30",
            },
            {
              b: "https://mathwallet.org/zh-cn/",
              imgs: require("../static/ecosystem/es31.png"),
              picIndex: "31",
            },
            {
              b: "https://www.hyperpay.tech/",
              imgs: require("../static/ecosystem/es34.png"),
              picIndex: "42",
            },
            {
              b: "https://shinobi-wallet.net/?utm_source=twitter&utm_medium=social&utm_campaign=twitterbio&utm_id=01",
              imgs: require("../static/ecosystem/es53.png"),
              picIndex: "53",
            },
          ],
        },
        {
          type: "GameFi",
          list: [
            {
              b: "https://www.metacraft.game/",
              imgs: require("../static/ecosystem/es37.png"),
              picIndex: "32",
            },
            {
              b: "https://birdworld.io/",
              imgs: require("../static/ecosystem/es39.png"),
              picIndex: "33",
            },
            {
              b: "https://metarace.io/#/index",
              imgs: require("../static/ecosystem/es38.png"),
              picIndex: "34",
            },
            {
              b: "https://linktr.ee/mhaya2023",
              imgs: require("../static/ecosystem/es51.jpg"),
              picIndex: "51",
            },
          ],
        },
        {
          type: "Metaverse",
          list: [
            {
              b: "https://www.mixverse.com/",
              imgs: require("../static/ecosystem/es41.png"),
              picIndex: "35",
            },
            {
              b: "http://www.mazimatic.com/",
              imgs: require("../static/ecosystem/es42.png"),
              picIndex: "36",
            },
            {
              b: "https://www.free-city.io/",
              imgs: require("../static/ecosystem/es40.png"),
              picIndex: "37",
            },
            {
              b: "https://republic.vertu.com/",
              imgs: require("../static/ecosystem/es43.png"),
              picIndex: "49",
            },
            {
              b: "https://2040world.io/",
              imgs: require("../static/ecosystem/es50.png"),
              picIndex: "50",
            },
          ],
        },
        {
          type: "Infrastructure",
          list: [
            {
              b: "https://torah.ink/",
              imgs: require("../static/ecosystem/es44.png"),
              picIndex: "3",
            },
            {
              b: "https://crust.network/",
              imgs: require("../static/ecosystem/es45.png"),
              picIndex: "38",
            },
            {
              b: "https://caduceus.foundation/",
              imgs: require("../static/ecosystem/es46.png"),
              picIndex: "39",
            },
            {
              b: "https://dantechain.com/",
              imgs: require("../static/ecosystem/es47.png"),
              picIndex: "40",
            },
            {
              b: "https://spheron.network/",
              imgs: require("../static/ecosystem/es48.png"),
              picIndex: "41",
            },
          ],
        },
        {
          type: "Public Blockchain",
          list: [
            {
              b: "https://www.metabitglobal.com/",
              imgs: require("../static/ecosystem/es49.png"),
              picIndex: "38",
            },
          ],
        },
      ],
    };
  },
  computed: {},
  methods: {
    hrefCli(item) {
      item.b && window.open(item.b);
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
  .mobItem {
    width: 100%;
    border: 1px solid #4facfe;
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 14px;
  }
}
.ecoItem {
  width: 680px;
  height: 320px;
  border: 2px solid #4facfe;
  box-shadow: 0px 4px 10px #46c3fe;
  border-radius: 6px;
  margin-bottom: 30px;
  padding: 20px;
}
.textImg {
  height: 52px;
  position: absolute;
  bottom: 300px;
}
</style>
