const {DataTypes} = require("sequelize");
const sequelize = require("./index");

const Book = sequelize.define("books",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    release_date:{
        type:DataTypes.DATEONLY,
    },
    subject:{
        type:DataTypes.INTEGER,
    }
});

sequelize.sync().then(()=>{
    console.log('Book table created sucessfully!');
    
    Book.create({
        title:"Clean Code",
        author:"Robert Cecil Martin",
        release_date:"2021-12-14",
        subject:3
    }).then(res=>{
        console.log(res)
    }).catch((error)=>{
        console.log('Failed to create a new record :', error);
    });

}).catch((error)=>{
    console.log('Unable to create table : ', error);
});

module.exports=Book