const products = [
    {
        id: 1,
        name: "Smartphone",
        category: "electronics",
        image: "smartphone.jpeg",
        price: "25,000/-"
    },
    {
        id: 2,
        name: "Laptop",
        category: "electronics",
        image: "laptop.jpeg",
        price: "50,000/-"
    },
    {
        id: 3,
        name: "T-shirt",
        category: "clothing",
        image: "tshirt.jpeg",
        price: "700/-"
    },
    {
        id: 4,
        name: "Novel",
        category: "books",
        image: "noble.jpeg",
        price: "1000/-"
    },
    {
        id: 5,
        name: "Headphones",
        category: "electronics",
        image: "headphone.jpeg",
        price: "5000/-"
    },
    {
        id: 6,
        name: "Jacket",
        category: "clothing",
        image: "jacket.jpg",
        price: "3000/-"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

function filterProducts() {
    const category = document.getElementById('category').value;
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}