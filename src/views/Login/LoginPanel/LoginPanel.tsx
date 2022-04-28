import { defineComponent, reactive } from "vue";
import { FpsFormItem, FpsForm, FpsInput, FpsButton } from "@/components/basic";
import { LabelCol, WrapperCol } from "@/components/basic/FpsForm";

import "./index.less";
import { isLogin, login } from "@/api/login";
import { route } from "@/router";
export default defineComponent({
  name: "LoginPanel",
  setup() {
    const formData = reactive({
      loginName: "",
      password: "",
    });
    const labelCol: LabelCol = { span: 6 };
    const wrapperCol: WrapperCol = { span: 16 };
    return () => (
      <>
        <div class="panel">
          <div class="head"></div>
          <div class="body">
            <FpsForm
              model={formData}
              labelCol={labelCol}
              wrapperCol={wrapperCol}
            >
              <FpsFormItem label={"用户名"} name={"loginName"}>
                <FpsInput
                  style={{ width: "300px" }}
                  onChange={(e) => {
                    formData.loginName = e.target.value;
                  }}
                />
              </FpsFormItem>
              <FpsFormItem label={"密码"} name={"password"}>
                <FpsInput
                  style={{ width: "300px" }}
                  type="password"
                  onChange={(e) => {
                    formData.password = e.target.value;
                  }}
                />
              </FpsFormItem>
              <FpsFormItem wrapperCol={{ offset: 16 }}>
                <FpsButton
                  onClick={() => {
                    login(formData).then((res) => {
                      res.data.code === "0" ? route.push("/") : undefined;
                    });
                  }}
                >
                  登录
                </FpsButton>
              </FpsFormItem>
            </FpsForm>
          </div>
        </div>
      </>
    );
  },
});
