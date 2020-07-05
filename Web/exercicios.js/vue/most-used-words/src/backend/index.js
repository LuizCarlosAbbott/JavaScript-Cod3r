const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then((words) => console.log(words))
    .then(() => {
      event.reply("process-subtitles", [
        { name: "i", amount: 123 },
        { name: "he", amount: 1123 },
        { name: "you", amount: 1234 },
        { name: "she", amount: 32 },
        { name: "house", amount: 950 },
      ]);
    });
});
