import { shallowMount } from "@vue/test-utils";
import btnComponent from "../../index.vue";
describe("BUTTON COMPONENT", () => {
  const wrapper = shallowMount(btnComponent, {
    propsData: {
      customName: "btn",
    },
  });

  test("checking ifbutton exists", async () => {
    const button = wrapper.find("button[name='btn']");
    expect(button);
  });
});
