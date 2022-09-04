const categoriesEl = document.querySelector('#categories');

const allItemsEl = document.querySelectorAll('.item');

const itemsEl = document.querySelectorAll('#categories .item');
console.log(`Numbers of categories: ${itemsEl.length}`);

allItemsEl.forEach(categories => {
    const nameCategories = categories.querySelector('h2').textContent;    
    console.log(`Category: ${nameCategories}`);

    const totalElOfCategories = categories.querySelectorAll('li').length;
    console.log(`Elements: ${totalElOfCategories}`);
} )

