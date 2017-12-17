const fs = require("fs");

var createStream = fs.createWriteStream("test.txt");
createStream.end();