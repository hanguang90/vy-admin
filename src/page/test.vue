/**
* Created by bk on 2017/3/28.
*/
<template>
    <div class="map">
        <my-amap></my-amap>
    </div>
</template>

<script>
    import myAmap from '../components/amap'

    export default {
        name: 'test',
        components: {
            myAmap
        }
    }
</script>

<style scoped>

.map{
    height: 100%;
}

</style>

 