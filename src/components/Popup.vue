<template>
  <div
      class="popup"
      :class="isLittle ? 'little' : ''"
  >
    <slot/>
    <button @click="close">
      {{ $t('Pages.Popup.buttonClose') }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    isLittle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
  .popup {
    width: 280px;
    height: 160px;
    margin: auto;
    border: 2px solid black
  }

  .popup.little {
    width: 200px;
    height: 90px;
  }

  .popup button {
    width: 120px;
    margin-left: 80px;
  }

  .popup.little button {
    margin-left: 40px;
  }

  .popup p {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }

  .popup.little p {
    font-size: 16px;
    font-weight: normal;
  }
</style>
