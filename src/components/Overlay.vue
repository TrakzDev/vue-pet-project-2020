<template>
  <div>
    <div :class="className">
      <slot/>
    </div>
    <Loader v-if="withLoader && isShow"/>
  </div>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  name: "Overlay",
  components: {
    Loader
  },
  props: {
    isShow: Boolean,
    isFlex: {
      type: Boolean,
      default: false
    } ,
    withLoader: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      let overlayClass = ''
      if (this.isFlex) {
        overlayClass += 'flexBlock'
      }
      if (this.isShow) {
        overlayClass += 'overlay'
      }
      return overlayClass
    }
  }
}
</script>

<style scoped>
  .flexBlock {
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    background-color: #fff;
    opacity: 0.3;
    z-index: 10;
  }

  .overlay button {
    pointer-events: none;
  }
</style>
