import { ajaxMock } from "app/apiMock/service";
import { RecordModel } from "app/models";

export const requestRecords = (
  sortBy: string = 'streams',
  asc: boolean = true,
  itemsToLoad: number = 5,
  previouslyLoaded: RecordModel[] = []
) => {
  return async (dispatch) => {
    dispatch({ type: 'REQUEST_RECORDS', loading: true });

    const res = await ajaxMock(sortBy,asc, itemsToLoad, previouslyLoaded.length);

    receiveRecords(dispatch, res, previouslyLoaded);
  };
};

const receiveRecords = (
  dispatch,
  result: any,
  previouslyLoaded: RecordModel[]
) => {
  dispatch({
    type: 'RECEIVE_RECORDS',
    loading: false,
    data: [...previouslyLoaded, ...result]
  });
};