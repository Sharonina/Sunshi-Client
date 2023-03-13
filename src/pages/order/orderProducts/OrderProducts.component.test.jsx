import { screen, render } from "../../../../test/utils";
import OrderProducts from "./OrderProducts.component";

describe("OrderProducts", () => {
  it("should render the orderProducts", () => {
    render(<OrderProducts />);
    expect(screen.getByTestId("order-products")).toBeDefined();
  });
});
