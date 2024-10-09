const {DataTypes}  = require("sequelize");
const sequelize = require("../config/config");

const User = sequelize.define("User",{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false, //createAt, UpdatedAt 필드 비활성화
});


module.exports =User;
