import Condtion from './condtions/condtion'
import Column from './columns/column'
export default class Having {
  constructor(condtion) {
    this.condtion = condtion;
    this.condtion = new Condtion();
    this.columnPathArray = [];
    this.columnMap = {};
    let dummy = (a) => {
      return a
    };
  }
  execute(groupByedData) {
    let gropuByed = groupByedData.gropuByed;
    let preGroupByed = groupByedData.preGroupByed;
    let resultMap = {
      gropuByed: {},
      preGroupByed: {}
    };
    for (let groupByKey in gropuByed) {
      let record = gropuByed[groupByKey];
      let records = preGroupByed[groupByKey];
      if (this.condition.execute(record, records)) {
        resultMap.gropuByed[groupByKey] = record;
        resultMap.gropuByed[groupByKey] = records;
      }
    }
    retun resultMap;
  }
}
