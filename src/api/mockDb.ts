export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface Partner {
    name: string;
    time_of_delivery: number;
    stars: number;
    price: number;
    kitchen: string;
    image: string;
    products: Product[];
}

interface DB {
    parteners: Partner[];
}
const db: DB = {
    parteners: [
        {
            name: 'Пицца Плюс',
            time_of_delivery: 50,
            stars: 4.5,
            price: 900,
            kitchen: 'Пицца',
            image: 'img/pizza-plus/preview.jpg',
            products: [
                {
                    id: 'pp01',
                    name: 'Пицца Везувий',
                    description: 'Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.',
                    price: 545,
                    image: 'img/pizza-plus/pizza-vesuvius.jpg',
                },
                {
                    id: 'pp02',
                    name: 'Пицца Девичник',
                    description: 'Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.',
                    price: 450,
                    image: 'img/pizza-plus/pizza-girls.jpg',
                },
                {
                    id: 'pp03',
                    name: 'Пицца Оле-Оле',
                    description: 'Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез',
                    price: 440,
                    image: 'img/pizza-plus/pizza-oleole.jpg',
                },
                {
                    id: 'pp04',
                    name: 'Пицца Плюс',
                    description: 'Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты, пепперони, телятина, грибы, бекон, болгарский перец.',
                    price: 805,
                    image: 'img/pizza-plus/pizza-plus.jpg',
                },
                {
                    id: 'pp05',
                    name: 'Пицца Гавайская',
                    description: 'Соус томатный, сыр «Моцарелла», ветчина, ананасы',
                    price: 440,
                    image: 'img/pizza-plus/pizza-hawaiian.jpg',
                },
                {
                    id: 'pp06',
                    name: 'Пицца Классика',
                    description: 'Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями, грибы.',
                    price: 510,
                    image: 'img/pizza-plus/pizza-classic.jpg',
                },
            ],
        },
        {
            name: 'Тануки',
            time_of_delivery: 60,
            stars: 4.3,
            price: 1200,
            kitchen: 'Суши, роллы',
            image: 'img/tanuki/preview.jpg',
            products: [
                {
                    id: 'tn01',
                    name: 'ФИЛАДЕЛЬФИЯ НИСУАЗ',
                    description: 'Угорь, авокадо, сыр, тобико, соус «Нисуаз», кунжут, 6 шт.',
                    price: 455,
                    image: 'img/tanuki/nisuaz.jpg',
                },
                {
                    id: 'tn02',
                    name: 'ФИЛАДЕЛЬФИЯ СМОУК',
                    description: 'Лосось копченый, курица копченая, омлет, огурец, авокадо, сыр, микс соусов, 6 шт.',
                    price: 455,
                    image: 'img/tanuki/smoke.jpg',
                },
                {
                    id: 'tn03',
                    name: 'ФИЛАДЕЛЬФИЯ ФРЕШ',
                    description: 'Лосось, авокадо, огурец, сыр, омлет, тобико, микс соусов',
                    price: 455,
                    image: 'img/tanuki/fresh.jpg',
                },
                {
                    id: 'tn04',
                    name: 'КАЛИФОРНИЯ АЖИ',
                    description: 'Лосось, авокадо, краб-микс, сыр, соус «Ажи-маракуйя», тобико, кунжут, 6 шт.',
                    price: 455,
                    image: 'img/tanuki/azhi.jpg',
                },
                {
                    id: 'tn05',
                    name: 'КАЛИФОРНИЯ БЛЭК',
                    description: 'Креветка, краб-микс, сыр, тобико, микс соусов, кунжут, 6 шт.',
                    price: 455,
                    image: 'img/tanuki/black.jpg',
                },
                {
                    id: 'tn06',
                    name: 'ТАНУКИ',
                    description: 'Креветка, снежный краб, гуакамоле, сыр, огурец, микс соусов, тобико, кунжут, 6 шт.',
                    price: 649,
                    image: 'img/tanuki/tanuki.jpg',
                },
            ],
        },
        {
            name: 'FoodBand',
            time_of_delivery: 40,
            stars: 4.4,
            price: 450,
            kitchen: 'Пицца',
            image: 'img/food-band/preview.jpg',
            products: [
                {
                    id: 'fb01',
                    name: 'Мясная',
                    description: 'Пицца соус, сыр Моцарелла, томат, куриное филе, пепперони, свинина, бекон',
                    price: 685,
                    image: 'img/food-band/meet.jpg',
                },
                {
                    id: 'fb02',
                    name: 'Маргарита',
                    description: 'Пицца соус, сыр Моцарелла, томат',
                    price: 693,
                    image: 'img/food-band/margarita.jpg',
                },
                {
                    id: 'fb03',
                    name: 'Пепперони',
                    description: 'Пицца соус, пепперони, сыр Моцарелла',
                    price: 595,
                    image: 'img/food-band/pepperoni.jpg',
                },
                {
                    id: 'fb04',
                    name: 'Семь сыров',
                    description: 'Сыр моцарелла, сыр эмменталь, соус сырный, сыр горгондзола, сыр чеддер, сыр креметте, сыр фетакса, сыр пармезан',
                    price: 785,
                    image: 'img/food-band/seven-cheeses.jpg',
                },
                {
                    id: 'fb05',
                    name: 'Том Ям',
                    description: 'Креветки, куриное филе, соус Том Ям, сыр Моцарелла, шампиньоны, капуста брокколи, томат.',
                    price: 695,
                    image: 'img/food-band/tom-yam.jpg',
                },
                {
                    id: 'fb06',
                    name: 'Норвежская',
                    description: 'Сливочный соус, соус манго-чили, сыр моцарелла, лук красный, перец болгарский, ломтики лосося, салат Айсберг',
                    price: 875,
                    image: 'img/food-band/norwegian.jpg',
                },
            ],
        },
        {
            name: 'Палки скалки',
            time_of_delivery: 55,
            stars: 4.1,
            price: 500,
            kitchen: 'Пицца',
            image: 'img/palki-skalki/preview.jpg',
            products: [
                {
                    id: 'ps01',
                    name: 'Комбо 3 пиццы',
                    description: 'Пепперони, Чикен Барбекю, Капричеза',
                    price: 899,
                    image: 'img/palki-skalki/combo.jpg',
                },
                {
                    id: 'ps02',
                    name: 'Пицца Римская',
                    description: '30 см. Корнишоны, томатный соус, колбаса, красный лучок, сыр моцарелла, помидоры Черри, зелень.',
                    price: 408,
                    image: 'img/palki-skalki/rome.jpg',
                },
                {
                    id: 'ps03',
                    name: 'Пицца Фьюжн',
                    description: 'Сыр моцарелла, соус томатный, курица, пепперони, перец болгарский, томаты, лук красный, соус бургер, лук зеленый',
                    price: 499,
                    image: 'img/palki-skalki/fusion.jpg',
                },
                {
                    id: 'ps04',
                    name: 'Эби удон',
                    description: 'Японский супчик на мисо бульоне с добавлением яйца, тигровой креветки, лапши, шампиньонов и зеленого лучка.',
                    price: 319,
                    image: 'img/palki-skalki/udon.jpg',
                },
                {
                    id: 'ps05',
                    name: 'Чизбургер',
                    description: 'Мясная котлета, салат Айсберг, Шеф-соус, помидоры, корнишоны, сыр Чеддер, соус Барбекю',
                    price: 358,
                    image: 'img/palki-skalki/cheeseburger.jpg',
                },
                {
                    id: 'ps06',
                    name: 'Буррито с курицей',
                    description: 'Сыр, помидор, цыпленок, перец сладкий, лук, салат, яичный блинчик, соус сырный, тортилья, кетчуп',
                    price: 356,
                    image: 'img/palki-skalki/burrito.jpg',
                },
            ],
        },
        {
            name: 'Гуси Лебеди',
            time_of_delivery: 75,
            stars: 4.7,
            price: 1000,
            kitchen: 'Русская кухня',
            image: 'img/gusi-lebedi/preview.jpg',
            products: [
                {
                    id: 'gl01',
                    name: 'Пельмени теленок с поросем',
                    description: 'Настоящие самолепные пельмени из пушистого теста на деревенских желтках и сметане',
                    price: 390,
                    image: 'img/gusi-lebedi/dumplings.jpg',
                },
                {
                    id: 'gl02',
                    name: 'Плов',
                    description: 'Плов на углях из правильного риса с бараниной, пряностями и овощами на курдючном жире',
                    price: 520,
                    image: 'img/gusi-lebedi/plov.jpg',
                },
                {
                    id: 'gl03',
                    name: 'Цыпленок на вертеле',
                    description: 'Подается на лаваше со свежим томатом и огурцом, с маринованным луком и с шашлычным соусом',
                    price: 490,
                    image: 'img/gusi-lebedi/chick.jpg',
                },
                {
                    id: 'gl04',
                    name: 'Суп Курочка ряба',
                    description: 'Кура тушка, морковь, макароны, зелень, яйцо, соль, специи.',
                    price: 140,
                    image: 'img/gusi-lebedi/chicken-soup.jpg',
                },
                {
                    id: 'gl05',
                    name: 'Отбивная из поросенка',
                    description: 'Толстый кусок парной свинины с томатами и грибами под сырной корочкой',
                    price: 490,
                    image: 'img/gusi-lebedi/pig-chop.jpg',
                },
                {
                    id: 'gl06',
                    name: 'Теленок в сливочном соусе',
                    description: 'Теленок с шампиньонами и луком обжаривается в сливочно-сметанном соусе с картофельным пюре и солеными огурчиками.',
                    price: 530,
                    image: 'img/gusi-lebedi/calf-sauce.jpg',
                },
                {
                    id: 'gl07',
                    name: 'Судак запеченный',
                    description: 'Филе судака с картошкой, деревенской сметаной, травами и луком',
                    price: 490,
                    image: 'img/gusi-lebedi/zander.jpg',
                },
                {
                    id: 'gl08',
                    name: 'Мурманские кальмары',
                    description: 'Мурманские кальмары с чесночным маслом',
                    price: 420,
                    image: 'img/gusi-lebedi/squid.jpg',
                },
                {
                    id: 'gl09',
                    name: 'Щучья уха на карасях',
                    description: 'Наваристая походная уха на четырех рыбах, лаврухе, перце и луке с водкой.',
                    price: 380,
                    image: 'img/gusi-lebedi/ear.jpg',
                },
            ],
        },
        {
            name: 'PizzaBurger',
            time_of_delivery: 45,
            stars: 4.6,
            price: 700,
            kitchen: 'Пицца',
            image: 'img/pizza-burger/preview.jpg',
            products: [
                {
                    id: 'pb01',
                    name: 'Пицца от Шеф-повара',
                    description: 'Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина',
                    price: 638,
                    image: 'img/pizza-burger/pizza-dacha.jpg',
                },
                {
                    id: 'pb02',
                    name: 'Пицца Мясное ассорти',
                    description: 'Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень',
                    price: 693,
                    image: 'img/pizza-burger/pizza-meat.jpg',
                },
                {
                    id: 'pb03',
                    name: 'Пицца Деревенская',
                    description: 'Сыр моцарелла, пицца соус, чеснок, сыр пармезан, шампиньоны, помидоры, зелень, лук, курица, бекон, ветчина, пепперони',
                    price: 705,
                    image: 'img/pizza-burger/pizza-village.jpg',
                },
                {
                    id: 'pb04',
                    name: 'Пицца Цезарь',
                    description: 'Соус Цезарь, куриная грудка, сыр пармезан, моцарелла, гренки, помидоры, салат айсберг',
                    price: 759,
                    image: 'img/pizza-burger/pizza-caesar.jpg',
                },
                {
                    id: 'pb05',
                    name: 'Пицца Пепперони',
                    description: 'Сыр моцарелла, пицца соус, шампиньоны, пепперони',
                    price: 475,
                    image: 'img/pizza-burger/pizza-pepperoni.jpg',
                },
                {
                    id: 'pb06',
                    name: 'Пицца Дачная',
                    description: 'Сыр моцарелла, пицца соус, бекон, картофель фри, куриная грудка, помидоры, пепперони, ветчина, зелень',
                    price: 649,
                    image: 'img/pizza-burger/pizza-dacha.jpg',
                },
            ],
        },
    ],
};

export default db;
