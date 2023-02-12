<img src="img/111.png" width="500" height="500">
<img src="img/222.png" width="500" height="500">
<img src="img/3.png" width="500" height="500">
<img src="img/4.png" width="500" height="500">

### 3.3.3. `import` vs `require`

- `import`는 ES6에서 도입된 모듈 시스템이다.
- `require`는 Node.js에서 도입된 모듈 시스템이다.

### 3.3.4. 웹팩의 모듈 번들러

- 웹팩은 모듈 번들러이다.
- 모듈 번들러란 여러 개의 모듈을 하나의 파일로 묶어주는 도구이다.
- 웹팩은 여러 개의 모듈을 하나의 파일로 묶어주는 도구이다.

### 3.3.5. 웹팩의 기본 설정

- 웹팩의 기본 설정은 `webpack.config.js` 파일에 작성한다.

```js
// Path: webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // 입력
  output: {
    path: path.resolve(__dirname, 'dist'), // 출력
    filename: 'main.js',
  },
};
```

### 3.3.6. 웹팩의 모드 설정

- 웹팩의 모드 설정은 `mode` 프로퍼티에 작성한다.
- 웹팩의 모드 설정은 `mode` 프로퍼티에 작성한다.

```js
// Path: webpack.config.js
const path = require('path');

module.exports =

=======

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log('btn clicked');
});
```

**[⬆ back to top](#table-of-contents)**

### 5.3.3. `import` vs `require`

ES6 的 `import` 和 `require` 有什么不同？

- `require` 是运行时加载，`import` 是编译时输出接口。
- `require` 是 CommonJS 规范，`import` 是 ES6 模块规范。
- `require` 是同步加载，`import` 是异步加载。
- `require` 不能在条件语句中使用，`import` 可以。
- `require` 不能在代码块中使用，`import` 可以。
- `require` 会造成代码冗余，`import` 不会。
- `require` 会污染全局变量，`import` 不会。

**[⬆ back to top](#table-of-contents)**

### 5.3.4. `import` vs `require` 性能

`require` 和 `import` 的性能差别不大，但是 `import` 有一些优势：

- `import` 可以被静态分析，所以可以进行 tree shaking。
- `import` 会有提升效果，因为它是编译时执行的。

**[⬆ back to top](#table-of-contents)**

### 5.3.5. `import` vs `require` `default` 导出

`require` 和 `import` 之间的另一个区别是如何处理 `default` 导出。在 `require` 中，`default` 导出是作为对象的 `default` 属性导入的：

```javascript
// Path: math.js
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
export default {
  add,
  subtract,
};
```

```javascript
// Path: test.js
const math = require('./math');
console.log(math.default.add(16, 26)); // 42

=======

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    import("./test.js").then((res) => {
        console.log(res);
    });
});
```

## 5. 配置别名

```js
// webpack.config.js
module.exports = {
  // ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```

## 6. 配置 externals

```js
// webpack.config.js
module.exports = {
  // ...
  externals: {
    jquery: 'jQuery',
  },
};
```

## 7. 配置 devServer

```js
// webpack.config.js
module.exports = {
  // ...
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
};
```

## 8. 配置 webpackDevServer

```js
// webpack.config.js
module.exports = {
  // ...
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    before(app) {
      app.get('/api/test', (req, res) => {
        res.json({
          code: 200,
          message: 'success',
          data: 'Hello World',
        });
      });
    },
  },
};
```

## 9. 配置 proxy

```js
// webpack.config.js
module.exports = {
  // ...
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
```

## 10. 配置 contentBase

```js
// webpack.config.js
module.exports = {
  // ...
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    contentBase: './public',
  },
};
```

## 11. 配置 publicPath

```js
// webpack.config.js
module.exports = {
  // ...
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    contentBase: './public',
    publicPath: '/',
  },
};
```

## 12. 配

=======

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
console.log("Button clicked!");
});

````

## 2.2. `document.querySelector`

`document.querySelector` is a method that returns the first element that matches a specified CSS selector(s) in the document.

```javascript
// Path: test.js
const btn = document.querySelector("button");
````

## 2.3. `addEventListener`

`addEventListener` is a method that attaches an event handler to the specified element.

```javascript
// Path: test.js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

# 3. `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript</title>
  </head>
  <body>
    <button>Click Me</button>
    <script src="test.js"></script>
  </body>
</html>
```

## 3.1. `<!DOCTYPE html>`

The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document.

## 3.2. `<html>`

The `<html>` element is the root element of an HTML page.

## 3.3. `<head>`

The `<head>` element contains meta information about the HTML page.

## 3.4. `<meta>`

The `<meta>` tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.

## 3.5. `<title>`

The `<title>` element specifies a title for the document.

## 3.6. `<body>`

The `<body>` element contains the visible page content.

## 3.7. `<button>`

The `<button>` element defines a clickable button.

## 3.8. `<script>`

The `<script>` tag is used to define a client-side script (JavaScript).

# 4. `test.js`

```javascript
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

## 4.1. `const btn = document.querySelector("button");`

```javascript
const btn = document.querySelector('button');
```

## 4.2. `btn.addEventListener("click", () => { console
