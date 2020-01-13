/-- END POINTLER TUTULACAK --/;
import {servers} from './configuration';

export const endpoints = {
  users: {
    authenticate: {
      path: servers.postmanMock + '/users/authenticate'
    },
    path: servers.postmanMock + '/users'

  },
  ticket: {
    getNewOrder: {
      path: servers.postmanMock + '/getNewOrder'
    },
    getInProgressOrder: {
      path: servers.postmanMock + '/getInprogressOrder'
    },
    getNewOrderDetail: {
      path: servers.postmanMock + '/getNewOrderDetail'
    }
  }
};
