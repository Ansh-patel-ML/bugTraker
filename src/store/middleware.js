const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action.type);
  //   console.log("Middleware run..");
  //   console.log(store.getState());
  return next(action);
};

export const middleware = loggerMiddleware;
