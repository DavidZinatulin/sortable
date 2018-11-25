import {default as sampleData} from './records.json';
import { compareValues } from "app/utils/helpers";

export const ajaxMock = async (
  sortBy?: string,
  itemsToLoad?: number,
  previouslyLoaded?: number
) => {

  let responseData = sampleData.slice(previouslyLoaded, itemsToLoad);

  if (sortBy) {
    responseData = responseData.sort(compareValues(sortBy));
  }

  const response = responseData;
  // const response = await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(responseData)
  //   }, 1000);
  // });

  return response;
};