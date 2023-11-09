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
          <Card
            class="item"
            v-for="(item, index) in hasHospitalArr"
            :key="index"
            :hospitalInfo="item"
          ></Card>
        </div>
        <!-- 分页器 -->
        <div class="demo-pagination-block">

          <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :background="true"
            layout=" prev, pager, next, jumper,->,total, sizes,"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
          />
        </div>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reqHospital } from "@/api/home/index";

import Carousel from "./carousel/index.vue";
//@ts-ignore
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
//@ts-ignore
import Card from "./card/index.vue";
import { onMounted, ref } from "vue";
// 分页器页码
let pageNo = ref<number>(1);
// 一页展示多少条数据
let pageSize = ref<number>(10);
// 存储已有的医院的数据
let hasHospitalArr = ref([]);
// 存储已有医院的总个数
let total = ref(0);

// 组件挂载完毕发一次请求
onMounted(() => {
  getHospitalInfo();
});

const getHospitalInfo = async () => {
  // 获取医院的数据：默认获取第一页，一页10个医院的数据
  let result: any = await reqHospital(pageNo.value, pageSize.value);
  if (result.code == 200) {
    hasHospitalArr.value = result.data.content;
    // 存储医院的总个数
    total.value = result.data.totalElements;
  }
};

// 分页器页面发生变化时的回调
const currentChange = () =>{
  getHospitalInfo()
}
// 分页器下拉菜单变化的时候触发
const sizeChange =()=>{
  getHospitalInfo()
}
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
