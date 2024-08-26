// import { User } from "./models";
// import { connectToDB } from "./utils";

// export const fetchUsers = async (q, page) => {
//   try {
//     const ITEM_PER_PAGE =2;
//     const limit = ITEM_PER_PAGE;
//     const skip =  limit* (page - 1) ;
//     const query = q ? { username: { $regex: q, $options: 'i' } } : {};

//     const users = await User.find(query).skip(skip).limit(limit);
//     const count = await User.countDocuments(query); // Use countDocuments instead of count
//     return { count, users };
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch users!");
//   }
// };

import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 4;

  try {
    connectToDB();
    const count = await User.countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};