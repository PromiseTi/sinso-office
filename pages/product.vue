<!--
* product b
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="pcProd">
      <div class="text-center padd-tb-ba">
        <h1 class="margin-bottom-xl">{{ $t("b.proh") }}</h1>
        <div class="lin-height-2 margin-bottom-xl">
          <p>{{ $t("b.pro1") }}</p>
          <p>{{ $t("b.pro2") }}</p>
          <p>{{ $t("b.pro3") }}</p>
          <p>{{ $t("b.pro4") }}</p>
        </div>
        <img style="width: 700px" src="/product/img-product.png" />
      </div>
      <div class="widthSma marlrAuto">
        <div
          v-for="(item, index) in $t('b.prList')"
          :key="index"
          class="flex align-center justify-between margin-bottom-qi"
          :class="index % 2 == 0 && 'flex-reverse'"
        >
          <img class="prodImg" :src="'/product/p' + index + '.png'" />
          <div class="lin-height-18 prodDi">
            <h2 class="margin-bottom">{{ item.a }}</h2>
            <p>{{ item.b }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mobProd">
      <div class="text-center padding-tb-xl mobCont">
        <img style="width: 80vw" src="/product/img-product.png" />
        <h2 class="margin-tb">{{ $t("b.proh") }}</h2>
        <div class="fontSize-14 lin-height-14 padding-lr-sm">
          <p>{{ $t("b.pro1") }}</p>
          <p>{{ $t("b.pro2") }}</p>
          <p>{{ $t("b.pro3") }}</p>
          <p>{{ $t("b.pro4") }}</p>
        </div>
      </div>
      <div class="mobCont text-center">
        <div
          v-for="(item, index) in $t('b.prList')"
          :key="index"
          class="margin-bottom"
        >
          <img
            class="margin-bottom-sm"
            style="width: 70vw"
            :src="'/product/p' + index + '.png'"
          />
          <div class="lin-height-18 fontSize-14">
            <h2 class="margin-bottom">{{ item.a }}</h2>
            <p>{{ item.b }}</p>
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
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.prodImg {
  height: 380px;
}
.prodDi {
  width: 480px;
}
.pcProd {
  display: block;
}
.mobProd {
  display: none;
}
@media screen and (max-width: 900px) {
  .pcProd {
    display: none;
  }
  .mobProd {
    display: block;
  }
}
</style>
