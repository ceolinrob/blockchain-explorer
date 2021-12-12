<template>
    <main>
        <div class="container">
            <div class="text-top">Latest ten blocks</div>

            <table class="table table-secondary table-striped col-md-12">
                <thead>
                    <tr scope="col">
                        <th>Heigth</th>
                        <th>Hash</th>
                        <th>Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="col" v-for="(blocks, index) in blocks" :key="index">
                        <td class="text-table"><a :href="'blocks/' + blocks.height">{{blocks.height}}</a></td>
                        <td class="text-table">{{blocks.hash}}</td>
                        <td class="text-table"><a :href="'blocks/' + blocks.height + '/transactions'">{{blocks.transactions.length}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
    import HttpController from '@/components/controller/HttpController.js'

    export default {
        name: 'Blocks',
        mounted() {
            HttpController.get('/blocks').then(response => {
                this.blocks = response.data;
            })
        },
        data() {
            return {
                blocks: []
            }
        }
    }
</script>

<style scoped>
    .text-top{
        color: var(--color-text-light);
        font-size: 22px;
    }

    .text-table{
        font-size: 12px;
    }

    table a:hover{
        opacity: 0.5;
    }


</style>>
