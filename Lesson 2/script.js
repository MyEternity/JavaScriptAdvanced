class GoodItem {
    constructor(title = 'Товар', price = 'Цена по запросу', img = 'img/no-image.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }

    render() {
        return `<div class="goods-item">
                <div class="goods-info">
                  <img src="${this.img}" alt="${this.title}">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                </div>
                <button class='addClick'>Добавить</button>
              </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [{
            title: 'Рубашка',
            price: 2150,
            img: "img/shirt.jpg"
        },
            {
                title: 'Носки',
                price: 150,
                img: 'img/socks.jpg'
            },
            {
                title: 'Пиджак',
                price: 3500,
                img: 'img/jacket.jpg'
            },
            {
                title: 'Ботинки',
                price: 2500,
                img: 'img/shoes.jpg'
            },
            {
                title: 'Часы',
                price: 17600,
                img: 'img/watches.jpg'
            }
        ]
    }

    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
                console.log(good.price);
            }
        });
        document.querySelector('.goods-total').innerHTML = "Все товары на сумму $" + totalPrice;
    }
}

// Класс элемента корзины
class BasketItem {
    constructor(title, price, img, link) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.link = link; // Вероятно, ссылка на страницу товара
    }

    render() {

    }
}

class Basket {
    constructor() {
        this.addGoods = [];
        this.deletedGoods = [];
    }

    // Удаление товара из корзины (привязываем на нажатие кнопки)
    deleteFromBasket() {
    }

    // Считаем стоимость и количество товаров в корзине
    calcBasket() {
    }

    // Метод, который определяет, добавлены ли в корзину какие-либо товары и при их наличии активирует кнопку "Оформить заказ"
    isOrder() {
    }

    // Рендер динамического содержимого корзины
    render() {
    }

    // Метод открывания корзины
    openBasket() {
    }
}

const list = new GoodsList();
list.fetchGoods();

window.onload = () => {
    list.render();
    list.calcAllGoods();
};