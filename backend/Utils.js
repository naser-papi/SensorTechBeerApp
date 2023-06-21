const data = [
  {
    id: "1",
    name: "Pilsner",
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
  {
    id: "2",
    name: "IPA",
    minimumTemperature: 5,
    maximumTemperature: 6,
  },
  {
    id: "3",
    name: "Lager",
    minimumTemperature: 4,
    maximumTemperature: 7,
  },
  {
    id: "4",
    name: "Stout",
    minimumTemperature: 6,
    maximumTemperature: 8,
  },
  {
    id: "5",
    name: "Wheat beer",
    minimumTemperature: 3,
    maximumTemperature: 5,
  },
  {
    id: "6",
    name: "Pale Ale",
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
];

const TempState = {
  NORMAL: 0,
  LOW: 1,
  HIGH: 2,
};

function AnalyzingCurrentTemp(sensorInfo) {
  const baseInfo = data.find((info) => info.id === sensorInfo.id);
  const curTemp = sensorInfo.temperature;
  //TODO:: if curTemp is out Of range we can log or some thing else like set spoiled to true
  return {
    ...sensorInfo,
    status:
      curTemp < baseInfo.minimumTemperature
        ? TempState.LOW
        : curTemp > baseInfo.maximumTemperature
        ? TempState.HIGH
        : TempState.NORMAL,
    spoiled: false,
  };
}

module.exports = {
  data,
  AnalyzingCurrentTemp,
};
