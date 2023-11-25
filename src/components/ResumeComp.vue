<template>
  <div class="resume-container">
    <img src="@/images2/002.png" alt="나의 이미지" />
    <div class="content-box">
      <p>This page is Nayoung Park's resume page. Thank you for visiting.</p>
    </div>
  </div>
</template>

<script>
export default {
  // Resume 컴포넌트의 JavaScript 부분
};
</script>

<style scoped>
.resume-container {
  display: flex;
  justify-content: space-around; /* Adjust as needed */
  align-items: center;
  font-family: 'TheJamsil';
}

.content-box {
  font-family: 'TheJamsil';
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>