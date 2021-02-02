const DataLoader = require("dataloader");
const AutomatizeDataSource = require("./AutomatizeDataSource");

module.exports = class TripsApi extends (
  AutomatizeDataSource
) {
  async getDriver(unitId) {
    return this.get(`api/drivers/units/${unitId}`);
  }

  batchedDriversLoader = new DataLoader(async (unitIds) => {
    const allDrivers = await this.post("api/drivers/units/search", {
      params: {},
    });
    return unitIds.map(id => allDrivers.find(driver => driver.unitId === id));
  });

  async getDriverBatched(unitId) {
    return this.batchedDriversLoader.load(unitId);
  }
};
