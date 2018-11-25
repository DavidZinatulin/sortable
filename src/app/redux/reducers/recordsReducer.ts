import { TableModel } from "app/models";

const initialState: TableModel = {
  data: [],
  loading: false,
  sorting: false,
  sortColumn: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_RECORDS':
      return {
        ...state,
        loading: action.loading,
      };
    case 'RECEIVE_RECORDS':
      return {
        ...state,
        loading: action.loading,
        data: action.data
      };
    default:
      return state;
  }
};