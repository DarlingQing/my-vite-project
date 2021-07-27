export default {
  // 将laod进来的代码块加工处理
  // code是块的内容
  // id 是请求的url
  transfrom(code, id) {
    console.log(code, id);
    // 将i8n信息写入组件配置，只接管vue组件并且标签是i8n类型的，才接管
    // if (/vue&type=i18n/.test(id)) {
    //   return `export default Comp => {
    //   }`;
    // }
    // return null;
    if (!/vue&type=i18n/.test(id)) {
      return;
    }
    return `export default Comp => {
      Comp.i18n = ${code}
    }`;
  }
}