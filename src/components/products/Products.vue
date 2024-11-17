<script setup>
import { ref } from 'vue';
import product from '@/components/products/components/product.vue';

const sandwichesProducts = ref([
    {
        name: 'Мортези',
        image: '',
        price: 290,
        description: 'мортадела, страчатела, песто, фокача сендвич, маслиново масло'
    },
    {
        name: 'Пршууто',
        image: '',
        price: 310,
        description: 'свинска пршута, рукола, песто, пармезан, фокача сендвич, балсамико крема, маслиново масло'
    },
    {
        name: 'Пршууто биф',
        image: '',
        price: 330,
        description: 'говедска пршута, рукола, песто, пармезан фокача сендвич, балсамико крема, маслиново масло'
    },
    {
        name: 'Тартуфо',
        image: '',
        price: 330,
        description: 'шунка тартуф, намаз од тартуф, страчатела, рукола, фокача сендвич, маслиново масло'
    },
    {
        name: 'Капрезе',
        image: '',
        price: 260,
        description: 'моцарела, песто, босилек, домат, фокача сендвич, балсамико крема, маслиново масло'
    },
    {
        name: 'Веган',
        image: '',
        price: 230,
        description: 'крем од маслинки, печен зеленчук, тиквички, модал домат, пиперка, сув домат, фокача сендвич, маслиново масло'
    },
    {
        name: 'Веге',
        image: '',
        price: 250,
        description: 'крем од маслинки, печен зеленчук, тиквички, модал домат, пиперка, сув домат, страчатела, фокача сендвич, маслиново масло'
    },
]);

const supplementsProducts = ref([
    {
        name: 'Страчатела',
        image: '',
        price: 40
    },
    {
        name: 'Песто',
        image: '',
        price: 30
    },
    {
        name: 'Крем од маслинка',
        image: '',
        price: 20
    },
]);

const desertsProducts = ref([
    {
        name: 'Тирамису',
        image: '',
        price: 140,
        description: 'пишкоти, маскарпоне, слатка павлака, еспресо, какао'
    },
]);

const alcoholicProducts = ref([
    {
        name: 'Водка смирноф 0.4',
        image: '',
        price: 160
    },
    {
        name: 'Водка абсолут 0.4',
        image: '',
        price: 170
    },
    {
        name: 'Џин гордонс 0.4',
        image: '',
        price: 160
    },
    {
        name: 'Џин бомбај 0.4',
        image: '',
        price: 180
    },
    {
        name: 'Виски џејмисон 0.4',
        image: '',
        price: 200
    },
    {
        name: 'Виски џек даниелс 0.4',
        image: '',
        price: 250
    },
    {
        name: 'Јегермајстер 0.5',
        image: '',
        price: 180
    },
    {
        name: 'Кампари 0.6',
        image: '',
        price: 180
    },
    {
        name: 'Аперол 0.6',
        image: '',
        price: 180
    },
]);

const nonAlcoholicProducts = ref([
    {
        name: 'Кока кола лим. 0.33',
        image: '',
        price: 70
    },
    {
        name: 'Кока кола зеро лим. 0.33',
        image: '/assets/images/coca-cola-zero-limenka.png',
        price: 70
    },
    {
        name: 'Кока кола 0.25',
        image: '',
        price: 90
    },
    {
        name: 'Кока кола зеро 0.25',
        image: '',
        price: 90
    },
    {
        name: 'Фанта 0.25',
        image: '',
        price: 90
    },
    {
        name: 'Спрајт 0.25',
        image: 'assets/images/sprite.png',
        price: 90
    },
    {
        name: 'Швепс Битер Лемон 0.25',
        image: 'assets/images/sveps.png',
        price: 90
    },
    {
        name: 'Швепс танџерина 0.25',
        image: 'assets/images/sveps-tangerina.png',
        price: 90
    },
    {
        name: 'Швепс тоник 0.25',
        image: 'assets/images/sveps.png',
        price: 90
    },
]);

const wineProducts = ref([
    {
        name: 'СС бленд бело класик 150мл',
        image: 'assets/images/casa-belo.png',
        price: 160
    },
    {
        name: 'СС бленд црвено класик 150мл',
        image: 'assets/images/casa-crveno.png',
        price: 160
    },
    {
        name: 'Куве александрија розе 187 мл',
        image: 'assets/images/alexandria-cuve-roze.png',
        price: 220
    },
    {
        name: 'Луда мара куве - бело',
        image: 'assets/images/luda-mara-belo.png',
        price: 1100
    },
    {
        name: 'Луда мара куве - црвено',
        image: 'assets/images/luda-mara-crveno.png',
        price: 1100
    }
]);

const beerProducts = ref([
    {
        name: 'Скопско',
        image: 'assets/images/skopsko.png',
        price: 90
    },
    {
        name: 'Скопско смут',
        image: 'assets/images/skopsko-smooth.png',
        price: 90
    },
    {
        name: 'Хајникен',
        image: 'assets/images/heineken.png',
        price: 110
    }
]);

const hotDrinkProducts = ref([
    {
        name: 'Еспресо',
        image: '',
        price: 70
    },
    {
        name: 'Мало макијато',
        image: '',
        price: 70
    },
    {
        name: 'Големо макијато',
        image: '',
        price: 80
    },
    {
        name: 'Капучино',
        image: '',
        price: 80
    },
    {
        name: 'Чај',
        image: '',
        price: 80
    },
]);

const waterProducts = ref([
    {
        name: 'Роса негазирана 0.33',
        image: 'assets/images/rosa.png',
        price: 70
    },
    {
        name: 'Роса газирана 0.33',
        image: 'assets/images/rosa-gazirana.png',
        price: 70
    }
]);

</script>

<template>
    <div ref="products" class="products">
        <div ref="sandwiches" class="product-group">
            <h3 class="product-group-title">Фокача сенвичи</h3>
            <product v-for="product in sandwichesProducts" :product="product"/>
        </div>

        <div ref="supplements" class="product-group">
            <h3 class="product-group-title">Додатоци</h3>
            <product v-for="product in supplementsProducts" :product="product"/>
        </div>

        <div ref="deserts" class="product-group">
            <h3 class="product-group-title">Десерти</h3>
            <product v-for="product in desertsProducts" :product="product"/>
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
            <product v-for="product in alcoholicProducts" :product="product"/>
        </div>

        <div ref="nonAlcoholic" class="product-group">
            <h3 class="product-group-title">Безалкохолни пијалоци</h3>
            <product v-for="product in nonAlcoholicProducts" :product="product"/>
        </div>

        <div ref="wine" class="product-group">
            <h3 class="product-group-title">Вино</h3>
            <product v-for="product in wineProducts" :product="product"/>
        </div>

        <div ref="beer" class="product-group">
            <h3 class="product-group-title">Пиво:</h3>
            <product v-for="product in beerProducts" :product="product"/>
        </div>

        <div ref="hotDrinks" class="product-group">
            <h3 class="product-group-title">Топли напитоци:</h3>
            <product v-for="product) in hotDrinkProducts" :product="product"/>
        </div>

        <div ref="water" class="product-group">
            <h3 class="product-group-title">Вода</h3>
            <product v-for="product in waterProducts" :product="product"/>
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