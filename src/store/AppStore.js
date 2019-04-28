import {observable, action} from 'mobx';

class AppStore {
  @observable Num ;          //当前项目Id

  constructor() {
    this.Num = "123";
  }


}

const appStore = new AppStore()
export default appStore