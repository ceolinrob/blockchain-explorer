<template>
    <div></div>
</template>

<script>
    import axios from 'axios';

    async function run() {
        async function getData() {
            var respo = await axios.get("https://xi.test.network/").then(r => r.data);
            return respo;
        }

        var aa = await getData();
        console.log(aa);
    }

    export default {
        name: 'Controller',
        watch: {
            run: run()
        }
    }
</script>
