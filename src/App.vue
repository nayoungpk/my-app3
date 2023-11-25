<template>
  <div id="index">
      <header>
      na young park
      <br/>
      portfolie
    </header>

    <div id="container">
      <div id="nav">
        <ul class="menu">
          <li>
            <a href="#">introduction</a>
            <ul class="submenu">
              <li><router-link to="/selfintro"> 자기소개서 </router-link></li>
              <li><router-link to="/resume"> 이력서 </router-link></li>
            </ul>
          </li>
          <li>
            <a href="#">project</a>
            <ul class="submenu">
              <li><router-link to="/project1"> project1 </router-link></li>
              <li><router-link to="/project2"> project2 </router-link></li>
              <li><router-link to="/project3"> project3 </router-link></li>
            </ul>
          </li>
          <li>
            <a href="#">contest</a>
            <ul class="submenu">
              <li><router-link to="/contest1"> Contest1 </router-link></li>
            </ul>
          </li>
          <li>
            <a href="#">career</a>
            <ul class="submenu">
              <li><router-link to="/career1"> 자격증 </router-link></li>

            </ul>
          </li>
        </ul>
      </div>
      <br /> <br />
        <hr />
        <router-view />
        <hr />
      </div>
    
  </div>

  <div style="display: flex; flex-direction: row;">
    <main id="main11"></main>
    <main id="main22"></main>
  </div>

</template>

<style>
*{
  text-decoration: none; /* 밑줄을 지움 */
  color: black; /* 글자 색상을 검정으로 지정 */
}
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
#nav {
  width: 100%;
}

.menu {
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  position: relative; /* Make the parent (.menu) relative */
}
.menu > ul > li {
  text-align: right;
  }

.menu > li {
  margin-right: 20px;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0; /* Adjust the right property to position the submenu to the right */
  width: 800px;
  align-items: flex-start; /* Left-align the submenu items */
}
.submenu > li {
  margin-right: 50px; /* 각 li 요소 사이에 오른쪽 여백을 10px로 설정 */
  padding-right: 20px;
}

.menu > li:hover .submenu {
  display: flex;
  justify-content: flex-end;
  margin-left: 0; /* Adjust the margin to your preference */
  padding: 50px;
}

body {
    font-family: 'TheJamsil';
    font-weight: bolder;
    color: black;
    }
  
  header {
    height: 700px;
    text-align: left;
    font-size: 300px;
    margin-bottom: 50px;
    margin-left: 80px;
  }
  #index{
    font-size: 60px;
    
  }
  .container {
    display: grid;
    grid-template-rows: 400px 1fr;
    text-align: center;
    margin: 100px;
  }
  
  nav {
    font-family: 'TheJamsil';
    margin-left: 20px;
    font-size: 45px;
    margin-top: 150px;
    
  }
  nav > a {
    float: right;
  }
  footer {
    font-family: 'TheJamsil';
    text-align: center; /* Add this line to center-align text */
  }
</style>