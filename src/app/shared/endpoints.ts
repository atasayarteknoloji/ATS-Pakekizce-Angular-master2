/-- END POINTLER TUTULACAK --/;
import {servers} from './configuration';

export const endpoints = {
  users: {
    authenticate: {
      //path: servers.postmanMock + '/users/authenticate'
      path: servers.real + '/Authentication/login'
    },
    //path: servers.postmanMock + '/users'
    path: servers.real + '/Authentication'

  },
  ticket: {
    getNewOrder: {
      path: servers.real + '/orders/getneworder'
    },
    getInProgressOrder: {
      path: servers.real + '/orders/getinprogressorder'
    },
    getComplatedOrder: {
      path: servers.real + '/orders/getcompletedorder'
    },
    getBeforeDyehouse:{
      path: servers.real + '/orderdetails/getbeforedyeing'
    },
    getAfterDyehouse:{
      path: servers.real + '/orderdetails/getafterdyeing'
    },
    getBeforeClose:{
      path: servers.real + '/orderdetails/getbeforeclose'
    },
    getOrder:{
      //path:servers.postmanMock + '/getOrder'
      path:servers.real + '/orders/getneworder'
    }
  }
};
