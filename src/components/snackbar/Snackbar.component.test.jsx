import { screen, render } from "@/test/utils";
import Snackbar from "./Snackbar.component";
import { screen, render } from "@/test/utils";

describe("Snackbar", () => {
  it("should render the snackbar", () => {
    const snackbar = { message: "test", severity: "success" };
    render(<Snackbar isOpen={true} snackbar={snackbar} />);
    expect(screen.getByTestId("snackbar-page")).toBeDefined();
  });
});
