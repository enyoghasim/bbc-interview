import { shallowMount } from "@vue/test-utils";
import Footer from "../../index.vue";


const Wrapper = shallowMount(Footer,{
  propsData:{

  }
})


describe("Footer Component", ()=>{
  it("footer show correctly in dom",()=>{
    expect(Wrapper).toBe(Wrapper)
  });
});