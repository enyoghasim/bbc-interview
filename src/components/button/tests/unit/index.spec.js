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
    expect(button).exists();
  });
  test("checking if button triggers an event", async () => {
    const button = wrapper.find("button[name='btn']");
    await button.trigger("click");
    expect(wrapper.emitted().changeLang[0].Name).toBe("btn");
  });
});
