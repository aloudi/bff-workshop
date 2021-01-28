const { RESTDataSource } = require('apollo-datasource-rest');

const AUTH_TOKEN =
  "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjdiNTg2NGVkZDc2YTAwMTk5YjJlYWUiLCJjb21wYW55SWQiOiI1ZjRiZWEzYzU3ZTI2OTAwMWE3ZWRjOTIiLCJjb21wYW55TmFtZSI6IkF1dG9tYXRpemUiLCJlbWFpbHMiOlsiYnJpYW5AYXV0b21hdGl6ZS5jb20iXSwibmFtZSI6IkJyaWFuIFRob21wc29uIiwiaWF0IjoxNjExNjcxNjU3fQ.ipaEBJGaFXILc49et30htKeePpQpUh82OzqkrhJJzOc";

class TripsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL='https://dev-api.automatize.app/io';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', AUTH_TOKEN);
    request.headers.set('Content-Type', 'application/json');
  }

  async getTrips() {
    return this.post('trips/search', {
      params: {
        status: ["Needs Review", "In Progress"]
      },
      projection: {
        "collapsedItem.geoJson": 0,
        "collapsedItem.predictedRoute": 0,
      },
      paginate: { reverse: true, amount: 25 },
    }).then(res => {
      return res.results;
    });
  };
}

module.exports = TripsApi;