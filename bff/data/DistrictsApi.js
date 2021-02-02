const DataLoader = require("dataloader");
const AutomatizeDataSource = require("./AutomatizeDataSource");

module.exports = class DistrictsApi extends (
  AutomatizeDataSource
) {
  batchedDistrictLoader = new DataLoader(async (ids) => {
    const allDistricts = await this.post("api/districts/districts/search", {
      params: {},
    });
    return ids.map(id => allDistricts.find(district => district.districtId === id));
  });

  async getDistricts(ids) {
    console.log(ids);
    return ids.map(id => this.batchedDistrictLoader.load(id));
  }
};
