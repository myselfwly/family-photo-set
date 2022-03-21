import { defineComponent } from "vue";
import LoginPanel from "./LoginPanel/LoginPanel";
import "./index.less";
export default defineComponent({
  setup() {
    return () => (
      <>
        <div class="fps-login">
          <div class="back-panel">
            <div class="login-panel">
              <LoginPanel />
            </div>
          </div>
        </div>
      </>
    );
  },
});
