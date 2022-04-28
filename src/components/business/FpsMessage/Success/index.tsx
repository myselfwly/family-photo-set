import { defineComponent } from "vue";
import { notification } from "ant-design-vue";
import { NotificationArgsProps } from "ant-design-vue/lib/notification";
import "./index.less";
export const FpsMessageSuccess = (props: NotificationArgsProps) => {
  notification.success({
    ...props,
    class: props.class + " fps_MessageSuccess fps_Message",
  });
};
