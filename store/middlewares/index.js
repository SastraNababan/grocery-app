const middlewareExample= store => next => action => {
  return next(action);
}

export default middlewareExample