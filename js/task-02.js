const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');


const itemIgredient = (ingredient) => {
  const createLi = document.createElement('li');
  createLi.textContent = ingredient;
  createLi.classList.add('item');
  return createLi
}

const element = ingredients.map(itemIgredient);

ingredientsEl.append(...element);
