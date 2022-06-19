  /*
  Created By Riy
  Base Ori : DikaArdnt
  Kalau Mau Nambahin Fitur Di › index.js
  Edit Tampilan Menu Dll. Di › Language › help.js
  */

  //gausah di apa² in!
  const fs = require('fs')
  const chalk = require('chalk')

  // Free Apikey
  global.APIs = {
  riy: 'https://api-riychdwayne.herokuapp.com',
  }
  
  global.APIKeys = {
  'https://api-riychdwayne.herokuapp.com': 'RiyGanz',
  }

  // Setting Owner
  global.owner = ['6281241100804','6281381685954','6281242432747','6289514712995'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
  global.premium = ['6281241100804','6281381685954','6281242432747','6289514712995']//ubah jadi nomor mu, note tanda ' gausah di hapus!
  global.ownernomer = '6281241100804' //ubah jadi nomor mu, note tanda ' gausah di hapus!

  // Set Nama Own & Bot
  global.ownername = '𝐍𝐞𝐥𝐬𝐨𝐧' //ubah jadi nama mu, note tanda ' gausah di hapus!
  global.botname = '𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
  global.footer = '𝐍𝐞𝐥𝐬𝐨𝐧' //ubah jadi nama mu, note tanda ' gausah di hapus!

  // Set Kebutuhan Button & Kontak
  //ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
  global.youtube = 'https://youtube.com/channel/UCurk9oz-JJ7P5Ya-WZmChJg'
  global.mygc = 'https://chat.whatsapp.com/BFFKYGNsvrk9iOLyjrkIib'
  global.myweb = 'https://vt.tiktok.com/ZSdPqwKTg/'
  global.region = 'indonesia'

  // Set Wm
  global.packname = '𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
  global.author = 'By Nelson' //ubah jadi nama mu, note tanda ' gausah di hapus!

  // Set Nama Session
  //gausah di apa² in!
  global.sessionName = 'session'

  // Set Image
  //terserah mau ubah apa nggak, menurut gua jangan di ubah!
  global.thumb = fs.readFileSync('./image/chika.jpg')
  global.velochika = fs.readFileSync('./image/chika.mp4')

  // Set Image Welcome
  //terserah mau ubah apa nggak, menurut gua jangan di ubah!
  global.BgWelcLeav = 'https://telegra.ph/file/9716542c8efed9631f998.jpg'

  // Random Image Menu
  //gausah di apa² in!
  global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Set Prefix
  //gausah di apa² in!
  global.prefa = ['','!','.','🐦','🐤','🗿']
  
  // Message
  //terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
  global.mess = {
  admin: '_𝗞𝗮𝗺𝘂 𝗕𝘂𝗸𝗮𝗻 𝗔𝗱𝗺𝗶𝗻 ´･ᴗ･`_',
  botAdmin: '_𝗕𝗼𝘁 𝗕𝘂𝗸𝗮𝗻 𝗔𝗱𝗺𝗶𝗻 〒.〒 _',
  owner: '_𝗞𝗮𝗺𝘂 𝗕𝘂𝗸𝗮𝗻 𝗢𝘄𝗻𝗲𝗿 𝗞𝘂 ´･ᴗ･`_',
  group: '_𝗙𝗶𝘁𝘂𝗿 𝗛𝗮𝗻𝘆𝗮 𝗗𝗶𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗨𝗻𝘁𝘂𝗸 𝗚𝗿𝘂𝗽_',
  private: '_𝗙𝗶𝘁𝘂𝗿 𝗛𝗮𝗻𝘆𝗮 𝗗𝗶𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗨𝗻𝘁𝘂𝗸 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗖𝗵𝗮𝘁_',
  bot: '_𝗙𝗶𝘁𝘂𝗿 𝗞𝗵𝘂𝘀𝘂𝘀 𝗣𝗲𝗻𝗴𝘂𝗻𝗮 𝗡𝗼𝗺𝗼𝗿 𝗕𝗼𝘁_',
  wait: '```「▰▰▰▱▱▱▱▱▱▱」𝗟𝗼𝗮𝗱𝗶𝗻𝗴...```',
  success: '_𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗠𝗮𝗸𝘀𝗶𝗵 (≧▽≦)_',
  error: '_Fitur Sedang Error!_',
  }
  

  // Batas Akhir
  //gausah si apa² in!
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
