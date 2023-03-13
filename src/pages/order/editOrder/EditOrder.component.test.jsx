import { screen, render } from "../../../../test/utils";
import EditOrder from "./EditOrder.component";

describe("EditOrder", () => {
  it("should render the Editorder", () => {
    render(
      <EditOrder
        orderProducts={[]}
        setOrderProducts={() => {}}
        setEditMode={() => {}}
        setSelectedCategory={() => {}}
        selectedOrder={{}}
        cleanOrderProducts={() => {}}
        setSelectedOrder={() => {}}
      />
    );
    expect(screen.getByTestId("order-edit")).toBeDefined();
  });
});
