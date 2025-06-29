const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $10', 'Oatmeal - $7', 'Frittata - $12'];
const mainCourseMenu = ['Steak - $5', 'Pasta - $6', 'Burger - $5', 'Salmon - $8'];
const dessertMenu = ['Cake - $5', 'Ice Cream - $6', 'Pudding - $7', 'Fruit Salad - $15'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;