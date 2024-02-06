const prompt = require('prompt');
const fs = require('fs');
const login = require("fca-unofficial");
const chalk = require("chalk");
userAgents = ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36"];
https = require('https');
agent = new https.Agent({
  'rejectUnauthorized': false
});
console.log(chalk.bold.hex("#00FF00").bold("[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●[1;37m๑۩♡۩๑[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●"));
console.log(chalk.bold.hex('#00FF00').bold("[1;37mWELCOME TO CHAND COMMAND"));
console.log(chalk.bold.hex("#00FF00").bold("                  [1;30m▉▉▉▉"));
console.log(chalk.bold.hex("#00FF00").bold("                 [1;30m▂▉▉▉▉▂"));
console.log(chalk.bold.hex("#00FF00").bold("                [1;33m╰▏ ┛┗ ▕╯"));
console.log(chalk.bold.hex("#00FF00").bold("                 [1;33m╲ 👅 ╱"));
console.log(chalk.bold.hex("#00FF00").bold("                 [1;32m╱▔╲╱▔╲"));
console.log(chalk.bold.hex("#00FF00").bold("               [1;32m╱ ╱▏╭╮▕╲ ╲"));
console.log(chalk.bold.hex("#00FF00").bold("               [1;32m╲ ╲▏╭╮▕╱ ╱       [1;31m╔═╗  ╔╦╗  ╔═╗"));
console.log(chalk.bold.hex("#00FF00").bold("                 [1;35m╲▉▉▉▉╱         [1;36m╠═╣   ║   ╠╣"));
console.log(chalk.bold.hex('#00FF00').bold("                  [1;34m▏╭╮▕          [1;32m╩ ╩   ╩   ╚  "));
console.log(chalk.bold.hex('#00FF00').bold("                  [1;34m▏▏▕▕"));
console.log(chalk.bold.hex("#00FF00").bold("                  [1;34m▏▏▕▕"));
console.log(chalk.bold.hex("#00FF00").bold("                 [1;31m╭╰ ╮╭╰ ╮"));
console.log(chalk.bold.hex("#00FF00").bold("               [1;34msᴜʙ [1;33mᴋᴀ [1;35mʙᴀᴀᴘ"));
console.log(chalk.bold.hex("#00FF00").bold("[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●[1;37m๑۩♡۩๑[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●"));
console.log(chalk.bold.hex('#00FF00').bold(" "));
console.log(chalk.bold.hex("#00FF00").bold(" [1;31m.░▒▓███████▓▒░░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░       ░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░  ░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░▒▓█▓▒░        
░▒▓███████▓▒░░▒▓████████▓▒░  ░▒▓██▓▒░  ░▒▓█▓▒░▒▓████████▓▒░
console.log(chalk.bold.hex('#00FF00').bold("[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●[1;37m๑۩♡۩๑[0;95m●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●"));
prompt.start();
prompt.get(["targetID", "message", "message2", "message3", "message4", "message5", "timer"], function (_0x13fdba, _0x5a94ab) {
  if (_0x13fdba) {
    return onErr(_0x13fdba);
  }
  console.log(chalk.bold.hex('#FF0000').bold("targetID : ") + chalk.bold.hex("#008000").bold(_0x5a94ab.targetID));
  console.log(chalk.bold.hex("#0000FF").bold("Send to message: ") + chalk.bold.hex("#FF00FF").bold(_0x5a94ab.message));
  console.log(chalk.bold.hex("#FFA500").bold("Send to message2: ") + chalk.bold.hex("#808000").bold(_0x5a94ab.message2));
  console.log(chalk.bold.hex("#7FFFD4").bold("Send to message3: ") + chalk.bold.hex("#FFC0CB").bold(_0x5a94ab.message3));
  console.log(chalk.bold.hex("#FF0000").bold("Send to message4: ") + chalk.bold.hex('#00FF00').bold(_0x5a94ab.message4));
  console.log(chalk.bold.hex("#FFA500").bold("Send to message5: ") + chalk.bold.hex("#FFA500").bold(_0x5a94ab.message5));
  console.log(chalk.bold.hex("#00FF00").bold("Send per ") + chalk.bold.hex('#00FF00').bold(_0x5a94ab.timer + " second"));
  login({
    'appState': JSON.parse(fs.readFileSync("appstate.json", "utf8"))
  }, (_0x566bcb, _0x1d0900) => {
    if (_0x566bcb) {
      return console.error(_0x566bcb);
    }
    fs.writeFileSync("appstate.json", JSON.stringify(_0x1d0900.getAppState(), null, "\t"));
    setInterval(() => {
      _0x1d0900.sendMessage(_0x5a94ab.message, _0x5a94ab.targetID, () => {
        console.log(chalk.bold.hex("#00FF00").bold("Successful Sent : " + _0x5a94ab.message));
        _0x1d0900.sendMessage(_0x5a94ab.message2, _0x5a94ab.targetID, () => {
          console.log(chalk.bold.hex("#00FF00").bold("Successful Sent : " + _0x5a94ab.message2));
          _0x1d0900.sendMessage(_0x5a94ab.message3, _0x5a94ab.targetID, () => {
            console.log(chalk.bold.hex("#00FF00").bold("Successful Sent : " + _0x5a94ab.message3));
            _0x1d0900.sendMessage(_0x5a94ab.message4, _0x5a94ab.targetID, () => {
              console.log(chalk.bold.hex("#00FF00").bold("Successful Sent : " + _0x5a94ab.message4));
              _0x1d0900.sendMessage(_0x5a94ab.message5, _0x5a94ab.targetID, () => {
                console.log(chalk.bold.hex("#00FF00").bold("Successful Sent : " + _0x5a94ab.message5));
              });
            });
          });
        });
      });
    }, _0x5a94ab.timer + "000");
  });
});
function onErr(_0x363b13) {
  console.log(_0x363b13);
  return 0x1;
}
process.on('unhandledRejection', (_0x37dbf7, _0x137b7d) => {});
