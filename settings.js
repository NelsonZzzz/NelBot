  /*
  Created By Riy
  Base Ori : DikaArdnt
  Kalau Mau Nambahin Fitur Di âº index.js
  Edit Tampilan Menu Dll. Di âº Language âº help.js
  */

  //gausah di apaÂ² in!
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
  global.ownername = 'ððð¥ð¬ð¨ð§' //ubah jadi nama mu, note tanda ' gausah di hapus!
  global.botname = 'ððð¡ð½ð¤ð©-ðð' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
  global.footer = 'ððð¥ð¬ð¨ð§' //ubah jadi nama mu, note tanda ' gausah di hapus!

  // Set Kebutuhan Button & Kontak
  //ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
  global.youtube = 'https://youtube.com/channel/UCurk9oz-JJ7P5Ya-WZmChJg'
  global.mygc = 'https://chat.whatsapp.com/BFFKYGNsvrk9iOLyjrkIib'
  global.myweb = 'https://vt.tiktok.com/ZSdPqwKTg/'
  global.region = 'indonesia'

  // Set Wm
  global.packname = 'ððð¡ð½ð¤ð©-ðð' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
  global.author = 'By Nelson' //ubah jadi nama mu, note tanda ' gausah di hapus!

  // Set Nama Session
  //gausah di apaÂ² in!
  global.sessionName = 'session'

  // Set Image
  //terserah mau ubah apa nggak, menurut gua jangan di ubah!
  global.thumb = fs.readFileSync('./image/chika.jpg')
  global.velochika = fs.readFileSync('./image/chika.mp4')

  // Set Image Welcome
  //terserah mau ubah apa nggak, menurut gua jangan di ubah!
  global.BgWelcLeav = 'https://telegra.ph/file/9716542c8efed9631f998.jpg'

  // Random Image Menu
  //gausah di apaÂ² in!
  global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Set Prefix
  //gausah di apaÂ² in!
  global.prefa = ['','!','.','ð¦','ð¤','ð¿']
  
  // Message
  //terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
  global.mess = {
  admin: '_ðð®ðºð ððð¸ð®ð» ðð±ðºð¶ð» Â´ï½¥á´ï½¥`_',
  botAdmin: '_ðð¼ð ððð¸ð®ð» ðð±ðºð¶ð» ã.ã _',
  owner: '_ðð®ðºð ððð¸ð®ð» ð¢ðð»ð²ð¿ ðð Â´ï½¥á´ï½¥`_',
  group: '_ðð¶ððð¿ ðð®ð»ðð® ðð¶ð´ðð»ð®ð¸ð®ð» ð¨ð»ððð¸ ðð¿ðð½_',
  private: '_ðð¶ððð¿ ðð®ð»ðð® ðð¶ð´ðð»ð®ð¸ð®ð» ð¨ð»ððð¸ ð£ð¿ð¶ðð®ðð² ððµð®ð_',
  bot: '_ðð¶ððð¿ ððµðððð ð£ð²ð»ð´ðð»ð® ð¡ð¼ðºð¼ð¿ ðð¼ð_',
  wait: '```ãâ°â°â°â±â±â±â±â±â±â±ãðð¼ð®ð±ð¶ð»ð´...```',
  success: '_ðð®ð»ð´ð®ð» ððð½ð® ð ð®ð¸ðð¶ðµ (â§â½â¦)_',
  error: '_Fitur Sedang Error!_',
  }
  

  // Batas Akhir
  //gausah si apaÂ² in!
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
