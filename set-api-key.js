/* eslint-disable */
const path = require('path');
const fs = require('fs');
const configPath = path.join(__dirname + '/src/common/config.js');
const ENV = process.env.NODE_ENV || 'dev';

fs.readFile(configPath, { encoding:'utf-8' }, (err, data) => {
    if(!err) {
        console.log('读取成功，开始替换', ENV)
        data = data.replace(/const env = '.+'/ig, `const env = '${ENV}'`);
        fs.writeFile(configPath, data, { encoding:'utf-8' }, (err, data) => {
            if(!err) {
                console.log('写入成功', ENV)
            }
        });
    }
});
