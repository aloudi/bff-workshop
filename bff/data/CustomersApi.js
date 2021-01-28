const { RESTDataSource } = require('apollo-datasource-rest');

class CustomersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4859/api';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', AUTH_TOKEN);
    request.headers.set('Content-Type', 'application/json');
  }

  async getAllCustomers(i) {
    return this.get(`customers`);
  }

  async getCustomerById(id) {
    return this.get(`customer/:${id}`);
  }
}

module.exports = CustomersApi;