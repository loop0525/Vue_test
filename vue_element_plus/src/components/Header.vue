<template>
    <div>
        <h1>{{ word }}</h1>
        <el-button type="success">Success</el-button>
    </div>
</template>

<script scoped>
    export default{
        data(){
            return{
                word:"hello vue"
            }
        }
    }
</script>