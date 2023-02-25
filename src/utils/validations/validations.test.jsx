import { isEmail, isEmpty, isPassword } from "./validations";

describe("validations", () => {
  describe("isEmail", () => {
    it("should return true for valid email", () => {
      expect(isEmail("shadmin@sunshi.com")).toBe(true);
    });

    it("should return false for invalid email", () => {
      expect(isEmail("shadmin@sunshi")).toBe(false);
    });
  });

  describe("isPassword", () => {
    it("should return true for valid password", () => {
      expect(isPassword("123456")).toBe(true);
    });

    it("should return false for invalid password", () => {
      expect(isPassword("12345")).toBe(false);
    });
  });

  describe("isEmpty", () => {
    it("should return true for empty value", () => {
      expect(isEmpty("")).toBe(true);
    });

    it("should return false for non-empty value", () => {
      expect(isEmpty("12345")).toBe(false);
    });
  });
});
