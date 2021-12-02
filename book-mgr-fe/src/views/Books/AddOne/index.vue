<template>
    <div>
    <a-modal
      title="添加书籍"
      :visible="props.show"
      @ok="submit"
      @cancel="close"
    >
      <a-form :label-col="{span:6}">
          <a-form-item  label="书名">
              <a-input v-model:value="addForm.name"></a-input>
          </a-form-item>
           <a-form-item label="价格">
              <a-input-number v-model:value="addForm.price"  :min='0' :max="99999"></a-input-number>
          </a-form-item>
           <a-form-item  label="作者">
              <a-input v-model:value="addForm.author"></a-input>
          </a-form-item>
           <a-form-item  label="出版日期">
              <a-date-picker v-model:value="addForm.publishDate"></a-date-picker>
          </a-form-item>
           <a-form-item label="分类">
              <a-input v-model:value="addForm.classify" ></a-input>
          </a-form-item>
      </a-form>

    </a-modal>
    </div>
</template>

<script src='./index.js'></script>

<style lang="scss" scoped>

</style>