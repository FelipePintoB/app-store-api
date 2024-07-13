"use strict";

import { QueryInterface, Sequelize } from "sequelize";
import { USER_TABLE, UserSchema } from "../models/user.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, sequelize: Sequelize) {
    queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    queryInterface.dropTable(USER_TABLE);
  },
};
