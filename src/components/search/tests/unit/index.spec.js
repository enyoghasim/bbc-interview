import { shallowMount } from "@vue/test-utils";
import SearchBox from "../../index.vue";

describe("SEARCHBOX", () => {
  const wrapper = shallowMount(SearchBox, {
    propsData: {
      customName: "search",
      placeHolderText: "SEARCH YOUR CITY!",
      inputType: "search",
    },
  });
  test("CHECKING IF PROPS EXISTS", async () => {
    expect(wrapper.props("customName")).toBe("search");
    expect(wrapper.props("placeHolderText")).toBe("SEARCH YOUR CITY!");
    expect(wrapper.props("inputType")).toBe("search");
  });
  test("CHECKING IF CHANGE ON INPUT EMITS A CUSTOM EVENT", async () => {
    const input = wrapper.find("input[type='search']");
    await input.setValue("some value");
    expect(input.element.value).toBe("some value");
  });
});
