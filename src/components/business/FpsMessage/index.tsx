import { FpsMessageDestory } from "./Destory";
import { FpsMessageError } from "./Error";
import { FpsMessageInfo } from "./Info";
import { FpsMessageSuccess } from "./Success";
import { FpsMessageWarning } from "./Warning";
import "./index.less";
export const FpsMessage = {
  success: FpsMessageSuccess,
  info: FpsMessageInfo,
  destory: FpsMessageDestory,
  error: FpsMessageError,
  warning: FpsMessageWarning,
};
