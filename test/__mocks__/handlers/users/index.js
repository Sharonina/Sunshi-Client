import { rest } from "msw";
import { routes } from "@/utils/constants/routes";
const { VITE_API_URL } = import.meta.env;

export const userHandlers = [
  rest.post(
    `${VITE_API_URL}${routes.USERS}${routes.LOGIN}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token: "test",
          expireDate: "test",
        })
      );
    }
  ),

  rest.get(`${VITE_API_URL}${routes.USERS}/me`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "1",
        first_name: "Sunshi",
        last_name: "Test",
        email: "",
        role: "admin",
        admin: false,
        restaurant: {
          id: "1",
          name: "Test restaurant",
        },
      })
    );
  }),
];
