const DataLoader = require("dataloader");
const AutomatizeDataSource = require("./AutomatizeDataSource");

module.exports = class DistrictsApi extends (
  AutomatizeDataSource
) {
  batchedDistrictLoader = new DataLoader(async (ids) => {
    const allDistricts = await this.post("api/districts/districts/search", {
      params: {},
    });
    console.log(allDistricts);
    return ids.map(id => allDistricts.find(district => district.id === id));
  });

  async getDistricts(ids) {
    return ids.map(id => this.batchedDistrictLoader.load(id));
  }
};
