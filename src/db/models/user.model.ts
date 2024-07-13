import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
  InitOptions,
} from "sequelize";

export const USER_TABLE = "users";

// This creates the structure and definition of an entity or table.
export const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at", // This to map from camelCase to snake_case
  },
};

// order of InferAttributes & InferCreationAttributes is important.
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  // 'CreationOptional' is a special type that marks the field as optional
  // when creating an instance of the model (such as using Model.create()).
  // id can be undefined during creation when using `autoIncrement`
  declare id: CreationOptional<number>;
  declare name: string;
  declare password: string;
  declare email: string;
  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  // declare updatedAt: CreationOptional<Date>;

  static config(sequelize: Sequelize): InitOptions<User> {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false, // This to remove default behavior for create updated_at field when update or delete
    };
  }
}
