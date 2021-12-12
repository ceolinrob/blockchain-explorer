<template>
    <main>
        <div class="container text-top background-block">
            <p>Data for block height: {{block.height}}</p>
            <p>Hash: {{block.hash}}</p>
            <p>Ledger Hash: {{block.ledgerHash}}</p>
            <p>Parent Hash: {{block.parentHash}}</p>
            <p><a :href="'/wallets/' + block.miner">Miner: {{block.miner}}</a></p>
            <p v-if="block.transactions != undefined"><a :href="this.$route.path + '/transactions'">Number of transactions: {{block.transactions.length}}</a></p>
        </div>
    </main>
</template>

<script>
    import HttpController from '@/components/controller/HttpController.js'

    export default {
        name: 'BlockViewer',
        mounted() {
            HttpController.get('/blocks/' + this.$route.params.height).then(response => {
                this.block = response.data;
            })
        },
        data() {
            return {
                block: [],
            }
        }

    }
</script>

<style scoped>
    .text-top{
        color: var(--color-text-dark);
        font-size: 22px;
    }
    .text-table{
        font-size: 12px;
    }
    .background-block{
        display: inline-block;
        background-color: var(--color-background);
        width: 85%;
    }
    .background-block p{
        margin-left: 20px;
    }
</style>