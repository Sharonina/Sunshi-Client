import { screen, render } from "@/test/utils";
import Order from "./Order.component";

describe("Order", () => {
  it("should render the order", () => {
    render(<Order />);
    expect(screen.getByTestId("order-page")).toBeDefined();
  });
});
