import { renderHook } from "@testing-library/react";
import { useApi } from "./useApi";

describe("useApi", () => {
  it("should return a function", () => {
    const { result } = renderHook(() => useApi());
    expect(typeof result.current.getWithAuthorization).toBe("function");
    expect(typeof result.current.postWithoutAuthorization).toBe("function");
  });
});
