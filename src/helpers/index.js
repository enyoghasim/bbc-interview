const convertToArray = (obj) => {
  // console.time("timer")
  let counter1 = 1;
  let counter2 = 1;
  let key = "";
  let outputArray = [];
  let sampleObject = {};
  let details = "";
  let regularText = "compare-tabs_1_city_";

  for (key in obj) {
    if (key.includes(regularText)) {
      if (counter1 === 1) {
        details = "name";
      } else if (counter1 === 2) {
        details = "aqi";
      } else if (counter1 === 3) {
        details = "cigg";
      }
      let objKey = `${regularText}${counter2}_${details}`;
      sampleObject = {
        ...sampleObject,
        [details]: obj[objKey],
      };
      if (counter1 === 3) {
        outputArray.push(sampleObject);
        sampleObject = {};
        counter1 = 1;
        counter2++;
      } else {
        counter1++;
      }
    }
  }
  return outputArray;
  //   console.timeEnd("timer")
};
module.exports = convertToArray;