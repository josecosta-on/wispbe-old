
import * as handlers from './app';
import { absolutePath } from './paths';


export const appDir=__dirname

export interface  cmd{
  name:string,
  alias:string,
  description:string,
  action:any
}






export const cmds:Array<cmd>=[]
cmds.push({
  name:'exit',
  alias:'e',
  description:'exit app',
  action:()=>{
    console.log('exit app')
    process.exit()
  }
})
export function getCmds(){
  return [
    {
      type: 'list',
      name: 'start',
      message: 'Select',
      choices: [
        ...cmds
      ]
    }
  ]
}

export const start = (answers: any) => {
  
  try {                    
      cmds.find(c=>c.name==answers.start).action()
      
  } catch (error) {
      console.log(error)
  }

}