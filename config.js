global.owner = ['62895701081582']  
global.mods = ['62895701081582'] 
global.prems = ['62895701081582']
global.nameowner = 'Liww'
global.numberowner = '62895701081582' 
global.mail = 'whoami@gmail.com' 
global.gc = 'https://chat.whatsapp.com/Cs3M2vL3l364Qt5kAfqTcn'
global.instagram = 'https://instagram.com/fauzan.m13'
global.wm = '© Liww'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Liww'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = '3WnlYhaT' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = '3Zv32rup'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
