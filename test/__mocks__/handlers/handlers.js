import { productHandlers } from "./products";
import { userHandlers } from "./users";

export const handlers = [...productHandlers, ...userHandlers];
