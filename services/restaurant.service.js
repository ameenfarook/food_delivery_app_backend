const { mongoConfig } = require("../config");
const MongoDB = require("./mongodb.service");

const getAllRestaurant = async () => {
  try {
    let restaurants = await MongoDB.db
      .collection(mongoConfig.collections.RESTAURANTS)
      .find()
      .toArray();

    if (restaurants && restaurants?.length > 0) {
      return {
        status: true,
        message: "Restaurants found successfully",
        data: restaurants,
      };
    } else {
      return {
        status: false,
        message: "No restaurants found",
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Restaurant finding failed",
      error: `Restaurant finding failed : ${error?.message}`,
    };
  }
};

module.exports = { getAllRestaurant };
