import { ajaxMock } from "app/apiMock/ajaxMock";
import { RecordModel } from "app/models";
import {
  LINES_TO_LOAD,
  CLEAR_RECORDS,
  RECEIVE_RECORDS,
  REQUEST_RECORDS
} from "app/utils/constants";

export const requestRecords = (
  itemsToLoad: number = LINES_TO_LOAD,
  previouslyLoaded: RecordModel[] = [],
  sortBy: string = 'streams',
  asc: boolean = false
) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_RECORDS, loading: true });

    const res = await ajaxMock(sortBy, asc, itemsToLoad, previouslyLoaded.length);

    receiveRecords(dispatch, res, previouslyLoaded);
  };
};

const receiveRecords = (
  dispatch,
  result: any,
  previouslyLoaded: RecordModel[]
) => {
  dispatch({
    type: RECEIVE_RECORDS,
    loading: false,
    data: [...previouslyLoaded, ...result]
  });
};

export const clearRecords = () => ({ type: CLEAR_RECORDS, data: [] });