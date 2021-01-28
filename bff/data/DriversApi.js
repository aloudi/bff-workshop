const { RESTDataSource } = require('apollo-datasource-rest');

const AUTH_TOKEN =
  "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjdiNTg2NGVkZDc2YTAwMTk5YjJlYWUiLCJjb21wYW55SWQiOiI1ZjRiZWEzYzU3ZTI2OTAwMWE3ZWRjOTIiLCJjb21wYW55TmFtZSI6IkF1dG9tYXRpemUiLCJlbWFpbHMiOlsiYnJpYW5AYXV0b21hdGl6ZS5jb20iXSwibmFtZSI6IkJyaWFuIFRob21wc29uIiwiaWF0IjoxNjExNjcxNjU3fQ.ipaEBJGaFXILc49et30htKeePpQpUh82OzqkrhJJzOc";

class DriversApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://dev-api.automatize.app/api';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', AUTH_TOKEN);
    request.headers.set('Content-Type', 'application/json');
  }

  async getDrivers() {
    return this.post('drivers/units/search', {
      params: {},
    }).then(res => {
      console.log(res);
      return res;
    })
  };

  async getDriver(unitId) {
    return this.get(`drivers/units/${unitId}`)
  };
}

module.exports = DriversApi;