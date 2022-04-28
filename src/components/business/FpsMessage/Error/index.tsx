import { defineComponent } from "vue";
import { notification } from "ant-design-vue";
import { NotificationArgsProps } from "ant-design-vue/lib/notification";
import "./index.less";
export const FpsMessageError = (props: NotificationArgsProps) => {
  notification.error({
    ...props,
    class: props.class + " fps_MessageError fps_Message",
  });
};
