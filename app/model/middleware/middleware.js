const middleware = store => next => action => { // eslint-disable-line
  const { type: actionType } = action;

  console.log(`middleware: actionType: ${actionType}`);

  return next(action);
};

export default middleware;
