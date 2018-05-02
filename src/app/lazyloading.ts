import * as glob from 'glob'
import { absolutePath } from './paths';

export  function lazyloading(){

  return new Promise((resolve,reject)=>{    
    glob(absolutePath('pages/**/*.js'), async function (er, items) {
      console.log(items)
      await Promise.all(items.map(
        c => import(c)
      ));
      resolve()
    })
  })
}