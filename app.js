const productData = [
  {
    name: 'Product 1',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 19.99,
    'sale-price': 15.99,
  },
  {
    name: 'Product 2',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 24.95,
  },
  {
    name: 'Product 3',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 12.99,
    'sale-price': 9.99,
  },
  {
    name: 'Product 4',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 34.99,
  },
  {
    name: 'Product 5',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 29.95,
    'sale-price': 24.95,
  },
  {
    name: 'Product 6',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 17.99,
  },
  {
    name: 'Product 7',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 8.99,
    'sale-price': 6.99,
  },
  {
    name: 'Product 8',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 39.99,
  },
  {
    name: 'Product 9',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 21.95,
    'sale-price': 18.95,
  },
];

const mainDiv = document.querySelector('.main-container');

productData.map((product) => {
  mainDiv.innerHTML += `<div class="product">
  <img src="${product.image}" alt="${product.name}" class="product-image" />
  <h2>${product.name}</h2>
  <h3 class="product-price">$${product.price}</h3>
  ${product['sale-price'] ? `<h3 class="sale-price">$${product['sale-price']}</h3>` : ''}
  <button>Add to Cart</button>
</div>`;
});
