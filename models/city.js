const { Model, DataTypes} = require('sequelize');

class City extends Model {
    static init(sequelize) {
        super.init({
            id : {
                type : DataTypes.STRING,
                primaryKey : true
            },
            
            count : { 
                type : DataTypes.STRING,
                defaultValue : 0 },

            name : {
                type : DataTypes.STRING
            },

            country : {
                type : DataTypes.STRING
            }
        }, {
            sequelize,
            modelName : 'city',
            timestamps : false
        })


    }

    static associate(models) {

    }
}

module.exports = City;