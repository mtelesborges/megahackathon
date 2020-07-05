import { Request, Response } from "express";

import knex from './../database/connection';

export class ResponsibleController{
  async show(request: Request, response: Response){
    return response.json();
  }

  async create(request: Request, response: Response){
    
    try {
      
      const {
        name,
        phoneNumber
      } = request.body;

      if(!name){
        return response
        .status(400)
        .json({
          message: 'Name is required.',
          success: false
        })
      }

      if(!phoneNumber){
        return response
        .status(400)
        .json({
          message: 'Phone number is required.',
          success: false
        })
      }

      let _phoneNumber = phoneNumber.toString().replace(/[^\d]/g, '');

      if(!/\d{11}|\d{10}/g.test(_phoneNumber)){
        return response
        .status(400)
        .json({
          message: 'Phone number is invalid.',
          success: false
        })
      }

      await knex('responsible')
        .where({phoneNumber})  
        .select('*')
        .then(async (data) => {
          if(data.length !== 0){
            return response
            .status(400)
            .json({
              message: 'User already exits.',
              success: false
            })
          }

          const trx = await knex.transaction();

          await trx('responsible')
            .insert({
              name,
              phoneNumber
            }).then((data) => {
              trx.commit();
              return response
                .status(200)
                .json({
                  data: data[0],
                  message: 'User created successfully.',
                  success: true
                })
            }).catch(() => {
              trx.rollback();
              return response
                .status(400)
                .json({
                  message: 'he request can\'t be processed.',
                  success: false
                })
            })

        }).catch(() => {
          
        })



    } catch (error) {
      return response
        .status(500)
        .json({
          error: error.message,
          message: 'The request can\'t be processed.',
          success: false
        })
    }
  }
}