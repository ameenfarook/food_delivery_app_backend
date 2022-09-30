const { mongoConfig } = require("../config");
const MongoDB = require("./mongodb.service");

const addBookmark = async ({ restaurantId, username }) => {
  try {
    let insertBookmark = await MongoDB.db
      .collection(mongoConfig.collections.BOOKMARKS)
      .insertOne({ restaurantId, username });
    if (insertBookmark.insertedId) {
      let bookmarkResponse = await getBookmarks({ username });
      return {
        status: true,
        message: "Bookmark added Successfully",
        data: bookmarkResponse?.data,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Item Added to Cart Failed",
    };
  }
};

const removeBookmark = async ({ restaurantId, username }) => {
  try {
    let removedBookmark = await MongoDB.db
      .collection(mongoConfig.collections.BOOKMARKS)
      .deleteOne({ restaurantId, username });
    if (removedBookmark?.deletedCount > 0) {
      let bookmarkResponse = await getBookmarks({ username });
      return {
        status: true,
        message: "Bookmark Removed Successfully",
        data: bookmarkResponse?.data,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Bookmark Removed Failed",
    };
  }
};

const getBookmarks = async ({ username }) => {
  try {
    let bookmarks = await MongoDB.db
      .collection(mongoConfig.collections.BOOKMARKS)
      .aggregate([
        {
          $match: {
            username: username,
          },
        },
        {
          $lookup: {
            from: "restaurants",
            localField: "restaurantId",
            foreignField: "id",
            as: "restaurant",
          },
        },
        {
          $unwind: {
            path: "$restaurant",
          },
        },
      ])
      .toArray();
    if (bookmarks?.length > 0) {
      return {
        status: true,
        message: "Bookmarks fetched Successfully",
        data: bookmarks,
      };
    } else {
      return {
        status: false,
        message: "Bookmarks not found",
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Bookmarks fetching Failed",
    };
  }
};

module.exports = { addBookmark, removeBookmark, getBookmarks };
