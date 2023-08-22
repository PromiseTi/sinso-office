<template>
  <div>
    <div class="pcEco">
      <div v-if="index == 0" class="ecoDetail ecoMobile">
        <div class="headTitle flex al-cen jc-cen">
          <h1>{{ obj.h1 }}</h1>
          <img src="../static/ecoPartner/img-hezuo-logo2@2x.png" alt="" />
        </div>
        <div class="bgTitle">
          <h1>{{ obj.h2 }}</h1>
          <p>{{ obj.text1 }}</p>
        </div>
        <div class="detailCon">
          <h1>{{ obj.h3 }}</h1>
          <p class="mobJip" v-for="(item, index) in obj.list" :key="index">
            {{ item }}
          </p>
        </div>
      </div>

      <div v-if="index == 1" class="ecoDetail ecoMobile">
        <div class="headTitle flex al-cen jc-cen">
          <h1>{{ obj3.h1 }}</h1>
          <img src="../static/ecoPartner/img-hezuo-logo3@2x.png" alt="" />
        </div>
        <div class="bgTitle bgTitle1 bgTitle2">
          <h1>{{ obj3.h2 }}</h1>
          <p>{{ obj3.text1 }}</p>
          <p>{{ obj3.text2 }}</p>
          <p>
            <a href="https://oort.digital/">{{ obj3.text3 }}</a>
          </p>
        </div>
        <div class="detailCon">
          <div>
            <h1>{{ obj.h3 }}</h1>
            <p v-for="(item, index) in obj3.list" :key="index">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="index == 2" class="ecoDetail ecoMobile">
        <div class="headTitle flex al-cen jc-cen headTitle1">
          <h1>{{ obj2.h1 }}</h1>
          <img src="../static/ecoPartner/img-hezuo-logo1@2x.png" alt="" />
        </div>
        <div class="bgTitle bgTitle1">
          <h1>{{ obj2.h2 }}</h1>
          <p>{{ obj2.text1 }}</p>
          <p>{{ obj2.text2 }}</p>
          <p>
            <a href="https://poly.network/#/">{{ obj2.text3 }}</a>
          </p>
        </div>
        <div class="polyDetail">
          <h1>{{ obj2.h3 }}</h1>
          <div>
            <h3>{{ obj2.h4 }}</h3>
            <p class="con">{{ obj2.con1 }}</p>
          </div>
          <div>
            <h3>{{ obj2.h5 }}</h3>
            <p class="con margin-bottom-xl">{{ obj2.con2 }}</p>
            <p class="con">{{ obj2.con3 }}</p>
          </div>
          <div class="margin-top-xl margin-bottom-xl text-center">
            <img
              class="img1"
              src="../static/ecoPartner/img-pic1@2x.png"
              alt=""
            />
          </div>
          <div class="margin-bottom-xl">
            <p class="con">
              {{ obj2.con4 }} <span>{{ obj2.con5 }}</span>
            </p>
          </div>
          <div class="margin-bottom-xl">
            <p class="con">{{ obj2.con6 }}</p>
          </div>
          <div>
            <img
              class="img1"
              style="width: 100%"
              src="../static/ecoPartner/img-pic2@2x.png"
              alt=""
            />
          </div>
          <div class="margin-bottom-xl">
            <h3>{{ obj2.h6 }}</h3>
            <p class="con margin-bottom-xs">{{ obj2.con7 }}</p>
            <p class="con">{{ obj2.con8 }}</p>
          </div>
          <div class="margin-bottom-bai">
            <h3>{{ obj2.h7 }}</h3>
            <img
              class="img1"
              style="width: 100%"
              src="../static/ecoPartner/img-pic3@2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="pcMob">
      <div v-if="index == 0" class="ecoDetail ecoMobile">
        <div class="headTitle flex al-cen jc-cen">
          <h1>{{ obj.h1 }}</h1>
          <img src="../static/ecoPartner/img-hezuo-logo2@2x.png" alt="" />
        </div>
        <div class="bgTitle">
          <h1>{{ obj.h2 }}</h1>
          <p>{{ obj.text1 }}</p>
        </div>
        <div class="detailCon">
          <h1>{{ obj.h3 }}</h1>
          <p class="mobJip" v-for="(item, index) in obj.list" :key="index">
            {{ item }}
          </p>
        </div>
      </div>

      <div v-if="index == 1" class="ecoDetail ecoMobile">
        <div class="headTitle flex al-cen jc-cen">
          <h1>{{ obj3.h1 }}</h1>
          <img src="../static/ecoPartner/img-hezuo-logo3@2x.png" alt="" />
        </div>
        <div class="bgTitle bgTitle1 bgTitle2">
          <h1>{{ obj3.h2 }}</h1>
          <p class="margin-bottom-sm padding-lr-sm">
            {{ obj3.text1 }} {{ obj3.text2 }}
          </p>
          <p>
            <a href="https://oort.digital/">{{ obj3.text3 }}</a>
          </p>
        </div>
        <div class="detailCon">
          <div>
            <h1>{{ obj.h3 }}</h1>
            <p v-for="(item, index) in obj3.list" :key="index">
              {{ item }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="index == 2" class="ecoDetail ecoMobile">
        <div class="headTitle flex al-cen jc-cen headTitle1">
          <h1>{{ obj2.h1 }}</h1>
          <img src="../static/ecoPartner/img-hezuo-logo1@2x.png" alt="" />
        </div>
        <div class="bgTitle bgTitle1">
          <h1>{{ obj2.h2 }}</h1>
          <p class="margin-bottom-sm">{{ obj2.text1 }} {{ obj2.text2 }}</p>
          <p>
            <a href="https://poly.network/#/">{{ obj2.text3 }}</a>
          </p>
        </div>
        <div class="polyDetail">
          <h1>{{ obj2.h3 }}</h1>
          <div>
            <h3>{{ obj2.h4 }}</h3>
            <p class="con">{{ obj2.con1 }}</p>
          </div>
          <div>
            <h3>{{ obj2.h5 }}</h3>
            <p class="con margin-bottom-xl">{{ obj2.con2 }}</p>
            <p class="con">{{ obj2.con3 }}</p>
          </div>
          <div class="margin-top-xl margin-bottom-xl text-center">
            <img
              class="img1"
              src="../static/ecoPartner/img-pic1@2x.png"
              alt=""
            />
          </div>
          <div class="margin-bottom-xl">
            <p class="con">
              {{ obj2.con4 }} <span>{{ obj2.con5 }}</span>
            </p>
          </div>
          <div class="margin-bottom-xl">
            <p class="con">{{ obj2.con6 }}</p>
          </div>
          <div>
            <img
              class="img1"
              style="width: 100%"
              src="../static/ecoPartner/img-pic2@2x.png"
              alt=""
            />
          </div>
          <div class="margin-bottom-xl">
            <h3>{{ obj2.h6 }}</h3>
            <p class="con margin-bottom-xs">{{ obj2.con7 }}</p>
            <p class="con">{{ obj2.con8 }}</p>
          </div>
          <div class="margin-bottom-bai">
            <h3>{{ obj2.h7 }}</h3>
            <img
              class="img1"
              style="width: 100%"
              src="../static/ecoPartner/img-pic3@2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: this.$route.query.index || 1,
      obj: {
        h1: "ARTHA HEALTH ",
        h2: "Project overview",
        text1:
          "ARTHA HEALTH is a bio-wave data acquisition watch providing health reports based on AI data analysis.",
        h3: "Cooperation direction",
        list: {
          text2:
            "As the collection of lifestyle data involves a large amount of information across a variety of dimensions, ",
          text3:
            "the reliability of the data appears to be particularly important. ",
          text4:
            "The distributed storage and digital time-stamp of blockchain right meet the requirements of the project.  ",
          text5:
            "Since the processes accessing to current storage ecosystems are too complex, ARTHA HEALTH adopts the   ",
          text6:
            "SDK of SINSO Getway, ensuring the efficient decentralized storage of health data.  ",
        },
      },
      obj2: {
        h1: "Poly Network",
        h2: "Project overview",
        text1:
          "Poly Network is a cross-chain protocol that integrates more than 20 blockchains such as Ethereum, Avalanche, ",
        text2:
          "Fantom, BNB Chain, etc., to help on-chain assets achieve better transfer. ",
        text3: "Website:https://poly.network/#/",
        h3: "Cooperation direction",
        h4: "The Question Arising",
        con1: `With the development of Web3.0, the isolated data land has greatly restricted interoperability. But what attracts our attention in addition to cross-chain assets,
should be data. If regard Filecoin as the data base, it would be a great idea to use its content addressing (CID) to ensure data security and consistency. However,
there exist limitations to this idea, including the efficiency issues of interactions in Filecoin. How to further advance cross-chain operation and expand its
connotation? — The combination of Poly Network and SINSO will improve the flexibility and extensibility of Web3 applications. In essence, Poly Network never
confined itself to the cross-chain of assets; and always agrees with SINSO on the big picture.`,
        h5: "The Significance of SINSO * Poly Network Cooperation",
        con2: `Poly Network's vision is: To enhance connections between ledgers by providing interoperability in Web 3.0. This interoperability can be further augmented in
conjunction with SINSO Getway, while further improving the security of NFT metadata assets. “Ensuring atomicity operation in NFT transactions” is an integral
part of the future NFT market.`,
        con3: `SINSO provides a decentralized caching layer combined with content addressing that allows NFT metadata to be kept consistent and immutable. In cross-chain
operations, the use of CID will relieve you from worrying about how data is stored and organized in(to) Filecoin, nor the consistency and security issues in the
rollback of cross-chain transactions, or even cost — there are very low-cost solutions.`,
        con4: "Read more on ",
        con5: "“The Application Paradigm of SINSO Getway”",
        con6: `SINSO can also extend NFT across chains to Polygon, Avalanche, Fantom, BNB Chain, Arbitrum, Optimism, HECO, OKC, Neo, Ontology, Zilliqa, Elrond, Gnosis
Chain, and so on, greatly realizing the application value of metadata. Compared with other cross-chain systems, Poly Network is more environmentally friendly
due to its feature of easy embedding. Cross-chain operations are critical to SINSO, which means we can open Filecoin resources to data-oriented NFTs to
maximize the value of the data. For example, you can build a data lending market on the cross-chain transaction of data-set NFTs. Thanks to its excellent security
and censorship resistance, Filecoin has a wide range of applications in data rights confirmation.`,
        h6: "Application Scenes",
        con7: "Scene 1: To ensure atomicity of metadata operations in NFT trading. Value: for NFT exchanges to provide a secure NFT trading environment.",
        con8: `Scene 2: DAPPs deployed on multiple chains achieve consistency of metadata access through Poly Network and SINSO Getway. Value: Get data stored in Filecoin
to maximize its value across multiple chains;`,
        h7: "Sample Code",
      },
      obj3: {
        h1: "OORT Digital",
        h2: "Project overview",
        text1:
          "Oort Digital is a GameFi 3.0 ecosystem that adds utility-based functionality on top of NFTs and puts them to",
        text2:
          "work through financialization, gamification, and interoperability.",
        text3: "Website https://oort.digital/",
        h3: "Cooperation direction",
        list: {
          text1:
            "Since Oort Digital and SINSO established an ecological partnership, there have been many discussions between the two parties on how to make the project more decentralized.",
          text2: `Currently, OORT only stores the Oort Digital NFTsstatic metadata on-chain, while the dynamic metadata
(strength, intelligence, etc.) is stored in centralized servers. With the SINSO technology, OORT can now store
the dynamic data on Filecoin without degrading gaming experience. This will greatly increase the intrinsic
value of the Oort Digital NFTs.`,
          text3: `Besides, SINSO will provide Decentralized Identity (DID) solutions and a metadata browser to the citizens of the
Oort Universe, as Oort Digital will soon introduce SPARK, a non-transferrable loyalty point. With SINSO's
technology, the loyalty points will be associated with the decentralized identity, along with other social media
accounts.The decentralized identity + loyalty points system will allow Oort Digital to evaluate and reward
different community members more efficiently and fairly.Currently, Oort Digital only supports NFTs on Polygon
and Binance Smart Chain (BSC), but OORT aims for multi-chain NFTs. With the support of SINSO, this plan
finally has its detailed solutions.`,
          text4: `SINSO integrates Filecoin's data layer and complies with FVM standards, providing a testing and compatibility
environment for Filecoin-based applications. The standardization will help OORT Digital connect more
on-chain applications, greatly expanding Oort Digital's ecosystem.`,
        },
      },
    };
  },
};
</script>
<style scoped>
.pcEco {
  display: block;
}
.pcMob {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcEco {
    display: none;
  }
  .pcMob {
    display: block;
  }
  .ecoMobile {
    width: 100vw;
    overflow-x: hidden;
  }
  #app p {
    font-size: 14px;
    padding: 0px 10px;
  }
  #app .bgTitle {
    height: auto;
  }
  #app .detailCon {
    padding-left: 10px;
    padding-right: 10px;
  }
  #app .detailCon > div {
    width: 100%;
  }
  #app .mobJip {
    display: inline;
    padding: 0px;
  }
  #app h1 {
    font-size: 18px;
  }
  #app h1::after {
    width: 50%;
    left: 50%;
    right: 0;
    transform: translate(-50%);
  }
  #app h3 {
    padding-left: 10px;
  }
}
.flex {
  display: flex;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.al-cen {
  align-items: center;
}
.jc-cen {
  justify-content: center;
}
.headTitle > h1 {
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: 800;
  color: #050607;
  margin-right: 42px;
}
.headTitle > img {
  height: 40px;
  margin: 50px 0;
}

.bgTitle {
  height: 260px;
  background-image: url(../static/ecoPartner/img-hezuo-banner2@2x.png);
  background-size: cover;
  padding-top: 60px;
  padding-bottom: 30px;
}
.bgTitle h1,
.detailCon h1 {
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
}
.bgTitle h1::after,
.detailCon h1::after {
  content: "";
  display: inline-block;
  position: absolute;
  right: calc(50% - 180px);
  width: 360px;
  height: 9px;
  background: #ffffff;
  opacity: 0.28;
  bottom: -3px;
}
.bgTitle > p,
.bgTitle > p > a {
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
}
.detailCon {
  background: linear-gradient(0deg, #d4eaf3 0%, rgba(255, 255, 255, 0) 100%);
  text-align: center;
  padding-bottom: 80px;
}
.detailCon > div {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.detailCon h1 {
  color: #0f1416;
  margin: 50px 0;
}
.detailCon h1::after {
  width: 428px;
  height: 9px;
  background: #00abeb;
  right: calc(50% - 214px);
}
.detailCon p {
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #0f1416;
  line-height: 26px;
  font-size: 15px;
  margin-bottom: 20px;
}
.detailCon > p {
  margin-bottom: 20px;
}
.bgTitle1 {
  height: 287px;
  padding-top: 50px;
  background-image: url(../static/ecoPartner/img-hezuo-banner1@2x.png);
}
.bgTitle1 > h1 {
  margin-bottom: 20px;
}
.bgTitle1 > p {
  line-height: 2;
}
.polyDetail {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 98px;
}
.polyDetail > h1 {
  text-align: center;
  margin-bottom: 80px;
}
h3 {
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #00abeb;
  margin: 50px 0 30px 0;
}
.con {
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #0f1416;
  line-height: 30px;
  font-size: 15px;
}
.con > span {
  color: #2ab5e9;
}
.img1 {
  width: 80%;
  margin: auto;
}
.bgTitle2 {
  background-image: url(../static/ecoPartner/img-hezuo-banner3@2x.png);
}
</style>
