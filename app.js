/* eslint-disable indent */
/* eslint-disable quotes */
const productData = [
  {
    id: "1",
    category: 'Quartz',
    currency: '$',
    name: "Product 1",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 19.99,
    discount: 0.8,
  },
  {
    id: "2",
    category: 'Automatic',
    currency: '$',
    name: "Product 2",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 24.95,
  },
  {
    id: "3",
    category: 'Diver',
    currency: '$',
    name: "Product 3",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 12.99,
    discount: 0.7,
  },
  {
    id: "4",
    category: 'Solar',
    currency: '$',
    name: "Product 4",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 34.99,
  },
  {
    id: "5",
    category: 'Quartz',
    currency: '$',
    name: "Product 5",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 29.95,
    discount: 0.5,
  },
  {
    id: "6",
    category: 'Diver',
    currency: '$',
    name: "Product 6",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 17.99,
  },
  {
    id: "7",
    category: 'Solar',
    currency: '$',
    name: "Product 7",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 8.99,
    discount: 0.8,
  },
  {
    id: "8",
    category: 'Quartz',
    currency: '$',
    name: "Product 8",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 39.99,
  },
  {
    id: "9",
    category: 'Automatic',
    currency: '$',
    name: "Product 9",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    price: 21.95,
    discount: 0.7,
  },
];

const mainDiv = document.querySelector(".main-container");

let salePrice;
productData.forEach(product => {
  if (product.discount) {
    salePrice = product.price - (product.price * product.discount);
    product["sale-price"] = Number(salePrice.toFixed(2));
  }
});

productData.map((product) => {
  mainDiv.innerHTML += `<div class="product" data-product-id="${product.id}">
  <img src="${product.image}" alt="${product.name}" class="product-image" />
  <h2>${product.name}</h2>
  <h3 class="product-price">$${product.price}</h3>
  ${
    product["sale-price"]
      ? `<h3 class="sale-price">$${product["sale-price"]}</h3>`
      : ""
  }
  <button>Add to Cart</button>
</div>`;
});


// PRODUCT IMPRESSION GA EVENT

/* 
It's recommended that you use the following command to clear the ecommerce object prior to pushing an ecommerce event to the data layer. Clearing the object will prevent multiple ecommerce events on a page from affecting each other.
*/

window.addEventListener('load', () => {
  productData.forEach((product) => {
    window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    window.dataLayer.push({
      'event': 'view_item_list',
      'ecommerce': {
        'item_list_name': "Products",
        'items': [
          {
            'item_id': product.id,
            'item_name': product.name,
            'price': product.price,
            'currency': product.currency,
            'item_category': product.category,
            'discount': product.discount
          }
        ]
      }
    });
  });
});


// PRODUCT CLICK GA EVENT


productData.forEach(product => {
  const productElement = document.querySelector(`[data-product-id="${product.id}"]`);
  
  if (productElement) {
    productElement.addEventListener('click', () => {
      window.dataLayer.push({ ecommerce: null });  // Töröld az előző ecommerce objektumot
      window.dataLayer.push({
        'event': 'select_item',
        'ecommerce': {
          'item_list_name': "Products",
          'items': [
            {
              'item_id': product.id,
              'item_name': product.name,
              'price': product.price,
              'currency': product.currency,
              'item_category': product.category,
              'discount': product.discount
            }
          ]
        }
      });
    });
  }
});