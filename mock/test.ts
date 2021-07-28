export default [
  {
    url: "/api-dev/users",
    method: "get",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    response: () => {
      return {
        code: 0,
        data: [
          {
            name: "tom",
          },
          {
            name: "jerry",
          },
        ],
      };
    },
  },
];
