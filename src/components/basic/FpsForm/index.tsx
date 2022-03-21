import { defineComponent } from "vue";
import { Form, FormItem } from "ant-design-vue";
import { formProps } from "ant-design-vue/lib/form/Form";
import { formItemProps } from "ant-design-vue/lib/form/FormItem";
import { fpsClass } from "..";
const FpsForm = defineComponent({
  name: "FpsForm",
  props: { ...formProps, fpsClass },
  emits: [],
  setup(props, { emit, slots, expose }) {
    return () => (
      <Form
        class={`fps fps-input${props.fpsClass ? " " + props.fpsClass : ""}`}
        {...props}
      >
        {slots}
      </Form>
    );
  },
});

const FpsFormItem = defineComponent({
  props: {
    fpsClass,
    ...formItemProps,
  },
  setup(props, { slots }) {
    return () => (
      <FormItem
        class={`fps fps-input${props.fpsClass ? " " + props.fpsClass : ""}`}
        {...props}
      >
        {slots}
      </FormItem>
    );
  },
});

interface LabelCol {
  span: number;
}
interface WrapperCol extends LabelCol {}
FpsForm.FormItem = FpsFormItem;
export { FpsForm, FpsFormItem, LabelCol, WrapperCol };
