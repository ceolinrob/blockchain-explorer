<template>
  <main v-bind:class="{'full-height': isHeightGoingToOverflow(transactions.length)}">
      <div class="container">
            <div class="text-top">Transactions on block {{this.$route.params.height}}</div>

            <table class="table table-secondary col-md-12 table-striped col-md-12">
                <thead>
                    <tr scope="col">
                        <th>Type</th>
                        <th>Ammount</th>
                        <th>Fee</th>
                        <th>Hash</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="col" v-for="(transactions, index) in transactions" :key="index">
                        <td class="text-table">{{transactions.memo}}</td>
                        <td class="text-table">{{transactions.amount}}</td>
                        <td class="text-table">{{transactions.fee}}</td>
                        <td class="text-table"><a :href="path + '/' + transactions.hash">{{transactions.hash}}</a></td>
                        <td class="text-table">{{transactions.from}}</td>
                        <td class="text-table">{{transactions.to}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

  </main>
</template>

<script>
    import HttpController from '@/components/controller/HttpController.js'

    export default {
        name: 'BlockTransactions',
        mounted() {
            HttpController.get('/blocks/' + this.$route.params.height + '/transactions').then(response => {
                this.transactions = response.data;
            })
        },
        data(){
            return {
                transactions: [],
                path: this.$route.path
            }
        },
        methods:{
            isHeightGoingToOverflow(numbeOfTransactions) {
                if (numbeOfTransactions > 10) {
                    return true;
                }
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

    .full-height {
        height: calc(100% - 120px);
    }

</style>