<template>
    <div>
        <a-card>
            <h2>图书列表</h2>

            <a-divider></a-divider>

           <space-between>
            <div class="search">
                <a-input-search placeholder="根据书名搜索" enter-button></a-input-search>
            </div>

            <a-button @click="show=true">添加一条</a-button>
           </space-between>

            <a-divider></a-divider>

            <a-table :columns="columns" :data-source="list">
                <!-- <template #publishDate="data">
                    {{data.record.publishDate}}
                </template> -->
            </a-table>

        </a-card>
        <add-one v-model:show="show"
        ></add-one>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
    @import './index.scss'
</style>