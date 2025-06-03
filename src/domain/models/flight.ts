import sequelizeConnection from "../../config/config";
import { DataTypes, Model, type Optional } from "sequelize";
// import { uuidv7 } from "uuidv7";

export interface FlightModel {
  id: string;
  incio: string;
  destino: string;
  partida: Date;
  returno: Date;
  tipoViagem: string;
  numerDePassageiro: number;
  valor: string;
}

export interface FlightInput extends Optional<FlightModel, "id"> {}
export interface FlightOutput extends Required<FlightModel> {}

export class Flight
  extends Model<FlightModel, FlightInput>
  implements FlightModel
{
  declare id: string;
  declare incio: string;
  declare destino: string;
  declare partida: Date;
  declare returno: Date;
  declare tipoViagem: string;
  declare numerDePassageiro: number;
  declare valor: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;
}

Flight.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    incio: {
      type: DataTypes.STRING,
    },
    destino: {
      type: DataTypes.STRING,
    },
    partida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returno: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tipoViagem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numerDePassageiro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: "Flights",
  }
);

// Flight.beforeCreate((Flight) => {
//   Flight.id = uuidv7();
// });
