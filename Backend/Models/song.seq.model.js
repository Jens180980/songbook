import sequelize from "../Config/db.seq.config";
import { Sequelize, DataTypes, Model } from "sequelize";

class SongModel extends Model {

}

SongModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'No title'
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize, 
    modelName: 'song'
})

export default SongModel