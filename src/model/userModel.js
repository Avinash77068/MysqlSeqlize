import DataTypes from 'sequelize';
// const { Sequelize, DataTypes } = pkg;


import { sequelize } from "../config/db.js";

export const userModel=sequelize.define('User',{
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    age:DataTypes.INTEGER,
    mobileNumber:DataTypes.STRING,
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
}
,{
    freezeTableName:true
})