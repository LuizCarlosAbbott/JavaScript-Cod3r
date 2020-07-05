const { ipcMain } = require("electron");

ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);

  event.reply("process-subtitles", [
    { name: "i", amount: 123 },
    { name: "he", amount: 1123 },
    { name: "you", amount: 1234 },
    { name: "she", amount: 32 },
    { name: "house", amount: 950 },
  ]);
});
