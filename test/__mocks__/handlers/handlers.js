import { productHandlers } from "./products";
import { userHandlers } from "./users";
import { orderHandlers } from "./orders";

export const handlers = [...productHandlers, ...userHandlers, ...orderHandlers];
