const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "ᴍʀ ɴɪᴍᴀ ᴏғғɪᴄɪᴀʟ ʙᴏᴛ" //namabot kalian
global.ownername= "ᴹᴿ᭄ ɴɪᴍᴀོ ×፝֟͜×" //nama kalian
global.myweb ="https://api-alphabot.herokuapp.com/" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q" //bebas asal jan hapus
global.github = "https://zene-ofc.github.io/" //bebas
global.email = "mrnima@gmail.com" //bebas
global.region = "India" //bebas
global.ownernomer = "94719574492" // nomor wa kalian
global.ownernomerr = "+94719574492" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["94715166712","94719574492","447441465384"] //ganti agar fitur owner bisa di gunakan
global.packname = '© ᴍʀ ɴɪᴍᴀ ᴏғᴄ' //sticker wm ubah
global.author = 'sᴛɪᴄᴋᴇʀ ᴍᴀᴋᴇ ʙʏ ᴍʀ ɴɪᴍᴀ \ On nima official Group ' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'This command can only be used by admins! ⛔',
    botAdmin: 'This command can only be used when the bot becomes an admin! 💔',
    owner: 'This command can only be used by the owner!',
    group: 'This command can only be used in groups!',
    private: 'This command can only be used in private!',
	bot: 'Bot Number User Special Features',
    errtoimg: 'Sorry Currently Not Support Gif Sticker!',
    wait: '⏳Please wait Being processed',
	lockCmd: 'Feature Not Enabled By Owner!',
	example1: '♥ WELCOME ♥ \n ᴍʀ ɴɪᴍᴀ ɢʀᴏᴜᴘ\n\n  @user Di Group @subject Donot forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
