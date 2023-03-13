import { rest } from "msw";
import { routes } from "@/utils/constants/routes";
const { VITE_API_URL } = import.meta.env;

export const orderHandlers = [
  rest.get(`${VITE_API_URL}${routes.ORDERS}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          category: "Pending",
          orders: [],
        },
        {
          category: "Delivering",
          orders: [],
        },
      ])
    );
  }),
];
