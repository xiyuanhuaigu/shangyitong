<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel></Carousel>
    <!-- 首页搜索医院表单的区域 -->
    <Search></Search>
    <!-- 底部展示医院的结构 -->
    <el-row gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <Level></Level>
        <!-- 地区 -->
        <Region></Region>
        <!-- 展示医院的结构 -->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item"></Card>
        </div>
        <!-- 分页器 -->
        <div class="demo-pagination-block">
          <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            :background="true" layout=" prev, pager, next, jumper,->,total, sizes," :total="13" />
        </div>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">


import Carousel from './carousel/index.vue';
//@ts-ignore
import Search from './search/index.vue';
import Level from './level/index.vue';
import Region from './region/index.vue';
//@ts-ignore
import Card from './card/index.vue';
import { ref } from 'vue';
// 分页器页码
let pageNo = ref<number>(1)
// 一页展示多少条数据
let pageSize = ref<number>(10)
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0px;
  }
}
</style>