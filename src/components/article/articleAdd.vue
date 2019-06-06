<template>
  <div class="articleAdd">
    <Form :label-width="80">
      <FormItem label="文章标题">
        <Input placeholder="please input article title"></Input>
      </FormItem>
      <FormItem label="文章简介">
        <Input placeholder="please input article info" type="textarea" :rows="4"></Input>
      </FormItem>
      <FormItem label="文章封面"></FormItem>
      <FormItem label="标签">
        <Select>
          <Option v-for="item in tagList" :value="item.tid" :key="item.tid">{{ item.tag_name }}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <div>
          <mavon-editor
            ref="md"
            :value="articleData.markdownText"
            @imgAdd="imgAdd"
            :ishljs="true"
            @change="articleSave"
          ></mavon-editor>
        </div>
      </FormItem>
      <FormItem>
          <Button type="primary" icon="ios-send" @click="onPublish">发布</Button>
          <Button type="primary" icon="ios-document" @click="onSave">存为草稿</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String
    },
    articleData: {
      type: Object,
      default() {
        return {
          title: "", // 标题
          preface: "", // 前言
          cover: "", // 文件路径
          tag_id: "", // 标签
          markdownText: "", // 编辑内容
          markdownHtml: "", // 显示内容
          state: 1
        };
      }
    }
  },
  data() {
    return {
       tagList:[]
    };
  },
  methods:{
      onPublish(){

      },
      onSave(){

      },
      imgAdd(){

      },
      articleSave(){

      }
  }
};
</script>
<style>
</style>
