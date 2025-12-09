export const mainDishes = [
    { id: '1', name: 'Grilled Chicken', price: 12.99 },
    { id: '2', name: 'Beef Steak', price: 19.99 },
    { id: '3', name: 'Vegetable Stir Fry', price: 10.99 },
    { id: '4', name: 'Spaghetti Bolognese', price: 11.99 },
];

export const desserts = [
    { id: '5', name: 'Chocolate Cake', price: 6.99 },
    { id: '6', name: 'Cheesecake', price: 5.99 },
    { id: '7', name: 'Ice Cream Sundae', price: 4.99 },
    { id: '8', name: 'Fruit Tart', price: 5.49 },
];

export const drinks = [
    { id: '9', name: 'Coca Cola', price: 1.99 },
    { id: '10', name: 'Orange Juice', price: 2.49 },
    { id: '11', name: 'Lemonade', price: 2.29 },
    { id: '12', name: 'Iced Tea', price: 1.89 },
];

export const allMenu =[...mainDishes,...desserts,...drinks];