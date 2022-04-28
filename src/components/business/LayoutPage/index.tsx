import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "Layout",
  props: [],
  setup(props) {
    return () => (
      <>
        <div class="nav">{"NAV"}</div>
        <RouterView />
      </>
    );
  },
});
