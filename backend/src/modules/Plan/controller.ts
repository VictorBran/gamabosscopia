import { Request, Response } from "express";
import Plan from "../../models/Plans";
import logger from "../../infra/logger";
import Client from "../../models/Clients";

const controller = {

    async createPlan(req: Request, res: Response) {

        const {consultaClinica, 
               vacina,
               diariaInternacao,
               emergencia,
               teleatendimento,
               coberturaNacional,
               consultaDomicilio,
               procedimentosCirurgicos } = req.body;

        const newPlan = await Plan.create({...req.body});

        return res.status(201).json(newPlan);
   
    },

}

export default controller;