import { defineComponent, reactive } from "vue";
import { FpsFormItem, FpsForm, FpsInput } from "@/components/basic";
import "./index.less";
import { LabelCol, WrapperCol } from "@/components/basic/FpsForm";
export default defineComponent({
  name: "LoginPanel",
  setup() {
    const formData = reactive({
      userName: "",
      passWord: "",
    });
    const labelCol: LabelCol = { span: 6 };
    const wrapperCol: WrapperCol = { span: 16 };
    return () => (
      <>
        <div class="panel">
          <FpsForm model={formData} labelCol={labelCol} wrapperCol={wrapperCol}>
            <FpsFormItem label={"userName"} name={"userName"}>
              <FpsInput />
            </FpsFormItem>
            <FpsFormItem label={"passWord"} name={"passWord"}>
              <FpsInput />
            </FpsFormItem>
          </FpsForm>
        </div>
      </>
    );
  },
});
