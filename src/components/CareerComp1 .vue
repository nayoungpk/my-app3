<template>
    <div class="career">
      <a href="https://blog.naver.com/youngjjng1/222618605416">
        <img :src="myImage5" alt="context" />
      </a>
      <div class="content-box">
     <p>If you'd like to see more details Please press the picture</p>
    </div>
  </div>
</template>

<script>
import myImage5 from 'C:/Users/박나영/Desktop/sample/src/images2/007-5.png';

export default {
  data() {
    return {
      myImage5: myImage5,
    };
  },
};
</script>

<style scoped>
.career {
  display: flex;
}

.content-box {
  font-family: 'TAEBAEKmilkyway';
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-left:50px ;
}
</style>