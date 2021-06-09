import { getLetterCount } from "./letter-count.js";
import _ from "lodash";

export const testAnagram = (strOne, strTwo) => {
  let regx = /\s+/g;
  strOne = strOne.replace(regx, "").toLowerCase();
  strTwo = strTwo.replace(regx, "").toLowerCase();
  let strOneCount = getLetterCount(strOne);
  let strTwoCount = getLetterCount(strTwo);

  return _.isEqual(strOneCount, strTwoCount);
};
