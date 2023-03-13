/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
//import "cross-fetch/polyfill";
import { server } from "./__mocks__/server";
import fetch from "cross-fetch";

global.fetch = fetch;

//antes de los test que abra el servidor. Que nos de una adv. si hay algo no manejado
beforeAll(() => {
  server.listen({ onUnhandledRequest: `warn` });
});

// luego de los test, limpiar + reset a handlers
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

//cerrar servidor
afterAll(() => {
  server.close();
});

const customRender = (ui, options = {}) =>
  render(ui, {
    //wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
//override render export
export { customRender as render };
