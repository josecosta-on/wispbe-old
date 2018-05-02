import {getCmds, start} from '../app/app.imports';
import { terminal } from '../app/terminal';

interface cmdInjectable{
  constructor:Function
}
export function Injectable() {
  
  return function classDecorator<T extends {new(...args:any[]):cmdInjectable}>(constructor:T) {

    let c= class extends constructor {         
       
        constructor(...args:any[]){          
          super(...args)
        }
    }
    new c()
    return c
  }
}


@Injectable()
export class NavController{
  goHome(){
    terminal.inquirer.prompt(getCmds()).then((answers) => start(answers))
  }
}


