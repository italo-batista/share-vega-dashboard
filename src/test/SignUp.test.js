import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import SignUpView from "../components/auth/SignUpView";

const wrapper = shallow(<SignUpView />);
const signUpView = () => {
  let mounted;
  if (!mounted) mounted = mount(<SignUpView />);
  return mounted;
};

describe("basic tests", () => {
  it("always renders div", () => {
    expect(
      wrapper
        .find("div")
        .find("div")
        .find("h2").length
    ).toBeGreaterThan(0);
  });

  it("always renders texts", () => {
    expect(
      wrapper
        .find("div")
        .find("div")
        .find("h2")
        .text()
    ).toEqual("Why Share Vega?");
  });

  it("does not receive any props", () => {
    const clockDisplay = signUpView()
      .find("div")
      .find("div")
      .find(SignUspForm);
    expect(Object.keys(clockDisplay.props()).length).toBe(10);
  });
});
