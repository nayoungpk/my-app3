<template>
  <div>
    <img :src="myImage" alt="header" />
    <div class="butt">
      <a href="https://www.instagram.com/na_young_park/">
        <img :src="myImage2" alt="butt1" />
      </a>
      <a href="https://www.youtube.com/watch?v=xfuskC7G7R8">
        <img :src="myImage3" alt="butt2" />
      </a>
      <a href="https://blog.naver.com/youngjjng1">
        <img :src="myImage4" alt="butt3" />
      </a>
    </div>
    <div class="intr">
      <h3>NEWS+</h3>
    </div>
    <div class="context" style="display: flex; flex-direction: row;">
      <a href="https://blog.naver.com/youngjjng1/221985155216">
        <img :src="myImage6" alt="context" />
      </a>
      <a href="/">
        <img :src="myImage7" alt="context" />
      </a>
      <a href="/">
        <img :src="myImage8" alt="context" />
      </a>
      <a href="https://blog.naver.com/youngjjng1/222892162075">
        <img :src="myImage10" alt="context" />
      </a>
    </div>
  </div>
</template>

<script>
import myImage from 'C:/Users/박나영/Desktop/sample/src/images2/007-1.png';
import myImage2 from 'C:/Users/박나영/Desktop/sample/src/images2/007-2.png';
import myImage3 from 'C:/Users/박나영/Desktop/sample/src/images2/007-3.png';
import myImage4 from 'C:/Users/박나영/Desktop/sample/src/images2/007-4.png';
import myImage6 from 'C:/Users/박나영/Desktop/sample/src/images2/007-6.png';
import myImage7 from 'C:/Users/박나영/Desktop/sample/src/images2/007-7.png';
import myImage8 from 'C:/Users/박나영/Desktop/sample/src/images2/007-8.png';
import myImage10 from 'C:/Users/박나영/Desktop/sample/src/images2/007-10.png';

export default {
  data() {
    return {
      myImage: myImage,
      myImage2: myImage2,
      myImage3: myImage3,
      myImage4: myImage4,
      myImage6: myImage6,
      myImage7: myImage7,
      myImage8: myImage8,
      myImage10: myImage10,
    };
  },
};
</script>

<style scoped>
img {
  display: block; /* 이미지를 블록 요소로 설정하여 가로 중앙 정렬을 수월하게 함 */
  margin: 0 auto; /* 가로 중앙 정렬 */
  max-width: 100%; /* 이미지의 최대 너비를 부모 요소의 너비에 맞춤 */
  height: auto; /* 이미지의 세로 비율을 유지함 */
  width: 100%; /* 이미지의 가로 너비를 부모 요소에 맞춤 */
}
.butt {
  display: flex;
}

.butt a {
  flex: 1;
  margin: 0 5px; /* 이미지 간 간격을 설정할 수 있습니다. */
}

.butt img {
  width: 500px;

}

.intr {
  text-align: center; /* Center the heading */
}

.context {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the items horizontally */
}

.context a {
  margin: 10px; /* Add margin around each image for spacing */
}

.context img {
  max-width: 100%; /* Make sure images don't exceed their container width */
  height: auto; /* Maintain the aspect ratio of the images */
}
</style>