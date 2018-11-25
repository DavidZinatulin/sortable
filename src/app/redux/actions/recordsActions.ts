import { ajaxMock } from "app/apiMock/service";
import { RecordModel } from "app/models";

export const loadRecords = (
  sortBy: string = 'streams',
  itemsToLoad: number = 5,
  previouslyLoaded: RecordModel[] = []
) => {
  return async (dispatch) => {
    dispatch({ type: 'REQUEST_RECORDS', loading: true });

    const res = await ajaxMock(sortBy, itemsToLoad, previouslyLoaded.length);

    dispatch({
      type: 'RECEIVE_RECORDS',
      loading: false,
      data: [...previouslyLoaded, ...res]
    });
  };
};