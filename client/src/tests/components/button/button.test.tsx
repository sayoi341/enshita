import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/button/button.stories";

const { Default, Disabled, Icon } = composeStories(stories);

describe("(components) button", () => {
  const options = { name: "This is test" };
  test("[role=button]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("button", options)).toBeInTheDocument();
  });
  test("[disabled=true]である", () => {
    const { getByRole } = render(<Disabled />);
    expect(getByRole("button", options)).toBeDisabled();
  });
  test("(normal) test Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("(disable) test Snap Shot", () => {
    const { container } = render(<Disabled />);
    expect(container).toMatchSnapshot();
  });
  test("(icon) test Snap Shot", () => {
    const { container } = render(<Icon />);
    expect(container).toMatchSnapshot();
  });
});
