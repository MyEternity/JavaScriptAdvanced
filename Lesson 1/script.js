const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
    // 2. Добавлен аргумент по умолчанию для функции renderGoodsItem.
    {title: 'IceCream'},
];

const renderGoodsItem = (title, price = 0) => {
    // 2. Цена теперь не обязательна.
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    // 2. Преобразовали часть кода в стрелочные функци.
    // 3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
    // Исправляем массив в разметке - преобразованием его в строку через join
    document.querySelector(".goods-list").innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join('');
}

renderGoodsList(goods);
