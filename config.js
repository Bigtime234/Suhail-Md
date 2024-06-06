const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349059377451";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_59_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICA2NixcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMixcbiAgICAgICAgODIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcwLFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCOTUvNHk5M0NPME81azBWaEdrV3JUdU90NkRMZWFvNDQySTBnd3lwNzJnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTkzNzc0NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlCRTA1NjMwOTI5QzgxMkJBQzVBNTBDREVGRUMwNTVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzYzNTUzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhVEloZFE2RVFaTzBJYm1pSnJMRUF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxNDFiMTAyLWRiNGItNGM4Yi1iMjE0LWVmNDkwMmU1MmMwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICA0NixcbiAgICAgIDE5LFxuICAgICAgMjE1LFxuICAgICAgOTUsXG4gICAgICAxOTIsXG4gICAgICAxMDgsXG4gICAgICA1MCxcbiAgICAgIDI1MixcbiAgICAgIDE0NCxcbiAgICAgIDc1LFxuICAgICAgMjQyLFxuICAgICAgMjksXG4gICAgICAxOTQsXG4gICAgICA5NixcbiAgICAgIDEyMyxcbiAgICAgIDI0NSxcbiAgICAgIDYsXG4gICAgICAxNzEsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICA4MyxcbiAgICAgIDI0MyxcbiAgICAgIDU5LFxuICAgICAgMTIyLFxuICAgICAgMTk1LFxuICAgICAgMjM1LFxuICAgICAgMTIyLFxuICAgICAgMjE1LFxuICAgICAgMTc4LFxuICAgICAgMCxcbiAgICAgIDIyOSxcbiAgICAgIDExNixcbiAgICAgIDEyMyxcbiAgICAgIDksXG4gICAgICAyMTUsXG4gICAgICAyMDAsXG4gICAgICAyMjMsXG4gICAgICAyNDQsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZUTEJYTlNGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU5Mzc3NDUxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHb2QncyBQbGFuXCIsXG4gICAgXCJsaWRcIjogXCIxOTIxNDAxMjY3NTY5MDU6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ0oxcmtERU1lVGhMTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlLNnpRekE3Z2pmVFRqQ1FBYThRNDFraG5FaTVOempsZTJFNTNtcDMxUlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN05nMWR3VS9rRHlSSXlPTDhXcHdJdm5mK21wL1NXZ1JQRThiZlhFU0Y4OU05QzZqWWhNR1pQL2JZdTh2TUp1WnlEdjErRDA3NTZzczBVcS9jaEtuRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTkFQRElhUEc3NjdaRlUvbVlyTFViaEh4Z3B3TVBzeFhFUXIxN0gvV2xCakRGd05jazIxUjRaS0MvTkxpN3lnZE4rV2R1bk5GK1pQZ3VDU3ZNRFlQQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA1OTM3NzQ1MTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzYzNTUzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc3UVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzdRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTzhBRDd3K2FROGRISS9NUVlmV3VZRDlndmNrbFNxUjBTZGlUNzRhKzdoOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MjYyNTQyMjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
