import { cmds } from '../app/app.imports';
import { terminal } from '../app/terminal';

interface cmdPage{
  constructor:Function
  cmdViewDidLoad?:Function
}

interface configPage{
  name:string,
  alias:string,
  description:string
  navBack?:boolean
}

export function Page(configPage:configPage) {
  let defaultPage={
    navBack:false
  }
  configPage={...defaultPage,...configPage}
  return function classDecorator<T extends {new(...args:any[]):cmdPage}>(constructor:T) {

    let c= class extends constructor {         
        title(title:string){
          
          console.log(terminal.chalk.green('=========*** '+
            title.charAt(0).toUpperCase()+title.slice(1)
          +' Page ***=========='))
        }
        nav(){

        }
        constructor(...args:any[]){          
          super(...args)
          console.log(args)
          cmds.push({
            name:configPage.name,            
            alias:configPage.alias,
            description:configPage.description,
            action:()=>{
              terminal.cls()
              this.title(configPage.name)
              if(this.cmdViewDidLoad!=undefined)this.cmdViewDidLoad()
            }

          })
        }
    }
    new c('home')
    return c
  }
}