import api from './api';

import { IResponsible } from '../models/responsible';

export class ResponsibleService{
  post(args: IResponsible){
    return api.post('responsible', args);
  }
  update(){

  }
  get(){

  }
}

