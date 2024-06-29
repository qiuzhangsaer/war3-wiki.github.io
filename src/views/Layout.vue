<script setup>
import {useRouter} from 'vue-router';
import {onMounted} from "vue";

const router = useRouter();

const title = E_TITLE  || '';
const email = E_EMAIL  || '';

const goPath = (item) => {
  router.push({
    path: item.path
  });
}

onMounted(() => {
  const { results } = DB.prepare(
      "SELECT * FROM category WHERE name = ?"
  )
      .bind("Bs Beverages")
      .all();
  console.log(results);
});
</script>

<template>
  <t-layout>
    <t-header height="auto">
      <div>
        <t-image
            fit="cover"
            position="top"
            src="/images/background.jpg"
            :style="{ height: '300px' }"
        />
      </div>
<!--      <div class="jumbotron jumbotron-fluid text-center">-->
<!--        <h1 class="display-4">{{ title }}</h1>-->
<!--        <p class="lead">欢迎来到War3维基，这里是魔兽争霸3游戏地图的知识库和资源中心。</p>-->
<!--      </div>-->
    </t-header>
    <t-content>
      <router-view :key="$route.path"/>
    </t-content>
    <t-footer>
      66
<!--      <div class="">-->
<!--        <div class="footer-content">-->
<!--          <div class="footer-column">-->
<!--            <h5>联系方式</h5>-->
<!--            <p>Email: <a href="mailto:{{ email }}" class="text-light">{{ email }}</a></p>-->
<!--          </div>-->
<!--          <div class="footer-column">-->
<!--            <h5>关于我们</h5>-->
<!--            <ul class="list-unstyled">-->
<!--              <li><a href="#" class="text-light">首页</a></li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="footer-bottom">-->
<!--          <p>© 2023 {{ title }}. All Rights Reserved.</p>-->
<!--        </div>-->
<!--      </div>-->
    </t-footer>
  </t-layout>
</template>

<style lang="less" scoped>
.jumbotron {
  background-image: url('/images/background.jpg');
  background-size: cover;
  height: 300px;
}
.jumbotron h1, .jumbotron p {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.card {
  border: none;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-weight: bold;
}

.footer-container {
  background-color: #343a40;
  color: #ffffff;
  padding-top: 30px;
  padding-bottom: 30px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-column {
  flex-basis: 33%;
  padding-right: 30px;
}

.footer-column:last-child {
  padding-right: 0;
}

.footer-column h5 {
  margin-bottom: 15px;
}

.footer-column p {
  margin-bottom: 10px;
}

.footer-column ul {
  padding-left: 0;
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 5px;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
}
</style>