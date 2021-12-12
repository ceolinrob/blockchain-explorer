<template>
    <header>
        <nav class="container">
            <a href="/">
                <img src="https://www.clipartmax.com/png/full/201-2010871_home-icon-png-home-house-icon-website-home-logo.png" alt="home" id="home">
            </a>

            <a href="/transactions">Transactions</a>

            

        </nav>
    </header>
</template>

<script>
    export default{
        name: 'Header'
    }
</script>

<style scoped>

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #home {
        width: 90px;
        height: 55px;
    }
</style>
