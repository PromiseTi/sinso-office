<!--
* Heard   https://shimo.im/mindmaps/NJkbERNG1BHwNNqR/
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="container">
    <header class="backUr">
      <div class="flex jusstify-between align-center malrCont pc">
        <div class="flex align-center justify-between">
          <div class="flex align-center">
            <NuxtLink :to="localePath({ name: '/' })">
              <img
                class="margin-right-xl logoImg"
                src="../static/logo-hori.png"
              />
            </NuxtLink>
            <client-only>
              <div class="flex align-center">
                <NuxtLink
                  type="text"
                  v-for="(item, index) in heads"
                  :key="index"
                  class="fontsix"
                  :class="[
                    'fontS' + index,
                    item.rot.includes($route.path) ? 'coloBls' : '',
                  ]"
                  :to="
                    localePath({
                      name: item.name,
                    })
                  "
                >
                  {{ item.t1 }}
                  <div class="menu-nav-first-ab about0" v-if="index === 0">
                    <div class="linee"></div>
                    <NuxtLink :to="localePath({ name: 'roadmap' })"
                      >Roadmap</NuxtLink
                    >
                    <NuxtLink :to="localePath({ name: 'newsletter' })"
                      >Newsletter</NuxtLink
                    >
                    <NuxtLink :to="localePath({ name: 'docs' })">Docs</NuxtLink>
                    <NuxtLink :to="localePath({ name: 'team' })">Team</NuxtLink>
                  </div>
                  <div class="menu-nav-first-ab about1" v-if="index == 1">
                    <div class="linee"></div>
                    <NuxtLink to="getWay">SINSO Getway</NuxtLink>
                    <NuxtLink to="dataLand">SINSO DataLand</NuxtLink>
                    <NuxtLink to="dac">SINSO DAC</NuxtLink>
                    <NuxtLink to="donorsNetwork">SINSO Donors Network</NuxtLink>
                    <NuxtLink to="dappCube">SINSO DAPP Cube</NuxtLink>
                    <NuxtLink to="amStar">SINSO AmStar</NuxtLink>
                    <a
                      class="fontsix"
                      @click="hrefCli('https://mainnet.sinso.io/')"
                      >Mainnet</a
                    >
                    <a
                      class="fontsix"
                      @click="hrefCli('https://testnet.whitelist.vip/')"
                      >Testnet</a
                    >
                  </div>
                  <div class="menu-nav-first-ab about2" v-if="index == 2">
                    <div class="linee"></div>
                    <NuxtLink to="news">News & Events</NuxtLink>
                    <NuxtLink to="introduction"
                      >SINSO DAC Introduction</NuxtLink
                    >
                    <NuxtLink to="sonior">Sonior & Ambassador</NuxtLink>
                  </div>
                  <div class="menu-nav-first-ab about3" v-if="index == 3">
                    <div class="linee"></div>
                    <NuxtLink to="overview">Overview</NuxtLink>
                    <a
                      class="fontsix"
                      @click="
                        hrefCli(
                          'https://sinso-getway-document-two.vercel.app/docs/Install/Quick%20How-To%20Guide!'
                        )
                      "
                      >Join a node</a
                    >
                  </div>
                  <div class="menu-nav-first-ab about4" v-if="index == 4">
                    <div class="linee"></div>
                    <a
                      class="fontsix"
                      @click="
                        hrefCli('https://docs.getway.sinso.io/docs/welcome')
                      "
                      >SINSO Getway API</a
                    >
                    <a
                      class="fontsix"
                      @click="hrefCli('https://docs.sinso.io/docs/welcome')"
                      >Docs</a
                    >
                  </div>
                </NuxtLink>
              </div>
            </client-only>
          </div>
          <div class="flex align-center">
            <div
              v-for="item in icList"
              :key="item.img"
              class="margin-left padding-top-xs pointer"
            >
              <img
                @click="handles(item.href)"
                :src="'/index/qit/' + item.img + '.png'"
                style="width: 25px"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="backUr mob_Head">
        <img style="height: 40px" src="../static/logo-hori.png" />
        <img
          @click.stop="isFlag = true"
          style="width: 30px"
          class=""
          src="/mobile/index/gengduo.png"
        />
        <div class="moblie-nav-wrap" :class="isFlag && 'showAp'">
          <div class="modal-layer-1 modal-layer-closed"></div>
          <div class="modal-layer-2">
            <img @click.stop="isFlag = false" src="/mobile/index/close.png" />
          </div>
          <div class="modal-layer-3">
            <ul>
              <li v-for="(item, index) in heads" :key="index">
                <NuxtLink
                  v-if="index == 5"
                  :class="[item.rot.includes($route.path) ? 'coloBls' : '']"
                  :to="
                    localePath({
                      name: item.name,
                    })
                  "
                  >{{ item.t1 }}</NuxtLink
                >
                <a
                  v-else
                  :class="[
                    item.rot.includes($route.path) ? 'coloBls' : '',
                    ![5].includes(index) ? 'moblie-select' : '',
                    choIndex === index ? 'selectShow' : '',
                  ]"
                  @click="goTo(index)"
                  >{{ item.t1 }}</a
                >
                <div
                  class="moblie-select-list"
                  :class="choIndex === 0 && index === 0 && 'selectList'"
                >
                  <NuxtLink :to="localePath({ name: 'roadmap' })"
                    >Roadmap</NuxtLink
                  >
                  <NuxtLink :to="localePath({ name: 'newsletter' })"
                    >Newsletter</NuxtLink
                  >
                  <NuxtLink :to="localePath({ name: 'docs' })">Docs</NuxtLink>
                  <NuxtLink :to="localePath({ name: 'team' })">Team</NuxtLink>
                </div>
                <div
                  class="moblie-select-list"
                  :class="choIndex === 1 && index === 1 && 'selectList'"
                >
                  <NuxtLink to="getWay">SINSO Getway</NuxtLink>
                  <NuxtLink to="dataLand">SINSO DataLand</NuxtLink>
                  <NuxtLink to="dac">SINSO DAC</NuxtLink>
                  <NuxtLink to="donorsNetwork">SINSO Donors Network</NuxtLink>
                  <NuxtLink to="dappCube">SINSO DAPP Cube</NuxtLink>
                  <NuxtLink to="amStar">SINSO AmStar</NuxtLink>
                  <a
                    class="fontsix"
                    @click="hrefCli('https://mainnet.sinso.io/')"
                    >Mainnet</a
                  >
                  <a
                    class="fontsix"
                    @click="hrefCli('https://testnet.whitelist.vip/')"
                    >Testnet</a
                  >
                </div>
                <div
                  class="moblie-select-list"
                  :class="choIndex === 2 && index === 2 && 'selectList'"
                >
                  <NuxtLink to="news">News & Events</NuxtLink>
                  <NuxtLink to="introduction">SINSO DAC Introduction</NuxtLink>
                  <NuxtLink to="sonior">Sonior & Ambassador</NuxtLink>
                </div>
                <div
                  class="moblie-select-list"
                  :class="choIndex === 3 && index === 3 && 'selectList'"
                >
                  <NuxtLink to="overview">Overview</NuxtLink>
                  <a
                    class="fontsix"
                    @click="
                      hrefCli(
                        'https://sinso-getway-document-two.vercel.app/docs/Install/Quick%20How-To%20Guide!'
                      )
                    "
                    >Join a node</a
                  >
                </div>
                <div
                  class="moblie-select-list"
                  :class="choIndex === 4 && index === 4 && 'selectList'"
                >
                  <a
                    class="fontsix"
                    @click="
                      hrefCli('https://docs.getway.sinso.io/docs/welcome')
                    "
                    >SINSO Getway API</a
                  >
                  <a
                    class="fontsix"
                    @click="hrefCli('https://docs.sinso.io/docs/welcome')"
                    >Docs</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      isFlag: false,
      choIndex: "",
      icList: [
        { href: "https://twitter.com/sinsonetwork", img: "foots0" },
        { href: "https://t.me/sinsoEnglish", img: "foots1" },
        { href: "https://sinsonetwork.medium.com", img: "foots2" },
        { href: "https://discord.gg/m8eqcHJ5ur", img: "foots3" },
      ],
      heads: [
        // { t1: this.$t("had.li1"), name: "index", rot: ["/"] },
        {
          t1: "About",
          name: "",
          rot: ["/roadmap", "/newsletter", "/docs", "/team"],
        },
        // donors network  dappCube
        {
          t1: "Product",
          name: "",
          rot: [
            "/getWay",
            "/dataLand",
            "/dac",
            "/donorsNetwork",
            "/dappCube",
            "/amStar",
          ],
        },
        {
          t1: "Community",
          name: "",
          rot: ["/news", "/introduction", "/sonior"],
        },
        {
          t1: "SINSO Token",
          name: "",
          rot: ["/overview"],
        },
        { t1: "Developer Portal", name: "", rot: [] },
        {
          t1: "Ecosystem",
          name: "ecosystem",
          rot: ["/ecosystem"],
        },
      ],
    };
  },
  computed: {},
  methods: {
    hrefCli(item) {
      item && window.open(item);
    },
    handles(url, type = "_blank") {
      window.open(url, type);
    },
    goTo(num) {
      if (![5].includes(num)) {
        num === this.choIndex ? (this.choIndex = "") : (this.choIndex = num);
      }
    },
  },
  watch: {
    $route() {
      this.isFlag = false;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.pc {
  display: block;
}
.mob_Head {
  display: none;
}

@media screen and (max-width: 900px) {
  .pc {
    display: none;
  }
  .mob_Head {
    padding: 0px 10px;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .moblie-nav-wrap {
    width: 0vw;
    height: 0%;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 0px;
    height: 0px;
    overflow: hidden;
    z-index: 10000;
  }
  .showAp {
    width: 100vw;
    height: 100%;
  }
  .modal-layer-1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0b0d19;
    opacity: 0;
    left: 0px;
    top: 0px;
    z-index: 1;
  }
  .showAp .modal-layer-1 {
    opacity: 0.8;
  }
  .showAp .modal-layer-2 {
    opacity: 1;
  }
  .showAp .modal-layer-3 {
    left: 0;
  }
  .modal-layer-2 {
    position: absolute;
    width: 20%;
    right: 0px;
    top: 40px;
    z-index: 100;
    text-align: center;
    opacity: 0;
  }
  .modal-layer-2 img {
    display: block;
    height: 50px;
    padding: 10px;
    margin: 0 auto;
  }
  .modal-layer-3 {
    position: absolute;
    width: 80%;
    left: 0px;
    top: 0px;
    background: #0b0d19;
    height: 100%;
    z-index: 100;
    left: -80%;
    transition: all 0.8s;
  }
  .modal-layer-3 ul {
    padding-left: 5%;
    padding-right: 5%;
  }
  .modal-layer-3 ul li {
    border-bottom: 1px solid #232530;
  }
  .modal-layer-3 ul li a {
    display: block;
    height: 40px;
    color: #ffffff;
    line-height: 40px;
    padding-left: 5%;
  }
  .moblie-select {
    background: url("/mobile/index/plus.png") no-repeat 95% center;
  }
  .selectShow {
    background: url("/mobile/index/reduce.jpg") no-repeat 95% center;
  }
  .moblie-select-list {
    max-height: 0px;
    transition: all 0.4s;
    overflow: hidden;
  }
  .selectList {
    max-height: 350px;
  }
  .moblie-select-list a {
    font-size: 12px;
  }
}
.container {
  padding-top: 80px;
}
header {
  width: 100vw;
  height: 80px;
  color: #ffffff;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99;
}

.fontsix {
  width: 140px;
  font-size: 14px;
  cursor: pointer;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 600;
  color: #ffffff;
}
.fontsix:hover {
  color: #4facfe;
}
.logoImg {
  width: 100px;
  margin-right: 40px;
}

.fontS0:hover .about0 {
  display: block;
}
.fontS1:hover .about1 {
  display: block;
}
.fontS2:hover .about2 {
  display: block;
}
.fontS3:hover .about3 {
  display: block;
}
.fontS4:hover .about4 {
  display: block;
}

.fontS2:hover .docs {
  display: block;
}
.menu-nav-first-ab {
  position: absolute;
  width: 200px;
  top: 80px;
  left: calc(50% - 100px);
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 10px 20px;
  border: 2px solid;
  border-image: linear-gradient(270deg, #1da6fd 0%, #1052fc 100%) 1;
  text-align: left;
  background-color: #151e50;
  display: none;
}
.menu-nav-first-ab .linee {
  position: absolute;
  width: 100px;
  height: 2px;
  left: 50%;
  transform: translate(-50%);
  top: -20px;
  background: #4facfe;
}
.menu-nav-first-ab a {
  display: block;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  font-size: 12px;
}
.menu-nav-first-ab a:hover {
  color: #4facfe;
}
.disable {
  color: grey;
}
/* -- */
</style>
