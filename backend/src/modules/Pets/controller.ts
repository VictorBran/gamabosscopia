import { Request, Response } from "express";
import path from "path";
import logger from "../../infra/logger";
import Pet from "../../models/Pets"
import Image from "../../models/Images";


const controller = {

    async createPet(req: Request, res: Response) {
      const {nome, dono, idade, peso} = req.body;
      const {file} = req;
                        
        const savedPet = await Pet.count({
          nome,
          dono,
          idade,
          peso,
        });

        if(savedPet){
          logger.warn(`[createPet]Tentativa repetida de cadastro do pet:${req.socket.remoteAddress}`);
           return res.status(400).json("Pet já cadastrado no banco");
          }

          const image = await Image.create({           
            link:`${path.resolve("uploads","images")}${file?.filename}`,           
            nome: file?.filename,         
          });  

             const newPet = await Pet.create({           
            ...req.body,           
            images: [image._id],         
          }); 

          logger.info(`[createPet]Pet cadastrado: ${req.socket.remoteAddress}`);
          return res.status(201).json(newPet);
      },
      
      async editPet(req: Request, res: Response){ 
        const { nome, idade, peso, dono} = req.body;
        const {file} = req;       

        const image = await Image.create({           
          link:`${path.resolve("uploads","images")}${file?.filename}`,           
          nome: file?.filename,         
        });
 
        const updatePet = Pet.findOneAndUpdate({
          ...req.body,
          images: [image._id],
        });
        
        
  
        logger.info(`[editPet] Pet editado: ${req.socket.remoteAddress}`);
        return res.status(201).json(updatePet);
  
      } 
      
    }
    
    
export default controller;