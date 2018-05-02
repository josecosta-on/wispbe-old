
import { NavController} from './../../providers/nav.provider';
import chalk from "chalk";
import { Page } from "../../decorators/page";
import { terminal } from "../../app/terminal";






@Page({
  name:'setup',
  alias:'s',
  description:'Setup'
})
export class PageHome { 
  test="mytest"
  constructor(public navCtrl:string){
    
  }
  cmdViewDidLoad(){
    
    console.log(this.navCtrl)
    console.log('status check')
   //// this.navCtrl.goHome()
  }

}