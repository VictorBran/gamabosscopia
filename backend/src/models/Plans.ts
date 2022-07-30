import { Schema, model } from "mongoose";
import { IClient } from "./Clients";

export interface IPlans {
    consultaClinica: boolean; 
    vacina: boolean;
    diariaInternacao: boolean;
    emergencia: boolean;
    teleatendimento: boolean;
    coberturaNacional: boolean;
    consultaDomicilio: boolean;
    procedimentosCirurgicos: boolean;
    cliente: Schema.Types.ObjectId | IClient;
}

const plansSchema = new Schema<IPlans>(
    {
        consultaClinica:{
            type: Schema.Types.Boolean,
            required: true,
        },
        vacina:{
            type: Schema.Types.Boolean,
            required: true,
        },
        diariaInternacao:{
            type: Schema.Types.Boolean,
            required: true,
        },
        emergencia:{
            type: Schema.Types.Boolean,
            required: true,
        },
        teleatendimento:{
            type: Schema.Types.Boolean,
            required: true,
        },
        coberturaNacional:{
            type: Schema.Types.Boolean,
            required: true,
        },
        consultaDomicilio:{
            type: Schema.Types.Boolean,
            required: true,
        },
        procedimentosCirurgicos:{
            type: Schema.Types.Boolean,
            required: true,
        },
        cliente: {
            type: Schema.Types.ObjectId,
            ref: "Client",
          },
    },
    { timestamps: true }
)

export default model<IPlans>("Plans", plansSchema);








