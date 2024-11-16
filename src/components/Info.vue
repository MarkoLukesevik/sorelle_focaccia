<script setup>

</script>

<template>
    <div class="info">
        <div class="info-content"></div>
        <div class="info-border"></div>
    </div>
    <!-- email
    location
    mobile
    instagram
    work time -->
</template>

<style scoped>
    .info {
        position: relative;

        display: flex;
        flex-direction: column;
        flex: 0 1 auto;
        height: 20vh;
        height: 20dvh;
    }

    .info-border {
        position: absolute;
        top: -20px;

        width: 100%;
        height: 20px;
        background-image:  url(/assets/images/border.png);
        background-repeat: repeat
    }
</style>