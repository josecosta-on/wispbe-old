export const appDir=__dirname
export  function absolutePath(path:string){
  path="/../"+path
  var isWin = process.platform === "win32";
  if(isWin)
    return appDir+path.replace('/','\\')
  else
    return appDir+path
}