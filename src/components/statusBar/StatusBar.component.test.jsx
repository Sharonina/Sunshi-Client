import { screen, render } from "../../../test/utils";
import StatusBar from "./StatusBar.component";

describe("StatusBar", () => {
  it("should render the statusBar", () => {
    render(
      <StatusBar steps={["Pending", "Delivering"]} currentStep={"Pending"} />
    );
    expect(screen.getByTestId("status-bar")).toBeDefined();
  });
});
