import { render, screen, userEvent } from "@/test/utils";
import Button from "./Button.component";

describe("Button", () => {
  it("Should render the button", () => {
    render(<Button>Test</Button>);
    expect(screen.getByTestId("button")).toBeDefined();
    expect(screen.getByTestId("button")).toHaveTextContent("Test");
    expect(screen.getByTestId("button").getAttribute("class")).not.toContain(
      "hovereable"
    );
  });

  it("Should be hovereable", () => {
    render(<Button isHovereable>Test</Button>);
    expect(screen.getByTestId("button").getAttribute("class")).toContain(
      "hovereable"
    );
  });
});
