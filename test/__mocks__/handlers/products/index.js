import { rest } from "msw";
const { VITE_API_URL } = import.meta.env;

export const productHandlers = [
  rest.get(`${VITE_API_URL}/products`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          category: "Food",
          products: [{ name: "Sunshi", price: 10, _id: "1" }],
        },
        {
          category: "Drinks",
          products: [{ name: "Coke", price: 5, _id: "2" }],
        },
      ])
    );
  }),
];
