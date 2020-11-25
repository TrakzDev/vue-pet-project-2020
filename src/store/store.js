import Vue from 'vue'
import Vuex from 'vuex'
import asyncItems from "@/store/asyncItems";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { asyncItems }
})
