import { defineComponent } from "vue";
import { notification } from "ant-design-vue";
import { NotificationArgsProps } from "ant-design-vue/lib/notification";
import "./index.less";
export const FpsMessageInfo = (props: NotificationArgsProps) => {
  notification.info({
    ...props,
    class: props.class + " fps_MessageInfo fps_Message",
  });
};
