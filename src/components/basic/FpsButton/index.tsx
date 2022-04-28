import { defineComponent } from "vue";
import { Button } from "ant-design-vue";
import buttonProps from "ant-design-vue/lib/button/buttonTypes";
import { fpsClass } from "..";
import "./index.less";
const FpsButton = defineComponent({
  name: "FpsButton",
  props: { ...buttonProps, fpsClass },
  emits: ["click"],
  setup(props, { emit, expose, slots }) {
    return () => (
      <Button
        class={`fps fps-form${props.fpsClass ? " " + props.fpsClass : ""}`}
        {...props}
        onClick={(e) => {
          emit("click", e);
        }}
      >
        {slots}
      </Button>
    );
  },
});

export { FpsButton };
