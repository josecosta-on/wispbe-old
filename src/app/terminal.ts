import * as commander from 'commander'
import * as inquirer from 'inquirer'
import chalk from 'chalk'

export const terminal={
  cls:()=>{
    process.stdout.write('\x1B[2J\x1B[0f');
  },
  commander,
  inquirer,
  chalk
}