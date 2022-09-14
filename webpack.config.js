//웹팩은 Node.js 위에서 동작하는 프로그램이며,
//Node.js가 사용하는 모듈시스템이 commonjs이기 때문에,
//commonjs 시스템에서 모듈 가져올떄 사용하는 require를 사용하여 모듈을 가져옵니다.
//path 모듈 = https://www.daleseo.com/js-node-path/
const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
}