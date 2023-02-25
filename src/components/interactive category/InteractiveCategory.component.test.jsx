import { screen, render } from "@/test/utils";
import InteractiveCategory from "./InteractiveCategory.component";

describe("InteractiveCategory", () => {
  it("should render the interactiveCategory", () => {
    render(
      <InteractiveCategory
        categories={[]}
        selectedCategory={{}}
        setSelectedCategory={() => {}}
      />
    );
    expect(screen.getByTestId("interactive-category")).toBeDefined();
  });

  it("should render the interactive category with categories", () => {
    render(
      <InteractiveCategory
        categories={[
          {
            category: "Food",
            products: [
              <div key="product" onClick={() => {}}>
                <img src={""} alt={""} />
                <h3>{""}</h3>
              </div>,
            ],
          },
        ]}
        selectedCategory="Food"
        setSelectedCategory={() => {}}
      />
    );
    expect(screen.getByTestId("interactive-category")).toBeDefined();
  });
});
