# File Manipulation Module

A simple Node.js module for reading, writing, appending, and changing text in files.

## Usage

```javascript
const fileManipulation = require('file-manipulation-module');

// Read text from a file
fileManipulation.readTextFile('path/to/file.txt', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// Write text to a file
fileManipulation.writeTextFile('path/to/file.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File written successfully');
    }
});

// Append text to a file
fileManipulation.appendTextFile('path/to/file.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Text appended to file successfully');
    }
});

// Change text in a file
fileManipulation.changeTextInFile('path/to/file.txt', 'Hello', 'Hi', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Text replaced successfully');
    }
});
```

## Methods

- `readTextFile(filePath, callback)`: Read text from a file
- `writeTextFile(filePath, content, callback)`: Write text to a file
- `appendTextFile(filePath, content, callback)`: Append text to a file
- `changeTextInFile(filePath, searchStr, replaceStr, callback)`: Change text in a file

## License

This project is licensed under the MIT License - see the [LICENSE.TXT](LICENSE.TXT) file for details.