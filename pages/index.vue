<template>
  <div>
    <div class="pcIndex">
      <div class="backGra">
        <div class="flex justify-between align-center malrCont swipes">
          <div>
            <img class="banner" src="/indexPC.png" />
          </div>
          <div class="flex flex-direction padding-top fontSize-30">
            <div class="coloBls">{{ $t("a.smallT1") }}</div>
            <div
              class="margin-tb-sm coloFFF padding-right-xl font700 positRe"
              style="line-height: 0.94"
            >
              <h2 style="font-size: 100px">Web3.0</h2>
              <h2 style="font-size: 100px">Infrastructure</h2>
              <div class="ball"></div>
            </div>
            <h3 class="colo6ff fontSize-30">
              {{ $t("a.h2") }}
            </h3>
            <h3 class="margin-bottom-lg colo6ff fontSize-30">
              {{ $t("a.h3") }}
            </h3>
            <div
              class="flex flexfrow justify-between lanBor borButs"
              style="width: 160px"
            >
              <div class="borPaTe">Learn More</div>
              <div class="padding-lr-xs bor_back">
                <img style="width: 20px" src="/index/xiaImg.png" />
              </div>
            </div>
            <video
              src="../static/vidoes.mp4"
              controls="controls"
              class="video-item"
            >
              您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
      </div>
      <div class="backGrTw">
        <div class="padd-tb-ba text-center malrCont">
          <h3 class="fontSize-50 fontBlod coloFFF text-center">
            SINSO Mainnet Metrics
          </h3>
          <div class="colo6ff margin-bottom-lg fontSize-20">
            THE SINSO NETWORK
          </div>
          <img class="margin-bottom" style="width: 560px" src="/metr.png" />
          <div class="widthSma marlrAuto">
            <div class="flex justify-between margin-bottom-xl example1">
              <div
                v-for="(item, index) in $t('a.info1')"
                class="wow fadeInUp coloBs inCont"
                :data-wow-delay="index * 0.2 + 0.1 + 's'"
                :key="item.a"
              >
                <h2>
                  <countTo
                    class="fontSize-44"
                    ref="example1"
                    separator=""
                    :start-val="0"
                    :end-val="dataList[index] || item.a"
                    :duration="2000"
                    :decimals="item.decimal"
                  />
                </h2>
                <p class="botJis">{{ item.b }}</p>
              </div>
            </div>
            <div class="flex justify-between margin-bottom example2">
              <div
                v-for="(item, index) in $t('a.info2')"
                class="wow fadeInUp coloBs inCont"
                :key="item.a"
                :data-wow-delay="index * 0.2 + 0.1 + 's'"
              >
                <h2>
                  <countTo
                    class="fontSize-34"
                    ref="example2"
                    separator=""
                    :start-val="0"
                    :end-val="dataList[index + 3] || item.a"
                    :duration="2000"
                    :decimals="item.decimal"
                  />
                </h2>
                <p class="botJis">{{ item.b }}</p>
              </div>
            </div>
            <p
              class="marlrAuto padding-tb-xs pointer coloFFF lanBor"
              style="width: 200px"
              @click="hrefCli('https://mainnet.sinso.io/')"
            >
              <a class="liansPc">Dashboard</a>
            </p>
          </div>
        </div>
      </div>
      <div class="padd-tb-ba backGrTw">
        <div class="malrCont">
          <img class="margin-bottom-xl liveImg" src="/live.png" />

          <div
            class="flex align-center justify-between margin-bottom padding-lr-xl"
          >
            <img class="getwayImg" src="/getway.png" />
            <div
              class="fontSize-24 lin-height-16 padding-right-xl margin-right-xl"
              style="width: 600px"
            >
              <h1 class="fontSize-40 coloFFF">SINSO Getway</h1>
              <div class="fontSize-20 text-left colo6ff margin-bottom">
                <p>
                  As a secondary distributed-cache network based on Filecoin,
                  SINSO Getway is built for current use scenarios required by
                  GameFi, VR,AR, Video Streaming, as well as high-speed CDN and
                  DAPP response.
                </p>
              </div>
              <div
                class="flex justify-between lanBor borButs"
                style="width: 160px"
                @click="hrefCli('https://getway.sinso.io/')"
              >
                <div class="borPaTe">Learn More</div>
                <div class="padding-lr-xs bor_back">
                  <img style="width: 20px" src="/index/xiaImg.png" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex align-center justify-between margin-bottom padding-lr-xl"
          >
            <div class="fontSize-22 lin-height-16">
              <h1 class="fontSize-40 coloFFF">SINSO DataLand</h1>
              <div
                class="fontSize-20 text-left colo6ff margin-bottom"
                style="width: 600px"
              >
                <p>
                  SINSO DataLand is a unified storage space for personal
                  Metaverse data. It can be regarded as an NFT browser with
                  archiving function, using a decentralized identity (DID)
                  integrating Web2.0 and Web3.0 accounts for users to access
                  their own "data land".
                </p>
              </div>
              <div
                class="flex justify-between lanBor borButs"
                style="width: 160px"
                @click="hrefCli('https://dataland.sinso.io/login')"
              >
                <div class="borPaTe">Learn More</div>
                <div class="padding-lr-xs bor_back">
                  <img style="width: 20px" src="/index/xiaImg.png" />
                </div>
              </div>
            </div>
            <img
              class="padding-right-xl margin-right-xl"
              style="width: 600px"
              src="/dataLand/banners.png"
            />
          </div>
        </div>
      </div>
      <div class="padd-tb-ba backGrTw ecolCont">
        <div class="malrCont">
          <h1 class="text-center margin-bottom-xs fontSize-40 coloFFF">
            Explore SINSO Ecosystem
          </h1>
          <div
            class="text-center fontSize-22 colo6ff"
            style="margin-bottom: 120px"
          >
            Join the SINSO Ecosystem
          </div>
          <client-only>
            <swiper class="swiper" :options="swiperOption1">
              <swiper-slide
                id="elItem"
                class="swiper-slide"
                v-for="item in $t('a.byList')"
                :key="item.inInx"
              >
                <img
                  :src="'/index/ol' + item.inInx + '.png'"
                  :class="{
                    img3: item.inInx === 3,
                    img11: item.inInx === 11,
                  }"
                />
                <div class="lin-height-2 padding-lr-sm" style="height: 110px">
                  <p class="coloFFF text-ellipsis-5">{{ item.a1 }}</p>
                </div>
              </swiper-slide>
              <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
          </client-only>
          <div
            class="flex align-center justify-center"
            style="margin-top: 80px"
          >
            <NuxtLink class="pointer" to="ecosystem">
              <div
                class="flex justify-between lanBor borButs"
                style="width: 220px"
              >
                <div class="padding-lr-xs bor_back">
                  <img style="width: 20px" src="/index/qit/ecploImg.png" />
                </div>
                <div class="borPaTe">Explore all projects</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="padd-tb-ba backGrTw">
        <div class="malrCont">
          <div class="flex justify-center">
            <h1 class="coloFFF fontSize-40" style="margin-bottom: 120px">
              SINSO
            </h1>
            <h1 class="margin-left-xs colo6ff fontSize-40">Roadmap</h1>
          </div>
          <div class="roadBack">
            <div class="roadQ1">
              <div class="lin-height-2 raoPC rocLeft">
                <p class="fontSize-24">2021 Q3</p>
                <p>DicomNetwork</p>
                <p class="margin-bottom-xs">SINSO DApp Utopian Edition</p>
                <p>Wanxiang Hackathon-DicomNetwork</p>
                <p>has entered the final(2021.08)</p>
                <p>Chia Hackathon Global, Top 3,Asia(2021.09)</p>
              </div>
            </div>
            <div class="roadQ2">
              <div class="lin-height-2 raoPC">
                <p class="fontSize-24">2021 Q4</p>
                <p>SINSO Network v1.0</p>
                <p class="margin-bottom-xs">SINSO DApp Cube v1.0</p>
                <p>Hot data Testnet Mining Online (2021.10)</p>
                <p>SINSO DApp Cube v1.0(2021.12)</p>
              </div>
            </div>
            <div class="roadQ3">
              <div class="lin-height-2 raoPC">
                <p class="fontSize-24">2022 Q1</p>
                <p>SINSO Getway v1.0,</p>
                <p>SINSO Mining software v1.0</p>
              </div>
            </div>
            <div class="roadQ4">
              <div class="lin-height-2 raoPC rocLeft">
                <p class="fontSize-24">2022 Q2</p>
                <p>SINSO Minging software v2.0,</p>
                <p>SINSO Getway 2.0,</p>
                <p>SINSO Data Land v1.0</p>
              </div>
            </div>
            <div class="roadQ5">
              <div class="lin-height-2 raoPC">
                <p class="fontSize-24">2022 Q3</p>
                <p>SINSO Network v2.0,</p>
                <p class="">SINSO Data Land v2.0,</p>
              </div>
            </div>
            <div class="roadQ6">
              <div class="lin-height-2 raoPC">
                <p class="fontSize-24">2022 Q4</p>
                <p>SINSO Minging software v3.0,</p>
                <p>Donors Network v3.0</p>
                <p>SINSO Dapp Cube v2.0</p>
                <p class="margin-bottom-xs">SINSO DAC V1.0</p>
                <p>Hot Data Mainnet Mining Online (2022.11)</p>
              </div>
            </div>
            <div class="roadQ7">
              <div class="lin-height-2 raoPC">
                <p class="fontSize-24">2023 Q1</p>
                <p>SINSO Amstar mainnet launched,</p>
                <p>SINSO Dataland v2（Integrate chatGPT）,</p>
                <p>Hot Data Mainnet Mining Online (2023.02.06) ,</p>
                <p class="margin-bottom-xs">Launch xt.com exchange</p>
              </div>
            </div>
            <div class="roadQ8">
              <div class="lin-height-2 raoPC">
                <p class="fontSize-24">2023 Q2</p>
                <p>SINSO Getway v2.0,</p>
                <p>SINSO Dataland v3.0,</p>
                <p>SINSO Mining software v3.0,</p>
              </div>
            </div>
            <div class="roadQ9">
              <div class="lin-height-2 raoPC">
                <p class="fontSize-24">2023 Q3</p>
                <p>SINSO DAC v1.0</p>
                <p>（Cross-chain construction of DAC with filecoin FVM）,</p>
                <p>SINSO Donors Network v3.0,</p>
                <p class="margin-bottom-xs">SINSO Dataland v4.0,</p>
                <p>Launch next exchange</p>
              </div>
            </div>
            <div class="roadQ10">
              <div class="lin-height-2 raoPC">
                <p class="fontSize-24">2023 Q4</p>
                <p>SINSO DAC v2.0,</p>
                <p>SINSO Donors Network v4.0,</p>
                <p>SINSO Dataland v5.0,</p>
                <p>SINSO Mining software v4.0</p>
              </div>
            </div>
          </div>

          <div
            class="flex align-center justify-center"
            style="margin-top: 80px"
          >
            <NuxtLink class="pointer hvr-wobble-horizontal" to="roadmap">
              <div
                class="flex justify-between lanBor borButs"
                style="width: 400px"
              >
                <div class="padding-lr-xs bor_back">
                  <img style="width: 20px" src="/index/qit/roadsImg.png" />
                </div>
                <div class="borPaTe">Follow SINSOs roadmap in its journey</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="padd-tb-ba backGrTw">
        <div class="widthSma marlrAuto positRe dacEnt">
          <div class="flex">
            <div class="margin-right">
              <h2 class="fontSize-40 letter_spac2">what is the SINSO</h2>
              <h2 style="font-size: 110px; color: #3fbdff">DAC ?</h2>
            </div>
            <div class="flex">
              <img class="dacsImg" src="/index/qit/dacRight.png" />
              <img
                class="dacsImg"
                style="height: 120px"
                src="/index/qit/dacTop.png"
              />
              <img class="dacsImg" src="/index/qit/dacLeft.png" />
            </div>
          </div>
          <div class="fontSize-24 fontBlod margin-bottom letter_spac4">
            <div>SINSO DAC is more than a</div>
            <div>self-governing community of SINSO.</div>
          </div>
          <div class="fontSize-20 fontBlod letter_spac2">
            <div>
              It is more of a smart contract framework written in code that
            </div>
            <div>
              runs on the blockchain, like a data governance DAO system.
            </div>
          </div>
          <img class="wenImg" src="/index/qit/dacWen.png" />
        </div>
        <div class="flex align-center justify-center padd-tb-ba">
          <NuxtLink
            class="pointer margin-right-sm hvr-wobble-horizontal"
            to="introduction"
          >
            <div
              class="flex justify-between lanBor borButs"
              style="width: 180px"
            >
              <div class="borPaTe">How it works?</div>
              <div class="padding-lr-xs bor_back">
                <img style="width: 20px" src="/index/qit/imgRight.png" />
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="pointer hvr-wobble-horizontal" to="sonior">
            <div
              class="flex justify-between lanBor borButs"
              style="width: 180px"
            >
              <div class="borPaTe">Join us</div>
              <div class="padding-lr-xs bor_back">
                <img style="width: 20px" src="/index/qit/imgRight.png" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="padd-tb-ba backGrTw">
        <div class="malrCont">
          <div
            class="flex justify-center coloFFF fontSize-40"
            style="margin-bottom: 120px"
          >
            News on
            <h1 class="margin-left-xs colo6ff fontSize-40">SINSO</h1>
          </div>
          <div class="flex justify-center">
            <div
              v-for="item in newList"
              :key="item.cc"
              class="positRe newItem hvr-float-shadow"
              @click="hrefCli(item.cc)"
            >
              <img class="neback" :src="item.f" />

              <div class="text-center">
                <p
                  class="fontSize-20 margin-bottom-sm colo6ff margin-top-xs letter_spac1"
                >
                  {{ item.a1 }} {{ item.a2 }}
                </p>
                <div class="coloFFF lin-height-18">
                  <p v-for="(itemm, indexx) in item.li" :key="indexx">
                    {{ itemm }}
                  </p>
                </div>
              </div>
              <div class="borNews"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="padd-tb-ba backGrTw">
        <div class="malrCont">
          <div class="text-center margin-bottom-qi">
            <img style="height: 50px" src="/index/routeWay.png" />
          </div>
          <div class="flex flex-wrap">
            <div
              class="hvr-grow pointer byImg"
              :class="[(index + 1) % 6 != 0 && 'bymarPc', `byc` + (index + 1)]"
              v-for="(item, index) in byImgList"
              :key="index"
            >
              <img :src="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coloFFF mobIndex">
      <div class="backGra">
        <div class="text-center mobTop">
          <img style="width: 100%" src="/indexPC.png" />
          <h1 class="margin-tb-sm">{{ $t("a.h1") }}</h1>
          <div>{{ $t("a.h2") }}</div>
          <div class="margin-top-xs margin-bottom-sm">{{ $t("a.h3") }}</div>
          <p>
            <a class="lians">{{ $t("a.h4") }}</a>
          </p>
        </div>
        <div class="flex justify-center padding-tb-sm">
          <video
            src="../static/vidoes.mp4"
            controls="controls"
            style="width: 80vw"
          >
            您的浏览器不支持 video 标签。
          </video>
        </div>
      </div>
      <div class="backFFF padding-tb-sm backGra">
        <div class="text-center lin-height-18 margin-bottom-sm">
          <h3>{{ $t("a.infoh1") }}</h3>
          <h3>{{ $t("a.infoh2") }}</h3>
        </div>
        <div
          v-for="(item, index) in $t('a.info1')"
          class="marlrAuto mobIn"
          :key="index"
        >
          <h2>
            <countTo
              ref="example1"
              separator=""
              :start-val="0"
              :end-val="dataList[index] || item.a"
              :duration="2000"
              :decimals="item.decimal"
            />
          </h2>
          <p class="margin-top-xs">{{ item.b }}</p>
        </div>
        <div
          v-for="(item, index) in $t('a.info2')"
          class="marlrAuto mobIn"
          :key="item.a"
        >
          <h2>
            <countTo
              ref="example1"
              separator=""
              :start-val="0"
              :end-val="dataList[index + 3] || item.a"
              :duration="2000"
              :decimals="item.decimal"
            />
          </h2>
          <p class="margin-top-xs">{{ item.b }}</p>
        </div>
      </div>
      <!-- -- -->
      <div class="padding-tb backGra">
        <div class="">
          <h1 class="coloFFF text-center margin-bottom">
            {{ $t("a.byh") }}
          </h1>
          <client-only>
            <div class="mobCont">
              <swiper class="swiper" :options="mobswiperOption1">
                <swiper-slide
                  id="mobElItem"
                  class="swiper-slide"
                  v-for="item in $t('a.byList')"
                  :key="item.inInx"
                >
                  <img
                    :class="{
                      img3: item.inInx === 3,
                      img11: item.inInx === 11,
                    }"
                    :src="'/index/ol' + item.inInx + '.png'"
                  />
                  <div class="lin-height-18 text-ellipsis-3 margin-bottom-xs">
                    {{ item.a1 }}
                  </div>
                  <el-button round @click="hrefCli(item.b, item.inInx + '')"
                    >Learn more</el-button
                  >
                </swiper-slide>
                <div
                  class="swiper-pagination swiper-pagination-white"
                  slot="pagination"
                ></div>
                <div
                  class="swiper-button-prev mobPer1"
                  slot="button-prev"
                ></div>
                <div
                  class="swiper-button-next mobNext1"
                  slot="button-next"
                ></div>
              </swiper>
            </div>
          </client-only>
          <NuxtLink
            to="ecoPartner"
            class="marlrAuto margin-top-xl widbutt widGia"
            style="display: flex"
            @click="hrefCli('https://github.com/sinsoio')"
          >
            See more Eco-Parther
          </NuxtLink>
        </div>
      </div>
      <div class="padding-tb backGra">
        <div class="">
          <h3 class="text-center margin-bottom">{{ $t("a.roah") }}</h3>
          <div class="roaCont">
            <client-only>
              <swiper class="swiper" :options="mobswiperOption2">
                <swiper-slide
                  v-for="(item, index) in $t('a.roaList')"
                  :key="index"
                >
                  <div class="roaPos">
                    <div>
                      <img src="/index/dianTrue.png" />
                      <p
                        :class="index == tabsIndex && 'coloBls'"
                        class="fontBlod fontSize-20"
                      >
                        {{ item.a }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="lin-height-2 raoJiu"
                    style="width: 100%; height: auto"
                    :class="index == tabsIndex && 'roBjo'"
                    @click="tabsIndex = index"
                  >
                    <div class="margin-bottom">
                      <p v-for="itemm in item.b" :key="itemm">{{ itemm }}</p>
                    </div>
                    <p v-for="itemm in item.c" :key="itemm">{{ itemm }}</p>
                  </div>
                </swiper-slide>
              </swiper>
              <div class="swiper-button-prev swipe-prev2"></div>
              <div class="swiper-button-next swipe-next2"></div>
            </client-only>
          </div>
          <p
            class="marlrAuto margin-top-xl widbutt"
            @click="hrefCli('https://github.com/sinsoio')"
          >
            <img src="/index/githubs.png" /> {{ $t("a.toagit") }}
          </p>
        </div>
      </div>
      <div class="backGra padding-tb">
        <div class="mobCont">
          <h3 class="text-center margin-bottom">{{ $t("a.edyh") }}</h3>
          <div class="flex flex-wrap">
            <img
              style="width: 32%"
              class="margin-bottom-xs"
              :class="(index + 1) % 3 != 0 && 'bymar'"
              v-for="(item, index) in byImgList"
              :key="index"
              :src="item"
            />
          </div>
        </div>
      </div>
      <div class="backGra padding-tb">
        <div class="mobCont">
          <div class="text-center margin-bottom fontSize-30">
            {{ $t("a.newh") }}
          </div>
          <div class="flex flex-wrap">
            <div
              v-for="(item, index) in newList"
              :key="index"
              class="margin-bottom-xs mobnewItem"
              :class="index % 2 == 0 && 'mobNewRights'"
              @click="hrefCli(item.cc)"
            >
              <img class="neback" :src="item.f" />

              <div class="lin-height-18 fontDize-14">
                <p class="colo999">{{ item.gg }}</p>
                <p class="margin-bottom-xs text-ellipsis-1 colo999">
                  {{ item.d }}
                </p>
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
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      },
    ],
  },
  name: "index",
  data() {
    return {
      tabsIndex: 5, //
      //pc 1
      swiperOption1: {
        slidesPerView: 4,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
      },
      //mob 1
      mobswiperOption1: {
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
      //mob 2
      mobswiperOption2: {
        initialSlide: 5,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swipe-next2",
          prevEl: ".swipe-prev2",
        },
      },

      newList: [
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot18.jpg"),
          gg: "Nov 28, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-2929d899b34a",
          a1: "SINSO Bi-Weekly",
          a2: "Newsletter",
          li: [
            "SINSO — The Web3.0 infrastructure",
            "focusing on decentralized high-speed",
            "cache and FVM-based data",
            "governance. SINSO team is",
            "composed of top technical...",
          ],
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot17.jpg"),
          gg: "Nov 14, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-a08af0125b07",
          a1: "SINSO Bi-Weekly",
          a2: "Newsletter",
          li: [
            "SINSO — The Web3.0 infrastructure",
            "focusing on decentralized high-speed",
            "cache and FVM-based data",
            "governance. SINSO team is",
            "composed of top technical...",
          ],
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot16.png"),
          gg: "Oct 31, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-9948c6e5cfd7",
          a1: "SINSO Bi-Weekly",
          a2: "Newsletter",
          li: [
            "SINSO — The Web3.0 infrastructure",
            "focusing on decentralized high-speed",
            "cache and FVM-based data",
            "governance. SINSO team is",
            "composed of top technical...",
          ],
        },
      ],
      byImgList: [
        require("../static/index/ST1.png"),
        require("../static/index/ST2.png"),
        require("../static/index/ST3.png"),
        require("../static/index/ST4.png"),
        require("../static/index/ST5.png"),
        require("../static/index/ST6.png"),
        require("../static/index/ST7.png"),
        require("../static/index/ST8.png"),
        require("../static/index/ST9.png"),
        require("../static/index/ST10.png"),
        require("../static/index/ST11.png"),
        require("../static/index/ST12.png"),
        require("../static/index/ST13.png"),
        require("../static/index/ST14.png"),
        require("../static/index/ST15.png"),
        require("../static/index/ST16.png"),
        require("../static/index/ST17.png"),
        require("../static/index/ST18.png"),
      ],
      dataList: [],
    };
  },
  mounted() {
    var that = this;
    new WOW({
      live: false,
      callback(dom) {
        if (dom.className.indexOf("example1")) {
          that.$refs.example1[0].start();
          that.$refs.example1[1].start();
          that.$refs.example1[2].start();
        }
        if (dom.className.indexOf("example2")) {
          that.$refs.example2[0].start();
          that.$refs.example2[1].start();
          that.$refs.example2[2].start();
        }
      },
    }).init();
    // console.log(this);
    // console.log(this.$i18n);
    this.dataInit();
  },
  methods: {
    dataInit() {
      $.ajax({
        url: `https://mainnet.sinso.io/api/overview`,
        type: "GET",
        dataType: "json",
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json",
        // },
        success: (data) => {
          if (data.error_code === 0) {
            let {
              CanMineTokens,
              MinedTokens,
              PledgedTokens,
              Storage: { RegistrationCount, OnlineCount, PledgedCount },
            } = data.data;
            this.dataList = [
              RegistrationCount,
              OnlineCount,
              PledgedCount,
              parseFloat(CanMineTokens),
              parseFloat(MinedTokens),
              parseFloat(PledgedTokens),
            ];
          }
        },
      });
    },
    hrefCli(item) {
      item && window.open(item);
    },
  },
};
</script>
<style scoped>
.video-item {
  width: 600px;
  margin-top: 20px;
}
.pcIndex {
  display: block;
}
.mobIndex {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcIndex {
    display: none;
  }
  .mobIndex {
    display: block;
  }
  .mobTop {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    padding-top: 40px;
    padding-bottom: 30px;
  }
  .mobPo {
    width: 47%;
    background-color: #e8edf1;
    border-radius: 10px;
    padding: 10px 4px;
    margin-bottom: 20px;
  }
  .moRig10 {
    margin-right: 4%;
  }
  .mobPoImgs {
    height: 40px;
    margin: 10px 0px;
  }
  .mobIn {
    color: #ffffff;
    text-align: center;
    background: linear-gradient(84.36deg, #6e5ae7 4.5%, #3dadde 90.42%);
    width: 80%;
    padding: 20px 0px;
    border-radius: 10px;
    margin-bottom: 16px;
  }
  .mobUsiLeft {
    border: 0.5px solid #e5e5e5;
    border-radius: 14px;
    overflow: hidden;
  }
  .mobUsiImg1 {
    width: 20px;
  }
  .mobUsiImg2 {
    height: 8px;
  }
  .mobUsiImg3 {
    width: 40vw;
  }
  .mobUsiSon {
    font-size: 14px;
    color: #00abeb;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    border-bottom: 1px solid #00abeb;
  }
  .mobEcolCont {
    background: url(/index/img-homes.png) no-repeat 50%;
  }
  .mobPer1 {
    top: auto;
    left: 20px;
    bottom: 0px;
    width: auto;
  }
  .mobNext1 {
    top: auto;
    right: 20px;
    bottom: 0px;
    width: auto;
  }
  .mobnewItem {
    background-color: #fff;
    padding: 8px;
    width: 48%;
    border-radius: 8px;
  }
  .mobNewRights {
    margin-right: 2%;
  }
}
.swipes {
  height: 1008px;
  font-size: 20px;
  padding-top: 140px;
}
.banner {
  height: 650px;
  margin-right: 80px;
}
.liveImg {
  height: 100px;
}
.getwayImg {
  height: 400px;
}
.learns {
  padding: 8px 30px;
  cursor: pointer;
  border-radius: 50px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  display: inline-block;
  color: #ffffff;
}
.banWeb {
  background: linear-gradient(270deg, #4facfe 0%, #00f2fe 100%);
}
.ball {
  position: absolute;
  background: #b4f8fe;
  filter: blur(50px);
  width: 300px;
  height: 280px;
  z-index: -1;
  right: 0px;
  top: -70px;
}
.lians {
  cursor: pointer;
  font-size: 16px;
  border-bottom: 1px solid #333333;
}
.poCont {
  width: 47%;
  background-color: #e8edf1;
  height: 300px;
  margin-bottom: 70px;
  padding: 50px 0px 0px 60px;
  border-radius: 20px;
}
.rig10 {
  margin-right: 6%;
}
.widDi {
  height: 60px;
}
.widDi img {
  width: 40px;
}
.inCont {
  border: 1px solid #00d1ff;
  text-align: center;
  width: 380px;
  height: 186px;
  border-radius: 2px;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  filter: drop-shadow(0px 4px 25px rgba(0, 207, 253, 0.35));
}
.botJis {
  font-size: 20px;
  color: #333333;
  top: 0px;
  left: 0px;
  width: 100%;
  position: absolute;
  height: 50px;
  line-height: 50px;
  background: linear-gradient(84.36deg, #6e5ae7 4.5%, #3dadde 90.42%);
  border: 1px solid #00d1ff;
}

#roaItem {
  width: 25% !important;
  margin-right: 0px !important;
}
.roaPos {
  margin-top: 30px;
  margin-bottom: 110px;
  border-top: 2px solid #00abeb;
  position: relative;
}
.roaPos > div {
  position: absolute;
  left: 0px;
  top: -20px;
  width: 100%;
  text-align: center;
}
.roaPos img {
  width: 40px;
  margin-bottom: 20px;
}

.roBjo {
  border: none;
  color: #ffffff;
  background: linear-gradient(84.36deg, #6e5ae7 4.5%, #3dadde 90.42%);
}
.byImg {
  width: 15%;
  margin-bottom: 30px;
  background-color: #1c1f5a;
  text-align: center;
  border: 2px solid #317bb4;
  padding: 14px 0px;
}
.byImg img {
  width: 80%;
}
.bymarPc {
  margin-right: 2%;
}
.bymar {
  margin-right: 1%;
}
/* .byc1:hover img {
  content: url("../static/index/STX1.png");
}
.byc2:hover img {
  content: url("../static/index/STX2.png");
}
.byc3:hover img {
  content: url("../static/index/STX3.png");
}
.byc4:hover img {
  content: url("../static/index/STX4.png");
}
.byc5:hover img {
  content: url("../static/index/STX5.png");
}
.byc6:hover img {
  content: url("../static/index/STX6.png");
}
.byc7:hover img {
  content: url("../static/index/STX7.png");
}
.byc8:hover img {
  content: url("../static/index/STX8.png");
}
.byc9:hover img {
  content: url("../static/index/STX9.png");
}
.byc10:hover img {
  content: url("../static/index/STX10.png");
}
.byc11:hover img {
  content: url("../static/index/STX11.png");
}
.byc12:hover img {
  content: url("../static/index/STX12.png");
}
.byc13:hover img {
  content: url("../static/index/STX13.png");
}
.byc14:hover img {
  content: url("../static/index/STX14.png");
}
.byc15:hover img {
  content: url("../static/index/STX15.png");
}
.byc16:hover img {
  content: url("../static/index/STX16.png");
}
.byc17:hover img {
  content: url("../static/index/STX17.png");
}
.byc18:hover img {
  content: url("../static/index/STX18.png");
} */

.newItem {
  border-radius: 2px;
  padding: 15px 15px 30px 15px;
  width: 30%;
  margin: 0px 30px;
  cursor: pointer;
  border: 1px solid #46c3fe;
}
.borNews {
  position: absolute;
  height: 8px;
  width: calc(100% + 2px);
  left: -1px;
  bottom: -1px;
  background: linear-gradient(84.36deg, #6e5ae7 4.5%, #3dadde 90.42%);
}
.neback {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  /* height: 140px; */
  margin-bottom: 10px;
}
.usiLeft {
  border: 0.5px solid #e5e5e5;
  border-radius: 14px;
  width: 800px;
  overflow: hidden;
}
.usleftTop {
  background-color: #252c2f;
  color: #ffffff;
  padding: 20px 0px 20px 20px;
}
.usleftBott {
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
  background-color: #ffffff;
}
.usiRight {
  padding-top: 60px;
  /* width: 400px; */
}
.usiImg1 {
  width: 30px;
}
.usiImg2 {
  height: 10px;
}
.usiImg3 {
  height: 230px;
}
.usiSon {
  color: #00abeb;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  border-bottom: 1px solid #00abeb;
}
/* 轮播 */
::v-deep .swiper-container {
  height: 500px;
}
.roaCont {
  border-radius: 10px;
  padding: 20px 70px 70px 70px;
  position: relative;
}
::v-deep .roaCont .swiper-container {
  height: 440px;
}
#elItem {
  height: 383px !important;
  width: 320px !important;
  margin-right: 30px;
  padding: 55px 30px 0px 30px;
  text-align: center;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  background: url("/index/ecoBor.png") no-repeat;
  background-size: cover;
}
#mobElItem {
  border-radius: 10px;
  padding: 55px 30px 0px 30px;
  text-align: center;
  background: #ffffff;
  color: #101f49;
}
::v-deep .swiper .swiper-scrollbar-drag {
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
}
::v-deep .swiper-container-horizontal > .swiper-scrollbar {
  height: 3px;
  background: rgba(0, 0, 0, 0.4);
}
#elItem > img,
#mobElItem > img {
  height: 70px;
  margin-bottom: 30px;
}
#elItem > .img3,
#mobElItem > .img3 {
  height: 26px;
  margin-top: 25px;
  margin-bottom: 44px;
}
#elItem > .img11,
#mobElItem > .img11 {
  height: 20px;
  margin-top: 25px;
  margin-bottom: 55px;
}

::v-deep .ecolCont .swiper-button-prev {
  left: 30%;
  top: calc(100% - 20px);
  width: auto;
}
::v-deep .ecolCont .swiper-button-next {
  right: 30%;
  top: calc(100% - 20px);
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

::v-deep .roaCont .swiper-button-prev {
  left: 10px;
  top: 50px;
  width: auto;
}
::v-deep .roaCont .swiper-button-next {
  right: 10px;
  top: 50px;
  width: auto;
}
.raoJiu {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 280px;
  border: 1px dashed #a1d5e8;
  border-radius: 10px;
  padding: 14px;
  font-size: 14px;
  cursor: pointer;
}
.roadBack {
  background: url("../static/index/qit/roaMap2.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 380px;
  position: relative;
}
.roadBack > div {
  position: absolute;
  cursor: pointer;
  /* background-color: pink; */
  width: 40px;
  height: 80px;
}
.roadQ1 {
  left: 48px;
  bottom: 32px;
}
.roadQ2 {
  left: 198px;
  bottom: 240px;
}
.roadQ3 {
  left: 344px;
  bottom: 35px;
}
.roadQ4 {
  left: 491px;
  bottom: 240px;
}
.roadQ5 {
  left: 640px;
  bottom: 34px;
}
.roadQ6 {
  left: 785px;
  bottom: 240px;
}
.roadQ7 {
  right: 425px;
  bottom: 34px;
}
.roadQ8 {
  right: 281px;
  bottom: 245px;
}
.roadQ9 {
  right: 131px;
  bottom: 34px;
}
.roadQ10 {
  right: 48px;
  bottom: 245px;
}
.roadBack > div:hover .raoPC {
  display: block;
}
.raoPC {
  display: none;
  width: 284px;
  border-radius: 10px;
  padding: 14px;
  font-size: 14px;
  cursor: pointer;
  /* background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%); */
  background: #141c4e;
  position: absolute;
  top: 100px;
  left: -128px;
  color: #ffffff;
}
.rocLeft {
  left: 0px;
}

.dacEnt {
  background: url("/index/qit/dacBor.png") no-repeat;
  background-size: cover;
  height: 506px;
  padding-top: 60px;
  padding-left: 50px;
  color: #ffffff;
}
.dacsImg {
  height: 140px;
  margin: 0px 20px;
}
.wenImg {
  position: absolute;
  width: 240px;
  right: 20px;
  top: 50px;
}
</style>
