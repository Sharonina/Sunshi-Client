import { screen, render } from "@/test/utils";
import Product from "./Product.component";

describe("Product", () => {
  it("should render the product", () => {
    render(<Product />);
    expect(screen.getByTestId("product-page")).toBeDefined();
  });
});
