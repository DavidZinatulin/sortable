import { RecordsModel } from "app/models";
import {
  CLEAR_RECORDS,
  RECEIVE_RECORDS,
  REQUEST_RECORDS
} from "app/utils/constants";

const initialState: RecordsModel = {
  data: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECORDS:
      return {
        ...state,
        loading: action.loading,
      };
    case RECEIVE_RECORDS:
      return {
        ...state,
        loading: action.loading,
        data: action.data
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};