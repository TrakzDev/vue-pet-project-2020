<template>
  <div class="asyncItem">
    <h3>{{ item.title }}</h3>
    <p>{{ item.text }}</p>
    <p>{{ item.mail }}</p>
    <p>{{ $t(`Pages.Form.Chooses.${item.choose}`) }}</p>
    <ul>
      <li v-for="(choose, index) in item.multiChoose" :key="index">
        {{ $t(`Pages.Form.MultiChooses.${choose}`) }}
      </li>
    </ul>
    <div
        id="diode"
        v-if="item.diode"
        :class="item.diodeColor === 'red' ? 'red' : 'green'"
    />
  </div>
</template>

<script>
export default {
  name: "AsyncItem",
  props: {
    item: Object
  }
}
</script>

<style scoped>
  .asyncItem {
    min-width: 200px;
    height: 170px;
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    margin: 10px;
  }

  h3, p, ul {
    margin: 7px;
  }

  ul {
    padding-left: 20px;
  }

  #diode {
    height: 10px;
    width: 10px;
    position: absolute;
    top: 12px;
    right: 8px;
    border-radius: 50%;
  }

  #diode.red {
    background-color: red;
  }

  #diode.green {
    background-color: green;
  }
</style>
