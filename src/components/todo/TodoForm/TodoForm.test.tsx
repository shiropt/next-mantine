import "@testing-library/jest-dom";
import { TodoForm } from "./TodoForm";
import { render, screen } from "@testing-library/react";

describe("TodoFormのテスト", () => {
  it("renders a placeholder", () => {
    render(<TodoForm />);
    expect(screen.getByPlaceholderText("Todo")).toBeInTheDocument();
    screen.getByRole("combobox");
  });
});
