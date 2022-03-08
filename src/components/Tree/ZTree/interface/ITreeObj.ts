import { IZTreeNode } from "./IZTreeNode";

export interface ITreeObj {
  setting?: string;
  addNodes?: (
    parentNode: any,
    index: any,
    newNodes: any,
    isSilent: any
  ) => void;
  cancelEditName?: (newName: any) => void;
  cancelSelectedNode?: (node: any) => void;
  checkAllNodes?: (checked: any) => void;
  checkNode?: (
    node: IZTreeNode,
    checked: boolean,
    checkTypeFlag: boolean,
    callbackFlag?: boolean
  ) => void;
  copyNode?: (targetNode: any, node: any, moveType: any, isSilent: any) => void;
  destroy?: (id: string) => {};
  editName?: (node: any) => void;
  expandAll?: (expandFlag: any) => void;
  expandNode?: (
    node: any,
    expandFlag: any,
    sonSign: any,
    focus: any,
    callbackFlag: any
  ) => void;
  getChangeCheckedNodes?: () => IZTreeNode[];
  getCheckedNodes?: (checked: boolean) => IZTreeNode[];
  getNodeByParam?: (key: any, value: any, parentNode: any) => void;
  getNodeByTId?: (tId: any) => void;
  getNodeIndex?: (node: any) => void;
  getNodes?: () => {};
  getNodesByFilter?: (
    filter: any,
    isSingle: any,
    parentNode: any,
    invokeParam: any
  ) => void;
  getNodesByParam?: (key: any, value: any, parentNode: any) => void;
  getNodesByParamFuzzy?: (key: any, value: any, parentNode: any) => void;
  getSelectedNodes?: () => {};
  hideNode?: (node: any) => void;
  hideNodes?: (nodes: any) => void;
  moveNode?: (targetNode: any, node: any, moveType: any, isSilent: any) => void;
  reAsyncChildNodes?: (
    parentNode: any,
    reloadType: any,
    isSilent: any,
    callback: any
  ) => void;
  reAsyncChildNodesPromise?: (
    parentNode: any,
    reloadType: any,
    isSilent: any
  ) => void;
  refresh?: () => {};
  removeChildNodes?: (parentNode: any) => void;
  removeNode?: (node: any, callbackFlag: any) => void;
  selectNode?: (node: any, addFlag: any, isSilent: any) => void;
  setChkDisabled?: (
    node: any,
    disabled: boolean,
    inheritParent: boolean,
    inheritChildren: boolean
  ) => void;
  setEditable?: (editable: any) => void;
  showNode?: (node: any) => void;
  showNodes?: (nodes: any) => void;
  transformToArray?: (nodes: any) => any[];
  transformTozTreeNodes?: (simpleNodes: any) => void;
  updateNode?: (node: IZTreeNode, checkTypeFlag?: boolean) => void;
}
