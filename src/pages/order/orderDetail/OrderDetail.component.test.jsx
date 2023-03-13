import { screen, render } from "../../../../test/utils";
import OrderDetail from "./OrderDetail.component";

describe("OrderDetail", () => {
  it("should render the orderDetail", () => {
    render(
      <OrderDetail
        order={{}}
        userRole={{}}
        setEditMode={() => {}}
        setSelectedOrder={() => {}}
      />
    );
    expect(screen.getByTestId("order-detail")).toBeDefined();
  });
});
