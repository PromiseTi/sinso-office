<!--
* about news h-
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="padd-tb-ba backGra pcNews">
      <div class="malrCont">
        <h3
          class="margin-bottom-qi text-center coloBs lin-height-18"
          style="font-size: 70px"
        >
          {{ $t("h.newsList.a") }}
        </h3>
        <div class="flex flex-wrap">
          <div
            v-for="(item, index) in $t('h.newsList.bList')"
            :key="index"
            class="wow fadeInUp pointer pcCont"
            :class="(index + 1) % 3 != 0 && 'margin-right-sm'"
          >
            <div v-if="item.hrefs" @click="hrefCli(item.hrefs)">
              <img src="/sinso-logo.png" style="height: 40px" />
              <div>
                <h4 class="text-ellipsis-3 coloFFF h4Height">
                  {{ item.content }}
                </h4>
                <div class="text-right">
                  <p class="ininBlck">{{ item.source }}</p>
                </div>
              </div>
            </div>

            <NuxtLink v-else :to="localePath({ name: item.toLink })">
              <img src="/sinso-logo.png" style="height: 40px" />
              <div>
                <h4 class="text-ellipsis-3 coloFFF h4Height">
                  {{ item.content }}
                </h4>
                <div class="text-right">
                  <p class="ininBlck">{{ item.source }}</p>
                </div>
              </div>
            </NuxtLink>
            <div class="bor_bot"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="backGra coloFFF padding-tb mobNews">
      <div class="mobCont">
        <h2 class="margin-bottom text-center">{{ $t("h.newsList.a") }}</h2>
        <div
          v-for="(item, index) in $t('h.newsList.bList')"
          :key="index"
          class="wow fadeInUp"
        >
          <div v-if="item.hrefs" @click="hrefCli(item.hrefs)" class="docCont">
            <img class="fileImg" src="/ecoPartner/img-filecoi.png" />
            <div>
              <h4 class="margin-bottom-xs">{{ item.content }}</h4>
              <p class="fontSize-14 colo999">{{ item.source }}</p>
            </div>
          </div>

          <NuxtLink
            v-else
            :to="localePath({ name: item.toLink })"
            class="docCont"
          >
            <img class="fileImg" src="/ecoPartner/img-filecoi.png" />
            <div>
              <h4 class="margin-bottom-xs">{{ item.content }}</h4>
              <p class="fontSize-14 colo999">{{ item.source }}</p>
            </div>
          </NuxtLink>
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
    hrefCli(url, type = "_blank") {
      window.open(url, type);
    },
    // init() {
    //   let index = parseInt(this.$route?.query?.indexsssssss || 0);
    //   console.log(index);
    //   this.obj = this.$t("d.doDeta")[index];
    // },
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
}
.docCont {
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 30px;
  border: 2px solid #317cb6;
  color: #ffffff;
}
.fileImg {
  height: 80px;
}
.pcCont {
  border-radius: 2px;
  border-left: 4px solid #317cb6;
  border-right: 4px solid #317cb6;
  border-top: 4px solid #317cb6;
  padding: 20px;
  width: 450px;
  margin-bottom: 30px;
  position: relative;
}
.bor_bot {
  position: absolute;
  width: calc(100% + 4px);
  height: 4px;
  background: linear-gradient(84.36deg, #6e5ae7 4.5%, #3dadde 90.42%);
  bottom: 0px;
  left: 0px;
}
.h4Height {
  height: 70px;
  margin-top: 20px;
}
.ininBlck {
  display: inline-block;
  color: #ffffff;
  border: 1px solid #317cb6;
  padding: 6px 30px;
  font-size: 14px;
}
</style>
