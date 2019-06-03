<template>
  <div class="admin">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider class="sider" hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>文章管理
              </template>
              <MenuItem name="articleAdd" to="/admin/articleAdd">新增文章</MenuItem>
              <MenuItem name="articleList" to="/articleList">文章列表</MenuItem>
              <MenuItem name="1-3">草稿箱</MenuItem>
              <MenuItem name="1-4">垃圾箱</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>标签管理
              </template>
              <MenuItem name="2-1">新增标签</MenuItem>
              <MenuItem name="2-2">标签列表</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>评论列表
              </template>
            </Submenu>
             <Submenu name="4">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>留言列表
              </template>
            </Submenu>
          </Menu>
        </Sider>
        <Layout class="main">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          
          <router-view/>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
.admin {
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.sider {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 64px;
}
.main {
  left: 200px;
  position: relative;
}
</style>
