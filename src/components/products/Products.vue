<script setup>
import product from './components/product.vue';
import {
    sandwichesProducts,
    supplementsProducts,
    desertsProducts,
    alcoholicProducts,
    nonAlcoholicProducts,
    wineProducts,
    beerProducts,
    hotDrinkProducts,
    waterProducts,
} from '@/utils/products';

</script>

<template>
    <div ref="products" class="products">
        <div ref="sandwiches" class="product-group">
            <h3 class="product-group-title">Фокача сенвичи</h3>
            <product v-for="(product, key) in sandwichesProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>

        <div ref="supplements" class="product-group">
            <h3 class="product-group-title">Додатоци</h3>
            <product v-for="(product, key) in supplementsProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>

        <div ref="deserts" class="product-group">
            <h3 class="product-group-title">Десерти</h3>
            <product v-for="(product, key) in desertsProducts" :product="product" :should-reverse="key % 2 !== 0"/>
        </div>

        <div ref="allergens" class="product-group">
            <h3 class="product-group-title">Алергени</h3>
            <div class="allergens">
                <div class="allergen">
                    <div class="allergen-image-wrapper">
                        <img src="/assets/images/sveps.png" />
                    </div>
                    <p>Млеко</p>
                </div>

                <div class="allergen">
                    <div class="allergen-image-wrapper">
                        <img src="" />
                    </div>
                    <p>Глутен</p>
                </div>
            </div>
        </div>

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
    align-items: center;
    column-gap: 1rem;
    row-gap: 2rem;

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

    font-size: 1.2rem;
    font-weight: 600;

    text-transform: uppercase;
}

.allergens {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    row-gap: 1rem;
}

.allergen {
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
    align-items: center;
    column-gap: 0.5rem;

    color: #626b4e;
    font-size: 1rem;
}

.allergen-image-wrapper {
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1/1;
    background-color: #83837b0f;
    border-radius: 50%;
    
    padding: 0.8rem;
    height: 60px;
}

.allergen-image-wrapper > img {
    height: 100%;
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

    .allergen-image-wrapper {
        height: 75px;
    }
}

@media (min-width: 768px) {
    .product-group-title {
        font-size: 1.3rem;
    }

    .allergen-image-wrapper {
        height: 100px;
    }
}

@media (min-width: 992px) {
    .product-group {
        flex: 0 1 calc(50% - 1rem);
        align-items: flex-start;
    }
}
</style>