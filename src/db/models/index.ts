import { Sequelize } from "sequelize";
import { User, UserSchema } from "./user.model";

function setupModels(sequelize: Sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
