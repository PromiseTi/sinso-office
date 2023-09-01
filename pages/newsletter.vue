<!--
* about newsletter h-
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="pcLett">
      <div class="padd-tb-ba backGra">
        <div class="malrCont">
          <div class="flex justify-between">
            <div style="margin-bottom: 80px" class="coloFFF">
              <div class="flex align-center">
                <h3 style="font-size: 70px">Watch</h3>
                <h3 style="font-size: 70px" class="margin-left coloBls">
                  SINSO's
                </h3>
              </div>
              <h3 style="font-size: 70px">journey from newsletter</h3>
            </div>
            <img style="height: 180px" src="/index/qit/dacLeft.png" />
          </div>
          <div class="flex flex-wrap">
            <div
              class="wow pointer fadeInUp botts"
              :class="(index + 1) % 3 != 0 && 'marRig'"
              v-for="(item, index) in list"
              :key="index"
              @click="hrefCli(item.cc)"
            >
              <div class="pcCont">
                <img v-if="item.f" :src="item.f" class="pcImg1" />
                <video
                  v-if="item.g"
                  :src="item.g"
                  controls="controls"
                  class="pcImg1"
                >
                  您的浏览器不支持 video 标签。
                </video>
                <div class="borLett">
                  <div
                    class="margin-tb-xs fontSize-24 text-ellipsis-1 fontBlod coloBlus"
                  >
                    {{ item.a }}
                  </div>
                  <p class="lin-height-2 text-ellipsis-4 lettHe">
                    {{ item.d }}
                  </p>
                  <div class="flex justify-between align-center">
                    <img src="/sinso-logo.png" style="height: 30px" />
                    <p class="fontSize-14 coloBlus">{{ item.gg }}</p>
                  </div>
                </div>
              </div>
              <div class="borNews"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="padding-tb backGra mobLett">
      <div class="mobCont">
        <h2 class="margin-bottom-xs text-center wow coloFFF fadeInUp">
          Watch SINSO's journey from newsletter
        </h2>
        <div class="text-center padding-tb">
          <img style="height: 180px" src="/index/qit/dacLeft.png" />
        </div>
        <div
          class="margin-bottom-xl wow fadeInUp"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="docCont">
            <h4 class="margin-bottom-xs">{{ item.a }}</h4>
            <div class="flex align-center">
              <p class="margin-right-sm letts">{{ item.b }}</p>
              <p class="fontSize-14 colo999">{{ item.c }}</p>
            </div>
            <p class="lin-height-2 margin-tb-xs fontSize-14">
              {{ item.d }}
            </p>
            <p class="fontSize-14 colo999">{{ item.gg }}</p>

            <img
              class="margin-top-sm"
              style="width: 100%"
              v-if="item.f"
              :src="item.f"
            />
            <video
              class="margin-top-sm"
              v-if="item.g"
              :src="item.g"
              controls="controls"
              style="width: 100%"
            >
              您的浏览器不支持 video 标签。
            </video>
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
      obj: [],
      list: [
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot30.png"),
          gg: "Sept 28, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-de5d0a79c6f",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot29.png"),
          gg: "Aug 14, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-c5ff3fa73133",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot28.jpg"),
          gg: "Jul 31, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-19f3cd576fd",
        },

        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot27.png"),
          gg: "June 19, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-c519d03d6c77",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot26.jpg"),
          gg: "June 5, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-e3be45f13cc5",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot25.jpg"),
          gg: "May 22, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-3747e37afb16",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot24.jpg"),
          gg: "May 9, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-81470e6ccf9a",
        },

        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot23.png"),
          gg: "Apr 24, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-b79ea56991d5",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot22.png"),
          gg: "Apr 10, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-640f4862f2b7",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot21.png"),
          gg: "Mar 27, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-ca4ea1fed4a7",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot20.png"),
          gg: "Mar 13, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-3a129a49865a",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot19.jpg"),
          gg: "Feb 27, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-fa8cbae93897",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot18.jpg"),
          gg: "Feb 14, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-2929d899b34a",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot17.jpg"),
          gg: "Jan 31, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-a08af0125b07",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot16.png"),
          gg: "Jan 9, 2023",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-9948c6e5cfd7",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot15.png"),
          gg: "Dec 26, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-e73d7bd35f7e",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot14.png"),
          gg: "Dec 12, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-a9b56fe7ad97",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot13.png"),
          gg: "Nov 28, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-e0e6e9fa306e",
        },
        {
          a: "SINSO Bi-Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot12.png"),
          gg: "Nov 14, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-f43a6d090a21?source=social.tw",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot11.png"),
          gg: "Oct 31, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-e6c7be833c43",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot10.png"),
          gg: "Oct 17, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-bi-weekly-newsletter-547a71cab382",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot9.png"),
          gg: "Sep 26, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-9a45610c818e",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "3 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot8.png"),
          gg: "Sep 19, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-7d32dff78ec2",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "3 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot7.png"),
          gg: "Sep 12, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-bffe556d9786",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "4 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "a few days ago",
          f: require("../static/index/bot6.png"),
          gg: "Sep 5, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-9f2a2050b71e",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "2 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "A few weeks ago",
          f: require("../static/index/bot5.jpg"),
          gg: "Aug 29, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-353515fcdf25",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "3 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the ...",
          e: "A few weeks ago",
          f: require("../static/index/bot4.jpg"),
          gg: "Aug 22, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-f5e2af2a497d",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "3 min read",
          d: "SINSO — The Web3.0 infrastructure simplifying decentralized storage and data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the up-to-date achievements of the Filecoin network, SINSO will expand the middle layer of Web3.0 and solve the....",
          e: "3 months ago",
          f: require("../static/index/bot0.jpg"),
          gg: "Jun 13, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-43bffb6dcc7f",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "2 min read",
          d: "SINSO — The Web3.0 infrastructure focusing on decentralized high-speed cache and FVM-based data governance. SINSO team is composed of top technical members from all over the world. Drawing support from the up-to-date...",
          e: "3 months ago",
          f: require("../static/index/bot1.jpg"),
          gg: "Jun 6, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-48f218c91858",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "2 min read",
          d: "This week, SINSO development team focused their efforts on the Testnet, to which the accessed nodes have topped 4000. SINSO development team streamlined and optimized the background...",
          e: "3 months ago",
          f: require("../static/index/bot2.jpg"),
          gg: "May 30, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-e24f2d7b3915",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "3 min read",
          d: "This week, SINSO development team focused their efforts on the Testnet, to which the accessed nodes have topped 4000. SINSO development team streamlined and optimized the background...",
          e: "4 months ago",
          f: require("../static/index/bot3.jpg"),
          gg: "May 23, 2022",
          cc: "https://sinsonetwork.medium.com/sinso-weekly-newsletter-c3937bae23a8",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "1 min read",
          d: "This week, SINSO development team focused their efforts on the Testnet, to which the accessed nodes have topped 4000. SINSO development team streamlined and optimized the background...",
          e: "5 months ago",
          f: require("../static/newsletter/pic.png"),
          gg: "5 months ago",
        },
        // {
        //   a: "SINSO Weekly Newsletter",
        //   b: "Fliecoin",
        //   c: "2 min read",
        //   d: "This week, the R&D team continuously focused work on SINSO Distributed Cache Testnet. The current number of accessed nodes in Testnet has reached 1977. The R&D team has carried out...",
        //   e: "5 months ago",
        //   f: "",
        //   gg: "5 months ago",
        //   g: "https://bafybeihb3nvzbc6nlmlyeiynw24zx4qovexl274yhcdlbrb4yuo656uw54.ipfs.dweb.link/sinso1.mp4",
        // },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "1 min read",
          d: "This week, SINSO R&D team continued to focus team work on SINSO Distributed Cache Testnet, whose current nodes have reached 1,360. SINSO team addressed problems like the...",
          e: "7 months ago",
          f: "",
          g: "https://bafybeiauhvfcldsxejk37j3tapfnuk6cbetfedl6xfiuiakxr37jdvikw4.ipfs.dweb.link/sinso2.mp4",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "2 min read",
          d: "This week, SINSO continued to focus R&D work on the Distributed Cache Testnet, optimized deployment of the data ports through which some cache nodes connected to users, and prepared for the...",
          e: "6 months ago",
          f: "",
          gg: "7 months ago",
          g: "https://bafybeid56dvhtgsdhwhkxwhvd3kngsnf26qpso22rz6kvctkc4w5mzxf7a.ipfs.dweb.link/sinso3.mp4",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "1 min read",
          d: "The distributed-cache Testnet of SINSO is running smoothly. The R&D team’s major task for this week was to ensure successful access and debugging of whitelist node users. Apart from that, the...",
          e: "6 months ago",
          f: "",
          gg: "7 months ago",
          g: "https://bafybeid3ukpgnqelfgauighee2ppypepj6vpo6cvqwn4mpfhebifomo2dm.ipfs.dweb.link/sinso4.mp4",
        },
        {
          a: "SINSO Weekly Newsletter",
          b: "Fliecoin",
          c: "2 min read",
          d: "The distributed-cache Testnet of SINSO is running smoothly. The R&D team’s major task for this week was to ensure successful access and debugging of whitelist node users. Apart from that, the...",
          e: "7 months ago",
          f: "",
          gg: "7 months ago",
          g: "https://bafybeiavnxa6k76wjpjedljka52xlda4dlmyuwkhoeqe4uuxgbjrajwqau.ipfs.dweb.link/sinso5.mp4",
        },
      ],
    };
  },
  computed: {},
  methods: {
    // init() {
    //   let index = parseInt(this.$route?.query?.indexsssssss || 0);
    //   console.log(index);
    //   this.obj = this.$t("d.doDeta")[index];
    // },
    hrefCli(url, type = "_blank") {
      url && window.open(url, type);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.pcLett {
  display: block;
}
.mobLett {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcLett {
    display: none;
  }
  .mobLett {
    display: block;
  }
}
.docCont {
  box-shadow: 0px 2px 10px 1px rgba(163, 175, 178, 0.2);
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 40px;
  background: #ffffff;
}
.fileImg {
  height: 80px;
}
.letts {
  padding: 8px 14px;
  background-color: #daf5ff;
  color: #00abeb;
  border-radius: 10px;
}
.pcImg1 {
  height: 234px;
}
.flexws {
  display: flex;
  justify-content: space-between;
}
.pcCont {
  width: 410px;
  overflow: hidden;
}
.marRig {
  margin-right: 22px;
}
.borLett {
  padding: 14px;
  margin-top: 6px;
}
.botts {
  border: 1px solid #00abeb;
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 80px;
  position: relative;
}
.borNews {
  position: absolute;
  height: 8px;
  width: calc(100% + 2px);
  left: -1px;
  bottom: -1px;
  background: linear-gradient(84.36deg, #6e5ae7 4.5%, #3dadde 90.42%);
}
.lettHe {
  height: 162px;
  margin-bottom: 10px;
  color: #ffffff;
}
</style>
