<script setup>
import {ref} from "vue";
import {useRouter} from 'vue-router';

const router = useRouter();

const data = ref([
  {id: 1, name: '防守地图', intro: '防守地图要求玩家建立并升级防御来抵挡一波又一波的敌人进攻。'},
  {id: 2, name: '对抗地图', intro: '对抗地图提供了与其他玩家竞争的机会，让您体验紧张刺激的多人游戏。'},
  {id: 3, name: '角色地图', intro: '角色地图让玩家扮演不同的角色，体验各种丰富的角色扮演情节和游戏机制。'},
  {id: 4, name: 'TD塔防', intro: 'TD塔防地图要求玩家建立并升级防御塔来抵挡一波又一波的敌人进攻。'},
  {id: 5, name: '战役地图', intro: '战役地图是一个连续的故事情节，玩家可以通过完成一系列的任务来推进剧情。'},
  {id: 6, name: 'ORPG', intro: 'ORPG（Online Role-Playing Game）是一种多人在线角色扮演游戏。'},
  {id: 7, name: '生存地图', intro: '生存地图要求玩家在敌人的进攻下生存并尽量延长生存时间。'},
  {id: 8, name: '其他地图', intro: '其他类型的魔兽争霸3地图。'},
]);

const goPath = (item) => {
  console.log(item)
  // router.push({
  //   path: item.path
  // });
}
</script>

<template>
  <div style="padding:10px">
    <t-row :gutter="[16, 16]">
      <t-col v-for="item in data" :xs="12" :sm="12" :md="12" :lg="6" :xl="4" :key="item.id">
        <t-card class="dashboard-item" @click="goPath(item.id)" :title="item.name" :bordered="false" :hover-shadow="true">
          {{ item.intro }}
          <!--          <template #actions>-->
          <!--          </template>-->
        </t-card>
      </t-col>
    </t-row>
  </div>
</template>

<style lang="less" scoped>
.dashboard-item {
  padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xxl);

  :deep(.t-card__header) {
    padding: 0;
  }

  :deep(.t-card__footer) {
    padding: 0;
  }

  :deep(.t-card__title) {
    font: var(--td-font-body-medium);
    color: var(--td-text-color-secondary);
  }

  :deep(.t-card__body) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    position: relative;
    padding: 0;
    margin-top: var(--td-comp-margin-s);
    margin-bottom: var(--td-comp-margin-xxl);
  }
}
</style>