// const fileUtils = require('./fileUtils');
// fileUtils.readTextFile('example.txt', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

// fileUtils.writeTextFile('newFile.txt', 'Hello, world!', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('File written successfully');
// });

// fileUtils.appendTextFile('example.txt', '\nThis is an appended line', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Content appended to file');
// });

// fileUtils.changeTextInFile('example.txt', 'oldText', 'newText', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Text changed in file');
// });

const { appendFile, readFile, writeFile } = require('fs');

module.exports = {
    readTextFile: function (filePath, callback) {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    },

    writeTextFile: function (filePath, content, callback) {
        writeFile(filePath, content, (err) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    },

    appendTextFile: function (filePath, content, callback) {
        appendFile(filePath, content, (err) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    },

    changeTextInFile: function (filePath, searchStr, replaceStr, callback) {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                callback(err);
            } else {
                const updatedData = data.replace(new RegExp(searchStr, 'g'), replaceStr);
                writeFile(filePath, updatedData, (err) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null);
                    }
                });
            }
        });
    }
};
