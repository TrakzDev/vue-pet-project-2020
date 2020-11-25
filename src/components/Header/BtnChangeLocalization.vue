<template>
  <div class="localization">
    <button
        @click="$i18n.locale = 'ru'"
        v-show="$i18n.locale != 'ru'"
    >
      {{ rus }}
    </button>
    <button
        @click="$i18n.locale = 'en'"
        v-show="$i18n.locale != 'en'"
    >
      {{ eng }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnChangeLocalization",
  data() {
    return {
      rus: "РУ",
      eng: "EN"
    }
  }
}
</script>

<style>
  .localization {
    margin: 16px;
  }
  .localization button {
    height: 25px;
    width: 45px;
  }
</style>
