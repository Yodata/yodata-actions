// @flow

import TypedObject from "./TypedObject";
import Action from "./action";

export const Thing = TypedObject.props({ type: "Thing" });
export const Person = TypedObject.props({ type: "Person" });
export const Organization = TypedObject.props({ type: "Organization" });
export { TypedObject };
export { default as Action } from "./action";
export { default as AcceptAction } from "./AcceptAction";
export { default as AddAction } from "./AddAction";
export { default as AssignAction } from "./AssignAction";
export { default as CreateAction } from "./CreateAction";
export { default as DeleteAction } from "./DeleteAction";
export { default as RegisterAction } from "./RegisterAction";
export { default as RejectAction } from "./RejectAction";
export { default as RemoveAction } from "./RemoveAction";
export { default as RescindAction } from "./RescindAction";
export { default as UnAssignAction } from "./UnAssignAction";
export { default as UnRegisterAction } from "./UnRegisterAction";
export { default as UpdateAction } from "./UpdateAction";
export { default as typed } from "./typed";
