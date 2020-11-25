<template>
  <div class="header">
    <div class="header-left">
      <img src="../../assets/logo.png"/>
      <Menu/>
    </div>
    <Localization/>
  </div>
</template>

<script>
import BtnChangeLocalization from "@/components/Header/BtnChangeLocalization";
import Menu from "@/components/Header/Menu";

export default {
  name: "Header",
  components: {
    Localization: BtnChangeLocalization,
    Menu
  }
}
</script>

<style scoped>
  .header {
    height: 65px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }

  .header-left {
    display: flex;
  }

  .header img {
    height: 60px;
    width:60px;
    margin-left: 10px;
    transition: transform 0.3s;
  }

  .header img:hover {
    transform: scale(1.2);
  }
</style>
