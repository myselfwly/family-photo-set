import { getSystemRoutes } from "@/api/system";
import { test } from "@/api/test";
import { FpsMessage } from "@/components/business/FpsMessage";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup(props, { slots, emit }) {
    return () => (
      <>
        <button
          onClick={() => {
            FpsMessage.error({ message: "error", duration: 0 });
          }}
        >
          error
        </button>
        <button
          onClick={() => {
            FpsMessage.success({ message: "success", duration: 0 });
          }}
        >
          success
        </button>
        <button
          onClick={() => {
            FpsMessage.warning({ message: "warning", duration: 0 });
          }}
        >
          warning
        </button>
        <button
          onClick={() => {
            FpsMessage.info({ message: "info", duration: 0 });
          }}
        >
          info
        </button>
        <button
          onClick={() => {
            FpsMessage.destory();
          }}
        >
          destory
        </button>
        <button
          onClick={() => {
            test().then((res) => {
              console.log(res);
            });
          }}
        >
          test
        </button>
        <button
          onClick={() => {
            getSystemRoutes().then((res) => {
              console.log(res);
            });
          }}
        >
          getSystemRoutes
        </button>
      </>
    );
  },
});
