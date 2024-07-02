<script setup>
import {onMounted} from "vue";

const title = E_ENV.title  || '';
const intro = E_ENV.intro  || '';
const email = E_ENV.email  || '';
</script>

<template>
  <t-layout>
    <t-header height="auto">
      <div class="h-title">
        <h1>{{ title }}</h1>
        <p>{{ intro }}</p>
      </div>
    </t-header>
    <t-content>
      <router-view :key="$route.path"/>
    </t-content>
    <t-footer>
      <t-row justify="space-between">
        <t-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="footer-item">
            <h2>联系方式</h2>
            <div>
              <t-link hover="color" :href="`mailto:${email}`"><h3>{{ email }}</h3></t-link>
            </div>
          </div>
        </t-col>
        <t-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="footer-item">
            <h2>关于我们</h2>
            <div>
              <t-link hover="color" href="/"><h3>首页</h3></t-link>
            </div>
          </div>
        </t-col>
      </t-row>
      <div class="footer-item">Copyright @ 2023-{{ new Date().getFullYear() }} {{ title }}. All Rights Reserved</div>
    </t-footer>
  </t-layout>
</template>

<style lang="less" scoped>
.h-title{
  height: 300px;
  display: grid;
  align-content: center;
  color: #ffffff;
  text-align: center;
  background-size: cover;
  background-image: url("/images/background.jpg");
  text-shadow: 6px 6px 8px rgba(0, 0, 0, 0.5);
  cursor: default;
  h1{
    font-size: 50px;
    font-weight: 300;
  }
  p{
    font-size: 20px;
    padding-top: 30px;
  }
}
.footer-item {
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>