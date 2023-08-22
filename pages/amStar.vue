<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="coloBs">
    <div class="pcAm">
      <div class="padd-tb-ba bor_bottbb4 backGra">
        <div class="flex justify-between align-center widthSma marlrAuto">
          <div>
            <div class="margin-bottom-qi letter_spac4">
              <h3 class="coloBs" style="font-size: 90px">AmStar</h3>
              <div class="fontSize-22 coloFFF margin-bottom-xl">
                SINSO-Powered Solutions
              </div>
              <div class="letter_spac6 fontSize-24">
                Data-Oriented Programmable EVM
              </div>
            </div>

            <p
              class="padding-tb-xs text-center pointer coloFFF hvr-wobble-horizontal lanBor"
              style="width: 200px"
              @click="hrefCli('https://mainnet.amstarscan.com/')"
            >
              AmStar
            </p>
          </div>
          <img
            class="margin-bottom-xl"
            style="height: 650px"
            src="/amStar/banner.png"
          />
        </div>
      </div>
      <div class="padd-tb-ba backGra">
        <div class="malrCont">
          <div
            class="margin-bottom fontSize-20 margin-bottom-bai coloFFF contTop"
          >
            AmStar is the engine of SINSO ecology (as Layer 1). First and
            foremost, AmStar provides the basis for applications to build in
            SINSO ecology. The EVM environment provided by AmStar makes it
            possible to flexibly deploy Metaverse applications. Meanwhile,
            AmStar will creatively combine EVM and content addressing in
            distributed storage, specifically conducting an upgrade on Metaverse
            assets through added NFT programmability.
          </div>

          <div class="flex justify-between contEnts">
            <div>
              <h2>A Decentralized Computing System</h2>
              <div>
                Data needs to be decentralized computed directly at the storage
                location without being transferred.
              </div>
            </div>
            <div>
              <h2>Saving Crowdfunding Datasets</h2>
              <div>
                 Important social data comes from individuals, such as travel
                statistics, and global temperature records.
              </div>
            </div>
            <div>
              <h2>Smarter Storage Marketplace</h2>
              <div>
                An example can be to dynamically price storage by time,
                replication level, or regional availability.
              </div>
            </div>
            <div>
              <h2>Intergenerational Storage</h2>
              <div>
                To store data that needs to be passed down through generations.
              </div>
            </div>
          </div>
          <div class="flex justify-between contEnts lives">
            <div>
              <h2>Creating Data DAO</h2>
              <div>
                Establish an economic model for the tokenization of data
                storage, and form a DAO to calculate and coordinate the model.
              </div>
            </div>
            <div>
              <h2>Local storage of NFTs </h2>
              <div>
                Store NFT contents with a registry tracking the contents.
              </div>
            </div>
            <div>
              <h2>Time-locked Data Retrieval</h2>
              <div>
                The datasets will be unlocked only if the company discloses
                the results.
              </div>
            </div>
            <div>
              <h2>Mortgage Loan</h2>
              <div>
                Providing loans to storage providers when they accept trading
                initiated by other users with SINSO tokens at a certain time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobAm">
      <div class="padd-tb backGra">
        <div class="padding-tb-xl mobCont">
          <div class="margin-bottom-qi letter_spac2">
            <h3 class="coloBs fontSize-40">AmStar</h3>
            <div class="fontSize-22 coloFFF margin-bottom-xl">
              SINSO-Powered Solutions
            </div>
            <div class="letter_spac6 fontSize-24">
              Data-Oriented Programmable EVM
            </div>
          </div>
          <div class="text-center">
            <img class="mobImgs" src="/amStar/banner.png" />
          </div>

          <p
            class="padding-tb-xs margin-tb-xl marlrAuto text-center pointer coloFFF lanBor"
            style="width: 200px"
            @click="hrefCli('https://mainnet.amstarscan.com/')"
          >
            AmStar
          </p>
          <div class="fontSize-20">
            <div class="margin-bottom">
              AmStar is the engine of SINSO ecology (as Layer 1). First and
              foremost, AmStar provides the basis for applications to build in
              SINSO ecology. The EVM environment provided by AmStar makes it
              possible to flexibly deploy Metaverse applications. Meanwhile,
              AmStar will creatively combine EVM and content addressing in
              distributed storage, specifically conducting an upgrade on
              Metaverse assets through added NFT programmability.
            </div>
            <div>
              <div class="margin-bottom">
                <h2>Creating Data DAO</h2>
                <div class="coloFFF">
                  Establish an economic model for the tokenization of data
                  storage, and form a DAO to calculate and coordinate the model.
                </div>
              </div>
              <div class="margin-bottom">
                <h2>Local storage of NFTs </h2>
                <div class="coloFFF">
                  Store NFT contents with a registry tracking the contents.
                </div>
              </div>
              <div class="margin-bottom">
                <h2>Time-locked Data Retrieval</h2>
                <div class="coloFFF">
                  The datasets will be unlocked only if the company discloses
                  the results.
                </div>
              </div>
              <div class="margin-bottom">
                <h2>Mortgage Loan</h2>
                <div class="coloFFF">
                  Providing loans to storage providers when they accept trading
                  initiated by other users with SINSO tokens at a certain time.
                </div>
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
.pcAm {
  display: block;
}
.mobAm {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcAm {
    display: none;
  }
  .mobAm {
    display: block;
  }
  .mobImgs {
    margin-bottom: 30px;
    width: 90%;
  }
}
.liansPc {
  display: inline-block;
  cursor: pointer;
  padding: 10px 46px;
  /* border: 1px solid #52f0fe; */
  font-size: 16px;
  border-radius: 50px;
  color: #ffffff;
  background: linear-gradient(270deg, #4facfe 0%, #00f2fe 100%);
}
.quantb {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #4facfe;
  border-radius: 40px;
}

.contTop {
  border-left: 3px solid #0d99ff;
  padding-left: 30px;
}
.contEnts > div {
  height: 250px;
  width: 23%;
  font-size: 16px;
  color: #ffffff;
}
.lives > div {
  height: 140px;
}
.contEnts h2 {
  height: 70px;
  color: #4facfe;
}
</style>
