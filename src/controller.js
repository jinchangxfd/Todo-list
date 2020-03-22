const fs = require("fs")

const {
  asyncReadFile,
  asyncWriteFile
} = require('./dao')



exports.getAllAccounts = (req, res) => fs.readFile(req.app.locals.dataFilePath, "utf-8", (err, data) => {
  if (err) {
    return res.status(500).send()
  }
  res.send(JSON.parse(data))
})
