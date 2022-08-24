import * as constants from "@/const";

const constantsHandleData = Object.entries(constants).reduce(
  (newObj, currentData) => {
    const [constName, constObj] = currentData;
    newObj[constName] = constObj;

    return newObj;
  },
  {}
);

const globalData = {};

const globalMixins = {
  data: () => ({
    ...globalData,
    ...constantsHandleData,
  }),
};

export default globalMixins;
