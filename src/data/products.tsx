export const products = [
  {
    id: 1,
    name: "Basic Tee",
    color: "Black",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 2,
    name: "White Tee",
    color: "White",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
  },
  {
    id: 3,
    name: "Charcoal Tee",
    color: "Charcoal",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
  },
  {
    id: 4,
    name: "Printed Tee",
    color: "Cream",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
  },
  {
    id: 1,
    name: "Basic Tee",
    color: "Black",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 2,
    name: "White Tee",
    color: "White",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
  },
  {
    id: 3,
    name: "Charcoal Tee",
    color: "Charcoal",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
  },
  {
    id: 4,
    name: "Printed Tee",
    color: "Cream",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
  },
  {
    id: 1,
    name: "Basic Tee",
    color: "Black",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 2,
    name: "White Tee",
    color: "White",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
  },
  {
    id: 3,
    name: "Charcoal Tee",
    color: "Charcoal",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
  },
  {
    id: 4,
    name: "Printed Tee",
    color: "Cream",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
  },
  {
    id: 1,
    name: "Basic Tee",
    color: "Black",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 2,
    name: "White Tee",
    color: "White",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
  },
  {
    id: 3,
    name: "Charcoal Tee",
    color: "Charcoal",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
  },
  {
    id: 4,
    name: "Printed Tee",
    color: "Cream",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
  },
];
export type Product = {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
};

export function getProductById(productId: number): Product | undefined {
  return products.find((product) => product.id === productId);
}
