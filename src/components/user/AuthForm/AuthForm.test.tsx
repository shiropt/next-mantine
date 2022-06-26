import { render, screen } from "@testing-library/react";
import { AuthForm } from "./AuthForm";
describe("AuthFormコンポーネントのテスト", () => {
  test("propsにsignupを渡した時のテスト", () => {
    const {} = render(<AuthForm kind="signup" submit={() => {}} />);

    // expect(screen.getByLabelText("メールアドレス")).toBeInTheDocument();
    // expect(screen.getByLabelText("パスワード")).toBeInTheDocument();
    // expect(screen.getByLabelText("ニックネーム")).toBeInTheDocument();
    // expect(screen.getByLabelText("電話番っっっっっっsん号")).toBeInTheDocument();
    // const a = screen.getAllByText("ニックネーム");
    // expect(screen.getByRole("p")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("メールアドレス")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("ニックネーム")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();

    // expect(screen.getAllByText("ニックネーム")).toBeInTheDocument();
  });
});
