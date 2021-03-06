import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from 'app/redux/reducers';
import { RecordModel } from 'app/models';
import thunk from "redux-thunk";

export function configureStore(initialState?: RecordModel): Store<RecordModel> {
  let middleware = applyMiddleware(thunk);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<RecordModel>;

  if (module.hot) {
    module.hot.accept('app/redux/reducers', () => {
      const nextReducer = require('app/redux/reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}