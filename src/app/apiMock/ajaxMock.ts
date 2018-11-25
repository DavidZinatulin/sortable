import {default as sampleData} from "./records-sample.json";
import { compareValues } from "app/utils/helpers";

export const ajaxMock = async (
  sortBy: string,
  asc: boolean,
  itemsToLoad?: number,
  previouslyLoaded?: number
) => {

  let responseData = sampleData.sort(compareValues(sortBy, asc));
  responseData = responseData.slice(previouslyLoaded, itemsToLoad);


  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(responseData)
    }, 100);
  });

  return response;
};