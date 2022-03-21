import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
export default defineComponent({
  name: "App",
  setup() {
    const title = ref<string>("Hello VUE3&TSX!");
    const auther: string = "Code Wly";
    return () => (
      <>
        <RouterView></RouterView>
      </>
    );
  },
});
