// 被拖拽
export interface InDynDrop {
  subscribeDrop(); // 订阅事件
  unsubscribeDrop(); // 取消订阅事件
}

// 拖拽接口
export  interface InDyDrag {
  subscribeDrag(); // 订阅事件
  unsubscribeDrag() ; // 取消订阅事件
}

// 设置禁用等等
export interface InFormModel {

}

export  enum WEiHHTS {
  FORM, // 表单级别
  LAYOUT, // 布局系统级别
  LABEL = 2,
  CONTROL = 2,
};

export class FormElementControl {
  behavior: 'drop' | 'drag'; //拖拽与被拖拽
  Weights: WEiHHTS; // 权重用于判断能否放置
}
