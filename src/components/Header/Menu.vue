<template>
  <div class="headerMenu">
    <div
        class="headerTab"
        :class="isActive('main')"
        @click="onClick('main')"
    >
      {{ $t("Menu.main") }}
    </div>
    <div
        class="headerTab"
        :class="isActive('async')"
        @click="onClick('async')"
    >
      {{ $t("Menu.withLoading") }}
    </div>
    <div
        class="headerTab"
        :class="isActive('form')"
        @click="onClick('form')"
    >
      {{ $t("Menu.form") }}
    </div>
    <div
        class="headerTab"
        :class="isActive('popup')"
        @click="onClick('popup')"
    >
      {{ $t("Menu.popup") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      currentTab: this.$router.history.current.name
    }
  },
  methods: {
    isActive(tabName) {
      if (tabName === this.currentTab) {
        return 'active'
      }
      return ''
    },
    onClick(tabName) {
      if (tabName !== this.currentTab) {
        this.$store.commit('asyncItems/UNSET_IS_LOADING')
        this.$router.push({ name: tabName })
        this.currentTab = tabName
      }
    }
  }
}
</script>

<style scoped>
  .headerMenu {
    height: 40px;
    display: flex;
    margin: 10px;
  }

  .headerTab {
    width: 100px;
    text-align: center;
    padding: 10px;
    user-select: none;
    cursor: pointer;
    border-right: 1px solid rgba(0, 0, 0, 0.4);
  }

  .headerTab.active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .headerTab:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .headerTab:first-child {
    width: 75px;
    border-radius: 4px 0 0 4px;
  }

  .headerTab:nth-child(3) {
    width: 115px;
  }

  .headerTab:last-child {
    width: 85px;
    border-right: none;
    border-radius: 0 4px 4px 0;
  }
</style>
