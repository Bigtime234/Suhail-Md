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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "48699532467";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_01_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICA5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNixcbiAgICAgICAgNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkYrNWk5YXdUbGgrWXg3ZlRydzJKZWZTK3lYUjhnWjdxME52dDZROWxNcFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg2OTk1MzI0NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5ODRBMDQyQ0FFODQzQjFGNzg1RDIzOUJCRkFBMTI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTM5MjUwMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ4Njk5NTMyNDY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQ0E3NDgyNzdDMDMxREMzNTQxN0M1NjM1Rjc5QUE2OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzOTI1MDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLTNpUXFEbldUMm1Fby0wVE5ScWlzd1wiLFxuICBcInBob25lSWRcIjogXCJhNzA0MGRkNi1lZWE5LTQwYTgtODQwOC1mMjMzZmU5ZTQ3ODNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTUwLFxuICAgICAgNTksXG4gICAgICA2OCxcbiAgICAgIDcxLFxuICAgICAgMjA3LFxuICAgICAgMjEsXG4gICAgICA2MyxcbiAgICAgIDE0OCxcbiAgICAgIDE2MyxcbiAgICAgIDIzOCxcbiAgICAgIDE2MixcbiAgICAgIDE0MixcbiAgICAgIDI0NyxcbiAgICAgIDE4NyxcbiAgICAgIDE2LFxuICAgICAgNjksXG4gICAgICA4NixcbiAgICAgIDIwNyxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgMTg3LFxuICAgICAgMzAsXG4gICAgICAxOTUsXG4gICAgICAyMTUsXG4gICAgICAxNjQsXG4gICAgICAxNTksXG4gICAgICA1MixcbiAgICAgIDIyLFxuICAgICAgMTUyLFxuICAgICAgMTAwLFxuICAgICAgMTE3LFxuICAgICAgMTQxLFxuICAgICAgNDksXG4gICAgICA1MixcbiAgICAgIDI0NSxcbiAgICAgIDQ0LFxuICAgICAgMTQzLFxuICAgICAgMTA0LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZMWEU3WU1XXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0ODY5OTUzMjQ2NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjg1MzkyODE0MzI2MDQ6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaXhzcnNERU8yeDc3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFNNUQ4VjQ2eXJhemZ5RWV4WVlaSVdnUkpRR052SFlWVm1MdWoyaHY2M1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWUF4SktPL0ZqT0d2YlVxWkNmOGQrcGJyOTZJWk1zK25heGhKZXJucUJ6aXArV0FiNUNjVTllbmgvWStpMkRhQnZDZVVjelB5aFNLeEE0bnNXcUJMQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiek9lSnN5YVVWZ255ZTNMbzRHWWE0ejN5RnI4WDJDSVRSRjQ0K3ZhL050UzVIeStyMXB1NTJXdWdDZ0ZzYXREQjZvaXgvWXdRdWhkV2RDYm50dXlSQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDg2OTk1MzI0Njc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzOTI0OTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
