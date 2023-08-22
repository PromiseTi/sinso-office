<!--
* Footer
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <footer>
    <div class="pcFoot">
      <div class="flex align-center footBack">
        <div class="flex align-center justify-between malrCont">
          <div class="flex align-center">
            <img
              class="margin-right-xl"
              src="../static/logo-hori.png"
              style="height: 60px"
            />
            <div class="flex coloFFF contUs">
              <div class="con_fir">CONTACT US</div>
              <div class="con_last">partner@sinso.io</div>
            </div>
          </div>
          <div class="flex align-center">
            <div
              v-for="item in icList"
              :key="item.img"
              class="margin-left pointer"
            >
              <img
                @click="handles(item.href)"
                :src="'/index/qit/' + item.img + '.png'"
                style="width: 25px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backGra mobFoot">
      <h3 class="margin-top-sm margin-bottom-sm text-center">Contact Us</h3>
      <div class="flex justify-center margin-bottom-sm">
        <div class="mobKus">partner@sinso.io</div>
        <client-only> <el-button type="primary">Copy</el-button></client-only>
      </div>
      <div class="flex align-center justify-center">
        <img
          @click="handles(item.href)"
          :src="'/index/qit/' + item.img + '.png'"
          v-for="(item, index) in icList"
          :key="index"
          class="mobfImgs"
        />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      li1: [
        { href: "https://twitter.com/sinsonetwork", img: "foots0" },
        { href: "https://t.me/sinsoEnglish", img: "foots1" },
        {
          href: "",
          img: "foot4",
          name: "Headquarter: Singapore, SG",
        },
      ],
      li2: [
        { href: "https://sinsonetwork.medium.com", img: "foots0" },
        { href: "https://discord.gg/m8eqcHJ5ur", img: "foot3" },
      ],
      liList: [],
      icList: [
        { href: "https://twitter.com/sinsonetwork", img: "foots0" },
        { href: "https://t.me/sinsoEnglish", img: "foots1" },
        { href: "https://sinsonetwork.medium.com", img: "foots2" },
        { href: "https://discord.gg/m8eqcHJ5ur", img: "foots3" },
      ],
    };
  },
  computed: {},
  methods: {
    handles(url, type = "_blank") {
      window.open(url, type);
    },
  },
  created() {},
  mounted() {
    this.liList = [this.li1[0], this.li1[1], ...this.li2];
  },
};
</script>
<style scoped>
.pcFoot {
  display: block;
}
.mobFoot {
  display: none;
}
footer {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 190px;
  overflow: hidden;
}
@media screen and (max-width: 900px) {
  footer {
    height: 190px;
  }
  .pcFoot {
    display: none;
  }
  .mobFoot {
    display: block;
    overflow: hidden;
    background-color: #e8ecef;
    height: 100%;
  }
  .mobKus {
    width: 180px;
    background-color: #ffffff;
    color: #333333;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    margin-right: 20px;
    border-radius: 10px;
  }
  .mobfImgs {
    height: 40px;
    padding: 6px;
    margin: 0px 5px;
  }
}

.footBack {
  border-top: 3px solid #317bb4;
  background-color: #121746;
  height: 190px;
}
.contUs {
  width: 300px;
  border: 2px solid #1ca3fd;
}
.con_fir {
  padding: 8px 10px;
  background-color: #2a3c7e;
}
.con_last {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
