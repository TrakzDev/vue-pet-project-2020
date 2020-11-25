<template>
  <div class="layoutMain">
    <h2>
      {{ $t("Pages.Main.title") }}
    </h2>
    <p v-html="$t('Pages.Main.greetings')"/>
    <h4>
      {{ $t("Pages.Main.Instructions.title") }}
    </h4>
    <p v-html="$t('Pages.Main.Instructions.first')" />
    <h4>
      {{ $t("Pages.Main.Includes.title") }}
    </h4>
    <ol>
      <li v-for="(item, index) in $t('Pages.Main.Includes.Positions', { returnObjects: true })"
          :key="index">
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      title: "New Title"
    }
  }
}
</script>

<style scoped>
  h4 {
    margin-bottom: -10px;
  }
  ol {
    padding-left: 15px;
  }
</style>
