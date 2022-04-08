import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TheWelcome from "@/components/TheWelcome.vue";

describe("TheWelcome", () => {
  it("renders properly", () => {
    const wrapper = mount(TheWelcome, {});
    expect(wrapper.text()).toContain("Welcome to Vue");
  });
});
// describe("TheWelcome", () => {
//   it("renders properly", () => {
//     const wrapper = mount(TheWelcome, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })
