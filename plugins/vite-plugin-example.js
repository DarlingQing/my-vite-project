// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function () {
  return {
    name: "my-example",
    // resolveId的执行顺序会比load早，所有
    resolveId(source) {
      // 是否处理当前请求
      if (source === "virtual-module") {
        // 表示接管
        return source;
      }
      // 否则不接管
      return null;
    },
    // 这个东西只是说要不要接管
    load(id) {
      // 可以直接returnr
      return "export default 'this is a virtual'";
      // if (id === "virtual-module") {
      //   // 返回加载模块代码
      //   return "export default 'this is a virtual'";
      // }
      // return null;
    },
  };
}
