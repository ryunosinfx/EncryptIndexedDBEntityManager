import Condtion from './condtions/condtion'
import Column from './columns/column'
export default class GroupBy {
  constructor(columns) {
    this.columns = columns;
    this.condtion = new Condtion();
    this.columnPathArray = [];
    this.columnMap = {};
    let dummy = (a) => {
      return a
    };
    for (let column of this.columns) {
      if (Object.getPrototypeOf(Object.getPrototypeOf(column)) !== Column) {
        this.columnPathArray.push(column.path);
        this.columnMap[column.path] = column;
      } else {
        this.columnMap[column.path] = {
          execute: dummy
        };
        this.columnPathArray.push(column);
      }
    }
  }
  execute(selectData) {
    let map = {};
    let retRecoreds = [];
    let groupingMap = [];
    let preGroupByed = {};
    if (Array.isArray(selectData)) {
      for (let record of selectData) {
        let retOne = {};
        let groupingKey = [];
        for (let columnPath of this.columnPathArray) {
          let a = self.condtion.getValueByPath(record, order.path);
          let b = this.columnMap[columnPath].execute(a);
          retOne[columnPath] = b;
          groupingKey.push(columnPath);
          groupingKey.push(b);
        }
        let groupKey = groupingKey.join("/");
        let list = preGroupByed[preGroupByed];
        if(list === undefined){
          list = [];
          preGroupByed[preGroupByed] = list;
        }
        list.push(record);
        groupingMap[groupKey] = retOne;
      }
      for (let key in groupingMap) {
        retRecoreds.pus(groupingMap[key]);
      }
    }
    map.gropuByed = retRecoreds;
    map.preGroupByed = preGroupByed;
    retun map;
  }
}