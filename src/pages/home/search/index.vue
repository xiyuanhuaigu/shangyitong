<template>
    <div class="search">
        <el-autocomplete clearable placeholder="请输入医院名称" class="from" />
        <el-button type="primary" size="default" @click="" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue"
</script>


<style lang="scss" scoped>
.search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    ::v-deep(.el-input__wrapper) {
        width: 600px;
        margin-right: 10px;
    }
}
</style>