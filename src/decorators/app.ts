import { lazyloading } from '../app/lazyloading';
import { terminal } from '../app/terminal';
import { cmds, getCmds, start } from './../app/app.imports';
interface Config{
}
interface cmdApp{
  constructor:Function
}

export function App(config?:Config) {
  config={...config}
  return function classDecorator<T extends {new(...args:any[]):cmdApp}>(constructor:T) {

    let c= class extends constructor {         
        
        constructor(...args:any[]){          
          super(...args)
          terminal.commander
            .version('1.0.0')
            .description('Wispbe System')

            this.load()
        }
        async load(){
          terminal.cls()
          await lazyloading()
         
          cmds.forEach((c)=>{
            terminal.commander
              .command(c.name)
              .alias(c.alias)
              .description(c.description)
              .action(c.action)
          })
        
        
          if(!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
              console.log(terminal.chalk.green('===> Wispbe System'))
              
              terminal.inquirer.prompt(getCmds()).then((answers) => start(answers))
              //commander.outputHelp()
              //process.exit()
          }
          terminal.commander.parse(process.argv)
        }
    }
    new c()
    return c
  }
}