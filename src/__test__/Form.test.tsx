import * as React from "react";
import { render } from "../test-utils";
import Item from "../Components/List/Item/Item";
import Form from "../Components/Form/Form";
import { fireEvent, screen } from "@testing-library/react";
import List from "../Components/List/List";

test("item rendered properly", () => {
  const { getByTestId } = render(<Item data={{ name: "Iris", age: 26 }} />);
  expect(getByTestId("test-item-name")).toHaveTextContent("Name: Iris");
});

test("create a new user", () => {
  const { getByTestId } = render(<Form />);
  const name = getByTestId("test-name") as HTMLInputElement;
  const age = getByTestId("test-age") as HTMLInputElement;
  const submit = getByTestId("test-submit");
  const reset = getByTestId("test-reset");
  fireEvent.change(name, { target: { value: "Kate" } });
  fireEvent.change(age, { target: { value: 25 } });
  expect(name.value).toBe("Kate");
  expect(age.value).toBe("25");
  fireEvent.click(submit);
  const { queryByTestId } = render(<List />);
  expect(queryByTestId("test-list").children.length).toBe(2);
  fireEvent.click(submit);
  expect(queryByTestId("test-list").children.length).toBe(3);
  fireEvent.click(reset);
  expect(queryByTestId("test-list").children.length).toBe(1);
});

test("reset users list", () => {
  const { getByTestId } = render(<Form />);
  const reset = getByTestId("test-reset");
  const { queryByTestId } = render(<List />);
  fireEvent.click(reset);
  expect(queryByTestId("test-list").children.length).toBe(1);
});
