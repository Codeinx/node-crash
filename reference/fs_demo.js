const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err)
//         throw err;
//     console.log('Folder created...');
//     }
// );

//Create and write to file
// const filePath = path.join(__dirname, '/test', 'hello.txt');
// const theTextFile = path.basename(filePath);

// fs.writeFile(filePath, 'Hello World!', err => {
//     if (err)
//         throw err;
//     console.log('File written to', filePath);

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nnew life!', err => {
//         if (err)
//             throw err;
//         console.log('Text appended to', theTextFile);
//     });
//     }
// );

//Appending to a written file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nnew life!', err => {
//     if (err)
//         throw err;
//     console.log('Text appended to', theTextFile);
// });

//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err)
//         throw err;
//     console.log(data);
//     }
// );

//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if (err)
        throw err;
    console.log('File renamed to', __dirname);
    }
);