<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  width: 100% ;
  height: 100%;
}
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    background-color: #ccc;
}
</style>
