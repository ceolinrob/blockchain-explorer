import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Transactions from '@/components/transactions/Transactions.vue';
import Blocks from '@/components/blocks/Blocks.vue';
import BlockViewer from '@/components/blocks/BlockViewer.vue';


const routes = [
    {
        path:'/',
        redirect:'/blocks'
    },
    {
        path:'/transactions',
        component: Transactions
    },
    {
        path:'/blocks',
        component: Blocks
    },
    {
        path:'/blocks/:height',
        component: BlockViewer
    }
];

const router = new VueRouter({
    routes, 
    mode:'history'
});

export default router;