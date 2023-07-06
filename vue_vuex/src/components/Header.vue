<template>
    <h1>{{ count }}</h1>
    <button @click="vuex_test">vuex测试</button>
</template>

<script>
    export default{
        computed:{
            count(){
                return this.$store.state.count
            }
        },
        methods:{
            vuex_test(){
                this.$store.commit('increment')
                console.log(this.$store.state.count)
            }
        }
    }
</script>