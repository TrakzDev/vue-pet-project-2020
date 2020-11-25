<template>
  <div class="layoutAsync">
    <h3 v-if="!isLoading && !isLoadingFailed">
      {{ $t('Pages.Async.title')}}
    </h3>
    <Overlay
        v-if="!isLoadingFailed"
        :is-show="isLoading"
        :is-flex="true"
        :with-loader="true"
    >
      <AsyncItem
          v-for="(item, index) in asyncItems"
          :key="index"
          :item="item"
      />
    </Overlay>
    <div v-else>
      <p v-html="$t('loadError')"/>
    </div>
  </div>
</template>

<script>
import AsyncItem from "@/components/AsyncItem";
import Overlay from "@/components/Overlay";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Async",
  components: {
    AsyncItem,
    Overlay
  },
  computed: {
    ...mapGetters({
      getAsyncItems: 'asyncItems/getAsyncItems',
      getIsLoading: 'asyncItems/getIsLoading',
      getIsLoadingFailed: 'asyncItems/getIsLoadingFailed',
    }),
    asyncItems() {
      return this.getAsyncItems
    },
    isLoading() {
      return this.getIsLoading
    },
    isLoadingFailed() {
      return this.getIsLoadingFailed
    }
  },
  methods: {
    ...mapActions({
      loadItems: 'asyncItems/loadAsyncItems'
    })
  },
  created() {
    this.loadItems()
  }
}
</script>

<style scoped>
 h3 {
   margin: 15px 10px;
 }
</style>
