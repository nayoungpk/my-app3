<template>
  <div style="display: flex; flex-direction: row;">
    <main id="main1"></main>
    <main id="main2"></main>
  </div>
</template>

<script>
export default {
  // 컴포넌트 로직은 필요에 따라 추가
};
</script>

<style scoped>
#main11 {
  background-image: url('/images/coding.jpg');
  height: 1500px;
  width: 70%;
  box-sizing: border-box;
}

#main22 {
  background-image: url('/images/coding2.png');
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center; 
  height: 1200px; 
  width: 30%;
  box-sizing: border-box;
  margin-top: 200px;
}
</style>