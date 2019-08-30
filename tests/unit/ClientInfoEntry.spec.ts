import { shallowMount } from "@vue/test-utils";
import ClientInfoEntry from "@/components/ClientInfoEntry.vue";

describe("ClientInfoEntry.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(ClientInfoEntry);
    expect(wrapper).toMatchSnapshot();
  });
});
