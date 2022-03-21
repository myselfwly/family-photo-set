import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup(props, { slots, emit }) {
    return () => <>Home</>;
  },
});
