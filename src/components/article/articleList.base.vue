<template>
    <div>
        <Table :columns="columns" border></Table>
        <Page></Page>
    </div>
</template>

<script>
export default {
    data(){
        return{
            columns:[
                {
                    title:"标题" 
                },{
                    title:"标题" 
                },{
                    title:"标题" 
                },{
                    title:"标题" 
                }
            ]
        }
    }
}
</script>

<style>

</style>
