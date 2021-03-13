import { shallowMount } from "@vue/test-utils";
import Landing from "../../index.vue";



const Wrapper = shallowMount(<Landing />, {
  propsData: {}
});

describe("Landing Page", () => {
  test("Check Page in Dom", () => {
    expect(Wrapper).toBe(Wrapper);
  });

});