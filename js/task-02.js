const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElem = document.querySelector('#ingredients');

const ingredientsItemArr = ingredients.map(ingredient => {
  const ingredientsElem = document.createElement('li');
  ingredientsElem.classList.add('item');
  ingredientsElem.textContent = ingredient;
  return ingredientsElem;
})
ingredientsListElem.append(...ingredientsItemArr);

console.log(ingredientsListEl);