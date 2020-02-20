/-- END POINTLER TUTULACAK --/;
import {servers} from './configuration';

export const endpoints = {
  users: {
    authenticate: {
      //path: servers.postmanMock + '/users/authenticate'
      path: servers.real + '/Auth/login'
    },
    //path: servers.postmanMock + '/users'
    path: servers.real + '/Auth'

  },
  ticket: {
    getNewOrder: {
      //path: servers.postmanMock + '/getNewOrder'
    },
    getInProgressOrder: {
      //path: servers.postmanMock + '/getInprogressOrder'
    },
    getNewOrderDetail: {
      //path: servers.postmanMock + '/getNewOrderDetail'
    },
    getOrder:{
      path:servers.postmanMock + '/getOrder'
    }
  }
};
