import { Schema, model } from "mongoose";
import { IClient } from "./Clients";
import { IPets } from "./Pets";

export interface IImages {
    link: string;
    nome: string;
    cliente: Schema.Types.ObjectId | IClient;
    pet: Schema.Types.ObjectId | IPets;
}

const imagesSchema = new Schema<IImages>(
    {
      link: {
        type: Schema.Types.String,
      },
      nome: {
        type: Schema.Types.String,
      },
      cliente: {
        type: Schema.Types.ObjectId,
        ref: "Client",
      },
      pet: {
        type: Schema.Types.ObjectId,
        ref: "Pets",
      },

    },
    { timestamps: true }
  );
  
  export default model<IImages>("Images", imagesSchema);
  