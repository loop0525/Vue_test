<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="age" label="Age" width="180" />
    <el-table-column prop="email" label="Email" />
    <el-table-column prop="create_time" label="CreateTime" width="180" />
    <el-table-column prop="update_time" label="UpdateTime" width="180" />
  </el-table>
</template>


<script>
    export default{
        data(){
            return{
                tableData:[]
            }
        },
        created:function(){
            console.log("Header被创建")
            this.$axios({
                method: "get",
                url:"/user/2"
            })
            .then((response)=>{  //使用箭头函数，this作用域继承父级
                console.log(response)
                this.tableData = response.data
            })
            .catch(function(error){
                console.log(error)
            })
        },
        mounted:function(){
            console.log("Header被挂载(渲染)")
        }
    }
</script>