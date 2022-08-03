import { Request, Response } from "express";
import Plan from "../../models/Plans";
import Pet from "../../models/Pets"
import logger from "../../infra/logger";

const controller = {
    async getPlans(req: Request, res: Response) {

        try {
            const { id } = req.params;

            const plans = await Plan.findOne({ 0: id });
            return res.status(200).json(plans);

        } catch (error) {
            logger.error(`[getPlans]Erro ao verificar os planos: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }
    },
    async createPlan(req: Request, res: Response) {
        try {
            const { consultaClinica, vacina, diariaInternacao, emergencia,
                teleatendimento, coberturaNacional, consultaDomicilio,
                procedimentosCirurgicos,
            } = req.body;
            const { id } = req.params;

            const pets = await Pet.findById(id);

            const newPlan = await Plan.create(
                {
                    ...req.body,
                    pet: [pets?._id]
                },
            );

            return res.status(201).json(newPlan);
        } catch (error) {
            logger.error(`[createPlan]Erro ao criar o plano: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }
    },
    async editPlan(req: Request, res: Response) {
        try {
            const { consultaClinica, vacina, diariaInternacao, emergencia,
                teleatendimento, coberturaNacional, consultaDomicilio,
                procedimentosCirurgicos,
            } = req.body;
            const { id } = req.params;

            const modifyPlan = await Plan.findOneAndUpdate(
                { 0: id },
                {
                    ...req.body,
                },
                {
                    new: true,
                }
            );

            return res.status(201).json(modifyPlan);

        }catch (error) {
            logger.error(`[modifyPlan]Erro ao editar o plano: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }

    }
}
export default controller;

function id(id: any) {
    throw new Error("Function not implemented.");
}
