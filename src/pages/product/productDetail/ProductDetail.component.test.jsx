import { screen, render } from "../../../test/utils";
import ProductDetail from "./ProductDetail.component";

describe("ProductDetail", () => {
  it("should render the productDetail", () => {
    const product = {
      _id: "1",
      name: "test",
      price: 1,
      image: "test",
      type: 1,
    };
    render(<ProductDetail />);
    expect(screen.getByTestId("product-detail")).toBeDefined();
  });
});
