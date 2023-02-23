import { defineStore } from "pinia";

import type { HotRecommend } from "@/types/data";
import { requestHotRecommends } from "@/services/recommend";

export type HotState = {
  hotList: HotRecommend[];
};

export const useHotStore = defineStore("hot", {
  state: (): HotState => ({
    hotList: [],
  }),
  getters: {
    topFour: (state) => state.hotList.slice(0, 10),
  },
  actions: {
    async getHotList() {
      const res = await requestHotRecommends(8);
      this.hotList = res.result;
    },
  },
});
