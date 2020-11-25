<template>
  <div class="layoutWithPopup">
    <Overlay :is-show="isPopupOpen">
      <button @click="openPopup()">
        {{ $t('Pages.Popup.buttonOpen') }}
      </button>
      <button @click="openPopup(true)" >
        {{ $t('Pages.Popup.buttonOpenLittle') }}
      </button>
    </Overlay>
    <Popup
      v-if="isPopupOpen"
      @close="isPopupOpen = false"
      :is-little="isLittle"
    >
      <p v-if="!isLittle">
        {{ $t('Pages.Popup.popupText') }}
      </p>
      <p v-else>
        {{ $t('Pages.Popup.popupTextLittle') }}
      </p>
    </Popup>
  </div>
</template>

<script>
import Popup from "@/components/Popup";
import Overlay from "@/components/Overlay";

export default {
  name: "withPopup",
  components: {
    Overlay,
    Popup
  },
  data() {
    return {
      isPopupOpen: false,
      isLittle: false
    }
  },
  methods: {
    openPopup(little = false) {
      this.isPopupOpen = true
      this.isLittle = little
    }
  }
}
</script>

<style>
  .layoutWithPopup button {
    display: block;
    margin: 5px;
    user-select: none;
  }
</style>
