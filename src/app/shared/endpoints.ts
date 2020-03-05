/-- END POINTLER TUTULACAK --/;
import {servers} from './configuration';

export const endpoints = {
  users: {
    authenticate: {
      //path: servers.postmanMock + '/users/authenticate'
      path: servers.real + '/Authentication/login'
    },
    logout:{
      path:servers.real + '/Authentication/logout'
    },
    //path: servers.postmanMock + '/users'
    path: servers.real + '/Authentication'

  },
  ticket: {
    getNewOrder: {
      path: servers.real + '/orders/getneworder'
      //path: servers.postmanMock + '/getNewOrder'
    },
    getInProgressOrder: {
      path: servers.real + '/orders/getinprogressorder'
      //path: servers.postmanMock + '/getInprogressOrder'
    },
    getComplatedOrder: {
      path: servers.real + '/orders/getcompletedorder'
      //path: servers.postmanMock + '/getCompletedOrder'
    },
    getBeforeDyehouse:{
      path: servers.real + '/orderdetails/getbeforedyeing'
      //path: servers.postmanMock + '/getBeforeDyehouse'
    },
    postBeforeDyehouse:{
      //path: servers.postmanMock + '/postBeforeDyehouse?id='
    },
    getAfterDyehouse:{
      path: servers.real + '/orderdetails/getafterdyeing'
      //path:servers.postmanMock + '/getAfterDyehouse'
    },
    getBeforeClose:{
     path: servers.real + '/orderdetails/getbeforeclose'
     //path:servers.postmanMock + '/getBeforeClose'
    },
    getOrder:{
      //path:servers.postmanMock + '/getOrder'
      path:servers.real + '/orders'
      //path:servers.postmanMock + '/putBeforeDyehouse'
    },
    getDetail:{
      path:servers.real + '/orderdetails/getorders'
    }
  }
};
