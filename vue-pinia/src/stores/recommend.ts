import { reactive, computed, toRefs } from "vue";
import { defineStore } from "pinia";

import type { Banner } from "@/types/data";
import { requestTopBanners } from "@/services/recommend";

export type RecommendState = {
  banners: Banner[];
};

export const useRecommendStore = defineStore("recommend", () => {
  const state = reactive<RecommendState>({
    banners: [],
  });

  const topFour = computed(() => {
    return state.banners.filter((_, i) => i < 4);
  });

  const requestBannersAction = async () => {
    const res = await requestTopBanners();
    state.banners = res.banners;
  };

  return { ...toRefs(state), topFour, requestBannersAction };
});
