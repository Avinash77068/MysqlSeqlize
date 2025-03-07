import {Sequelize} from 'sequelize'

export const sequelize=new Sequelize('mysql_db','root','root',{
    host:'localhost',
    port:3307,
    dialect:'mysql'
})

export const dbConnection=async()=>{
    try {
        await sequelize.authenticate();
        console.log('connected successfully')
    } catch (error) {
        console.log('unable to connect',error)
    }
};

