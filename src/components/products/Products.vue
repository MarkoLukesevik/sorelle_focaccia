<script setup>
import product from './components/product.vue';
import {
    beerProducts,
    waterProducts,
    wineProducts,
    nonAlcoholicProducts,
    hotDrinkProducts,
    alcoholicProducts
} from '@/utils/products';

</script>

<template>
    <div ref="products" class="products">
        <div ref="alcoholic" class="product-group">
            <h3 class="product-group-title">Алкохолни пијалоци</h3>
            <product v-for="(product, key) in alcoholicProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>

        <div ref="nonAlcoholic" class="product-group">
            <h3 class="product-group-title">Безалкохолни пијалоци</h3>
            <product v-for="(product, key) in nonAlcoholicProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>

        <div ref="wine" class="product-group">
            <h3 class="product-group-title">Вино</h3>
            <product v-for="(product, key) in wineProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>

        <div ref="beer" class="product-group">
            <h3 class="product-group-title">Пиво:</h3>
            <product v-for="(product, key) in beerProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>

        <div ref="hotDrinks" class="product-group">
            <h3 class="product-group-title">Топли напитоци:</h3>
            <product v-for="(product, key) in hotDrinkProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>

        <div ref="water" class="product-group">
            <h3 class="product-group-title">Вода</h3>
            <product v-for="(product, key) in waterProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>
    </div>
</template>

<style scoped>
.products {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 70%;
    row-gap: 2rem;
    align-items: center;

    overflow: auto;
        
    padding: 2rem 0.8rem;
}

.product-group {
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    row-gap: 1rem;

    width: 100%;
}

::-webkit-scrollbar {
     width: 3px;
     border-radius: 0.6rem;
}

::-webkit-scrollbar-track {
    background: #f9e8c4;
}

::-webkit-scrollbar-thumb {
     background: #83837b;
     border-radius: 0.6rem;
}

.product-group-title {
    color: #be5f54;

    font-size: 1rem;
    font-weight: 600;

    text-transform: uppercase;
}

@media (min-width: 600px) {
    .products {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-around;

        padding: 2rem;
    }

    .product-group {
        flex: 1 1 70%;

        width: unset;
    }
}

@media (min-width: 768px) {
    .product-group-title {
        font-size: 1.3rem;
    }
}

@media (min-width: 992px) {
    .product-group {
        flex: 0 1 50%;
        align-items: flex-start;
    }
}
</style>