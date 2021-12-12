<template>
    <main>
        <div class="text-top container">
            <p>Height: {{block.height}}</p>
            <p>Hash: {{block.hash}}</p>
            <p>Ledger Hash: {{block.ledgerHash}}</p>
            <p>Miner {{block.miner}}</p>
            <p>Parent Hash: {{block.parentHash}}</p>
            <p><a :href="this.$route.path + '/transactions'">Number of transactions: {{block.transactions.length}}</a></p>
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
                console.log(this.block);
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
        color: var(--color-text-light);
        font-size: 22px;
    }
</style>