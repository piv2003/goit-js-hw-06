const getElementsItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${getElementsItem.length}`);

getElementsItem.forEach(element => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.querySelectorAll('li').length);
});