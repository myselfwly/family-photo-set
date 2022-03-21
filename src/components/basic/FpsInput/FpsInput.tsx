import { Input } from "ant-design-vue";
import inputProps from "ant-design-vue/lib/input/inputProps";
import { defineComponent } from "vue";
import { fpsClass } from "..";
const FpsInput = defineComponent({
  name: "FpsInput",
  props: {
    ...inputProps,
    fpsClass,
  },
  setup(props, { slots, emit }) {
    return () => (
      <div class={`fps fps-input${props.fpsClass ? " " + props.fpsClass : ""}`}>
        <Input {...props}></Input>
      </div>
    );
  },
});
export { FpsInput };
