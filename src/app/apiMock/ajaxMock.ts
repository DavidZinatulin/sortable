import {default as sampleData} from "./records-sample.json";
import { compareValues } from "app/utils/helpers";
import { AJAX_MOCK_DELAY } from "app/utils/constants";

export const ajaxMock = async (
  sortBy: string,
  asc: boolean,
  itemsToLoad?: number,
  previouslyLoaded?: number
) => {

  let responseData = sampleData
    .sort(compareValues(sortBy, asc))
    .slice(previouslyLoaded, itemsToLoad);


  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(responseData)
    }, AJAX_MOCK_DELAY);
  });

  return response;
};