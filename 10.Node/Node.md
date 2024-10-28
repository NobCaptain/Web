# 1.初识Node.js

## 1.1回顾与思考

### 1.1.1浏览器中的JavaScript的组成部分

- 浏览器中的JavaScript的组成部分，如下图所示：

  ![1](imgs/1.png)

### 1.1.2为什么JavaScript可以在浏览器中被执行

- JavaScript可以在浏览器中被执行是因为浏览器使用了JavaScript解析引擎，如下图所示：

  ![2](imgs/2.png)

- 注意点：
  - 不同的浏览器使用的是不同的JavaScript解析引擎，如下所示：
    - Chrome浏览器：使用V8解析引擎。
    - Firefox浏览器：使用OdinMonkey（奥丁猴）解析引擎。
    - Safri浏览器：使用JSCore解析引擎。
    - IE浏览器使用：Chakra（查克拉）解析引擎。
  - V8解析引擎是性能最好的。

### 1.1.3为什么JavaScript可以操作DOM和BOM

- JavaScript可以操作DOM和BOM是因为每个浏览器都内置了DOM、BOM这样的API函数，因此浏览器中的JavaScript才可以调用它们，如下图所示：

  ![3](imgs/3.png)

### 1.1.4浏览器中的JavaScript运行环境

- 浏览器中的JavaScript运行环境，如下图所示：

  ![4](imgs/4.png)

  > 注1：运行环境是指代码正常运行所需的必要环境。
  >
  > 注2：解析引擎：负责解析和执行JavaScript代码。
  >
  > 注3：内置API：由运行环境提供的特殊接口，只能在所属的运行环境中被调用。

### 1.1.5JavaScript能否做后端开发

- JavaScript能做后端开发，但是要运行在Node.js的环境下。

## 1.2什么是Node.js

- Node.js是一个基于Chrome V8引擎的JavaScript运行环境。
- Node.js的官方网址：https://nodejs.org/zh-cn/。

## 1.3Node.js中的JavaScript运行环境

- Node.js中的JavaScript运行环境，如下图所示：

  ![5](imgs/5.png)

- 注意点：浏览器是JavaScript的前端运行环境，而Node.js是JavaScript的后端运行环境，因此在Node.js中是无法调用DOM和BOM等浏览器内置API的。

## 1.4Node.js可以做什么

- Node.js作为一个JavaScript的运行环境，它仅仅提供了基础的功能和API，然而基于Node.js提供的这些基础功能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了Node.js，可以让前端程序员胜任更多的工作和岗位。

- Node.js可以做的事有以下几种：

  - 基于Express框架，可以快速构建Web应用。

    > 注：Express框架的官网地址为：http://www.expressjs.com.cn/。

  - 基于Electron框架，可以构建跨平台的桌面应用。

    > 注：Electron框架的官网地址为：https://electronjs.org/。

  - 基于Restify框架，可以快速构建API接口项目。

    > 注：Restify框架的官网地址为：http://restify.com/。

  - 读写和操作数据库、创建实用的命令行工具辅助前端开发等。

## 1.5Node.js怎么学

- 浏览器中的JavaScript的学习路径是JavaScript基础语法——浏览器内置API（DOM+BOM）——第三方库（jQuery、`art-template` 等），Node.js的学习路径是JavaScript基础语法——Node.js内置API模块（`fs`、`path`、`http` 等）——第三方API模块（Express、MySQL等）。

## 1.6Node.js环境的安装

- Node.js环境的安装步骤如下：

  1. 下载Node.js，如下图所示：

     ![6](imgs/6.gif)

     > 注1：Node.js官网地址为：https://nodejs.org/en/。
     >
     > 注2：上图中可以看到Node.js有两个版本，分别是LTS和Current，这两个版本的区别如下：
     >
     > - LTS：为长期稳定版，对于追求稳定性的企业级项目来说，推荐安装LTS版本的Node.js。
     > - Current：为新特性尝鲜版，对热衷于尝试新特性的用户来说，推荐安装Current版本的Node.js，但是Current版本中可能存在隐藏的Bug或安全性漏洞，因此不推荐在企业级项目中使用Current版本的Node.js。

  2. 安装Node.js，如下图所示：

     ![7](imgs/7.gif)

     > 注：查看Node.js有没有安装成功，我们可以在终端中输入 `node -v` 命令，来查看Node.js的版本号，如果显示了版本号那么就表示Node.js安装成功，在Windows系统下，快速打开终端的方式是使用快捷键（Windows徽标键+R）打开运行面板，输入 `cmd` 后直接回车，即可打开终端，如下图所示：
     >
     > ![8](imgs/8.gif)

## 1.7什么是终端

- 终端（英文：Terminal）是专门为开发人员设计的，用于实现人机交互的一种方式，在Windows系统下，快速打开终端的方式是使用快捷键（Windows徽标键+R）打开运行面板，输入 `cmd` 后直接回车，即可打开终端。

- 终端常用的快捷键如下：

  - 使用 `↑` 键，可以快速定位到上一次执行的命令。

  - 使用 `Tab` 键，能够快速补全路径。

  - 使用 `Esc` 键，能够快速清空当前已输入的命令。

  - 输入 `cls` 命令，可以清空终端。

## 1.8如何在Node.js环境中执行JavaScript代码

- 在Node.js环境中执行JavaScript代码的步骤如下：

  1. 打开终端，使用 `cd 要切换到的路径` 命令，将终端路径切换到JavaScript代码文件的目录下，如下图所示：

     ![9](imgs/9.gif)

     > 注：上图中，因为JavaScript代码文件在D盘中，所以当我们打开终端使用 `cd 要切换到的路径` 命令时，终端路径切换不到JavaScript代码文件的目录下，是因为终端的默认路径是C盘，所以我们要先使用 `d:` 命令将终端路径切换到D盘中，才能使用 `cd 要切换到的路径` 命令，将终端路径切换到JavaScript代码文件的目录下。

  2. 将终端路径切换到JavaScript代码文件的目录下后，使用 `node 要执行的JavaScript代码文件的文件名` 命令，就可以在Node.js环境中执行JavaScript代码了，如下图所示：

     ![10](imgs/10.gif)

- 注意点：

  - 我们可以直接在JavaScript代码文件的目录下使用 `Shift+鼠标右键` 快捷键，打开快捷菜单，其中有一个在此处打开Powershell窗口选项，鼠标点击该选项就能打开终端，并且该终端的路径已经切换到了JavaScript代码文件的目录下，这样就不需要使用 `cd 要切换到的路径` 命令，将终端路径切换到JavaScript代码文件的目录下了，如下图所示：

    ![11](imgs/11.gif)

    > 注：上图中打开的终端是PowerShell终端，而使用快捷键（Windows徽标键+R）打开运行面板，输入 `cmd` 后直接回车，打开的终端是CMD终端，这两个终端是一样的，它们的区别在于PowerShell终端是CMD终端的升级版，PowerShell终端的功能和性能都比CMD终端，更加强大。

  - 在Windows11系统下，我们可以直接在JavaScript代码文件的目录下使用鼠标右键，打开快捷菜单，其中有一个在终端打开选项，鼠标点击该选项就能打开PowerShell终端，并且该终端的路径已经切换到了JavaScript代码文件的目录下，这样就不需要使用 `cd 要切换到的路径` 命令，将终端路径切换到JavaScript代码文件的目录下了，如下图所示：

    ![12](imgs/12.gif)

# 2.fs文件系统模块

## 2.1什么是fs文件系统模块

- fs模块是Node.js官方提供的、用来操作文件的模块，它提供了一系列的方法和属性，用来满足用户对文件的操作需求，如：它提供了 `readFile()` 方法，来读取指定文件中的内容，`writeFile()` 方法，来向指定的文件中写入内容。
- 注意点：如果要在JavaScript代码中，使用fs模块来操作文件，则需要使用 `const fs = require('fs');` 方式来导入fs模块。

## 2.2读取指定文件中的内容

- 我们可以使用fs模块中的 `readFile()` 方法来读取指定文件中的内容。

- 语法：

  ```javascript
  const 对象名 = require('fs');
  对象名.readFile('path',['options'],callback);
  ```

  > 注：使用fs模块前我们需要先使用 `require('fs')` 方法导入fs模块，导入fs模块后，会将fs模块中的对象返回给 `require('fs')` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

- 取值：

  |            | 取值                                             | 作用                             |
  | :--------: | ------------------------------------------------ | :------------------------------- |
  |   对象名   | 用户自定义，要遵从变量名的命名规则与规范         |                                  |
  |   `path`   | 用户自定义，只能是要读取指定文件时，该文件的路径 | 设置要读取那个文件               |
  | `options`  | 用户自定义，只能是编码格式，如：`utf8` 等        | 设置以什么编码格式来读取文件     |
  | `callback` | 用户自定义，只能是匿名函数                       | 设置读取文件后，要执行的回调函数 |

- 注意点：

  - `对象名.readFile('path',['options'],callback)` 方法中被中括号包裹起来的参数可写可不写。
  - 当使用 `对象名.readFile('path',['options'],callback)` 方法读取文件时，会将是否读取成功的结果和读取的内容，传递给回调函数，所以回调函数的括号内的第一个形参中存储的就是是否读取成功的信息，第二形参中存储的就是读取的内容，一般我们会将回调函数的括号内的第一个形参的名字设置为 `err`，第二个形参的名字设置为 `dataStr`。
  - 当使用 `对象名.readFile('path',['options'],callback)` 方法读取文件时，如果读取成功了就会传递 `null` 给回调函数的第一个形参，传递读取的内容给第二个形参，如果读取失败了就会传递一个错误对象给回调函数的第一个形参，传递 `undefined` 给第二个形参，并且该错误对象的对象名就是第一个形参的形参名，并且该错误对象中有一个 `message` 属性，该属性存储的是错误信息。

- 演示代码之要读取的文件：

  ```
  // 01-读取指定文件中的内容.txt
  123
  ```

- 演示代码之JavaScript代码文件：

  ```javascript
  // 01-读取指定文件中的内容.js
  const fs = require('fs');
  fs.readFile('./files/01-读取指定文件中的内容.txt','utf8',(err,dataStr) => {
      console.log(err);
      console.log(dataStr);
  });
  fs.readFile('./files/02-读取指定文件中的内容.txt','utf8',(err,dataStr) => {
      if (err) {
          console.log(`错误信息：${err.message}`);
      }
      console.log(dataStr);
  });
  ```

- 演示结果：

  ![13](imgs/13.gif)

## 2.3向指定文件中写入内容

- 我们可以使用fs模块中的 `writeFile()` 方法来向指定文件中写入内容。

- 语法：

  ```javascript
  const 对象名 = require('fs');
  对象名.writeFile('path',data,['options'],callback);
  ```

  > 注：使用fs模块前我们需要先使用 `require('fs')` 方法导入fs模块，导入fs模块后，会将fs模块中的对象返回给 `require('fs')` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

- 取值：

  |            | 取值                                                       | 作用                                     |
  | :--------: | ---------------------------------------------------------- | :--------------------------------------- |
  |   对象名   | 用户自定义，要遵从变量名的命名规则与规范                   |                                          |
  |   `path`   | 用户自定义，只能是要向指定文件中写入内容时，该文件的路径   | 设置要向那个文件写入内容                 |
  |   `data`   | 用户自定义，可以是数字、字符串等                           | 设置要向文件中写入什么内容               |
  | `options`  | 用户自定义，只能是编码格式，如：`utf8` 等，默认值为 `utf8` | 设置以什么编码格式来向文件中写入内容     |
  | `callback` | 用户自定义，只能是匿名函数                                 | 设置向文件中写入内容后，要执行的回调函数 |

- 注意点：

  - `对象名.writeFile('path',data,['options'],callback)` 方法中被中括号包裹起来的参数可写可不写。
  - 当使用 `对象名.writeFile('path',data,['options'],callback)` 方法向文件中写入内容时，会将是否写入成功的结果，传递给回调函数，所以回调函数的括号内的第一个形参中存储的就是是否写入成功的信息，一般我们会将回调函数的括号内的第一个形参的名字设置为 `err`。
  - 当使用 `对象名.writeFile('path',data,['options'],callback)` 方法向文件中写入内容时，如果写入成功了就会传递 `null` 给回调函数的第一个形参，如果写入失败了就会传递一个错误对象给回调函数的第一个形参，并且该错误对象的对象名就是第一个形参的形参名。
  - 当使用 `对象名.writeFile('path',data,['options'],callback)` 方法向文件中写入内容时，如果该文件中有内容，那么这些内容会被删除掉。
  - 当使用 `对象名.writeFile('path',data,['options'],callback)` 方法向文件中写入内容时，如果该文件不存在，但是该文件的路径存在，那么就会在该路径上创建一个新的文件，然后将其内容写入。
  - 当使用 `对象名.writeFile('path',data,['options'],callback)` 方法向文件中写入内容时，如果该文件不存在，并且该文件的路径也不存在，那么就会写入失败。

- 演示代码之要写入的文件：

  ```
  // 02-向指定文件中写入内容.txt
  123
  ```

- 演示代码之JavaScript代码文件：

  ```javascript
  // 02-向指定文件中写入内容.js
  const fs = require('fs');
  fs.writeFile('./files/02-向指定文件中写入内容.txt','abcd',(err) => {
      console.log(err);
  });
  fs.writeFile('f:\files\02-向指定文件中写入内容.txt','abcd',(err) => {
      if (err) {
          return console.log('写入文件失败');
      }
      console.log('写入文件成功');
  });
  ```

- 演示结果：

  ![14](imgs/14.gif)

## 2.4成绩处理案例

- 使用fs文件系统模块，将成绩.txt文件中的考试数据，整理到成绩-ok.txt文件中。

- 整理前，成绩.txt文件中的数据格式如下：

  ```
  小红=99 小黑=88 小蓝=77 小紫=66 小星=55
  ```

- 整理完成之后，希望得到的成绩-ok.txt文件中的数据格式如下：

  ```
  小红：99
  小黑：88
  小蓝：77
  小紫：66
  小星：55
  ```

- 成绩处理案例的实现步骤：

  1. 导入fs文件系统模块。
  2. 使用 `readFile()` 方法，读取成绩.txt文件中的考试数据。
  3. 判断文件是否读取失败。
  4. 文件读取成功后，处理成绩数据。
  5. 将处理完成的成绩数据，调用 `fs.writeFile()` 方法，写入到新文件成绩-ok.txt中。

- 演示代码：

  ```javascript
  // 导入fs文件系统模块。
  const fs = require('fs');
  // 使用readFile()方法，读取成绩.txt文件中的考试数据。
  fs.readFile('./files/成绩单.txt','utf8',(err,dataStr) => {
      // 判断文件是否读取失败。
      if (err) {
          return console.log(`读取文件失败：${err.message}`);
      }
      // 文件读取成功后，处理成绩数据。
      const oldArr = dataStr.split(' ');
      const newArr = [];
      oldArr.forEach(ele => {
          newArr.push(ele.replace('=','：'));
      });
      const str = newArr.join('\r\n');
      // 将处理完成的成绩数据，调用fs.writeFile()方法，写入到新文件成绩-ok.txt中。
      fs.writeFile('./files/成绩-ok.txt',str,err => {
          if (err) {
              return console.log('写入失败');
          }
          console.log('写入成功');
      });
  });
  ```

- 演示结果：

  ![15](imgs/15.gif)

## 2.5fs模块路径拼接问题

- 在使用fs模块操作文件时，如果提供的文件路径是以 `./` 或 `../` 开头的相对路径时，就会很容易出现路径动态拼接错误的问题，出现这个问题的原因是代码在运行的时候，会以执行 `node 要执行的JavaScript代码文件的文件名` 命令时所处的目录，动态拼接出被操作文件的完整路径，如以下代码所示：

  ```javascript
  const fs = require('fs');
  fs.writeFile('./files/02-向指定文件中写入内容.txt','abcd',(err) => {
      console.log(err);
  });
  ```

  > 注：以上代码的文件的路径为 `C:\user\JavaScript代码文件.js`，被操作文件的路径为 `C:\user\files\02-向指定文件中写入内容.txt`，当我们使用终端执行 `node JavaScript代码文件.js` 命令，并且终端所处的目录是JavaScript代码文件的目录下时，会动态拼接出 `C:\user\files\02-向指定文件中写入内容.txt` 路径，而该路径又是被操作文件的完整路径，所以以上代码可以操作该文件，但是如果终端所处的目录不是JavaScript代码文件的目录下时，那么就拼接不出被操作文件的完整路径，如：如果终端所处的目录是 `C:`，那么当我们使用终端执行 `node .\user\JavaScript代码文件.js` 命令时，会动态拼接出 `C:\files\02-向指定文件中写入内容.txt` 路径，而该路径不是被操作文件的完整路径，所以以上代码就不可以操作该文件了。

- 我们可以在使用fs模块操作文件时，直接提供被操作文件的完整路径，不要提供 `./` 或 `../` 开头的相对路径，从而防止路径动态拼接的问题，如以下代码所示：

  ```javascript
  const fs = require('fs');
  fs.writeFile('C:\\user\\files\\02-向指定文件中写入内容.txt','abcd',(err) => {
      console.log(err);
  });
  ```

  > 注：因为在JavaScript中单个 `\` 表示转义的意思，所以被操作文件的完整路径中的 `\` 要使用 `\\` 来表示。

- 当我们使用上面的方法来防止动态拼接的问题时，会导致移植性非常差，不利于维护，这是因为我们在使用fs模块操作文件时，直接提供了被操作文件的完整路径，这时如果我们移动了被操作的文件时，就会发生报错，这就导致了移植性非常差，不利于维护，但是我们可以使用 `__dirname` 来解决这个问题，在Node.js中 `__dirname` 表示当前JavaScript代码文件的路径，也就是说在那个JavaScript代码文件中写上了 `__dirname`，`__dirname` 就表示当前文件所在的路径，然后再将其与被操作文件的路径进行拼接就可以防止路径动态拼接的问题，并且不会导致移植性非常差，不利于维护，如以下代码所示：

  ```javascript
  const fs = require('fs');
  fs.writeFile('__dirname + /files/02-向指定文件中写入内容.txt','abcd',(err) => {
      console.log(err);
  });
  ```


# 3.path路径模块

## 3.1什么时path路径模块

- path模块是Node.js官方提供的、用来处理路径的模块，它提供了一系列的方法和属性，用来满足用户对路径的处理需求，如：它提供了 `join()` 方法来将多个路径片段拼接成一个完整的路径字符串，`basename()` 方法来从路径字符串中，将文件名解析出来。
- 注意点：如果要在JavaScript代码中，使用path模块来处理路径，则需要使用 `const path = require('path');` 方式来导入path模块。

## 3.2拼接路径

- 我们可以使用path模块中的 `join()` 方法来拼接路径。

- 语法：

  ```javascript
  const 对象名 = require('path');
  对象名.join('要拼接的路径1','要拼接的路径2',···,'要拼接的路径n');
  ```

  > 注：使用path模块前我们需要先使用 `require('path')` 方法导入path模块，导入path模块后，会将path模块中的对象返回给 `require('path')` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

- 取值：

  |              | 取值                                     | 作用                   |
  | :----------: | ---------------------------------------- | :--------------------- |
  |    对象名    | 用户自定义，要遵从变量名的命名规则与规范 |                        |
  | 要拼接的路径 | 用户自定义，只能是路径                   | 设置那几个路径进行拼接 |

- 注意点：
  - 如果 `对象名.join('要拼接的路径1','要拼接的路径2',···,'要拼接的路径n')` 方法中有一个要拼接的路径是 `../` 就表示返回上一层目录，如：`path.join('a/b/c','../','/d')` 代码输出的路径是 `a\b\d`。
  - 今后凡是涉及到路径拼接的操作，都要使用 `join()` 方法进行处理，不要直接使用 `+` 进行字符串拼接。
  - `对象名.join('要拼接的路径1','要拼接的路径2',···,'要拼接的路径n')` 方法执行完毕后会返回拼接好的路径给 `对象名.join('要拼接的路径1','要拼接的路径2',···,'要拼接的路径n')` 方法。

- 演示代码：

  ```javascript
  const path = require('path');
  console.log(path.join('/a','/b/c','../','/d'));
  ```

- 演示结果：

  ![16](imgs/16.gif)

## 3.3获取路径中的文件名

- 我们可以使用path模块中的 `basename()` 方法来获取路径中的最后一部分，我们经常通过这个方法来获取路径中的文件名。

- 语法：

  ```javascript
  const 对象名 = require('path');
  对象名.basename('path',['ext']);
  ```

  > 注：使用path模块前我们需要先使用 `require('path')` 方法导入path模块，导入path模块后，会将path模块中的对象返回给 `require('path')` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

- 取值：

  |        | 取值                                             | 作用                                   |
  | :----: | ------------------------------------------------ | :------------------------------------- |
  | 对象名 | 用户自定义，要遵从变量名的命名规则与规范         |                                        |
  | `path` | 用户自定义，只能是路径                           | 设置获取那个路径中的文件名             |
  | `ext`  | 用户自定义，只能是要获取的文件名，该文件的拓展名 | 设置获取文件名时，该文件名不包含拓展名 |

- 注意点：`对象名.basename('path',['ext'])` 方法中被中括号包裹起来的参数可写可不写。

- 演示代码：

  ```javascript
  const path = require('path');
  const str = './a/b/c/index.html';
  console.log(path.basename(str));
  console.log(path.basename(str,'.html'));
  ```

- 演示结果：

  ![17](imgs/17.gif)

## 3.4获取路径中的文件的扩展名

- 我们可以使用path模块中的 `extname()` 方法来获取路径中的文件的扩展名部分。

- 语法：

  ```javascript
  const 对象名 = require('path');
  对象名.extname('path');
  ```

- 取值：

  |        | 取值                                     | 作用                                 |
  | :----: | ---------------------------------------- | :----------------------------------- |
  | 对象名 | 用户自定义，要遵从变量名的命名规则与规范 |                                      |
  | `path` | 用户自定义，只能是路径                   | 设置获取那个路径中的文件的拓展名部分 |

- 演示代码：

  ```javascript
  const path = require('path');
  const str = './a/b/c/index.html';
  console.log(path.extname(str));
  ```

- 演示结果：

  ![18](imgs/18.gif)

## 3.5拆分时钟案例

- 将以下代码拆分成 `clock.css`、`clock.js`、`clock.html` 三个文件。

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>index首页</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-image: linear-gradient(to bottom right, red, gold);
      }
      .box {
        width: 400px;
        height: 250px;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 6px;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        box-shadow: 1px 1px 10px #fff;
        text-shadow: 0px 1px 30px white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 70px;
        user-select: none;
        padding: 0 20px;
        /* 盒子投影 */
        -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250, 250, 250, .2)));
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div id="HH">00</div>
      <div>:</div>
      <div id="mm">00</div>
      <div>:</div>
      <div id="ss">00</div>
    </div>
    <script>
      window.onload = function () {
        // 定时器，每隔 1 秒执行 1 次
        setInterval(() => {
          var dt = new Date()
          var HH = dt.getHours()
          var mm = dt.getMinutes()
          var ss = dt.getSeconds()
          // 为页面上的元素赋值
          document.querySelector('#HH').innerHTML = padZero(HH)
          document.querySelector('#mm').innerHTML = padZero(mm)
          document.querySelector('#ss').innerHTML = padZero(ss)
        }, 1000)
      }
      // 补零函数
      function padZero(n) {
        return n > 9 ? n : '0' + n
      }
    </script>
  </body>
  </html>
  ```

- 拆分时钟案例的实现步骤：

  1. 导入fs模块。
  2. 导入path模块。
  3. 创建两个正则表达式，分别用来匹配 `<style>` 和 `<script>` 标签。
  4. 使用fs模块，读取需要被处理的文件。
  5. 自定义resolveCSS方法，来写入index.css样式文件。
  6. 自定义resolveJS方法，来写入index.js脚本文件。
  7. 自定义resolveHTML方法，来写入index.html文件。

- 演示代码：

  ```javascript
  // 导入fs模块。
  const fs = require('fs');
  // 导入path模块。
  const path = require('path');
  // 创建两个正则表达式，分别用来匹配<style>和<script>标签。
  const regStyle = /<style>[\s\S]*<\/style>/;
  const regScript = /<script>[\s\S]*<\/script>/;
  // 使用fs模块，读取需要被处理的文件。
  fs.readFile(path.join(__dirname,'./index.html'),'utf8',(err,dataStr) => {
      if (err) {
          return console.log(`读取文件失败：${err.message}`);
      }
      resolveCSS(dataStr);
      resolveJS(dataStr);
      resolveHTML(dataStr);
  });
  // 自定义resolveCSS方法，来写入index.css样式文件。
  function resolveCSS(data) {
      const arr = regStyle.exec(data);
      const newStr = arr[0].replace('<style>','').replace('</style>','');
      fs.writeFile(path.join(__dirname,'./clock/clock.css'),newStr,err => {
          if (err) {
              return console.log('写入文件失败');
          }
          console.log('写入文件成功');
      });
  }
  // 自定义resolveJS方法，来写入index.js脚本文件。
  function resolveJS(data) {
      const arr = regScript.exec(data);
      const newStr = arr[0].replace('<script>','').replace('</script>','');
      fs.writeFile(path.join(__dirname,'./clock/clock.js'),newStr,err => {
          if (err) {
              return console.log('写入文件失败');
          }
          console.log('写入文件成功');
      });
  }
  // 自定义resolveHTML方法，来写入index.html文件。
  function resolveHTML(data) {
      const newStr = data.replace(regStyle,'<link rel="stylesheet" href="./clock.css">').replace(regScript,'<script src="./clock.js"></script>');
      fs.writeFile(path.join(__dirname,'./clock/clock.html'),newStr,err => {
          if (err) {
              return console.log('写入文件失败');
          }
          console.log('写入文件成功');
      });
  }
  ```

- 演示结果：

  ![19](imgs/19.gif)

# 4.http模块

## 4.1什么是http模块

- 在网络节点中，负责消费资源的电脑，我们叫做客户端，而负责对外提供网络资源的电脑，我们叫做服务器，而http模块是Node.js官方提供的、用来创建Web服务器的模块，我们通过http模块提供的 `createServer()` 方法，就能很方便的把一台普通的电脑，变成一台Web服务器，从而对外提供Web资源服务。
- 注意点：如果要在JavaScript代码中，使用http模块来创建Web服务器，则需要使用 `const http = require('http');` 方式来导入http模块。

## 4.2进一步理解http模块的作用

- 服务器和普通电脑的区别在于，服务器上安装了Web服务器软件，如：IIS、Apache等，我们通过安装这些服务器软件，就能把一台普通的电脑变成一台Web服务器，但是在Node.js中，我们不需要使用IIS、Apache等这些第三方Web服务器软件，因为我们可以基于Node.js提供的http模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供Web服务。

## 4.3服务器相关的概念

### 4.3.1IP地址

- IP地址就是互联网上每台计算机的唯一地址，因此IP地址具有唯一性，如果把个人电脑比作一台电话的话，那么IP地址就相当于电话号码，只有在知道对方IP地址的前提下，我们才能与对应的电脑之间进行数据通信。

  > 注：IP地址的格式通常用点分十进制表示成 `a.b.c.d` 的形式，其中a，b，c，d都是0~255之间的十进制整数，如：用点分十进表示的IP地址 `192.168.1.1`。

- 注意点：

  - 互联网中每台Web服务器，都有自己的IP地址，如：我们可以在Windows的终端中运行 `ping www.baidu.com` 命令，即可查看到百度服务器的IP地址，并且还可以通过该IP地址来访问百度服务器。

  - 在使用Node.js开发期间，如果使用了http模块，让自己的电脑既是一台服务器，也是一个客户端，那么为了方便测试，我们可以在自己的浏览器中输入 `127.0.0.1` 这个IP地址，就能把自己的电脑当做一台服务器进行访问了，如下图所示：

### 4.3.2域名与域名服务器

- 尽管IP地址能够唯一地标记网络上的计算机，但是IP地址是一长串数字，这就导致了不直观，而且不便于记忆，于是人们又发明了另一套字符型的地址方案，即所谓的域名（Domain Name）地址，如：百度的域名地址就是www.baidu.com，IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器（DNS，Domain name server）的电脑中，使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器来实现，因此域名服务器就是提供IP地址和域名之间的转换服务的服务器。
- 注意点：
  - 单纯的使用IP地址，在互联网中的电脑也能够正常工作，但是有了域名的加持，就能让互联网的世界变得更加方便。
  - 在使用Node.js开发期间，如果使用了http模块，让自己的电脑既是一台服务器，也是一个客户端，那么为了方便测试，我们可以在自己的浏览器中输入 `localhost` 这个域名地址，就能把自己的电脑当做一台服务器进行访问了，因此 `127.0.0.1` IP地址对应的域名是 `localhost`，它们都代表我们自己的这台电脑，在使用效果上没有任何区别。

### 4.3.3端口号

- 计算机中的端口号，就好像是现实生活中的门牌号一样，外面小哥通过门牌号就可以在整栋大楼的众多的房间中，准确的把外卖送到你的手中，同样的道理，在一台电脑中，可以运行成百上千个Web服务，每个Web服务都对应着一个唯一的端口号，客户端发送过来的网络请求，通过端口号，就可以被准确地交给对应的Web服务进行处理，如下图所示：

  ![20](imgs/20.png)

- 注意点：

  - 每个端口号不能同时被多个Web服务占用。
  - 在客户端发起请求的URL地址中，如果端口号是80，那么URL地址中的80端口号就可以省略不写，但是要注意只有80端口号可以省略不写。

## 4.4创建最基本的Web服务器

- 创建最基本的Web服务器的步骤如下：

  1. 导入http模块，如以下代码所示：

     ```javascript
     const http = require('http');
     ```

     > 注：使用http模块前我们需要先使用 `require('http')` 方法导入http模块，导入http模块后，会将http模块中的对象返回给 `require('http')` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

  2. 使用http模块中的 `createServer()` 方法来创建Web服务器，如以下代码所示：

     ```javascript
     const http = require('http');
     const server = http.createServer();
     ```

     > 注：使用http模块中的 `createServer()` 方法来创建Web服务器后，会返回Web服务器对象给 `createServer()` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

  3. 使用Web服务器对象中的 `on()` 方法来给Web服务器添加 `request` 事件，如以下代码所示：

     ```javascript
     const http = require('http');
     const server = http.createServer();
     server.on('request',(req,res) => {
         const str = `Your request url is ${req.url},and request method is ${req.method}`;
         res.end(str);
     });
     ```

     > 注：`request` 事件是只要客户端请求了Web服务器，就会触发 `request` 事件，从而调用这个事件的要执行的函数，并且在触发 `request` 事件后，会将请求对象和响应对象传递给要执行的函数，所以要执行的函数的第一个形参存储的是请求对象，并且该请求对象的对象名就是第一个形参的形参名，第二个形参存储的是响应对象，并且该响应对象的对象名就是第二个形参的形参名，一般我们会将回调函数的括号内的第一个形参的名字设置为 `req`，第二个形参的名字设置为 `res`，其中请求对象包含了与客户端相关的数据和属性，如：请求对象中的 `url` 属性，存储的是客户端请求的URL地址端口号后面的URL地址，`method` 属性存储的是客户端请求的请求方式，响应对象包含了与服务器相关的数据和属性，如：要发送到客户端的字符串，并且还可以使用响应对象中的 `end()` 方法来向客户端发送指定的内容，并结束这次请求的处理过程。

  4. 使用Web服务器对象中的 `listen()` 方法来启动Web服务器，如以下代码所示：

     ```javascript
     const http = require('http');
     const server = http.createServer();
     server.on('request',(req,res) => {
         const str = `Your request url is ${req.url},and request method is ${req.method}`;
         res.end(str);
     });
     server.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

     > 注：`listen()` 方法中的第一个参数是设置启动Web服务器时，使用的端口号，第二个参数是回调函数，该回调函数在Web服务器启动成功后就会被调用。

  5. 使用VSCode编译器中的终端来运行 `node 要执行的JavaScript代码文件的文件名` 命令，让创建最基本的Web服务器代码运行在Node.js环境中，如下图所示：

     ![21](imgs/21.gif)

     > 注1：VSCode编译器中的终端就是Windows系统中的PowerShell终端或CMD终端，只是VSCode编译器集成了这两个终端，从而使得我们不用在Windows系统中开启PowerShell终端或CMD终端就能执行命令，并且VSCode编译器中的终端在打开时，该终端的路径默认为当前文件的路径，如上图所示。
     >
     > 注2：当创建最基本的Web服务器代码运行在Node.js环境中时，Web服务器就会启动，这时我们就可以在浏览器中输入 `http://127.0.0.1` IP地址来访问该Web服务器，或者在Web服务器对象中的 `listen()` 方法中的回调函数中书写 `console.log('http://127.0.0.1');` 代码，将 `http://127.0.0.1` IP地址输出到终端上，然后使用 `Ctrl+鼠标点击` 快捷键来点击该地址，就可以自动让浏览器打开该IP地址来访问该Web服务器，并且还可以在终端中使用 `Ctrl+C` 快捷键来关闭该Web服务器，如上图所示。

- 注意点：

  - 我们还可以使用Postman软件来向我们创建的最基本的Web服务器来发起POST请求，如下图所示：

    ![22](imgs/22.gif)

  - 当我们使用响应对象中的 `end()` 方法，来向客户端发送中文内容的时候，会出现乱码问题，此时我们需要使用响应对象中的 `setHeader()` 方法来手动设置内容的编码格式，如以下代码所示：

    ```javascript
    const http = require('http');
    const server = http.createServer();
    server.on('request',(req,res) => {
        // 使用响应对象中的setHeader()方法来手动设置内容的编码格式。
        res.setHeader('Content-Type','text/html; charset=utf-8');
        const str = `你请求的URL地址是${req.url}，和请求的方式是${req.method}`;
        res.end(str);
    });
    server.listen(80,() => {
        console.log('http server runing at http://127.0.0.1');
    });
    ```

    > 注：`setHeader()` 方法中的参数是固定的不需要修改。

  - 我们还可以根据不同的URL地址来向客户端发送不同的内容，如以下代码所示：

    ```javascript
    const http = require('http');
    const server = http.createServer();
    server.on('request',(req,res) => {
        // 获取请求的url地址。
        const url = req.url;
        // 设置默认的内容为404 Not found。
        let content = '<h1>404 Not found</h1>';
        // 判断用户请求的URL地址是否为/URL地址或/index.htmlURL地址或/about.htmlURL地址，然后根据不同的URL地址向客户端发送不同的内容。
        if(url === '/' || url === '/index.html') {
            content = '<h1>首页</h1>';
        } else if(url === '/about.html') {
            content = '<h1>关于页面</h1>';
        }
        // 设置Content-Type响应头，防止中文乱码。
        res.setHeader('Content-Type','text/html; charset=utf-8');
        // 把内容发送给客户端。
        res.end(content);
    });
    server.listen(80,() => {
        console.log('http server runing at http://127.0.0.1');
    });
    ```

- 演示代码：

  ```javascript
  const http = require('http');
  const server = http.createServer();
  server.on('request',(req,res) => {
      const url = req.url;
      let content = '<h1>404 Not found</h1>';
      if(url === '/' || url === '/index.html') {
          content = '<h1>首页</h1>';
      } else if(url === '/about.html') {
          content = '<h1>关于页面</h1>';
      }
      res.setHeader('Content-Type','text/html; charset=utf-8');
      res.end(content);
  });
  server.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![23](imgs/23.gif)

## 4.5实现时钟案例的Web服务器

- 实现时钟案例的Web服务器的实现步骤如下：

  1. 导入所需模块。
  2. 创建基本的Web服务器。
  3. 将资源的请求URL地址映射为文件的存放路径。
  4. 读取文件的内容并响应给客户端。

- 演示代码：

  ```javascript
  // 导入所需模块。
  const fs = require('fs');
  const path = require('path');
  const http = require('http');
  // 创建基本的Web服务器。
  const server = http.createServer();
  server.on('request',(req,res) => {
      // 将资源的请求URL地址映射为文件的存放路径。
      let fpath = '';
      if (req.url === '/') {
          fpath = path.join(__dirname,'./clock/clock.html');
      } else {
          fpath = path.join(__dirname,'./clock',req.url);
      }
      // 读取文件的内容并响应给客户端。
      fs.readFile(fpath,'utf8',(err,dataStr) => {
          if (err) {
              return res.end('读取文件失败：' + err.message);
          }
          res.end(dataStr);
      });
  });
  server.listen(80,() => {
      console.log('server is runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![24](imgs/24.gif)

# 5.模块化

## 5.1什么是模块化

- 模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，对于整个系统来说，模块是可组合、分解和更换的单元。

- 现实中的模块化，如：小霸王游戏机，它由主机和卡带组成，这样做的好处就是我们需要玩其它游戏的时候只需要更改卡带即可，而不用连主机一起更换。
- 编程中的模块化，就是遵守固定的规则，把一个大文件拆分成独立并互相依赖的多个小模块，把代码进行模块化拆分的好处有提高了代码的复用性、提高了代码的可维护性、可以实现按需加载。

## 5.2模块化规范

- 模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则，如：使用什么样的语法格式来引用模块，在模块中使用什么样的语法格式向外暴露成员。
- 模块化规范的好处就是大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己。

## 5.3Node.js中的模块化

### 5.3.1Node.js中的模块化的分类

- 在Node.js中，会根据模块来源的不同，来将模块分为了三大类，分别是：
  - 内置模块：内置模块是由Node.js官方提供的，如：fs模块、path模块、http模块等。
  - 自定义模块：自定义模块就是用户创建的每个JavaScript文件，都是自定义模块。
  - 第三方模块：第三方模块是由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，在使用第三方模块前需要先下载。

### 5.3.2加载模块

- 我们可以使用JavaScript中的 `require()` 方法，来加载需要的内置模块、自定义模块、第三方模块。

- 语法：

  ```javascript
  // 加载内置模块
  const 对象名 = require('内置模块的模块名');
  // 加载自定义模块
  const 对象名 = require('自定义模块文件的存放路径');
  // 加载第三方模块
  const 对象名 = require('第三方模块的模块名');
  ```

  > 注：使用模块前我们需要先使用 `require()` 方法导入模块，导入模块后，会将模块中的对象返回给 `require()` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

- 取值：

  |                          | 取值                                       |
  | :----------------------: | ------------------------------------------ |
  |          对象名          | 用户自定义，要遵从变量名的命名规则与规范   |
  |     内置模块的模块名     | 用户自定义，只能是内置模块的模块名         |
  | 自定义模块文件的存放路径 | 用户自定义，只能是自定义模块文件的存放路径 |
  |    第三方模块的模块名    | 用户自定义，只能是第三方模块的模块名       |

- 注意点：

  - 使用 `require()` 方法加载模块时，会执行被加载模块中的代码。
  - 使用 `require()` 方法加载自定义模块时，可以省略 `.js` 后缀名。

- 演示代码之自定义模块：

  ```javascript
  // 07-加载模块.js
  console.log('Hello');
  ```

- 演示代码之JavaScript代码文件：

  ```javascript
  // 07-加载模块.js
  const zdy = require('./js/07-加载模块');
  ```

- 演示结果：

  ![25](imgs/25.gif)

### 5.3.3模块作用域

- 模块作用域和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，在其它模块中是访问不了的，这种模块级别的访问限制，就叫做模块作用域。

- 模块作用域的好处就是防止了全局变量污染的问题。

- 演示代码之自定义模块：

  ```javascript
  // 08-模块作用域.js
  const num = 1;
  function sayHi() {
      console.log('Hello');
  }
  ```

- 演示代码之JavaScript代码文件：

  ```javascript
  // 08-模块作用域.js
  const zdy = require('./js/08-模块作用域');
  console.log(num);
  sayHi();
  ```

- 演示结果：

  ![26](imgs/26.gif)

### 5.3.4向外共享模块作用域中的成员

- 在每个自定义模块中都有一个 `module` 对象，该对象存储了当前模块的相关信息，如：当前模块的存放路径，当前模块的模块名等，如下图所示：

  ![27](imgs/27.gif)

- 在自定义模块中，我们可以使用 `module` 对象中的 `exports` 属性，来将当前模块中的成员共享出去，来供外界使用，当外界使用 `require()` 方法导入该模块时，就会返回该模块中的 `module` 对象中的 `exports` 属性所指向的对象给 `require()` 方法，但是因为在自定义模块中，默认情况下 `module` 对象中的 `exports` 属性指向的是一个空对象，所以返回给 `require()` 方法的是一个空对象，如下图所示：

  ![28](imgs/28.gif)

- 在自定义模块中，我们可以使用 `module` 对象中的 `exports` 属性，来将当前模块中的成员共享出去，来供外界使用，当外界使用 `require()` 方法导入该模块时，就会返回该模块中的 `module` 对象中的 `exports` 属性所指向的对象给 `require()` 方法，但是因为在自定义模块中，默认情况下 `module` 对象中的 `exports` 属性指向的是一个空对象，所以返回给 `require()` 方法的是一个空对象，这样就导致了不能将当前模块中的成员共享出去，所以为了将当前模块中的成员共享出去，我们可以将当前模块中的成员挂载到 `module` 对象中的 `exports` 属性所指向的对象，如下图所示：

  ![29](imgs/29.gif)

- 注意点：使用 `require()` 方法导入模块时，导入的结果，永远以导入的模块的 `module` 对象中的 `exports` 属性所指向的对象为准。

- 演示代码之自定义模块：

  ```javascript
  // 09-向外共享模块作用域中的成员.js
  const num = 10;
  module.exports.name = '张三';
  module.exports.age = num;
  module.exports.sayHi = () => {
      console.log('Hello');
  }
  module.exports = {
      name: '李四',
      age: num,
      sayHi: () => {
          console.log('你好');
      }
  }
  ```

- 演示代码之JavaScript代码文件：

  ```javascript
  // 09-向外共享模块作用域中的成员.js
  const zdy = require('./js/09-向外共享模块作用域中的成员');
  console.log(zdy);
  ```

- 演示结果：

  ![30](imgs/30.gif)

### 5.3.5 `exports` 对象

- 为了简化向外共享模块作用域中的成员的代码，Node.js提供了 `exports` 对象，在自定义模块中，默认情况下 `exports` 对象          和该模块的 `module` 对象中的 `exports` 属性所指向的对象是同一个对象，所以当我们要将该模块中的成员共享出去时，只需将该模块中的成员挂载到 `exports` 对象上即可，但是要注意最终向外共享的结果，还是以该模块的 `module` 对象中的 `exports` 属性所指向的对象为准。

- 注意点：需时刻谨记，使用 `require()` 方法导入模块时，导入的结果，永远以导入的模块的 `module` 对象中的 `exports` 属性所指向的对象为准，所以为了防止混乱，建议大家不要在同一个模块中同时使用 `exports` 对象和该模块的 `module` 对象中的 `exports` 属性所指向的对象，如以下代码所示：

  ```javascript
  exports.age = 18;
  module.exports = {
      age: 20
  }
  ```

  > 注：当以上代码被导入时，会返回 `{age: 20}` 给 `require()` 方法。

  ```javascript
  module.exports.age = 18;
  exports = {
      age: 20
  }
  ```

  > 注：当以上代码被导入时，会返回 `{age: 18}` 给 `require()` 方法。

  ```javascript
  module.exports.username = '张三';
  exports.age = 18;
  ```

  > 注：当以上代码被导入时，会返回 `{username: '张三',aeg: 18}` 给 `require()` 方法。

  ```javascript
  exports = {
      age: 20
  }
  module.exports = exports;
  module.exports.username = '张三';
  ```

  > 注：当以上代码被导入时，会返回 `{aeg: 20,username: '张三'}` 给 `require()` 方法。

- 演示代码之自定义模块：

  ```javascript
  // 10-exports对象.js
  exports.age = 18;
  module.exports = {
      age: 20
  }
  ```

- 演示代码之JavaScript代码文件：

  ```javascript
  // 10-exports对象.js
  const zdy = require('./js/10-exports对象');
  console.log(zdy);
  ```

- 演示结果：

  ![31](imgs/31.gif)

### 5.3.6Node.js中的模块化规范

- Node.js遵循了CommonJS模块化规范，CommonJS规定了模块的特性和各模块之间是如何相互依赖的。
- CommonJS规定：
  - 每个模块内部都使用 `module` 变量来代表当前模块。
  - `module` 变量是一个对象，它的 `exports` 属性是对外的接口。
  - 当我们使用 `require()` 方法加载某个模块时，其实是加载该模块的 `module` 对象中的 `exports` 属性所指向的对象。

# 6.包与npm

## 6.1包

### 6.1.1什么是包

- Node.js中的第三方模块又叫做包，就像电脑和计算机指的是相同的东西，第三方模块和包指的是同一个概念，只不过叫法不同。

### 6.1.2包的来源

- 不同于Node.js中的内置模块与自定义模块，包是由第三方个人或团队开发出来的，是免费供所有人使用的。
- 注意点：Node.js中的包都是免费且开源的，是不需要付费即可免费下载使用的。

### 6.1.3为什么需要包

- 由于Node.js的内置模块仅提供了一些底层的API，这导致在基于内置模块进行项目开发时，效率很低，而包是基于内置模块封装出来的，提供了更高级、更方便的API，这极大的提高了开发效率，包和内置模块之间的关系，就类似于jQuery和浏览器内置API之间的关系。

### 6.1.4从哪里下载包

- 国外有一家IT公司，叫做npm这家公司旗下有一个非常著名的网站，https://www.npmjs.com/，它是全球最大的包共享平台，你可以从这个网站上搜索到任何你需要的包，只要你有足够的耐心，到目前为止，全球约1100多万的开发人员，通过这个包共享平台，开发并共享了超过120多万个包供我们使用，npm公司还提供了一个地址为https://registry.npmjs.org/的服务器，来对外共享所有的包，我们可以从这个服务器上下载自己所需要的包。

### 6.1.5如何下载包

- npm公司提供了一个包管理工具，我们可以使用这个包管理工具，来从https://registry.npmjs.org/服务器把所需要的包下载到本地中使用，这个包管理工具的名字叫做Node Package Manager，简称npm包管理工具，这个包管理工具会随着Node.js的安装包一起被安装到用户的电脑上，所以大家可以在终端中执行 `npm -v` 命令，来查看自己电脑上所安装的npm包管理工具的版本号，只要能查看到npm包管理工具的版本号就证明已经安装好了npm包管理工具，如下图所示：

  ![32](imgs/32.gif)

- 当我们安装了npm包管理工具，就可以在终端中使用 `npm install 包的完整名称` 命令来下载并安装所需要的包，如下图所示：

  ![33](imgs/33.gif)

  > 注1：`npm install 包的完整名称` 命令可以简写成 `npm i 包的完整名称`，它们的作用是一样的。
  >
  > 注2：如果要在项目中下载并安装包，那么要将终端的路径切换到项目目录下。

## 6.2npm包管理工具初体验

- 当我们使用传统方法来格式化时间的步骤如下：
  1. 创建格式化时间的自定义模块。
  2. 定义格式化时间的方法。
  3. 创建补零函数。
  4. 从自定义模块中导出格式化时间的函数。
  5. 导入格式化时间的自定义模块。
  6. 调用格式化时间的函数。

- 演示代码之自定义模块：

  ```javascript
  // 定义格式化时间的方法。
  function time(dtStr) {
      const y = bl(dtStr.getFullYear());
      const m = bl(dtStr.getMonth() + 1);
      const d = bl(dtStr.getDate());
      const hh = bl(dtStr.getHours());
      const mm = bl(dtStr.getMinutes());
      const ss = bl(dtStr.getSeconds());
      return `${y}年${m}月${d}日 ${hh}时${mm}分${ss}秒`;
  }
  // 创建补零函数。
  function bl(data) {
      return data > 9 ? data: '0' + data;
  }
  // 从自定义模块中导出格式化时间的函数。
  module.exports = {
      time
  }
  ```

- 演示代码之JavaScript代码文件：

  ```javascript
  // 导入格式化时间的自定义模块。
  const zdy = require('./js/11-npm包管理工具初体验之使用传统的方式格式化时间');
  // 调用格式化时间的函数。
  const date = new Date();
  console.log(zdy.time(date));
  ```

- 演示结果：

  ![34](imgs/34.gif)

- 使用传统方法来格式化时间会很耗时间，我们可以使用高级方法来格式化时间，也就是使用包来格式化时间，步骤如下：

  1. 使用npm包管理工具，在项目中下载并安装格式化时间的包 `dayjs`，如下图所示：

     ![35](imgs/35.gif)

  2. 使用 `require()` 方法导入格式化时间的包。

  3. 参考 `dayjs` 的官方的API文档来对时间进行格式化。

     > 注1：查找 `dayjs` 的官方的API文档，可以在npm包管理工具官网中查找，如下图所示：
     >
     > ![36](imgs/36.gif)
     >
     > 注2：npm包管理工具官网为：https://www.npmjs.com/。

- 演示代码：

  ```javascript
  // 使用require()方法导入格式化时间的包。
  const date = require('dayjs');
  // 参考dayjs的官方的API文档来对时间进行格式化。
  console.log(date().format('YYYY-MM-DD HH:mm:ss'));
  ```

- 演示结果：

  ![37](imgs/37.gif)

## 6.3初次安装包后多了那些文件

- 当在项目中初次下载并安装包，并且安装完成后，在项目文件夹中会多一个文件夹名为node_modules的文件夹和文件名为package-lock.json的配置文件，其中node_modules文件夹是用来存放所有已安装到项目中的包，当使用 `require()` 方法导入第三方包时，就是从这个目录中查找并加载包，而package-lock.json配置文件是用来记录node_modules文件夹中的每一个包的下载信息，如：包的名字、版本号、下载地址等，如下图所示：

  ![38](imgs/38.gif)

- 注意点：程序员不要手动修改node_modules文件夹或package-lock.json文件中的任何代码，npm包管理工具会自动维护它们。

## 6.4安装指定版本的包

- 在默认情况下，使用 `npm install 包的完整名称` 命令下载并安装包的时候，会自动下载并安装最新版本的包，如果需要下载并安装指定版本的包，可以在包名之后，通过@符号来指定具体的版本，如：`npm install moment@2.22.0`，如下图所示：

  ![39](imgs/39.gif)

## 6.5包的语义化版本规范

- 包的版本号是以点分十进制的形式来进行定义的，总共有三位数字，如：2.24.0，其中每一位数字所代表的的含义如下：
  - 第1位数字：代表大版本。
  - 第2位数字：代表功能版本。
  - 第3位数字：代表Bug修复版本。
- 注意点：版本号提升的规则，只要前面的版本号增长了，则后面的版本号归零，如：1.24.0版本号，如果第一位数字增长了，那么后两位数字都要归零，也就是变成2.0.0。

## 6.6npm包管理工具的配置文件

- npm包管理工具规定，在项目根目录中，必须提供一个文件名为package.json的包管理配置文件，该文件是用来记录与项目有关的一些配置信息，如：项目的名称、版本号、描述等，项目中都用到了哪些包，哪些包只在开发期间会用到，那些包在开发和部署时都需要用到。

### 6.6.1多人协作的问题

- 假设整个项目的体积是30.4M，第三方包的体积是28.8M，那么项目源代码的体积就是1.6M，此时遇到的问题是第三方包的体积过大，不方便团队成员之间共享项目源代码，所以我们使用Git版本控制工具共享项目源代码时，应该剔除node_modules文件夹。

### 6.6.2如何记录项目中安装了哪些包

- 当我们在团队成员之间共享项目源代码时，已经剔除了node_modules文件夹，那么其它团队成员就不知道该项目使用了那些包，此时我们可以在项目根目录中，创建一个文件名为package.json的配置文件，用该文件来记录该项目中安装了哪些包，从而解决上述问题。
- 注意点：今后在共享项目源代码时，一定要把node_modules文件夹，添加到.gitignore忽略文件中。

### 6.6.3快速创建package.json配置文件

- npm包管理工具提供了 `npm init -y` 命令，我们可以在终端中执行该命令，来快速创建package.json这个包管理配置文件，如下图所示：

  ![40](imgs/40.gif)

  > 注：如果要在项目中快速创建package.json这个包管理配置文件，那么要将终端的路径切换到项目目录下。

- 注意点：

  - `npm init -y` 命令只能在英文的目录下成功运行，所以项目文件夹的名称一定要使用英文命名，不要使用中文，并且不能出现空格。

  - 运行 `npm install 包的完整名称` 命令下载并安装包时，npm包管理工具会自动把包的名称和版本号，记录到package.json配置文件中，如下图所示：

    ![41](imgs/41.gif)

### 6.6.4 `dependencies` 节点

- 在package.json配置文件中，有一个 `dependencies` 节点，该节点是专门用来记录在项目中使用了 `npm install 包的完整名称` 命令下载并安装了哪些包的，如下图所示：

  ![42](imgs/42.gif)

### 6.6.5一次性下载并安装所有的包

- 当我们拿到了一个剔除了node_modules文件夹的项目后，我们需要先把所有的包下载并安装到项目中，才能将项目运行起来，否则会报错，如下图所示：

  ![43](imgs/43.gif)

- 当我们拿到了一个剔除了node_modules文件夹的项目后，我们需要先把所有的包下载并安装到项目中，才能将项目运行起来，我们可以在项目中打开终端，并且在终端中使用 `npm install` 命令或者 `npm i` 命令来一次性下载并安装所有的依赖包，一次性下载并安装所有的包的原理是当在终端中执行 `npm install` 命令时，npm包管理工具会先读取项目中的package.json配置文件中的 `dependencies` 节点，当读取到该节点记录的所有的依赖包名称和版本号后，npm包管理工具会把这些包一次性下载并安装到项目中，如下图所示：

  ![44](imgs/44.gif)

### 6.6.6卸载包

- 当我们想删除项目中的某个包时，我们可以在项目中打开终端，并且在终端中执行 `npm uninstall 要删除的包的完整名称` 命令，来删除项目中指定的包，如以下代码所示：

  ![45](imgs/45.gif)

  > 注：当终端执行完 `npm uninstall 要删除的包的完整名称` 命令后，会把删除的包，自动从项目中的package.json配置文件中的 `dependencies` 节点中移除掉。

### 6.6.7 `devDependencies` 节点

- 如果某些包只在项目开发阶段中会用到，在项目上线后不会用到，则建议把这些包记录到项目中的package.json配置文件中的 `devDependencies` 节点中，与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到项目中的package.json配置文件中的 `dependencies` 节点中。

- 我们可以在项目中打开终端，并且在终端中使用 `npm install 包的完整名称 --save-dev` 命令或使用该命令的简写形式 `npm i 包的完整名称 -D`，将包下载并安装，并且将包记录到项目中的package.json配置文件中的 `devDependencies` 节点中，如下图所示：

  ![46](imgs/46.gif)

## 6.7解决下载包速度慢的问题

### 6.7.1为什么下载包速度慢

- 在使用npm包管理工具下载并安装包时，默认是从国外的https://registry.npmjs.org/服务器进行下载，此时网络数据的传输需要经过漫长的海底光缆，因此下载包的速度会很慢，为了解决这个问题我们可以切换npm包管理工具的下载包的镜像源。

  > 注：切换npm包管理工具的下载包的镜像源就是切换npm包管理工具的下载包的服务器地址。

### 6.7.2淘宝npm镜像服务器

- 淘宝在国内搭建了一个服务器，专门把国外官方服务器上的包同步到国内的服务器上，然后在国内提供下载包的服务，从而极大的提高了下载包的速度。

  > 注：镜像（Mirroring）是一种文件存储的形式，如：一个磁盘上的数据，在另一个磁盘上存在一个完全相同的副本即为镜像。

- 从淘宝npm镜像服务器中下载包，如下图所示：

  ![47](imgs/47.png)

- 从官网服务器中下载包，如下图所示：

  ![48](imgs/48.png)

- 注意点：在安装新版本的Node.js时，npm包管理工具也会被一起安装，并且npm包管理工具的下载包的镜像源已经被切换到了淘宝npm镜像服务器。

### 6.7.3切换npm包管理工具的下载包的镜像源

- 我们可以在终端中使用 `npm config get registry` 命令，来查看当前npm包管理工具的下载包的镜像源，如下图所示：

  ![49](imgs/49.gif)

- 我们可以在终端中使用 `npm config set registry=要切换的镜像源` 命令，来切换当前npm包管理工具的下载包的镜像源，如下图所示：

  ![50](imgs/50.gif)

  > 注：上图中是将npm包管理工具的下载包的镜像源切换到了官方服务器，因为在安装新版本的Node.js时，npm包管理工具也会被一起安装，并且npm包管理工具的下载包的镜像源已经被切换到了淘宝npm镜像服务器。

### 6.7.4nrm

- 为了更方便的切换npm包管理工具的下载包的镜像源，我们可以在终端中执行 `npm instal nrm open@8.4.2 -g` 命令，来安装nrm这个小工具，然后再利用nrm提供的 `nrm ls` 命令，来快速查看npm包管理工具的下载包的镜像源，如下图所示：

  ![51](imgs/51.gif)

  > 注：当我们使用 `nrm ls` 命令，来快速查看npm包管理工具的下载包的镜像源时，会发现没有星号提示当前npm包管理工具的下载包的镜像源是那个，此时我们可以打开 `C:\用户\用户名文件夹\AppData\Roaming\npm\node_modules\nrm` 目录下的cli.js文件，修改该文件中的第141行代码，将 `&&` 修改成 `||` 即可解决上述问题，如下图所示：
  >
  > ![52](imgs/52.gif)

- 当我们安装了nrm这个小工具后，我们可以在终端中执行 `nrm use 要切换的镜像源的完整名称` 命令，来切换当前npm包管理工具的下载包的镜像源，如下图所示：

  ![53](imgs/53.gif)

## 6.8包的分类

- 使用npm包管理工具下载的包，共分为两大类，分别是：

  - 项目包：

    - 那些被安装到项目的node_modules文件夹中的包，都是项目包。
    - 项目包又分为两类，分别是：
      - 开发依赖包：被记录到项目中的package.json配置文件中的 `dependencies` 节点中的包，只在开发期间会用到，使用 `npm i 包的完整名称 -D` 命令安装的包都是开发依赖包。
      - 核心依赖包：被记录到项目中的package.json配置文件中的 `devDependencies` 节点中的包，在开发期间和项目上线之后都会用到，使用 `npm i 包的完整名称` 命令安装的包都是核心依赖包。

  - 全局包：

    - 当在中终端中使用 `npm install 包的完整名称` 命令时，如果提供了参数 `-g`，那么该命令就会下载包并将包安装为全局包，如下图所示：

      ![54](imgs/54.gif)

      > 注：全局包会被安装到 `C:\用户\用户名文件夹\AppData\Roaming\npm\node_modules` 目录下。

    - 我们还可以在终端中使用 `npm install 要删除的包的完整名称 -g` 命令，来删除全局包，如下图所示：

      ![55](imgs/55.gif)

    - 注意点：只有工具性质的包，才有全局安装的必要性，因为它们提供了好用的终端命令，要判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可，如下图所示：

      ![56](imgs/56.gif)

## 6.9i5ting_toc

- i5ting_toc是一个可以把MD文档转为HTML页面的小工具，使用步骤如下：

  1. 将i5ting_toc安装为全局包，如下图所示：

     ![57](imgs/57.gif)

  2. 在项目中打开终端，并且在终端中使用 `i5ting_toc -f 要转换的MD文件的路径 -o` 命令，来将MD文档转换为HMTL页面，其中 `-o` 参数表示转换完成后自动打开HTML页面，如下图所示：

     ![58](imgs/58.gif)

     > 注：在终端中使用 `i5ting_toc -f 要转换的MD文件的路径 -o` 命令，来将MD文档转换为HMTL页面后，会在终端的路径中新建一个文件夹名为preview的文件夹，该文件夹里面存放的就是MD文档转换为HMTL页面后的相关文件。

## 6.10规范的包结构

- 一个规范的包，它的组成结构，必须符合以下3点要求：

  1. 包必须以单独的目录而存在，如下图所示：

     ![59](imgs/59.gif)

  2. 包的顶级目录下要必须包含package.json这个包管理配置文件，如下图所示：

     ![60](imgs/60.gif)

  3. package.json配置文件中必须包含 `name`、`version`、`main` 这三个属性，这三个属性分别代表了包的名字、版本号、包的入口，如下图所示：

     ![61](imgs/61.gif)

     > 注：当我们使用 `require()` 方法导入包时，会导入包的顶级目录中的package.json配置文件中的 `main` 属性所指向的文件。

## 6.11发布属于自己的包

### 6.11.1初始化自己的包的基本结构

- 初始化自己的包的基本结构的步骤如下：

  1. 新建一个mushan-tools文件夹，作为自己的包的根目录，如下图所示：

     ![62](imgs/62.gif)

  2. 在mushan-tools文件夹中，新建一个index.js文件，在该文件中写上要实现的功能的代码，如下图所示：

     ![63](imgs/63.gif)

     > 注：代码的详细信息如下：
     >
     > ```javascript
     > // 定义格式化时间的方法。
     > function time(dtStr) {
     >     const y = bl(dtStr.getFullYear());
     >     const m = bl(dtStr.getMonth() + 1);
     >     const d = bl(dtStr.getDate());
     >     const hh = bl(dtStr.getHours());
     >     const mm = bl(dtStr.getMinutes());
     >     const ss = bl(dtStr.getSeconds());
     >     return `${y}年${m}月${d}日 ${hh}时${mm}分${ss}秒`;
     > }
     > // 创建补零函数。
     > function bl(data) {
     >     return data > 9 ? data: '0' + data;
     > }
     > // 定义转义HTML的方法
     > function htmlEscape(htmlStr) {
     >     return htmlStr.replace(/<|>|"|&/g,match => {
     >         switch(match) {
     >             case '<':return '&lt;';
     >             case '>':return '&gt;';
     >             case '"':return '&quot;';
     >             case '&':return '&amp;';
     >         }
     >     });
     > }
     > // 定义还原HTML的方法
     > function htmlUnEscape(str) {
     >     return str.replace(/&lt;|&gt;|&quot;|&amp;/g,match => {
     >         switch(match) {
     >             case '&lt;':return '<';
     >             case '&gt;':return '>';
     >             case '&quot;':return '"';
     >             case '&amp;':return '&';
     >         }
     >     });
     > }
     > // 向外共享所有的成员。
     > module.exports = {
     >     time,
     >     htmlEscape,
     >     htmlUnEscape
     > }
     > ```

  3. 因为index.js文件中有三个不同的功能，所以我们可以将这三个不同的功能进行模块化拆分，如下图所示：

     ![64](imgs/64.gif)

     > 注：我们将拆分的文件都放入到了文件夹名为src的文件夹中，并且每个拆分的文件中的成员都被共享出来了，然后我们又在index.js文件中导入了这些拆分的文件的成员，然后又在index.js文件中向外共享出这些成员，又因为我们在index.js文件中导入这些拆分的文件的成员时，导入的成员是对象形式的，所以我们在index.js文件中向外共享出这些成员时，要使用展开运算符来展开这些对象，如以下代码所示：
     >
     > ```javascript
     > // time.js文件
     > // 定义格式化时间的方法。
     > function time(dtStr) {
     >     const y = bl(dtStr.getFullYear());
     >     const m = bl(dtStr.getMonth() + 1);
     >     const d = bl(dtStr.getDate());
     >     const hh = bl(dtStr.getHours());
     >     const mm = bl(dtStr.getMinutes());
     >     const ss = bl(dtStr.getSeconds());
     >     return `${y}年${m}月${d}日 ${hh}时${mm}分${ss}秒`;
     > }
     > // 创建补零函数。
     > function bl(data) {
     >     return data > 9 ? data: '0' + data;
     > }
     > // 向外共享成员。
     > module.exports = {
     >     time,
     > }
     > ```
     >
     > ```javascript
     > // htmlEscape.js文件
     > // 定义转义HTML的方法
     > function htmlEscape(htmlStr) {
     >     return htmlStr.replace(/<|>|"|&/g,match => {
     >         switch(match) {
     >             case '<':return '&lt;';
     >             case '>':return '&gt;';
     >             case '"':return '&quot;';
     >             case '&':return '&amp;';
     >         }
     >     });
     > }
     > // 向外共享成员。
     > module.exports = {
     >     htmlEscape
     > }
     > ```
     >
     > ```javascript
     > // htmlUnEscape.js文件
     > // 定义还原HTML的方法
     > function htmlUnEscape(str) {
     >     return str.replace(/&lt;|&gt;|&quot;|&amp;/g,match => {
     >         switch(match) {
     >             case '&lt;':return '<';
     >             case '&gt;':return '>';
     >             case '&quot;':return '"';
     >             case '&amp;':return '&';
     >         }
     >     });
     > }
     > // 向外共享成员。
     > module.exports = {
     >     htmlUnEscape
     > }
     > ```
     >
     > ```javascript
     > // index.js文件
     > // 导入自定义模块time.js文件
     > const time = require('./src/time');
     > // 导入自定义模块htmlEscape.js文件
     > const htmlEscape = require('./src/htmlEscape');
     > // 导入自定义模块htmlUnEscape.js文件
     > const htmlUnEscape = require('./src/htmlUnEscape');
     > // 向外共享所有的成员。
     > module.exports = {
     >     // 因为我们在index.js文件中导入这些拆分的文件的成员时，导入的成员是对象形式的，所以我们在index.js文件中向外共享出这些成员时，要使用展开运算符来展开这些对象
     >     ...time,
     >     ...htmlEscape,
     >     ...htmlUnEscape
     > }
     > ```

  4. 在mushan-tools文件夹中，新建一个package.json包管理配置文件，并将该文件初始化，如下图所示：

     ![65](imgs/65.gif)

     > 注：package.json包管理配置文件中的初始化代码的详细信息如下：
     >
     > ```json
     > {
     >     "name": "mushan-tools",// 包的名称，包的名称不能重复
     >     "version": "1.0.0",// 包的版本号，默认从1.0.0开始
     >     "main": "index.js",// main属性指定包的入口
     >     "description": "提供了格式化时间，HTMLEscape的功能",// 包的简短的描述信息
     >     "keywords": ["tools","time"],// 包的搜索关键词
     >     "license": "ISC"// 开源许可协议，默认为ISC
     > }
     > ```

  5. 在mushan-tools文件夹中，新建一个README.md文件，该文件是自己的包的使用说明文档，通过它，我们可以事先把自己的包的使用说明，以markdown的格式写出来，方便用户参考，该文件中具体写什么内容，没有强制性的要求，只要能够清晰地把自己的包的作用、用法、注意事项等描述清楚即可，如下图所示：

     > 注：README.md文件中的内容一般会包含包的下载并安装的方式、包的导入方式、包的功能的用法、包的开源协议，如下所示：
     >
     > ~~~markdown
     > ## 安装
     > ```
     > npm i mushan-tools
     > ```
     > ## 导入
     > ```javascript
     > const tools = require('mushan-tools');
     > ```
     > ## 格式化时间的用法
     > ```javascript
     > // 调用time方法对时间进行格式化
     > const dtStr = tools.time(new Date());
     > // 结果 2022-7-18 18:33:55
     > console.log(dtStr);
     > ```
     > ## 转义HTML中的特殊字符
     > ```javascript
     > // 带转换的HTML字符串
     > const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
     > // 调用htmlEscape方法进行转换
     > const str = tools.htmlEscape(htmlStr);
     > // 转换的结果为&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
     > console.log(str);
     > ```
     > ## 还原HTML中的特殊字符
     > ```javascript
     > // 待还原的HTML字符串
     > const str2 = tools.htmlUnEscape(str);
     > // 输出的结果为<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
     > console.log(str2);
     > ```
     > ~~~

### 6.11.2使用自己的包

- 当我们使用 `require()` 方法导入自己的包时，`require()` 方法中的括号内写的是自己的包的路径，并且当我们使用 `require()` 方法导入自己的包时，会导入自己的包的顶级目录中的package.json配置文件中的 `main` 属性所指向的文件，而 `main` 属性所指向的文件就是自己的包中的index.js文件，而index.js文件已经导入了三个自定义模块，并且把这三个自定义模块中的成员都共享出来了，所以当我们使用 `require()` 方法导入自己的包时，我们可以使用这三个自定义模块中的成员。

- 演示代码：

  ```javascript
  const tools = require('../mushan-tools');
  const dtStr = tools.time(new Date());
  console.log(dtStr);
  const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
  const str = tools.htmlEscape(htmlStr);
  console.log(str);
  const str2 = tools.htmlUnEscape(str);
  console.log(str2);
  ```

- 演示结果：

  ![66](imgs/66.gif)

### 6.11.3发布自己的包

- 发布自己的包的操作步骤如下：

  1. 注册npm账号，如下图所示：

     ![67](imgs/67.gif)

     > 注：npm官网地址为：https://www.npmjs.com/。

  2. npm账号注册完成后，可以在终端中执行 `npm login` 命令，然后依次输入用户名、密码、邮箱后，即可登录npm账号，如下图所示：

     ![68](imgs/68.gif)

     > 注：在运行 `npm login` 命令之前，必须要先把npm包管理工具的下载包的镜像源切换到了官方的npm镜像服务器，并且Node.js版本得是16.20.0或16.20.0以下的版本才行，否则会导致登录npm账号失败。

  3. 我们可以在自己的包的根目录中打开终端，在终端中使用 `npm publish` 命令，即可将自己的包发布到npm上，如下图所示：

     ![69](imgs/69.gif)

     > 注：包的名称不能和npm官网上已有的包的名称重复，要不然会发布失败。

  4. 我们可以在npm官网上登录自己的账号，来查看自己发布的包，如下图所示：

     ![70](imgs/70.gif)

  5. 我们可以在自己的包的根目录中打开终端，在终端中使用 `npm unpublish 自己的包的完整名称 --force` 命令，即可将发布到npm上的自己的包删除，如下图所示：

     ![71](imgs/71.gif)

     > 注1：使用 `npm unpublish 自己的包的完整名称 --force` 命令只能删除72小时以内发布的包。
     >
     > 注2：使用 `npm unpublish 自己的包的完整名称 --force` 命令删除的包，在24小时内不允许重复发布。
     >
     > 注3：发布自己的包的时候要慎重，尽量不要往npm上发布没有意义的包。

  6. 我们可以在终端中使用 `npm logout` 命令来退出登录的npm账号，如下图所示：

     ![72](imgs/72.gif)

# 7.模块的加载机制

## 7.1模块会优先从缓存中加载

- 模块在第一次加载后会被缓存，这也意味着多次使用 `require()` 方法来加载模块时，不会导致模块的代码被执行多次，如下图所示：

  ![73](imgs/73.gif)

- 注意点：不论是内置模块、自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。

## 7.2内置模块的加载机制

- 内置模块是由Node.js官方提供的模块，所以内置模块的加载的优先级最高，如：在JavaScript文件中使用 `require('fs')` 代码，该代码始终是导入内置的fs模块，即使在node_modules文件夹中有名字相同的包也叫做fs。

## 7.3自定义模块的加载机制

- 当我们使用 `require()` 方法加载自定义模块时，必须指定以 `./` 或 `../` 开头的路径标识符，如果在加载自定义模块时，没有指定 `./` 或 `../` 这样的路径标识符，则Node.js会把它当作内置模块或第三方模块进行加载，同时，在使用 `require()` 方法导入自定义模块时，如果省略了文件的扩展名，那么Node.js会按顺序分别尝试加载以下的文件：
  1. 按照路径中的确切的文件名进行加载。
  2. 将路径中的文件名补全.js扩展名进行加载。
  3. 将路径中的文件名补全.json扩展名进行加载。
  4. 将路径中的文件名补全.node扩展名进行加载。
  5. 加载失败，终端报错。

## 7.4第三方模块的加载机制

- 当我们在JavaScript文件中使用 `require()` 方法加载第三方模块时，如果 `require()` 方法的括号内的模块标识符不是一个内置模块的模块名，并且也不是以 `./` 或 `../` 开头的路径标识符，则Node.js会从当前JavaScript文件的父目录下开始尝试从node_modules文件夹中加载第三方模块，如果在该目录中没有找到对应的第三方模块，则移动到再上一层的父目录中，进行加载，直到文件系统的根目录，如：在 `C:\Users\itheima\project\foo.js` 文件中调用了 `require('tools')` 方法，则Node.js会按以下顺序进行查找：
  1. `C:\Users\itheima\project\node_modules\tools`。
  2. `C:\Users\itheima\node_modules\tools`。
  3. `C:\Users\node_modules\tools`。
  4. `C:\node_modules\tools`。

## 7.5目录作为模块

- 当把目录作为模块标识符，传递给 `require()` 方法进行加载时，会有以下三种加载方式：
  1. 在被加载的目录下查找一个叫做package.json的文件，并寻找该文件中的 `main` 属性，并且将该文件中的 `main` 属性所指向的文件，作为 `require()` 方法加载的入口。
  2. 如果被加载的目录下没有package.json文件，或者该文件的 `main` 属性所指向的文件不存在或无法解析，则Node.js将会试图加载该目录下的index.js文件。
  3. 如果以上两步都失败了，则Node.js会在终端打印出错误消息，报告模块的缺失，错误消息为 `Error: Cannot find module 'xxx'`。

# 8.Express第三方模块

## 8.1什么是Express

- Express是基于Node.js平台，快速、开放、极简的Web开发框架，简单来说就是Express的作用和Node.js内置的http模块类似，都是专门用来创建Web服务器的。
- Express的本质就是一个npm上的第三方包，它提供了快速创建Web服务器的便捷方法。
- Express的中文官网为：http://www.expressjs.com.cn/。

## 8.2进一步理解Express

- 不使用Express我们还可以使用Node.js提供的内置的http模块来创建Web服务器，但是http内置模块用起来很复杂，这就导致了开发效率低，而Express是基于内置的http模块进一步封装出来的，它能够极大的提高开发效率，http内置模块与Express的关系就类似于浏览器中Web API和jQuery的关系，后者是基于前者进一步封装出来的。

## 8.3Express能做什么

- 对于前端程序员来说，最常见的两种服务器，分别是Web网站服务器和API接口服务器，其中Web网站服务器是专门对外提供Web网页资源的服务器，而API接口服务器是专门对外提供API接口的服务器，我们可以使用Express，来方便、快速的创建Web网站服务器或API接口服务器。

## 8.4Express的基本使用

### 8.4.1安装Express

- 在项目所处的目录中，运行 `npm i express` 命令，即可将Express下载并安装到项目中使用，如下图所示：

  ![74](imgs/74.gif)

### 8.4.2使用Express创建基本的Web服务器

- 使用Express创建基本的Web服务器的步骤如下：

  1. 导入Express模块，如以下代码所示：

     ```javascript
     const express = require('express');
     ```

     > 注：使用Express模块前我们需要先使用 `require('express')` 方法导入Express模块，导入Express模块后，会将Express模块中的对象返回给 `require('express')` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

  2. 使用 `express()` 方法来创建Web服务器，如以下代码所示：

     ```javascript
     const express = require('express');
     const app = express();
     ```

     > 注：使用 `express()` 方法来创建Web服务器后，会返回Web服务器对象给 `express()` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

  3. 使用Web服务器对象中的 `listen()` 方法来启动Web服务器，如以下代码所示：

     ```javascript
     const express = require('express');
     const app = express();
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

     > 注：`listen()` 方法中的第一个参数是设置启动Web服务器时，使用的端口号，第二个参数是回调函数，该回调函数在Web服务器启动成功后就会被调用。

  4. 使用VSCode编译器中的终端来运行 `node 要执行的JavaScript代码文件的文件名` 命令，让创建最基本的Web服务器代码运行在Node.js环境中，如下图所示：

     ![75](imgs/75.gif)

     > 注1：VSCode编译器中的终端就是Windows系统中的PowerShell终端或CMD终端，只是VSCode编译器集成了这两个终端，从而使得我们不用在Windows系统中开启PowerShell终端或CMD终端就能执行命令，并且VSCode编译器中的终端在打开时，该终端的路径默认为当前文件的路径，如上图所示。
     >
     > 注2：当创建最基本的Web服务器代码运行在Node.js环境中时，Web服务器就会启动，这时我们就可以在浏览器中输入 `http://127.0.0.1` IP地址来访问该Web服务器，或者在Web服务器对象中的 `listen()` 方法中的回调函数中书写 `console.log('http://127.0.0.1');` 代码，将 `http://127.0.0.1` IP地址输出到终端上，然后使用 `Ctrl+鼠标点击` 快捷键来点击该地址，就可以自动让浏览器打开该IP地址来访问该Web服务器，并且还可以在终端中使用 `Ctrl+C` 快捷键来关闭该Web服务器，如上图所示。

### 8.4.3监听客户端发起的GET请求

- 当我们使用了Express创建了基本的Web服务器时，我们可以使用Web服务器对象中的 `get()` 方法，来监听客户端向Web服务器发起的GET请求。

- 语法：

  ```javascript
  const express = require('express');
  const app = express();
  app.get('请求的URL地址',(req,res) => {
     res.send(要向客户端发送的内容);
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 取值：

  |                      | 取值                                  |
  | :------------------: | ------------------------------------- |
  |    请求的URL地址     | 用户自定义，只能是客户端请求的URL地址 |
  | 要向客户端发送的内容 | 用户自定义，只能是字符串、对象等      |

- Web服务器对象中的 `get()` 方法的执行流程：当客户端向Web服务器发起GET请求时，`get()` 方法就会判断客户端向Web服务器发起的GET请求的URL地址是否为 `get()` 方法中的第一个参数的URL地址，如果是的话就会执行 `get()` 方法的第二个参数的回调函数，否则就不执行 `get()` 方法的第二个参数的回调函数。

- 注意点：

  - 当客户端向Web服务器发起GET请求时，Web服务器对象中的 `get()` 方法就会判断客户端向Web服务器发起的GET请求的URL地址是否为 `get()` 方法中的第一个参数的URL地址，如果是的话就会将请求对象和响应对象传递给 `get()` 方法中的第二个参数的回调函数，所以 `get()` 方法中的第二个参数的回调函数的第一个形参存储的是请求对象，并且该请求对象的对象名就是第一个形参的形参名，第二个形参存储的是响应对象，并且该响应对象的对象名就是第二个形参的形参名，一般我们会将 `get()` 方法中的第二个参数的回调函数的括号内的第一个形参的名字设置为 `req`，第二个形参的名字设置为 `res`，其中请求对象包含了与客户端相关的数据和属性，如：请求对象中的 `url` 属性，存储的是客户端请求的URL地址端口号后面的URL地址，`method` 属性存储的是客户端请求的请求方式，响应对象包含了与服务器相关的数据和属性，如：要发送到客户端的字符串，并且还可以使用响应对象中的 `send()` 方法来向客户端发送指定的内容，并结束这次请求的处理过程。

  - 我们还可以使用Postman软件来向我们创建的最基本的Web服务器来发起GET请求，如下图所示：

    ![76](imgs/76.gif)

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  app.get('/',(req,res) => {
      res.send(req.url);
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![77](imgs/77.gif)

### 8.4.4监听客户端发起的POST请求

- 当我们使用了Express创建了基本的Web服务器时，我们可以使用Web服务器对象中的 `post()` 方法，来监听客户端向Web服务器发起的POST请求。

- 语法：

  ```javascript
  const express = require('express');
  const app = express();
  app.post('请求的URL地址',(req,res) => {
     res.send(要向客户端发送的内容);
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 取值：

  |                      | 取值                                  |
  | :------------------: | ------------------------------------- |
  |    请求的URL地址     | 用户自定义，只能是客户端请求的URL地址 |
  | 要向客户端发送的内容 | 用户自定义，只能是字符串、对象等      |

- Web服务器对象中的 `post()` 方法的执行流程：当客户端向Web服务器发起POST请求时，`post()` 方法就会判断客户端向Web服务器发起的POST请求的URL地址是否为 `post()` 方法中的第一个参数的URL地址，如果是的话就会执行 `post()` 方法的第二个参数的回调函数，否则就不执行 `post()` 方法的第二个参数的回调函数。

- 注意点：

  - 当客户端向Web服务器发起POST请求时，Web服务器对象中的 `post()` 方法就会判断客户端向Web服务器发起的POST请求的URL地址是否为 `post()` 方法中的第一个参数的URL地址，如果是的话就会将请求对象和响应对象传递给 `post()` 方法中的第二个参数的回调函数，所以 `post()` 方法中的第二个参数的回调函数的第一个形参存储的是请求对象，并且该请求对象的对象名就是第一个形参的形参名，第二个形参存储的是响应对象，并且该响应对象的对象名就是第二个形参的形参名，一般我们会将 `post()` 方法中的第二个参数的回调函数的括号内的第一个形参的名字设置为 `req`，第二个形参的名字设置为 `res`，其中请求对象包含了与客户端相关的数据和属性，如：请求对象中的 `url` 属性，存储的是客户端请求的URL地址端口号后面的URL地址，`method` 属性存储的是客户端请求的请求方式，响应对象包含了与服务器相关的数据和属性，如：要发送到客户端的字符串，并且还可以使用响应对象中的 `send()` 方法来向客户端发送指定的内容，并结束这次请求的处理过程。

  - 我们还可以使用Postman软件来向我们创建的最基本的Web服务器来发起POST请求，如下图所示：

    ![78](imgs/78.gif)

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  app.post('/',(req,res) => {
      res.send(req.url);
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![78](imgs/78.gif)

### 8.4.5获取URL中携带的查询参数

- 当我们使用了Express创建了基本的Web服务器，并且使用Web服务器对象中的 `get()` 方法或 `post()` 方法来监听客户端发起的请求时，我们可以通过请求对象中的 `query` 属性，来获取客户端向Web服务器发起的请求的URL地址中的查询字符串中的参数。

- 注意点：

  - 默认情况下，请求对象中的 `query` 属性存储的是一个空对象。
  - 当使用请求对象中的 `query` 属性，来获取客户端向Web服务器发起的请求的URL地址中的查询字符串中的参数时，会将获取的参数以对象的形式，返回给请求对象中的 `query` 属性。

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  app.post('/',(req,res) => {
      res.send(req.query);
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![79](imgs/79.gif)

### 8.4.6获取URL中的动态参数

- 当我们使用了Express创建了基本的Web服务器，并且使用Web服务器对象中的 `post()` 方法来监听客户端发起的POST请求时，我们可以通过在 `post()` 方法的第一个参数的URL地址中写上动态匹配符 `:`，来动态匹配客户端向Web服务器发起的POST请求的URL地址中的参数，并且还可以使用请求对象中的 `params` 属性，来获取所动态匹配的参数。

  > 注：`get()` 方法也可以获取URL中的动态参数，跟上方是同理的。

- 语法：

  ```javascript
  const express = require('express');
  const app = express();
  app.post('/:id/:user/···/:n',(req,res) => {
     res.send(req.params);
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 动态匹配符的执行流程：当客户端向Web服务器发起的POST请求的URL地址为 `http://127.0.0.1/user/2` 时，如果 `post()` 方法的第一个参数的URL地址为 `/user/:id`，那么动态匹配符就会动态匹配到客户端向Web服务器发起的POST请求的URL地址中的2，然后就会将动态匹配符的后面的字符作为属性名，将这个2保存起来，并且会将这个属性以对象的形式，返回给请求对象中的 `query` 属性，这样请求对象中的 `params` 属性，就能获取到动态匹配的参数了，并且该参数是以对象的形式进行保存的。

  > 住：动态匹配符的后面的字符，是可以修改的，它是由用户自定义的。

- 注意点：

  - 默认情况下，请求对象中的 `params` 属性存储的是一个空对象。
  - 我们可以在 `post()` 方法的第一个参数的URL地址中写上多个动态匹配符，并且多个动态匹配符之间要使用 `/` 进行分隔，但是这些动态匹配符要和客户端向Web服务器发起的POST请求的URL地址中的参数一一对应，如：客户端向Web服务器发起的POST请求的URL地址为 `http://127.0.0.1/user/2` 时，如果 `post()` 方法的第一个参数的URL地址为 `/user/:id`，那么就可以动态匹配到客户端向Web服务器发起的POST请求的URL地址中的2，如果 `post()` 方法的第一个参数的URL地址为 `/us/:id` 或 `/user/:id/:user`，那么就会报错。

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  app.post('/user/:id',(req,res) => {
      res.send(req.params);
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![80](imgs/80.gif)

### 8.4.7托管静态资源

- 当我们使用了Express创建了基本的Web服务器时，我们可以使用Express模块中的 `static()` 方法，来创建一个静态资源服务器，并将指定的文件夹中的所有文件对外开放访问。

- 语法：

  ```javascript
  const express = require('express');
  const app = express();
  app.use(express.static('要对外开放访问的文件夹'));
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

  > 注：Web服务器对象中的 `use()` 方法，后面会学到。

- 要对外开放访问的文件夹的取值：用户自定义，只能是要对外开放访问的文件夹的路径。

- 注意点：

  - `express.static('要对外开放访问的文件夹')` 方法，执行完毕后，就可以在Web服务器中访问要对外开放访问的文件夹中的所有文件了，访问地址的格式为：`http://127.0.0.1/要访问对外开放访问的文件夹中的文件的路径`，如下图所示：

    ![81](imgs/81.gif)

  - 使用 `express.static('要对外开放访问的文件夹')` 方法，来对外开放访问文件夹中的所有文件时，会因为Express是在指定的文件夹中查找文件，并对外提供这些文件的访问地址，所以指定的文件夹的文件名是不会出现在访问地址中的。

  - 当我们使用 `express.static('要对外开放访问的文件夹')` 方法，来对外开放访问多个文件夹中的所有文件时，`express.static('要对外开放访问的文件夹')` 方法，会根据代码的书写顺序来查找所需的文件，如以下代码所示：

    ```javascript
    const express = require('express');
    const app = express();
    app.use(express.static('./js'));
    app.use(express.static('./file'));
    app.listen(80,() => {
        console.log('http server runing at http://127.0.0.1');
    });
    ```

    > 注1：上述代码中，对外开放访问了js文件夹和file文件夹中的所有文件，如果这两个文件夹中都有一个index.js文件，那么当我们使用访问地址，访问index.js文件时，访问的是js文件夹中的文件，因为当我们使用 `express.static('要对外开放访问的文件夹')` 方法，来对外开放访问多个文件夹中的所有文件时，`express.static('要对外开放访问的文件夹')` 方法，会根据代码的书写顺序来查找所需的文件。
    >
    > 注2：我们可以使用 `app.use('/file',express.static('./file'))` 代码，给要对外开放访问的file文件夹挂载路径前缀，这样就不会发送上述代码中的问题，因为已经给要对外开放访问的file文件夹挂载了路径前缀，那么在访问file文件夹中的文件时，访问地址中就需要加上路径前缀才能访问file文件夹中的文件，也就是要使用 `http://127.0.0.1/file/file文件夹中的文件的路径` 访问地址，才能访问file文件夹中的文件，注意路径前缀是由用户自定义的，但是最好是和要对外开放访问的文件夹的文件夹名一致，如下图所示：
    >
    > ![82](imgs/82.gif)

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  app.use(express.static('./js'));
  app.use('/file',express.static('./files'));
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![83](imgs/83.gif)

### 8.4.8nodemon工具

#### 8.4.8.1为什么要使用nodemon工具

- 我们在编写和调试Node.js项目的时候，如果修改了项目的代码，则需要频繁的手动关闭服务器，然后再重新启动，非常繁琐，现在我们可以使用nodemon这个工具，它能够监听项目文件的变动，当代码被修改后，nodemon工具会自动帮我们重启项目，这极大的方便了我们开发和调试。

#### 8.4.8.2安装nodemon工具

- 因为nodemon工具要在所有的项目中使用，所有我们要在终端中使用 `npm i nodemon -g` 命令，来将nodemon工具下载并安装成全局工具，如下图所示：

  ![84](imgs/84.gif)

#### 8.4.8.3使用nodemon工具

- 当我们基于Node.js编写了一个网站应用时，我们传统的方式是在项目中打开终端，并在终端中运行 `node 要执行的JavaScript代码文件的文件名` 命令，来启动项目，这样做的坏处就是代码被修改之后，需要手动重启项目，现在我们可以将 `node 要执行的JavaScript代码文件的文件名` 命令替换为 `nodemon 要执行的JavaScript代码文件的文件名` 命令，使用 `nodemon 要执行文件的路径` 命令来启动项目，这样做的好处就是代码被修改之后，会被nodemon工具监听到，从而实现自动重启项目的效果，如下图所示：

  ![85](imgs/85.gif)

## 8.5Express路由的使用

### 8.5.1什么是路由

- 从广义上来讲，路由就是映射关系。

- 现实中的路由：如：拨打10086时，按键1为业务查询、按键2为手机充值、按键3为业务办理、按键4为密码服务与停复机、按键5为家庭宽带、按键6为话费流量、按键8为集团业务、按键0为人工服务，在这里路由是按键与服务之间的映射关系。

- Express中的路由：

  - 在Express中，路由指的是客户端的请求与服务器处理函数之间的映射关系，如以下代码所示：

    ```javascript
    const express = require('express');
    const app = express();
    // 匹配GET请求，且请求URL为/
    app.get('/',(req,res) => {
        res.send('Hello World');
    });
    // 匹配POST请求，且请求URL为/
    app.post('/',(req,res) => {
        res.send('Got a POST request');
    });
    app.listen(80,() => {
        console.log('http server runing at http://127.0.0.1');
    });
    ```

    > 注：如上述代码所示，如果当客户端向Web服务器发起GET请求，并且请求的URL地址为 `/` 时，那么就会执行 `get()` 方法中的回调函数，如果当客户端向Web服务器发起POST请求，并且请求的URL地址为 `/` 时，那么就会执行 `post()` 方法中的回调函数，这种映射关系就是Express中的路由。

  - Express中的路由，分三部分组成，分别是请求的类型、请求的URL地址、回调函数，其格式如下：

    ```javascript
    const express = require('express');
    const app = express();
    app.method('path',callback);
    app.listen(80,() => {
        console.log('http server runing at http://127.0.0.1');
    });
    ```

    > 注：如果 `method` 参数为 `get` 那么就对应的是Web服务器对象中的 `get()` 方法，如果 `method` 参数为 `post` 那么就对应的是Web服务器对象中的 `post()` 方法，所以也可以将Web服务器对象中的 `get()` 方法和 `post()` 方法理解成Express中的路由。

  - Express中的路由的匹配过程：每当客户端发起的请求到达Web服务器后，都需要先经过Express中的路由来进行匹配，只有在匹配路由成功后，才会调用对应的路由中的回调函数，并且在匹配时，会按照路由的代码的书写顺序来进行匹配，如果客户端发起的请求中的请求类型和请求的URL地址都同时匹配成功了某个路由，则Express会将这次请求，转交给该路由中的回调函数进行处理，如下图所示：

    ![86](imgs/86.png)

    > 注1：在匹配路由时，会按照路由的代码的书写顺序来进行匹配。
    >
    > 注2：只有在客户端发起的请求中的请求类型和请求的URL地址都同时匹配成功了某个路由时，才会将这次请求转交给该路由中的回调函数进行处理。

### 8.5.2Express路由的使用

#### 8.5.2.1Express路由的最简单的用法

- 在Express中使用路由的最简单的方式，就是把路由挂载到Web服务器对象上，如以下代码所示：

  ```javascript
  const express = require('express');
  const app = express();
  // 将路由挂载到Web服务器对象上。
  app.get('/',(req,res) => {
      res.send('Hello World');
  });
  // 将路由挂载到Web服务器对象上。
  app.post('/',(req,res) => {
      res.send('Got a POST request');
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 注意点：随着代码量的增加，会有越来越多的路由挂载到Web服务器对象上，这样就导致了文件的体积会越来越大，所以我们应该将路由模块化。


#### 8.5.2.2模块化Express路由

- 为了方便对Express路由进行模块化的管理，因此Express不建议将路由直接挂载到Web服务器对象上，而是推荐将路由抽离为单独的模块。

- 将Express路由抽离为单独模块的步骤如下：

  1. 创建Express路由模块对应的JavaScript文件，如下图所示：

     ![87](imgs/87.gif)

  2. 在Express路由模块对应的JavaScript文件中，使用Express模块中的 `Router()` 方法，来创建路由对象，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 使用Express模块中的Router()函数，来创建路由对象。
     const router = express.Router();
     ```

     > 注：使用Express模块中的 `Router()` 方法来创建路由对象后，会返回路由对象给 `Router()` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

  3. 在Express路由模块对应的JavaScript文件中，使用路由对象中的 `get()` 方法或 `post()` 方法，来往路由对象上挂载具体的路由，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 使用Express模块中的Router()函数，来创建路由对象。
     const router = express.Router();
     // 往路由对象上挂载具体的路由。
     router.get('/',(req,res) => {
         res.send('你好');
     });
     router.post('/',(req,res) => {
         res.send('收到');
     });
     ```

  4. 在Express路由模块对应的JavaScript文件中，使用该文件中的 `module` 对象中的 `exports` 属性，来向外共享路由对象，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 使用Express模块中的Router()函数，来创建路由对象。
     const router = express.Router();
     // 往路由对象上挂载具体的路由。
     router.get('/',(req,res) => {
         res.send('你好');
     });
     router.post('/',(req,res) => {
         res.send('收到');
     });
     // 向外共享路由对象。
     module.exports = router;
     ```

     > 注：使用文件中的 `module` 对象中的 `exports` 属性，来向外共享该文件中的成员时，要以对象的形式来向外共享，所以上述代码中是直接将路由对象赋值给 `module` 对象中的 `exports` 属性，因为路由对象本身就是一个对象。

  5. 创建一个Web服务器的JavaScript文件，如下图所示：

     ![88](imgs/88.gif)

  6. 在Web服务器的JavaScript文件中，来创建一个Web服务器，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 创建Web服务器。
     const app = express();
     // 启动Web服务器。
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

  7. 在Web服务器的JavaScript文件中，使用Web服务器对象中的 `use()` 方法来注册导入的Express路由模块对应的JavaScript文件，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 创建Web服务器。
     const app = express();
     // 导入Express路由模块对应的JavaScript文件。
     const router = require('./js/20-模块化Express路由');
     // 使用Web服务器对象中的use()方法来注册导入的Express路由模块对应的JavaScript文件。
     app.use(router);
     // 启动Web服务器。
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

     > 注：Web服务器对象中的 `use()` 方法，是用来注册全局中间件的，后面会学到。

  8. 使用VSCode编译器中的终端来运行 `nodemon 要执行的JavaScript代码文件的文件名` 命令，让Web服务器的JavaScript文件运行在Node.js环境中，如下图所示：

     ![89](imgs/89.gif)

     > 注：从上图中，可以看到我们在Web服务器中，是可以使用Express路由模块对应的JavaScript文件中的路由的，这就证明模块化路由成功。

  9. 因为在Web服务器的JavaScript文件中，使用了Web服务器对象中的 `use()` 方法来注册导入的Express路由模块对应的JavaScript文件，所以我们可以给该文件挂载路径前缀，那么在Web服务器中访问Express路由模块对应的JavaScript文件中的路由时，需要在访问地址中加上路径前缀才能访问Express路由模块对应的JavaScript文件中的路由，如下图所示：

     ![90](imgs/90.gif)

## 8.6Express中间件的使用

### 8.6.1什么是中间件

- 中间件（Middleware ），特指业务流程的中间处理环节。

- 现实生活中的中间件：如：在处理污水时，一般都要经过三个处理环节，从而保证处理过后的废水，达到排放标准，其中处理污水的这三个中间处理环节，就可以叫做中间件，如下图所示：

  ![91](imgs/91.png)

### 8.6.2Express中间件的调用流程

- 当客户端向Web服务器发起了请求，并且请求到达了Web服务器后，我们就可以连续调用多个中间件，来对这次客户端发起的请求进行预处理，然后将预处理的结果传递给路由，然后再让路由中的回调函数来处理本次请求，如下图所示：

  ![92](imgs/92.png)

### 8.6.3Express中间件的格式

- Express的中间件，本质上就是一个函数，Express中间件的格式，如以下代码所示：

  ```javascript
  const express = require('express');
  const app = express();
  const 函数名 = (req,res,next) => {
      next();
  }
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

  > 注1：上述代码中的函数名参数是由用户自定义的，当一个函数的形参列表中，有 `req`、`res`、`next` 这三个形参名，并且这三个形参名的顺序为 `req`、`res`、`next`，而且还在函数体中使用了 `next()` 代码调用了 `next` 函数时，该函数就是Express的中间件，并且该函数中的 `req` 形参中存储的是请求对象，`req` 形参中存储的是响应对象，`next` 形参中存储的是 `next` 函数。
  >
  > 注2：我们可以自定义修改Express中间件函数的形参的形参名，只要保证该函数有三个形参，并且在函数体中使用函数的调用方式调用了最后一个形参即可，如以下代码所示：
  >
  > ```javascript
  > const express = require('express');
  > const app = express();
  > const mw = (q,s,n) => {
  >     n();
  > }
  > app.listen(80,() => {
  >     console.log('http server runing at http://127.0.0.1');
  > });
  > ```

### 8.6.4 `next` 函数

- 当我们创建Express中间件时，会发现要在Express中间件函数的函数体中调用 `next` 函数，这是因为 `next` 函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由，如果不在Express中间件函数的函数体中调用 `next` 函数，那么就无法把流转关系转交给下一个中间件或路由，如下图所示：

  ![94](imgs/94.png)

### 8.6.5Express中间件的使用

#### 8.6.5.1定义Express中间件

- 当我们使用了Express创建了基本的Web服务器时，我们可以在其中定义一个Express中间件，如以下代码所示：

  ```javascript
  const express = require('express');
  const app = express();
  // 定义一个Express中间件。
  const mw = (req,res,next) => {
      console.log('这是最简单的中间件函数');
      next();
  }
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

  > 注：在Express中间件的业务处理完毕后，必须调用 `next` 函数，表示把流转关系转交给下一个中间件或路由。

#### 8.6.5.2全局生效的Express中间件

- 当客户端向Web服务器无论发起了什么请求，只要请求到达了Web服务器后，就会被触发的Express中间件，就叫做全局生效的Express中间件，我们可以使用Web服务器对象中的 `use(Express中间件的名称)` 方法，来将一个Express中间件设置为全局生效的Express中间件。

- 语法：

  ```javascript
  const express = require('express');
  const app = express();
  // 定义一个Express中间件。
  const mw = (req,res,next) => {
      console.log('这是最简单的中间件函数');
      next();
  }
  // 将一个Express中间件设置为全局生效的Express中间件。
  app.use(mw);
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 注意点：我们还可以在Web服务器对象中的 `use()` 方法的括号内定义一个Express中间件，那么该中间件就直接就是全局生效的Express中间件，如以下代码所示：

  ```javascript
  const express = require('express');
  const app = express();
  // 定义一个全局生效的Express中间件。
  app.use((req,res,next) => {
      console.log('这是最简单的中间件函数');
      next();
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  const mw = (req,res,next) => {
      console.log('这是最简单的中间件函数1');
      next();
  }
  app.use(mw);
  app.use((req,res,next) => {
      console.log('这是最简单的中间件函数2');
      next();
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![95](imgs/95.gif)

#### 8.6.5.3Express中间件的作用

- 多个Express中间件之间，是共享同一份 `req` 形参（请求对象）和 `res` 形参（响应对象）的，基于这样的特性，我们可以在上游的Express中间件中，统一为请求对象和响应对象添加自定义的属性或方法，供下游的Express中间件或路由进行使用，如下图所示：

  ![96](imgs/96.png)

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  app.use((req,res,next) => {
      req.time = new Date();
      next();
  });
  app.use((req,res,next) => {
      console.log(req.time);
      next();
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![97](imgs/97.gif)

#### 8.6.5.4定义多个全局生效的中间件

- 我们可以使用Web服务器对象中的 `use(Express中间件的名称)` 方法来连续定义多个全局中间件，当客户端向Web服务器无论发起了什么请求，只要请求到达了Web服务器后，就会按照Express中间件代码的书写顺序来依次进行调用Express中间件。

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  app.use((req,res,next) => {
      console.log('这是最简单的中间件函数1');
      next();
  });
  app.use((req,res,next) => {
      console.log('这是最简单的中间件函数2');
      next();
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![98](imgs/98.gif)

#### 8.6.5.5局部生效的Express中间件

- 不使用Web服务器对象中的 `use(Express中间件的名称)` 方法，来将Express中间件设置为全局生效的Express中间件的Express中间件，就叫做局部生效的Express中间件。
- 注意点：
  - 局部生效的Express中间件，只有在Express路由中被调用了，才会生效，所以我们可以在 `get()` 或 `post()` 方法中的URL地址参数和回调函数参数之间，写上局部生效的Express中间件的名称，并且使用逗号进行分隔，即可在该路由中调用局部生效的Express中间件。
  - 因为局部生效的Express中间件，只有在Express路由中被调用了，才会生效，所以如果有Express路由没有调用局部生效的Express中间件，那么局部生效的Express中间件就不会影响到该路由。

- 语法：

  ```javascript
  const express = require('express');
  const app = express();
  // 定义一个Express中间件，并且没有使用Web服务器对象中的use(Express中间件的名称)方法来将该Express中间件设置为全局生效的Express中间件。
  const mw = (req,res,next) => {
      console.log('这是最简单的中间件函数');
      next();
  }
  // 在路由中调用了局部生效的Express中间件。
  app.get('/',mw,function(req,res) {
      res.send('这个路由调用了中间件');
  });
  // 在路由中没有调用局部生效的Express中间件。
  app.get('/user',function(req,res) {
      res.send('这个路由没有调用中间件');
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  const mw = (req,res,next) => {
      console.log('这是最简单的中间件函数');
      next();
  }
  app.get('/',mw,function(req,res) {
      res.send('这个路由调用了中间件');
  });
  app.get('/user',function(req,res) {
      res.send('这个路由没有调用中间件');
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![99](imgs/99.gif)

#### 8.6.5.6Express路由使用多个局部生效的Express中间件

- 我们可以在 `get()` 或 `post()` 方法中的URL地址参数和回调函数参数之间，写上多个局部生效的Express中间件的名称，并且使用逗号进行分隔，即可在该路由中调用多个局部生效的Express中间件，或在 `get()` 或 `post()` 方法中的URL地址参数和回调函数参数之间，写上一个数组，并且将多个局部生效的Express中间件的名称写入数组中，并且使用逗号进行分隔，即可在该路由中调用多个局部生效的Express中间件。

- 语法：

  ```javascript
  const express = require('express');
  const app = express();
  const mw1 = (req,res,next) => {
      console.log('这是第一个中间件函数');
      next();
  }
  const mw2 = (req,res,next) => {
      console.log('这是第二个中间件函数');
      next();
  }
  app.get('/',mw1,mw2,function(req,res) {
      res.send('这个路由调用了两个中间件');
  });
  app.get('/user',[mw1,mw2],function(req,res) {
      res.send('这个路由调用了两个中间件');
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示代码：

  ```javascript
  const express = require('express');
  const app = express();
  const mw1 = (req,res,next) => {
      console.log('这是第一个中间件函数');
      next();
  }
  const mw2 = (req,res,next) => {
      console.log('这是第二个中间件函数');
      next();
  }
  app.get('/',mw1,mw2,function(req,res) {
      res.send('这个路由调用了两个中间件');
  });
  app.get('/user',[mw1,mw2],function(req,res) {
      res.send('这个路由调用了两个中间件');
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![100](imgs/100.gif)

### 8.6.6Express中间件的四个注意事项

- Express中间件的四个注意事项，分别是：
  - 一定要在Express路由之前定义Express中间件。
  - 当客户端向Web服务器无论发起了什么请求，我们都可以连续调用多个Express中间件来对其进行处理。
  - 执行完Express中间件的业务代码后，不要忘记调用 `next` 函数，并且为了防止代码逻辑混乱，在调用 `next` 函数后就不要再写额外的代码。
  - 连续调用多个Express中间件时，多个Express中间件之间是共享同一份 `req` 形参（请求对象）和 `res` 形参（响应对象）的。

### 8.6.7Express中间件的分类

- Express官方把常见的Express中间件的用法，分为以下五大类：

  - 应用级别的Express中间件：

    - 将Express中间件绑定到Web服务器对象上，那么该Express中间件就叫做应用级别的Express中间件，如以下代码所示：

      ```javascript
      const express = require('express');
      const app = express();
      // 定义一个应用级别的Express中间件，并且该Express中间件还是全局生效的Express中间件。
      app.use((req,res,next) => {
          console.log('这是应用级别的Express中间件');
          next();
      });
      const mw = (req,res,next) => {
          console.log('这是应用级别的Express中间件');
          next();
      }
      // 定义一个应用级别的Express中间件，并且该Express中间件还是局部生效的Express中间件。
      app.get('/',mw,function(req,res) {
          res.send('这个路由调用了应用级别的Express中间件'');
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

  - 路由级别的Express中间件：

    - 将Express中间件绑定到路由对象上，那么该Express中间件就叫做路由级别的Express中间件，如以下代码所示：

      ```javascript
      const express = require('express');
      const app = express();
      // 创建路由对象。
      const router = express.Router();
      // 定义一个路由级别的Express中间件，并且该Express中间件还是全局生效的Express中间件。
      router.use((req,res,next) => {
          console.log('这是路由级别的Express中间件');
          next();
      });
      const mw = (req,res,next) => {
          console.log('这是路由级别的Express中间件');
          next();
      }
      // 定义一个路由级别的Express中间件，并且该Express中间件还是局部生效的Express中间件。
      router.get('/',mw,function(req,res) {
          res.send('这个路由调用了路由级别的Express中间件');
      });
      module.exports = router;
      ```

      > 注：路由对象中也有 `use()` 方法，该方法和Web服务器对象中的 `use()` 方法的作用是一样的，都是将Express中间件设置为全局生效的Express中间件。

  - 错误级别的Express中间件：

    - 当一个Express中间件函数的形参列表中，有 `err`、`req`、`res`、`next` 这四个形参名，并且这四个形参名的顺序为 `err`、`req`、`res`、`next` 时，该Express中间件就是错误级别的Express中间件，并且该Express中间件函数中的 `err` 形参中存储的是异常错误对象，`req` 形参中存储的是请求对象，`req` 形参中存储的是响应对象，`next` 形参中存储的是 `next` 函数，而且这些形参的形参名是可以修改的。

    - 错误级别的Express中间件的作用是专门用来捕获整个项目中发生的异常错误，从而防止项目遇到异常错误，就崩溃的问题。

    - 语法：

      ```javascript
      const express = require('express');
      const app = express();
      app.get('/',function(req,res) {
          // 向外抛出一个人为自定义创建的一个错误。
          throw new Error('服务器内部发生了错误');
          res.send('HOME PAGE');
      });
      // 定义一个错误级别的Express中间件。
      app.use((err,req,res,next) => {
          // 在服务器打印错误信息。
          console.log('发生了错误' + err.message);
          // 在客户端响应错误相关的内容。
          res.send('Error' + err.message);
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

    - 错误级别的Express中间件的执行流程，当我们执行代码时，如果有一个Express中间件或路由发生了异常错误，那么错误级别的Express中间件就会获取到该异常错误，然后就执行该错误级别的Express中间件函数中的代码，从而防止项目遇到异常错误，就崩溃的问题。

    - 注意点：

      - 错误级别的Express中间件，必须定义在所有的Express中间件和路由的后面，并且还要将错误级别的Express中间件设置为全局生效的Express中间件。
      - 如果有一个Express中间件或路由发生了异常错误，那么在发生异常错误后的代码都不会被执行，除了错误级别的Express中间件函数中的代码。
      - 错误级别的Express中间件函数中的 `err` 形参存储的是异常错误对象，该对象中有一个 `message` 属性，该属性存储的是异常错误信息。

    - 演示代码：

      ```javascript
      const express = require('express');
      const app = express();
      app.get('/',function(req,res) {
          throw new Error('服务器内部发生了错误');
          res.send('HOME PAGE');
      });
      app.use((err,req,res,next) => {
          console.log('发生了错误' + err.message);
          res.send('Error' + err.message);
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

    - 演示结果：

      ![101](imgs/101.gif)

  - Express内置的Express中间件：

    - 自Express的4.16.0版本开始，Express内置了三个常用的Express中间件，这极大的提高了Express项目的开发效率和体验，该三个常用的Express中间件，分别是Express模块中的 `static()` 方法、Express模块中的 `json()` 方法、Express模块中的 `urlencoded()` 方法，它们的作用分别是创建一个静态资源服务器，并将指定的文件夹中的所有文件对外开放访问、解析客户端向Web服务器发送的JSON格式的请求体数据、解析客户端向Web服务器发送的URL-encoded格式的请求体数据。

    - 语法：

      ```javascript
      const express = require('express');
      const app = express();
      // 使用Express模块中的static()方法。
      app.use(express.static('要对外开放访问的文件夹'));
      // 使用Express模块中的json()方法。
      app.use(express.json());
      // 使用Express模块中的urlencoded()方法。
      app.use(express.urlencoded({extended: false}));
      app.post('/',(req,res) => {
          console.log(req.body);
          res.send(req.body);
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

    - 要对外开放访问的文件夹的取值：用户自定义，只能是要对外开放访问的文件夹的路径。

    - 注意点：

      - 要使用Express内置的三个常用的Express中间件时，都需要将其设置成全局生效的Express中间件。

      - Express模块中的 `urlencoded()` 方法中的括号内的值是固定的不需要改变。

      - 当客户端向Web服务器发送JSON格式的请求体数据或URL-encoded格式的请求体数据时，我们可以使用请求对象中的 `body` 属性，来获取客户端向Web服务器发送的JSON格式的请求体数据或URL-encoded格式的请求体数据，但是要注意如果在使用请求对象中的 `body` 属性，来获取客户端向Web服务器发送的JSON格式的请求体数据或URL-encoded格式的请求体数据时，如果没有使用Express模块中的 `json()` 方法或Express模块中的 `urlencoded()` 方法，来解析客户端向Web服务器发送的JSON格式的请求体数据或URL-encoded格式的请求体数据，那么请求对象中的 `body` 属性中存储的是 `undefined`。

      - 我们可以使用Postman软件，来向Web服务器发送JSON格式的请求体数据，如下图所示：

        ![102](imgs/102.gif)

      - 我们可以使用Postman软件，来向Web服务器发送URL-encoded格式的请求体数据，如下图所示：

        ![103](imgs/103.gif)

    - 演示代码：

      ```javascript
      const express = require('express');
      const app = express();
      app.use(express.json());
      app.use(express.urlencoded({extended: false}));
      app.post('/',(req,res) => {
          console.log(req.body);
          res.send(req.body);
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

    - 演示结果：

      ![104](imgs/104.gif)

  - 第三方的Express中间件：

    - 非Express官方内置的，而是由第三方开发出来的Express中间件，就叫做第三方的Express中间件，在项目中我们可以按需下载并配置第三方的Express中间件，从而提高项目的开发效率，如：在Express的4.16.0版本之前，我们就经常使用body-parser这个第三方的Express中间件，来解析客户端向Web服务器发送的JSON格式的请求体数据或URL-encoded格式的请求体数据。

    - body-parser第三方的Express中间件的使用步骤：

      1. 在项目终端中执行 `npm install body-parser` 命令来下载并安装body-parser第三方的Express中间件，如下图所示：

         ![105](imgs/105.gif)

      2. 使用 `require()` 方法导入body-parser第三方的Express中间件，如下图所示：

         ![106](imgs/106.gif)

      3. 使用Web服务器对象中的 `use()` 方法，来将body-parser第三方的Express中间件中的 `json()` 方法或 `urlencoded()` 方法，设置为全局生效的Express中间件，才能解析客户端向Web服务器发送的JSON格式的请求体数据或URL-encoded格式的请求体数据，如下图所示：

         ![107](imgs/107.gif)

         > 注1：body-parser第三方的Express中间件中的 `urlencoded()` 方法中的括号内写的是 `{extended: false}`，我们不需要去修改。
         >
         > 注2：Express模块中的 `urlencoded()` 方法，就是基于body-parser这个第三方的Express中间件，来进一步封装出来的。

      4. 使用请求对象中的 `body` 属性，来获取客户端向Web服务器发送的JSON格式的请求体数据或URL-encoded格式的请求体数据，如下图所示：

         ![108](imgs/108.gif)

         > 注：在使用请求对象中的 `body` 属性，来获取客户端向Web服务器发送的JSON格式的请求体数据或URL-encoded格式的请求体数据时，如果没有使用body-parser第三方的Express中间件中的 `json()` 方法或 `urlencoded()` 方法，来解析客户端向Web服务器发送的JSON格式的请求体数据或URL-encoded格式的请求体数据，那么请求对象中的 `body` 属性中存储的是 `undefined`。

### 8.6.8自定义Express中间件

- 我们可以自定义一个类似于Express模块中的 `urlencoded()` 方法，来解析客户端向Web服务器发送的URL-encoded格式的请求体数据，步骤如下：

  1. 先定义一个Express中间件，并将该中间件设置为全局生效的Express中间件，如以下代码所示：

     ```javascript
     const express = require('express');
     const app = express();
     // 定义一个Express中间件，并将该中间件设置为全局生效的Express中间件。
     app.use((req,res,next) => {});
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

  2. 使用请求对象中的 `on()` 方法，来监听请求对象中的 `data` 事件，从而获取客户端向Web服务器发送的URL-encoded格式的请求体数据，如以下代码所示：

     ```javascript
     const express = require('express');
     const app = express();
     app.use((req,res,next) => {
         // 定义一个str字符串变量，用来专门存储客户端向Web服务器发送的URL-encoded格式的请求体数据。
         let str = '';
         // 使用请求对象中的on()方法，来监听请求对象中的data事件。
         req.on('data',(chunk) => {
             str += chunk;
         });
     });
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

     > 注：当使用请求对象中的 `on()` 方法，来监听请求对象中的 `data` 事件时，每当客户端向Web服务器发送URL-encoded格式的请求体数据，该事件就会被触发，从而将客户端向Web服务器发送的URL-encoded格式的请求体数据，传递给要执行的函数，所有要执行的函数中的第一个形参中存储的就是客户端向Web服务器发送的URL-encoded格式的请求体数据，一般我们会将这个形参的形参名设置成 `chunk`，又因为当客户端向Web服务器发送URL-encoded格式的请求体数据时，如果数据量比较大，就会无法一次性将客户端向Web服务器发送的URL-encoded格式的请求体数据，传递给要执行的函数，所以客户端会将客户端向Web服务器发送的URL-encoded格式的请求体数据进行分割，然后分批将这些分割的数据传递给Web服务器，所以会多次触发请求对象中的 `data` 事件，而每一次触发请求对象中的 `data` 事件时，传递给要执行函数的数据只是完整数据的一部分，所以需要将这些数据进行拼接，从而获得完整的数据。

  3. 当获取完客户端向Web服务器发送的URL-encoded格式的请求体数据时，就会自动触发请求对象中的 `end` 事件，因此我们可以使用请求对象中的 `on()` 方法，来监听请求对象中的 `end` 事件，如果触发了该事件就证明已经获取完了客户端向Web服务器发送的URL-encoded格式的请求体数据，如以下代码所示：

     ```javascript
     const express = require('express');
     const app = express();
     app.use((req,res,next) => {
         let str = '';
         req.on('data',(chunk) => {
             str += chunk;
         });
         // 使用请求对象中的on()方法，来监听请求对象中的end事件。
         req.on('end',() => {
             console.log(str);
         });
     });
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

  4. 因为Node.js中内置了一个querystring模块，该模块是专门用来处理查询字符串的，所以我们可以通过使用该模块中的 `parse()` 方法，就可以轻松的把客户端向Web服务器发送的URL-encoded格式的请求体数据，解析成对象的格式，如以下代码所示：

     ```javascript
     const express = require('express');
     const app = express();
     // 导入Node.js内置的querystring模块。
     const querystring = require('querystring');
     app.use((req,res,next) => {
         let str = '';
         req.on('data',(chunk) => {
             str += chunk;
         });
         req.on('end',() => {
             // 使用querystring模块中的parse()方法，来将客户端向Web服务器发送的URL-encoded格式的请求体数据，解析成对象的格式。
             const body = querystring.parse(str);
             console.log(body);
         });
     });
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

     > 注：querystring模块中的 `parse()` 方法中的括号内写的就是客户端向Web服务器发送的URL-encoded格式的请求体数据，这样就可以通过使用querystring模块中的 `parse()` 方法，来将客户端向Web服务器发送的URL-encoded格式的请求体数据，解析成对象的格式。

  5. 因为上游的Express中间件和下游的Express中间件及路由之间，都是共享同一份请求对象和响应对象的，所以我们可以将通过使用querystring模块中的 `parse()` 方法，将客户端向Web服务器发送的URL-encoded格式的请求体数据，解析成对象的格式，将其对象挂载到请求对象中，一般都是将其挂载到请求对象中的自定义的 `body` 属性中，从而供下游使用，如以下代码所示：

     ```javascript
     const express = require('express');
     const app = express();
     const querystring = require('querystring');
     app.use((req,res,next) => {
         let str = '';
         req.on('data',(chunk) => {
             str += chunk;
         });
         req.on('end',() => {
             const body = querystring.parse(str);
             console.log(body);
             // 通过使用querystring模块中的parse()方法，将客户端向Web服务器发送的URL-encoded格式的请求体数据，解析成对象的格式，将其对象挂载到请求对象中的自定义的body属性中。
             req.body = body;
             next();
         });
     });
     app.post('/',(req,res) => {
         console.log(req.body);
     });
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

     > 注：因为我们需要将通过使用querystring模块中的 `parse()` 方法，将客户端向Web服务器发送的URL-encoded格式的请求体数据，解析成对象的格式，将其对象挂载到请求对象中的自定义的 `body` 属性中后，才能将请求对象传递给下一个Express中间件或路由，所以需要在监听请求对象中的 `end` 事件的要执行的函数中调用 `next` 函数。

  6. 为了优化代码的结构，我们还可以把自定义的Express中间件，封装为独立的模块，如下图所示：

     ![109](imgs/109.gif)

     > 注：上图中我们导入自定义的Express中间件时，使用了Web服务器对象中的 `use()` 方法将该Express中间件设置成了全局生效的Express中间件。

## 8.7使用Express编写APi接口

- 使用Express编写APi接口的步骤如下：

  1. 创建一个JavaScript文件，该文件中的代码是创建基本的Web服务器，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 启动Web服务器。
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

  2. 创建一个JavaScript文件，该文件中的代码是创建模块化的Express路由，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化路由对象。
     const router = express.Router();
     // 向外共享路由对象。
     module.exports = router;
     ```

  3. 在模块化的Express路由的JavaScript文件中，编写GET接口的代码，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化路由对象。
     const router = express.Router();
     router.get('/get',(req,res) => {
         // 通过请求对象中query属性来获取客户端向Web服务器发起GET请求时，请求的URL地址中的查询字符串。
         const query = req.query;
         // 当客户端向Web服务器发起GET请求时，Web服务器会向客户端发送处理的结果。
         res.send({
             // 状态，0表示请求成功，1表示请求失败。
             status: 0,
             // 状态描述。
             message: 'GET请求成功',
             // Web服务器向客户端发送处理的结果的具体的数据。
             data: query
         });
     });
     // 向外共享路由对象。
     module.exports = router;
     ```

  4. 在模块化的Express路由的JavaScript文件中，编写POST接口的代码，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化路由对象。
     const router = express.Router();
     router.get('/get',(req,res) => {
         // 通过请求对象中query属性来获取客户端向Web服务器发起GET请求时，请求的URL地址中的查询字符串。
         const query = req.query;
         // 当客户端向Web服务器发起GET请求时，Web服务器向客户端发送处理的结果。
         res.send({
             // 状态，0表示请求成功，1表示请求失败。
             status: 0,
             // 状态描述。
             message: 'GET请求成功',
             // Web服务器向客户端发送处理的结果的具体的数据。
             data: query
         });
     });
     router.post('/post',(req,res) => {
         // 通过请求对象中body属性来获取客户端向Web服务器发起POST请求时，客户端向Web服务器发送的请求体数据。
         const body = req.body;
         // 当客户端向Web服务器发起POST请求时，Web服务器会向客户端发送处理的结果。
         res.send({
             // 状态，0表示请求成功，1表示请求失败。
             status: 0,
             // 状态描述。
             message: 'POST请求成功',
             // Web服务器向客户端发送处理的结果的具体的数据。
             data: body
         })
     });
     // 向外共享路由对象。
     module.exports = router;
     ```

  5. 在创建基本的Web服务器的JavaScript文件中，导入模块化的Express路由的JavaScript文件，并且使用Web服务器对象中的 `use()` 方法来注册导入的Express路由模块对应的JavaScript文件，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入模块化的Express路由的JavaScript文件。
     const api = require('./js/30-使用Express编写APi接口');
     // 使用Web服务器对象中的use()方法来注册导入的Express路由模块对应的JavaScript文件。
     app.use('/api',api);
     // 启动Web服务器。
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

  6. 我们还要在创建基本的Web服务器的JavaScript文件中，使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入模块化的Express路由的JavaScript文件。
     const api = require('./js/30-使用Express编写APi接口');
     // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
     app.use(express.urlencoded({extended: false}));
     // 使用Web服务器对象中的use()方法来注册导入的Express路由模块对应的JavaScript文件。
     app.use('/api',api);
     // 启动Web服务器。
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

  7. 在Node.js环境中，运行创建基本的Web服务器的JavaScript文件，如下图所示：

     ![110](imgs/110.gif)

## 8.8CORS跨域资源共享

### 8.8.1接口跨域问题

- 当我们使用了Express编写APi接口后，会存在一个很严重的问题，那就是不支持跨域请求，如以下代码和图所示：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <button id="get">发起GET请求</button>
      <button id="post">发起POST请求</button>
      <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
      <script>
          $('#get').on('click',() => {
              $.ajax({
                  type: 'GET',
                  url: 'http://127.0.0.1/api/get',
                  data: {name: '李四',age: 12},
                  success: (res) => {
                      console.log(res);
                  }
              });
          });
          $('#post').on('click',() => {
              $.ajax({
                  type: 'POST',
                  url: 'http://127.0.0.1/api/post',
                  data: {name: '张三',age: 14},
                  success: (res) => {
                      console.log(res);
                  }
              });
          });
      </script>
  </body>
  </html>
  ```

  > 注1：以上代码中引入的jQuery文件是在线版的，在使用时，需要电脑保持联网状态，它和本地引入的jQuery文件的作用是一样的，它们的区别在于本地引入的jQuery文件，是需要先下载jQuery文件到项目文件夹中，然后才能在HMTL页面中引入，而在线版的jQuery文件是不需要下载的，只需要引入在线版的jQuery文件的网址即可，但是需要电脑保持联网状态，而本地引入的jQuery文件是不需要电脑保持联网状态的，它们的引入方式都是一样的，都是使用 `<script>` 标签中的 `src` 属性来引入。
  >
  > 注2：在HTML页面中引入在线版的jQuery文件，如下图所示：
  >
  > ![111](imgs/111.gif)

  ![112](imgs/112.gif)

- 注意点：解决接口跨域问题的方案主要有以下两种：
  - CORS：主流的解决方案，推荐使用。
  - JSONP：有缺陷的解决方案，只支持GET请求。

### 8.8.2使用CORS中间件来解决接口跨域问题

- CORS是一个第三方的Express中间件，我们可以通过安装和配置CORS中间件，来解决接口跨域问题。

- 使用CORS中间件来解决接口跨域问题的步骤如下：

  1. 在项目中打开终端，并在终端中使用 `npm i cors` 命令，来下载并安装CORS中间件，如下图所示：

     ![113](imgs/113.gif)

  2. 在创建基本的Web服务器的JavaScript文件中，导入CORS中间件，并且使用Web服务器对象中的 `use()` 方法，来将CORS中间件设置成全局生效的Express中间件，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入模块化的Express路由的JavaScript文件。
     const api = require('./js/30-使用Express编写APi接口');
     // 导入CORS中间件。
     const cors = require('cors');
     // 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
     app.use(cors());
     // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
     app.use(express.urlencoded({extended: false}));
     // 使用Web服务器对象中的use()方法来注册导入的Express路由模块对应的JavaScript文件。
     app.use('/api',api);
     // 启动Web服务器。
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

     > 注：使用Web服务器对象中的 `use()` 方法，来将CORS中间件设置成全局生效的Express中间件时，一定要将其代码写到Express路由的前面。

  3. 在Node.js环境中，运行创建基本的Web服务器的JavaScript文件，如下图所示：

     ![114](imgs/114.gif)

### 8.8.3什么是CORS

- CORS（Cross-Origin Resource Sharing，跨域资源共享），它是由一系列HTTP响应头组成的，这些HTTP响应头决定了浏览器是否阻止前端JavaScript代码跨域获取资源，因为浏览器的同源安全策略，默认会阻止HTML网页跨域获取资源，但如果接口服务器配置了CORS相关的HTTP响应头，就可以解除浏览器端的跨域访问限制，如下图所示：

  ![115](imgs/115.png)

### 8.8.4CORS中间件的注意事项

- CORS中间件的注意事项，如下所示：
  - CORS中间件主要是在服务器端进行配置的，客户端浏览器无须做任何额外的配置，即可请求开启了CORS中间件的APi接口。
  - CORS在浏览器中有兼容性，它只有支持XMLHttpRequest Level2的浏览器，才能正常访问开启了CORS中间件的服务端的APi接口，如：支持XMLHttpRequest Level2的浏览器有 IE10+、Chrome4+、FireFox3.5+。

### 8.8.5CORS中间件的响应头部

- CORS中间件的响应头部，有以下几种字段：

  - `Access-Control-Allow-Origin` 字段：

    - CORS中间件的响应头部，可以携带一个 `Access-Control-Allow-Origin` 字段，该字段是用于设置只允许那个域名可以请求服务端的APi接口。

    - 语法：

      ```javascript
      const express = require('express');
      const app = express();
      const cors = require('cors');
      app.use(cors());
      app.use(express.urlencoded({extended: false}));
      app.get('/get',(req,res) => {
          // CORS中间件的响应头部，可以携带一个Access-Control-Allow-Origin字段。
          res.setHeader('Access-Control-Allow-Origin','域名');
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

      > 注：我们使用响应对象中的 `setHeader()` 方法，来让CORS中间件的响应头部，携带一个 `Access-Control-Allow-Origin` 字段。

    - 域名的取值为：用户自定义，只能是域名或 `*`，如果是 `*` 就表示所有的域名都可以请求服务端的APi接口。

  - `Access-Control-Allow-Headers` 字段：

    - CORS中间件的响应头部，可以携带一个 `Access-Control-Allow-Headers` 字段，该字段是用于对额外的请求头进行声明的，因为默认情况下，CORS中间件，只支持客户端向Web服务器发送 `Accept`、`Accept-Language`、`Content-Language`、`DPR`、`Downlink`、`Save-Data`、`Viewport-Width`、`Width`、`Content-Type` 这9个请求头，如果客户端向Web服务器发送了除这9个外的请求头，那么会请求失败，除非使用 `Access-Control-Allow-Headers` 字段来对这额外的请求头进行声明。

      > 注：`Content-Type` 请求头的取值，仅限于 `text/plain`、`multipart/form-data`、`application/x-www-form-urlencoded` 这三者之一。

    - 语法：

      ```javascript
      const express = require('express');
      const app = express();
      const cors = require('cors');
      app.use(cors());
      app.use(express.urlencoded({extended: false}));
      app.get('/get',(req,res) => {
          // CORS中间件的响应头部，可以携带一个Access-Control-Allow-Headers字段。
          res.setHeader('Access-Control-Allow-Headers','额外的请求头1','额外的请求头2',···,'额外的请求头n');
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

      > 注：我们使用响应对象中的 `setHeader()` 方法，来让CORS中间件的响应头部，携带一个 `Access-Control-Allow-Headers` 字段。

    - 额外的请求头的取值为：用户自定义，只能是请求头。

  - `Access-Control-Allow-Methods` 字段：

    - CORS中间件的响应头部，可以携带一个 `Access-Control-Allow-Methods` 字段，该字段是用于设置客户端向Web服务器发起请求时，所允许使用的HTTP方法，因为默认情况下，CORS中间件，只支持客户端向Web服务器发起GET、POST、HEAD请求方式的请求，如果希望客户端能向Web服务器发起PUT、DELETE等请求方式的请求，则需要通过 `Access-Control-Allow-Methods` 字段，来设置客户端向Web服务器发起请求时，所允许使用的HTTP方法。

    - 语法：

      ```javascript
      const express = require('express');
      const app = express();
      const cors = require('cors');
      app.use(cors());
      app.use(express.urlencoded({extended: false}));
      app.get('/get',(req,res) => {
          // CORS中间件的响应头部，可以携带一个Access-Control-Allow-Methods字段。
          res.setHeader('Access-Control-Allow-Headers','请求方式1','请求方式2',···,'请求方式n');
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

      > 注：我们使用响应对象中的 `setHeader()` 方法，来让CORS中间件的响应头部，携带一个 `Access-Control-Allow-Methods` 字段。

    - 请求方式的取值：用户自定义，只能是GET、POST、PUT、DELETE等。

    - 注意点：如果希望客户端能向Web服务器发起任何请求方式的请求，则使用以下代码：

      ```javascript
      const express = require('express');
      const app = express();
      const cors = require('cors');
      app.use(cors());
      app.use(express.urlencoded({extended: false}));
      app.get('/get',(req,res) => {
          // CORS中间件的响应头部，可以携带一个Access-Control-Allow-Methods字段。
          res.setHeader('Access-Control-Allow-Headers',*);
      });
      app.listen(80,() => {
          console.log('http server runing at http://127.0.0.1');
      });
      ```

### 8.8.6CORS中间件请求的分类

- 当客户端向Web服务器，请求设置了CORS中间件的接口时，我们可以根据客户端发起的请求方式和请求头的不同，将客户端发起的请求，分为两大类，分别是：

  - 简单请求：
    - 简单请求就是当客户端向Web服务器，请求设置了CORS中间件的接口时，客户端发起的请求的请求方式必须是GET、POST、HEAD三者之一，并且请求头只能是 `Accept`、无自定义头部字段、`Accept-Language`、`Content-Language`、`DPR`、`Downlink`、`Save-Data`、`Viewport-Width`、`Width`、`Content-Type` 这些头部字段。

  - 预检请求：
    - 预检请求就是当浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求就称为预检请求，服务器成功响应预检请求后，才会发送真正的请求，并且携带真实的数据。
    - 当客户端向Web服务器，请求设置了CORS中间件的接口时，只要符合以下任何一个条件，浏览器都会进行预检请求：
      - 客户端发起的请求的请求方式是GET、POST、HEAD三者之外的请求方式。
      - 客户端发起的请求的请求头中包含了自定义的头部字段。
      - 客户端向Web服务器发送了application/json格式的数据。

- 注意点：简单请求和预检请求的区别在于，简单请求的特点是客户端与服务器之间只会发生一次请求，预检请求的特点是客户端与服务器之间会发生两次请求，只有在浏览器发起OPTION预检请求成功后，浏览器才会发起真正的请求。

## 8.9JSONP接口

### 8.9.1JSONP的概念与特点

- JSONP英文全称为JSON with Padding，它是JSON的一种使用模式，可用于解决主流浏览器的跨域数据访问的问题，在HTML页面中通过使用 `<script>` 标签中的 `src` 属性，来请求服务器上的数据时，服务器会返回一个函数的调用，这种请求数据的方式就叫做JSONP。
- JSONP的特点：
  - JSONP不属于真正的Ajax请求，因为它没有使用XMLHttpRequest这个对象。
  - JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求。

### 8.9.2创建JSONP接口

- 创建JSONP接口的步骤如下：

  1. 创建一个JavaScript文件，该文件中的代码是创建基本的Web服务器，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 启动Web服务器。
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

  2. 在创建基本的Web服务器的JavaScript文件中，导入CORS中间件，并且使用Web服务器对象中的 `use()` 方法，来将CORS中间件设置成全局生效的Express中间件，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入CORS中间件。
     const cors = require('cors');
     // 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
     app.use(cors());
     // 启动Web服务器。
     app.listen(80,() => {
         console.log('http server runing at http://127.0.0.1');
     });
     ```

  3. 在创建基本的Web服务器的JavaScript文件中，编写JSONP接口，JSONP接口的编写步骤如下：

     1. 因为JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求，所以我们要监听客户端发起的GET请求，如以下代码所示：

        ```javascript
        // 导入Express模块。
        const express = require('express');
        // 实例化Web服务器对象。
        const app = express();
        // 编写JSONP接口。
        // 因为JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求，所以我们要监听客户端发起的GET请求。
        app.get('/api/jsonp',(req,res) => {});
        // 导入CORS中间件。
        const cors = require('cors');
        // 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
        app.use(cors());
        // 启动Web服务器。
        app.listen(80,() => {
            console.log('http server runing at http://127.0.0.1');
        });
        ```

        > 注：如果在创建基本的Web服务器的JavaScript文件中已经配置了CORS中间件，那么为了防止冲突，JSONP接口的代码必须写在配置CORS中间件代码的前面，否则JSONP接口就会被处理成开启了CORS中间件的接口。

     2. 通过请求对象中的 `query` 属性中的 `callback` 属性，来获取客户端向Web服务器发送的回调函数的名字，如以下代码所示：

        ```javascript
        // 导入Express模块。
        const express = require('express');
        // 实例化Web服务器对象。
        const app = express();
        // 编写JSONP接口。
        // 因为JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求，所以我们要监听客户端发起的GET请求。
        app.get('/api/jsonp',(req,res) => {
            // 通过请求对象中的query属性中的callback属性，来获取客户端向Web服务器发送的回调函数的名字。
            const funcName = req.query.callback;
        });
        // 导入CORS中间件。
        const cors = require('cors');
        // 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
        app.use(cors());
        // 启动Web服务器。
        app.listen(80,() => {
            console.log('http server runing at http://127.0.0.1');
        });
        ```

     3. 获取服务器要通过JSONP形式发送给客户端的数据，如以下代码所示：

        ```javascript
        // 导入Express模块。
        const express = require('express');
        // 实例化Web服务器对象。
        const app = express();
        // 编写JSONP接口。
        // 因为JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求，所以我们要监听客户端发起的GET请求。
        app.get('/api/jsonp',(req,res) => {
            // 通过请求对象中的query属性中的callback属性，来获取客户端向Web服务器发送的回调函数的名字。
            const funcName = req.query.callback;
            // 获取服务器要通过JSONP形式发送给客户端的数据。
            const data = {name: 'zs',age: 34}
        });
        // 导入CORS中间件。
        const cors = require('cors');
        // 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
        app.use(cors());
        // 启动Web服务器。
        app.listen(80,() => {
            console.log('http server runing at http://127.0.0.1');
        });
        ```

     4. 拼接出一个函数调用的字符串，如以下代码所示：

        ```javascript
        // 导入Express模块。
        const express = require('express');
        // 实例化Web服务器对象。
        const app = express();
        // 编写JSONP接口。
        // 因为JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求，所以我们要监听客户端发起的GET请求。
        app.get('/api/jsonp',(req,res) => {
            // 通过请求对象中的query属性中的callback属性，来获取客户端向Web服务器发送的回调函数的名字。
            const funcName = req.query.callback;
            // 获取服务器要通过JSONP形式发送给客户端的数据。
            const data = {name: 'zs',age: 34}
            // 拼接出一个函数调用的字符串。
            const scriptStr = `${funcName}(${JSON.stringify(data)})`;
        });
        // 导入CORS中间件。
        const cors = require('cors');
        // 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
        app.use(cors());
        // 启动Web服务器。
        app.listen(80,() => {
            console.log('http server runing at http://127.0.0.1');
        });
        ```

        > 注：因为服务器要通过JSONP形式发送给客户端的数据是对象形式的，所以我们要把该数据转换成JSON格式的字符串。

     5. 把拼接出的函数调用的字符串，响应给客户端的 `<script>` 标签进行解析执行，如以下代码所示：

        ```javascript
        // 导入Express模块。
        const express = require('express');
        // 实例化Web服务器对象。
        const app = express();
        // 编写JSONP接口。
        // 因为JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求，所以我们要监听客户端发起的GET请求。
        app.get('/api/jsonp',(req,res) => {
            // 通过请求对象中的query属性中的callback属性，来获取客户端向Web服务器发送的回调函数的名字。
            const funcName = req.query.callback;
            // 获取服务器要通过JSONP形式发送给客户端的数据。
            const data = {name: 'zs',age: 34}
            // 拼接出一个函数调用的字符串。
            const scriptStr = `${funcName}(${JSON.stringify(data)})`;
            // 把拼接出的函数调用的字符串，响应给客户端的<script>标签进行解析执行。
            res.send(scriptStr);
        });
        // 导入CORS中间件。
        const cors = require('cors');
        // 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
        app.use(cors());
        // 启动Web服务器。
        app.listen(80,() => {
            console.log('http server runing at http://127.0.0.1');
        });
        ```

  4. 创建一个HMTL页面，来请求JSONP接口，如以下代码所示：

     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>
     <body>
         <button id="jsonp">请求JSONP接口</button>
         <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
         <script>
             $('#jsonp').on('click',() => {
                 $.ajax({
                     url: 'http://127.0.0.1/api/jsonp',
                     dataType: 'jsonp',
                     success: res => {
                         console.log(res);
                     }
                 });
             });
         </script>
     </body>
     </html>
     ```

  5. 在Node.js环境中，运行创建基本的Web服务器的JavaScript文件，如以下图所示：

     ![116](imgs/116.gif)

# 9.数据库与身份认证

## 9.1数据库的基本概念

### 9.1.1什么是数据库

- 数据库（database）是用来组织、存储和管理数据的仓库，因为当今世界是一个充满着数据的互联网世界，充斥着大量的数据，其中数据的来源有很多，如：出行记录、消费记录、浏览的网页的历时记录、发送的消息等这些都是数据，并且除了文本类型的数据外，图像、音乐、声音都是数据，我们为了方便管理互联网世界中的数据，于是就有了数据库管理系统的概念，我们简称数据库，用户可以对数据库中的数据进行新增、查询、更新、删除等操作。

### 9.1.2常用的数据库的分类

- 市面上的数据库有很多种，最常见的数据库有如下几个：
  - MySQL数据库：是目前使用最广泛、流行度最高的开源免费的数据库，它分为免费版（Community）和收费版（Enterprise）。
  - Oracle数据库：是需要收费的。
  - SQL Server数据库：是需要收费的。
  - Mongodb数据库：它分为免费版（Community）和收费版（Enterprise）。
- 注意点：MySQL、Oracle、SQL Server都属于传统型数据库，我们又叫做关系型数据库或SQL数据库，这三者的设计理念是相同的，用法也都比较类似，而Mongodb是属于新型的数据库，我们又叫做非关系型数据库或NoSQL数据库，它在一定程度上弥补了传统型数据库的缺陷。

### 9.1.3传统型数据库的数据组织结构

- 传统型数据库的数据组织结构，与Excel的数据组织结构比较类似，因此我们可以对比着Excel来了解和学习传统型数据库的数据组织结构。

  > 注：数据组织结构指的就是数据以什么样的结构进行存储的。

- Excel的数据组织结构：

  - 在每个Excel中，数据的组织结构由工作簿、工作表、数据行、列这4大部分组成，如下图所示：

    ![117](imgs/117.png)

- 传统数据库的数据组织结构：

  - 在传统型数据库中，数据的组织结构由数据库（database）、数据表（table）、数据行（row）、字段（field）这4大部分组成，如下图所示：

    ![118](imgs/118.png)

  - 在实际开发中数据库、数据表、数据行、字段的关系，如下所示：
    - 每个项目都应该对应着一个独立的数据库。
    - 不同的数据，要存储到数据库中不同的表中，如：用户数据存储到数据库中的Users表中，图书数据存储到数据库中的Books表中。
    - 数据库中的每一个表中具体存储那些信息，是由字段来决定的，如：我们可以为数据库中的Users表设计 `id`、`username`、`password` 这3个字段。
    - 数据库中的每一个表中的每一行都代表着每一条具体的数据。

## 9.2安装MySQL数据库

- 对于我们开发人员来说，只需要安装MySQL Server和MySQL Workbench这两个软件，就能满足开发的需要了。

  > 注1：MySQL Server是专门用来提供数据存储和服务的软件。
  >
  > 注2：MySQL Workbench是可视化的MySQL管理工具，通过它可以方便的操作存储在MySQL Server中的数据。

- 在Windows系统中安装MySQL数据库的步骤如下：

  1. 在MySQL数据库官网中下载MySQL数据库软件安装包，如下图所示：

     ![119](imgs/119.gif)

  2. 鼠标双击MySQL数据库软件安装包，安装MySQL数据库，如下图所示：

     ![120](imgs/120.gif)

## 9.3MySQL数据库的基本使用

### 9.3.1连接MySQL数据库

- 连接MySQL数据库，如下图所示：

  ![121](imgs/121.gif)

### 9.3.2MySQL数据库界面介绍

- MySQL数据库界面介绍，如下图所示：

  ![122](imgs/122.gif)

### 9.3.3创建数据库和数据表

- 创建数据库和数据表的步骤如下：

  1. 创建数据库，如下图所示：

     ![123](imgs/123.gif)

  2. 创建数据表，如下图所示：

     ![124](imgs/124.gif)

     > 注1：上图中的数据表的字段的数据类型的详细信息，如下所示：
     >
     > - `INT`：表示该字段的数据类型为整数。
     > - `VARCHAR(45)`：表示该字段的数据类型为字符串型，其中括号内的数字是用来设置该字段的最大字符数为多少。
     > - `TINYINT(1)`：表示该字段的数据类型为布尔型。
     >
     > 注2：上图中的数据表的字段的特殊标识的详细信息，如下所示：
     >
     > - `PK`（Primary Key）：表示该字段是主键，该字段是该数据表的唯一标识。
     > - `NN`（Not Null）：表示该字段的值不允许为空。
     > - `UQ`（Unique）：表示该字段的值只能是唯一的。
     > - `AI`（Auto Increment）：表示该字段的值是自动增长的。
     > - `Default/Expression`：给该字段设置默认值。

  3. 往数据表中写入数据，如下图所示：

     ![125](imgs/125.gif)

## 9.4使用SQL管理MySQL数据库

### 9.4.1什么是SQL

- SQL（英文全称：Structured Query Language）是结构化查询语言，它是专门用来访问和处理数据库的编程语言，能够让我们以编程的形式，来操作数据库里的数据。

  > 注1：SQL是一门数据库编程语言。
  >
  > 注2：使用SQL语言编写出来的代码，就叫做SQL语句。
  >
  > 注3：SQL语言只能在关系型数据库中使用，如：MySQL、Oracle、SQL Server，而非关系型数据库，如：Mongodb就不支持SQL语言。

### 9.4.2SQL能做什么

- SQL能从数据库中查询数据、能向数据库中插入新的数据、能更新数据库中的数据、能删除数据库中的数据、能创建新的数据库、能在数据库中创建新的数据表、能在数据库中创建存储过程和视图等等。

### 9.4.3SQL语句

#### 9.4.3.1SQL语句之查询语句

- SQL语句中的查询语句，是使用 `SELECT` 关键字来查询的，所以SQL语句中的查询语句也称为 `SELECT` 语句，该语句的作用是用于从数据表中查询数据，并将查询结果存储在一个结果表中，该结果表也称为结果集。

- 语法：

  ```sql
  select 列名1,列名2,···,列名n from 数据库的名称.该数据库中的数据表的名称
  ```

  > 注：`select` 的中文意思是查询的意思，`from` 的中文意思是来自的意思。

- 取值：

  |                          | 取值                                       |
  | ------------------------ | ------------------------------------------ |
  | 列名                     | 用户自定义，只能是数据表的字段的名称或 `*` |
  | 数据库的名称             | 用户自定义，只能是数据库的名称             |
  | 该数据库中的数据表的名称 | 用户自定义，只能是该数据库中的数据表的名称 |

- `SELECT` 语句的执行流程：先找到 `from` 关键字后面的数据表，当找到 `from` 关键字后面的数据表后，就在该数据表中查找 `select` 关键字后面的列名，如果该数据表中有 `select` 关键字后面的列名就将其显示到结果集中，如果没有就在结果集中显示空。

- 注意点：

  - SQL语句中的关键字对大小写不敏感，如：`SELECT` 等价于 `select`，`FROM` 等价于 `from`。

  - SQL语句中的注释是 `--`。

  - 如果 `SELECT` 语句中的列名为 `*`，那么就表示查询 `from` 关键字后面的数据表中的所有的字段，如下图所示：

    ![126](imgs/126.gif)

- 演示代码：

  ```sql
  select username,password from my_db_01.users
  ```

- 演示结果：

  ![127](imgs/127.gif)

#### 9.4.3.2SQL语句之插入语句

- SQL语句中的插入语句，是使用 `INSERT` 关键字来插入的，所以SQL语句中的插入语句也称为 `INSERT` 语句，该语句的作用是用于向数据表中插入一行数据。

- 语法：

  ```sql
  insert into 数据库的名称.该数据库中的数据表的名称 (列名1,列名2,···,列名n) values (值1,值2,···,值n) 
  ```

- 取值：

  |                          | 取值                                       |
  | ------------------------ | ------------------------------------------ |
  | 列名                     | 用户自定义，只能是数据表的字段的名称       |
  | 值                       | 用户自定义，只能是数字、字符串等           |
  | 数据库的名称             | 用户自定义，只能是数据库的名称             |
  | 该数据库中的数据表的名称 | 用户自定义，只能是该数据库中的数据表的名称 |

- `INSERT` 语句的执行流程：先找到 `into` 关键字后面的数据表，当找到 `into` 关键字后面的数据表后，就往该数据表中的 `INSERT` 语句中所设置的列名中插入 `values` 关键字后面的值。

- 注意点：

  - `INSERT` 语句中的列名和值是要一一对应的。
  - `INSERT` 语句一次只能插入一行数据。

- 演示代码：

  ```sql
  insert into my_db_01.users (username,password) values ('ww','abcdef')
  ```

- 演示结果：

  ![128](imgs/128.gif)

#### 9.4.3.3SQL语句之更新语句

- SQL语句中的更新语句，是使用 `UPDATE` 关键字来更新的，所以SQL语句中的更新语句也称为 `UPDATE` 语句，该语句的作用是用于更新数据表中的数据。

- 语法：

  ```sql
  update 数据库的名称.该数据库中的数据表的名称 set 列名1=值1,列名2=值2,···,列名n=值n
  ```

- 取值：

  |                          | 取值                                       |
  | ------------------------ | ------------------------------------------ |
  | 列名                     | 用户自定义，只能是数据表的字段的名称       |
  | 值                       | 用户自定义，只能是数字、字符串等           |
  | 数据库的名称             | 用户自定义，只能是数据库的名称             |
  | 该数据库中的数据表的名称 | 用户自定义，只能是该数据库中的数据表的名称 |

- `UPDATE` 语句的执行流程：先找到 `update` 关键字后面的数据表，当找到 `update` 关键字后面的数据表后，就会把该数据表中的 `UPDATE` 语句中的 `set` 关键字后所设置的列名中的所有的值，都更新成指定的值。

- 注意点：如果 `UPDATE` 语句，没有设置 `where` 关键字，那么 `UPDATE` 语句会把 `UPDATE` 语句中的 `set` 关键字后所设置的列名中的所有的值，都更新成指定的值，所以如果只想更新数据表中的一行数据，那么我们可以使用 `where` 关键字，`where` 关键字可以指定 `UPDATE` 语句更新数据表中的某一行数据，如以下代码所示：

  ```sql
  update my_db_01.users set password='123' where id=4
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表中的 `id` 等于4的一行数据，然后再将该行数据中的 `password` 字段中的数据修改成123。

- 演示代码：

  ```sql
  update my_db_01.users set password='123' where id=4
  ```

- 演示结果：

  ![129](imgs/129.gif)

#### 9.4.3.4SQL语句之删除语句

- SQL语句中的删除语句，是使用 `DELETE` 关键字来删除的，所以SQL语句中的删除语句也称为 `DELETE` 语句，该语句的作用是用于删除数据表中的数据。

- 语法：

  ```sql
  delete from 数据库的名称.该数据库中的数据表的名称
  ```

- 取值：

  |                          | 取值                                       |
  | ------------------------ | ------------------------------------------ |
  | 数据库的名称             | 用户自定义，只能是数据库的名称             |
  | 该数据库中的数据表的名称 | 用户自定义，只能是该数据库中的数据表的名称 |

- `DELETE` 语句的执行流程：先找到 `from` 关键字后面的数据表，当找到 `from` 关键字后面的数据表后，就会把该数据表中的所有数据删除。

- 注意点：如果 `DELETE` 语句，没有设置 `where` 关键字，那么 `DELETE` 语句会把 `DELETE` 语句中的 `from` 关键字后面的数据表中的所有数据都删除，所以如果只想删除数据表中的一行数据，那么我们可以使用 `where` 关键字，`where` 关键字可以指定 `DELETE` 语句删除数据表中的某一行数据，如以下代码所示：

  ```sql
  delete from my_db_01.users where id=4
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表中的 `id` 等于4的一行数据，然后再将该行数据删除。

- 演示代码：

  ```sql
  delete from my_db_01.users where id=4
  ```

- 演示结果：

  ![130](imgs/130.gif)

#### 9.4.3.5SQL语句之 `WHERE` 子句

- SQL语句中的 `WHERE` 子句的作用是用于限定 `SELECT` 语句、`UPDATE` 语句、`DELETE`语句的选择标准，如以下代码所示：

  ```sql
  select * from my_db_01.users where id=4
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表中的 `id` 等于4的一行数据，然后再将该行数据显示在结果集中。

  ```sql
  update my_db_01.users set password='123' where id=4
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表中的 `id` 等于4的一行数据，然后再将该行数据中的 `password` 字段中的数据修改成123。

  ```sql
  delete from my_db_01.users where id=4
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表中的 `id` 等于4的一行数据，然后再将该行数据删除。

- 语法：

  ```sql
  where 列名 运算符 值
  ```

- 取值：

  |        | 取值                                 |
  | ------ | ------------------------------------ |
  | 列名   | 用户自定义，只能是数据表的字段的名称 |
  | 值     | 用户自定义，只能是数字、字符串等     |
  | 运算符 | 用户自定义，只能是运算符             |

  > 注：运算符，如下表所示：
  >
  > | 运算符  | 说明         |
  > | :-----: | ------------ |
  > |    =    | 等于         |
  > | <>或!=  | 不等于       |
  > |    >    | 大于         |
  > |    <    | 小于         |
  > |   >=    | 大于等于     |
  > |   <=    | 小于等于     |
  > | BETWEEN | 在某个范围内 |
  > |  LIKE   | 模糊搜索     |

- 注意点：我们还可以在 `WHERE` 子句中使用 `AND` 和 `OR` 逻辑运算符，来将多个条件结合起来，其中 `AND` 逻辑运算符等价于JavaScript中的 `&&` 逻辑运算符，`OR` 逻辑运算符等价于JavaScript中的 `||` 运算符，如以下代码所示：

  ```sql
  delete from my_db_01.users where id=4 and status=0
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表中的 `id` 等于4并且 `status` 等于0的一行数据，然后再将该行数据删除。

  ```sql
  delete from my_db_01.users where id=4 or status=0
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表中的 `id` 等于4或者 `status` 等于0的一行或多行的数据，然后再将这些数据删除。

- 演示代码：

  ```sql
  delete from my_db_01.users where id>=1
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表中的 `id` 大于等于1的一行或多行的数据，然后再将这些数据删除。

- 演示结果：

  ![131](imgs/131.gif)

#### 9.4.3.6SQL语句之 `ORDER BY` 子句

- SQL语句中的 `ORDER BY` 子句的作用是用于根据指定的列对结果集进行排序，如以下代码所示：

  ```sql
  select * from my_db_01.users order by status asc
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表，然后再将该数据表中的所有数据显示在结果集中，并且结果集中的所有数据都会根据 `status` 字段来进行升序排序。

  ```sql
  select * from my_db_01.users order by status desc
  ```

  > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表，然后再将该数据表中的所有数据显示在结果集中，并且结果集中的所有数据都会根据 `status` 字段来进行降序排序。

- 语法：

  ```sql
  order by 列名 升序还是降序
  ```

- 取值：

  |              | 取值                                                         |
  | ------------ | ------------------------------------------------------------ |
  | 列名         | 用户自定义，只能是数据表的字段的名称                         |
  | 升序还是降序 | 用户自定义，只能是 `ASC` 或 `DESC`，其中 `ASC` 表示升序，`DESC` 表示降序 |

- 注意点：

  - `ORDER BY` 子句默认是按照升序来对结果集进行排序的，所有如果要对结果集进行升序排序时，可以不用写 `ASC` 关键字，如以下代码所示：

    ```sql
    select * from my_db_01.users order by status
    ```

    > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表，然后再将该数据表中的所有数据显示在结果集中，并且结果集中的所有数据都会根据 `status` 字段来进行升序排序。

  - 我们可以在 `ORDER BY` 子句中使用逗号来进行多重排序，如以下代码所示：

    ```sql
    select * from my_db_01.users order by status asc,id desc
    ```

    > 注：以上代码会先找到 `my_db_01` 数据库中的 `users` 数据表，然后再将该数据表中的所有数据显示在结果集中，并且结果集中的所有数据都会先根据 `status` 字段来进行升序排序，然后再根据 `id` 字段来进行降序排序。

- 演示代码：

  ```sql
  select * from my_db_01.users order by status asc,id desc
  ```

- 演示结果：

  ![132](imgs/132.gif)

#### 9.4.3.7SQL语句之 `COUNT()` 函数

- `COUNT()` 函数是用于返回 `SELECT` 语句查询的结果的总数据条数。

- 语法：

  ```sql
  select count(列名) from 数据库的名称.该数据库中的数据表的名称
  ```

- 取值：

  |                          | 取值                                       |
  | ------------------------ | ------------------------------------------ |
  | 列名                     | 用户自定义，只能是数据表的字段的名称或 `*` |
  | 数据库的名称             | 用户自定义，只能是数据库的名称             |
  | 该数据库中的数据表的名称 | 用户自定义，只能是该数据库中的数据表的名称 |

- 演示代码：

  ```sql
  select count(*) from my_db_01.users
  ```

- 演示结果：

  ![133](imgs/133.gif)

#### 9.4.3.8SQL语句之 `AS` 关键字

- `AS` 关键字是给结果集中的字段设置别名的。

- 语法：

  ```sql
  select 列名 as 别名 from 数据库的名称.该数据库中的数据表的名称
  ```

- 取值：

  |                          | 取值                                       |
  | ------------------------ | ------------------------------------------ |
  | 列名                     | 用户自定义，只能是数据表的字段的名称或 `*` |
  | 别名                     | 用户自定义，只能是字符串                   |
  | 数据库的名称             | 用户自定义，只能是数据库的名称             |
  | 该数据库中的数据表的名称 | 用户自定义，只能是该数据库中的数据表的名称 |

- 演示代码：

  ```sql
  select count(*) as total from my_db_01.users
  ```

- 演示结果：

  ![134](imgs/134.gif)

## 9.5在项目中操作MySQL数据库

### 9.5.1在项目中安装和测试MySQL第三方模块

- 在项目中安装和测试MySQL第三方模块的步骤如下：

  1. 在项目中打开终端，在终端中运行 `npm i mysql` 命令，来下载并安装MySQL第三方模块，如下图所示：

     ![135](imgs/135.gif)

  2. 在项目中导入MySQL第三方模块，如以下代码所示：

     ```javascript
     // 导入mysql模块。
     const mysql = require('mysql');
     ```

     > 注：使用MySQL第三方模块前我们需要先使用 `require('mysql')` 方法导入MySQL第三方模块，导入MySQL第三方模块后，会将MySQL第三方模块中的对象返回给 `require('mysql')` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

  3. 使用MySQL第三方模块中的 `createPool()` 方法，来连接MySQL数据库，如以下代码所示：

     ```javascript
     // 导入mysql模块。
     const mysql = require('mysql');
     // 建立与MySQL数据库的连接关系。
     const db = mysql.createPool({
         host: '127.0.0.1',// 数据库的IP地址。
         user: 'root',// 登录数据库的账号。
         password: 'admin123',// 登录数据库的密码。
         database: 'my_db_01'// 指定要操作那个数据库。
     });
     ```

     > 注：使用MySQL第三方模块中的 `createPool()` 方法，来连接MySQL数据库后，会返回一个数据库对象给 `createPool()` 方法，因为该对象没有对象名所以需要通过赋值的方式给其赋对象名，然后我们才能使用该对象中的方法。

  4. 使用数据库对象中的 `query()` 方法来向MySQL数据库中执行SQL语句，来测试是否成功连接MySQL数据库，如以下代码所示：

     ```javascript
     // 导入mysql模块。
     const mysql = require('mysql');
     // 建立与MySQL数据库的连接关系。
     const db = mysql.createPool({
         host: '127.0.0.1',// 数据库的IP地址。
         user: 'root',// 登录数据库的账号。
         password: 'admin123',// 登录数据库的密码。
         database: 'my_db_01'// 指定要操作那个数据库。
     });
     // 测试mysql模块能否正常工作。
     db.query('select 1',(err,results) => {
         // mysql模块工作期间报错了。
         if(err) return console.log(err.message);
         // 能够成功的执行SQL语句。
         console.log(results);
     });
     ```

     > 注：数据库对象中的 `query()` 方法中的第一个参数是SQL语句，第二个参数是回调函数，如果数据库对象中的 `query()` 方法中的SQL语句执行成功了，那么就会返回 `null` 给回调函数的第一个形参，然后将执行成功后的结果集返回给回调函数的第二个形参，所以我们通常会将第二个形参的形参名设置成 `results`，如果数据库对象中的 `query()` 方法中的SQL语句执行失败了，那么就会返回一个错误对象给回调函数的第一个形参，并且该错误对象中的 `message` 属性中存储着错误信息，并且该错误对象的对象名就是回调函数的第一个形参的形参名，所以我们通常会将回调函数的第一个形参的形参名设置成 `err`，然后会将 `null` 返回给回调函数的第二个形参。

  5. 在Node.js环境中，执行项目的JavaScript文件，如下图所示：

     ![136](imgs/136.gif)

     > 注：上图中显示 `[ RowDataPacket { '1': 1 } ]` 就表示成功连接了MySQL数据库。

### 9.5.2使用MySQL第三方模块来操作MySQL数据库

#### 9.5.2.1使用MySQL第三方模块来查询MySQL数据库中的数据

- 使用MySQL第三方模块来查询MySQL数据库中的数据，如以下代码所示：

  ```javascript
  // 导入mysql模块。
  const mysql = require('mysql');
  // 建立与MySQL数据库的连接关系。
  const db = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin123',
      database: 'my_db_01'
  });
  // 使用数据库对象中的query()方法来向MySQL数据库中执行SELECT语句。
  db.query('select * from users',(err,results) => {
      if(err) return console.log(err.message);
      console.log(results);
  });
  ```

  > 注1：使用数据库对象中的 `query()` 方法来向MySQL数据库中执行 `SELECT` 语句时，如果 `query()` 方法中的 `SELECT` 语句执行成功了，就会将结果集以数组的形式返回给回调函数的第二个形参。
  >
  > 注2：因为在建立与MySQL数据库的连接关系时，就指定了要操作的数据库，所以 `query()` 方法中的SQL语句，就可以省略数据库的名称。
  >
  > 注3：以上代码的执行结果，如下图所示：
  >
  > ![137](imgs/137.gif)

#### 9.5.2.2使用MySQL第三方模块来向MySQL数据库中插入数据

- 使用MySQL第三方模块来向MySQL数据库中插入数据，如以下代码所示：

  ```javascript
  // 导入mysql模块。
  const mysql = require('mysql');
  // 建立与MySQL数据库的连接关系。
  const db = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin123',
      database: 'my_db_01'
  });
  // 使用数据库对象中的query()方法来向MySQL数据库中执行INSERT语句。
  db.query('insert into users (username,password) value (?,?)',['lq','abs123'],(err,results) => {
      if(err) return console.log(err.message);
      if(results.affectedRows === 1) console.log('插入数据成功');
  });
  ```

  > 注1：上述代码中使用数据库对象中的 `query()` 方法来向MySQL数据库中执行 `INSERT` 语句时，`query()` 方法中的SQL语句中的问号表示占位符，`query()` 方法中的第二个参数就是为这些占位符指定具体的值，并且是使用数组的形式。
  >
  > 注2：使用数据库对象中的 `query()` 方法来向MySQL数据库中执行 `INSERT` 语句时，会返回一个对象给 `query()` 方法中的回调函数的第二个形参，我们可以判断该对象中的 `affectedRows` 属性是否全等于1，来判断 `query()` 方法中的 `INSERT` 语句是否执行成功。
  >
  > 注3：以上代码的执行结果，如下图所示：
  >
  > ![138](imgs/138.gif)

- 注意点：如果一个对象中的属性和MySQL数据库中的数据表的字段一一对应时，我们可以通过 `insert into users set ?` 语句来快速的插入数据，如以下代码所示：

  ```javascript
  // 导入mysql模块。
  const mysql = require('mysql');
  // 建立与MySQL数据库的连接关系。
  const db = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin123',
      database: 'my_db_01'
  });
  // 使用数据库对象中的query()方法来向MySQL数据库中执行INSERT语句。
  const data = {
      username: 'lq',
      password: 'abs123'
  }
  db.query('insert into users set ?',data,(err,results) => {
      if(err) return console.log(err.message);
      if(results.affectedRows === 1) console.log('插入数据成功');
  });
  ```

  > 注：以上代码的执行结果，如下图所示：
  >
  > ![139](imgs/139.gif)

#### 9.5.2.3使用MySQL第三方模块来更新MySQL数据库中的数据

- 使用MySQL第三方模块来更新MySQL数据库中的数据，如以下代码所示：

  ```javascript
  // 导入mysql模块。
  const mysql = require('mysql');
  // 建立与MySQL数据库的连接关系。
  const db = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin123',
      database: 'my_db_01'
  });
  // 使用数据库对象中的query()方法来向MySQL数据库中执行UPDATE语句。
  db.query('update users set username=?,password=? where id=?',['re','123456',9],(err,results) => {
      if(err) return console.log(err.message);
      if(results.affectedRows === 1) console.log('更新数据成功');
  });
  ```

  > 注1：上述代码中使用数据库对象中的 `query()` 方法来向MySQL数据库中执行 `UPDATE` 语句时，`query()` 方法中的SQL语句中的问号表示占位符，`query()` 方法中的第二个参数就是为这些占位符指定具体的值，并且是使用数组的形式。
  >
  > 注2：使用数据库对象中的 `query()` 方法来向MySQL数据库中执行 `UPDATE` 语句时，会返回一个对象给 `query()` 方法中的回调函数的第二个形参，我们可以判断该对象中的 `affectedRows` 属性是否全等于1，来判断 `query()` 方法中的 `UPDATE` 语句是否执行成功。
  >
  > 注3：以上代码的执行结果，如下图所示：
  >
  > ![140](imgs/140.gif)

- 注意点：如果一个对象中的属性和MySQL数据库中的数据表的字段一一对应时，我们可以通过 `update users set ? where id=?` 语句来快速的更新数据，如以下代码所示：

  ```javascript
  // 导入mysql模块。
  const mysql = require('mysql');
  // 建立与MySQL数据库的连接关系。
  const db = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin123',
      database: 'my_db_01'
  });
  // 使用数据库对象中的query()方法来向MySQL数据库中执行UPDATE语句。
  const data = {
      id: 9,
      username: 'asd',
      password: 'fdsaas',
  }
  db.query('update users set ? where id=?',[data,data.id],(err,results) => {
      if(err) return console.log(err.message);
      if(results.affectedRows === 1) console.log('更新数据成功');
  });
  ```

  > 注：以上代码的执行结果，如下图所示：
  >
  > ![141](imgs/141.gif)

#### 9.5.2.4使用MySQL第三方模块来删除MySQL数据库中的数据

- 使用MySQL第三方模块来删除MySQL数据库中的数据，如以下代码所示：

  ```javascript
  // 导入mysql模块。
  const mysql = require('mysql');
  // 建立与MySQL数据库的连接关系。
  const db = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin123',
      database: 'my_db_01'
  });
  // 使用数据库对象中的query()方法来向MySQL数据库中执行DELETE语句。
  db.query('delete from users where id=?',7,(err,results) => {
      if(err) return console.log(err.message);
      if(results.affectedRows === 1) console.log('删除数据成功');
  });
  ```

  > 注1：上述代码中使用数据库对象中的 `query()` 方法来向MySQL数据库中执行 `DELETE` 语句时，`query()` 方法中的SQL语句中的问号表示占位符，`query()` 方法中的第二个参数就是为这些占位符指定具体的值，并且是使用数组的形式，但是如果值只有一个可以不用数组的形式。
  >
  > 注2：使用数据库对象中的 `query()` 方法来向MySQL数据库中执行 `DELETE` 语句时，会返回一个对象给 `query()` 方法中的回调函数的第二个形参，我们可以判断该对象中的 `affectedRows` 属性是否全等于1，来判断 `query()` 方法中的 `DELETE` 语句是否执行成功。
  >
  > 注3：以上代码的执行结果，如下图所示：
  >
  > ![142](imgs/142.gif)

- 注意点：使用 `DELETE` 语句来删除MySQL数据库中的数据时，会真正的把数据从数据表中删除掉，所以为了保险起见，推荐使用标记删除的形式，来模拟删除的动作，也就是在数据表中设置类似于 `status` 这样的状态字段，来标记当前这条数据是否被删除，当用户执行了删除的动作时，我们并没有执行 `DELETE` 语句把数据删除掉，而是执行了 `UPDATE` 语句，将这条数据对应的 `status` 字段标记为删除即可，如以下代码所示：

  ```javascript
  // 导入mysql模块。
  const mysql = require('mysql');
  // 建立与MySQL数据库的连接关系。
  const db = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin123',
      database: 'my_db_01'
  });
  // 使用数据库对象中的query()方法来向MySQL数据库中执行UPDATE语句。
  db.query('update users set status=1 where id=?',9,(err,results) => {
      if(err) return console.log(err.message);
      if(results.affectedRows === 1) console.log('删除数据成功');
  });
  ```

  > 注：以上代码的执行结果，如下图所示：
  >
  > ![143](imgs/143.gif)

## 9.6前后端的身份认证

### 9.6.1Web开发模式

#### 9.6.1.1基于服务器端渲染的传统Web开发模式

- 服务端渲染的概念就是服务器发送给客户端的HTML页面，是在服务器通过字符串拼接的方式，动态生成的，因此客户端不
  需要使用Ajax这样的技术来额外请求页面的数据，如以代码所示：

  ```javascript
  const express = require('express');
  const app = express();
  app.get('/index.html',(req,res) => {
      // 要渲染的数据。
      const user = {
          name: '张三',
          age: 20
      }
      // 服务器通过字符串拼接的方式，动态生成HTML内容。
      const html = `<h1>姓名：${user.name}，年龄：${user.age}</h1>`;
      // 把生成好的页面内容响应给客户端，因此客户端拿到的是带有真实数据的HTML页面。
      res.send(html);
  });
  app.listen(80,() => {
      console.log('http server runing at http://127.0.0.1');
  });
  ```

- 服务端渲染的优缺点如下：

  - 优点：
    - 前端耗时少：因为服务器端负责动态生成HTML页面中的内容，而浏览器（客户端）只需要直接渲染页面即可，这对于移动端来说会更加的省电。
    - 有利于SEO：因为服务器端响应的是完整的HTML页面，所以爬虫更容易爬取所需信息，这更有利于SEO。

  - 缺点：
    - 占用服务器端资源：使用服务器端来完成HTML页面内容的拼接时，如果请求较多，会对服务器造成一定的访问压力。
    - 不利于前后端的分离：开发效率低，使用服务器端渲染，则无法进行分工合作，尤其对于前端复杂度高的项目，不利于项目高效开发。

#### 9.6.1.2基于前后端分离的新型Web开发模式

- 前后端分离的概念就是后端只负责提供APi接口，而前端则使用Ajax来调用这些接口的开发模式。
- 前后端分离的优缺点如下：
  - 优点：
    - 开发体验好：前端只需要专注于UI页面的开发即可，而后端则只需要专注于APi接口的开发即可，这使得前端可以有更多的选择。
    - 用户体验好：随着Ajax技术的广泛应用，极大的提高了用户的体验，可以让用户轻松的实现页面的局部刷新。
    - 减轻了服务器端的渲染压力：因为HTML页面最终是在每个用户的浏览器中生成的。
  - 缺点：
    - 不利于SEO：因为完整的HTML页面需要在客户端动态拼接完成，所以爬虫就无法爬取页面的有效信息，不过有解决方案可以解决，那就是利用Vue、React等前端框架中的SSR（server side render）技术，就能够很好的解决SEO问题。

#### 9.6.1.3如何选择Web开发模式

- 不谈业务场景而盲目选择使用何种开发模式的都是耍流氓，比如企业级网站，主要功能是展示，而没有复杂的交互，并且需要良好的SEO，这时我们就需要使用服务器端渲染的Web开发模式，而后台管理项目，因为交互性比较强，不需要考虑SEO，那么就可以使用前后端分离的Web开发模式，另外，具体使用何种开发模式并不是绝对的，一些网站为了同时兼顾首页的渲染速度和前后端分离的开发效率，采用了首屏服务器端渲染加其他页面前后端分离的开发模式。

### 9.6.2身份认证

#### 9.6.2.1什么是身份认证

- 身份认证（Authentication）又称身份验证，鉴权，身份验证是指通过一定的手段，来完成对用户身份的确认，在日常生活中身份认证随处可见，如：高铁的验票乘车，手机的密码或指纹解锁，支付宝或微信的支付密码等，在Web开发中，也涉及到用户身份的认证，如：各大网站的手机验证码登录、邮箱密码登录、二维码登录等。

#### 9.6.2.2为什么需要身份认证

- 身份认证的目的就是为了确认当前所声称为某种身份的用户，确实是所声称的用户，如：你去找快递员取快递，你要怎么证明这份快递是你的，在互联网项目开发中，如何对用户的身份进行认证，是一个值得深入探讨的问题，如：如何才能保证网站不会错误的将马云的存款数额显示到马化腾的账户上。

#### 9.6.2.3不同Web开发模式下的身份认证

- 对于服务端渲染和前后端分离这两种开发模式来说，分别有着不同的身份认证方案，如：服务端渲染推荐使用Session认证机制，前后端分离推荐使用JWT认证机制。

### 9.6.3Session认证机制

#### 9.6.3.1HTTP协议的无状态性

- HTTP协议的无状态性，指的是客户端的每次HTTP请求都是独立的，并且连续多个HTTP请求之间是没有直接的关系的，而且服务器不会主动保留每次HTTP请求的状态，如下图所示：

  ![144](imgs/144.png)

  > 注：上图中的超市收银员就相当于是服务器，各个客户就相当于是客户端，由于每天都有许多客户来结账，所以收银员是无法记住那些客户是VIP会员的，因此当客户端多次发起HTTP请求时，服务器是不会保留客户端之前发起的HTTP请求的状态的，如：当客户端向服务器发起了登录请求，然后客户端再请求服务器时，服务器是不知道你这个客户端是否发起了登录请求和你这个客户端的状态的。

#### 9.6.3.2如何突破HTTP协议的无状态性限制

- 在Web开发中我们使用Cookie来突破HTTP协议的无状态性限制，Cookie就相当于是一个客户端的标识，当客户端第一次请求服务器时，服务器会给这个客户端颁发一个Cookie，这个Cookie就相当于是一个身份标识，当客户端再次请求服务器时，服务器就会识别这个客户端的Cookie，来检测这个客户端是否之前请求过，以及获取这个客户端的状态，如下图所示：

  ![145](imgs/145.png)

  > 注：上图中的超市收银员就相当于是服务器，各个客户就相当于是客户端，由于每天都有许多客户来结账，所以收银员是无法记住那些客户是VIP会员的，因此超市会给VIP会员颁发VIP会员卡，这个会员卡就相当于是Cookie，有了这个会员卡，收银员就知道那些客户是VIP客户了。

#### 9.6.3.3什么是Cookie

- Cookie是存储在用户浏览器中的一段不超过4KB的字符串，它是由一个名称（Name）、一个值（Value）和其它几个用于控制Cookie有效期、安全性、使用范围的可选属性组成的，如何查看Cookie，如下图所示：

  ![146](imgs/146.gif)

- 注意点：不同域名下的Cookie是相互独立的，也就是说淘宝域名无法访问百度域名下的Cookie，并且每当客户端发起请求时，会自动把当前域名下的所有未过期的Cookie一同发送到服务器。

- Cookie的特性：

  - 当客户端请求服务器时，当前域名下的Cookie会自动发送给服务器。
  - 不同域名下的Cookie是相互独立的，也就是说淘宝域名无法访问百度域名下的Cookie。
  - 每个Cookie都是有有效期的，在有效期范围内的Cookie才会被发送给服务器，过了有效期的Cookie就相当于废除了，不会被发送给服务器。
  - Cookie大小是有限制的，一般不超过4KB。

#### 9.6.3.4Cookie在身份认证中的作用

- 客户端在第一次请求服务器的时候，服务器会通过响应头的形式，向客户端发送一个身份认证的Cookie，并且客户端会自动将这个Cookie保存在浏览器中，随后，当客户端浏览器每次请求服务器的时候，浏览器都会自动将身份认证相关的Cookie，通过请求头的形式发送给服务器，这样服务器即可验明客户端的身份了，如下图所示：

  ![147](imgs/147.png)

  > 注：如何查看请求头中要发送给服务器的Cookie，如下图所示：
  >
  > ![148](imgs/148.gif)

#### 9.6.3.5Cookie不具有安全性

- 由于Cookie是存储在浏览器中的，而且浏览器也提供了读写Cookie的APi接口，因此Cookie很容易被伪造，这导致它不具有安全性，因此不建议服务器将重要的隐私数据，通过Cookie的形式发送给浏览器，如下图所示：

  ![149](imgs/149.png)

  > 注：上图中的超市收银员就相当于是服务器，各个客户就相当于是客户端，会员卡就相当于是Cookie，客户只需要出示会员卡就可以享受VIP会员，这就导致会有人去伪造会员卡，这些人只要出示会员卡就可以享受VIP会员，因此会员卡也就是Cookie是不具有安全性的。

#### 9.6.3.6提高身份认证的安全性

- 为了防止有人伪造Cookie，我们可以让服务器收到客户端发送的Cookie时，进行该客户端的Cookie认证，来确认该客户端的Cookie是真实的，如下图所示：

  ![150](imgs/150.png)

  > 注：上图中的超市收银员就相当于是服务器，各个客户就相当于是客户端，会员卡就相当于是Cookie，当客户出示会员卡时，收银员要将客户的会员卡进行刷卡认证，这个过程就是用来确认客户的会员卡是否是真的，也就相当于确认客户端的Cookie是否是真的。

- 注意点：这种会员卡加刷卡认证的设计理念，就是Session认证机制的精髓。

#### 9.6.3.6Session认证机制的工作原理

- Session认证机制的工作原理，如下图所示：

  ![151](imgs/151.png)

#### 9.6.3.7在Express中使用Session认证

- 在Express中使用Session认证步骤如下：

  1. 在项目中打开终端，在终端中运行 `npm i express-session` 命令，来下载并安装express-session第三方模块，如下图所示：

     ![152](imgs/152.gif)

  2. 在项目中导入Express模块，并实例化Web服务器对象，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     ```

  3. 在项目中导入Express-Session模块，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入Express-Session模块。
     const session = require('express-session');
     ```

  4. 将Express-Session模块注册为全局中间件，并且配置Express-Session模块，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入Express-Session模块。
     const session = require('express-session');
     // 将Express-Session模块注册为全局中间件，并且配置Express-Session模块。
     app.use(session({
         // secret属性的属性值可以为任意字符串。
         secret: 'keyboard cat',
         // 固定写法。
         resave: false,
         // 固定写法。
         saveUninitialized: true
     }));
     ```

  5. 向Express-Session模块中存储数据，当Express-Session模块配置成功后，即可通过请求对象中的Session对象来存储用户的关键信息，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入Express-Session模块。
     const session = require('express-session');
     // 将Express-Session模块注册为全局中间件，并且配置Express-Session模块。
     app.use(session({
         // secret属性的属性值可以为任意字符串。
         secret: 'keyboard cat',
         // 固定写法。
         resave: false,
         // 固定写法。
         saveUninitialized: true
     }));
     // 当Express-Session模块配置成功后，即可通过请求对象中的Session对象来存储用户的关键信息。
     app.post('/api/login',(req,res) => {
         if (req.body.username !== 'admin' || req.body.password !== '000000') {
             return res.send({status: 1, massage: '登录失败'});
         }
         // 将用户信息存储到请求对象中的Session对象中。
         req.session.user = req.body;
         // 将用户登录状态存储到请求对象中的Session对象中。
         req.session.islogin = true;
         res.send({status: 0,massage: '登录成功'});
     });
     ```

     > 注1：只有成功配置Express-Session模块后，请求对象中才有Session对象。
     >
     > 注2：将用户信息存储到请求对象中的Session对象中时，其实是将用户信息存储到Session对象中的某个属性上，这个属性的属性名是可以自定义的，如以上代码中所示的 `req.session.user = req.body;` 就是将用户信息存储到请求对象中的Session对象中的 `user` 属性上。

  6. 向Express-Session模块中读取数据，当Express-Session模块配置成功后，并且请求对象中的Session对象中也存储了数据后，我们就可以直接使用请求对象中的Session对象来读取Session对象中存储的数据了，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入Express-Session模块。
     const session = require('express-session');
     // 将Express-Session模块注册为全局中间件，并且配置Express-Session模块。
     app.use(session({
         // secret属性的属性值可以为任意字符串。
         secret: 'keyboard cat',
         // 固定写法。
         resave: false,
         // 固定写法。
         saveUninitialized: true
     }));
     // 当Express-Session模块配置成功后，即可通过请求对象中的Session对象来存储用户的关键信息。
     app.post('/api/login',(req,res) => {
         if (req.body.username !== 'admin' || req.body.password !== '000000') {
             return res.send({status: 1, massage: '登录失败'});
         }
         // 将用户信息存储到请求对象中的Session对象中。
         req.session.user = req.body;
         // 将用户登录状态存储到请求对象中的Session对象中。
         req.session.islogin = true;
         res.send({status: 0,massage: '登录成功'});
     });
     // 当Express-Session模块配置成功后，并且请求对象中的Session对象中也存储了数据后，我们就可以直接使用请求对象中的Session对象来读取Session对象中存储的数据了。
     app.get('/api/username',(req,res) => {
         if (!req.session.islogin) {
             res.send({status: 1,massage: 'fall'});
         }
         res.send({status: 0,massage: req.session.user});
     });
     ```

  7. 向Express-Session模块中读取数据，当Express-Session模块配置成功后，并且请求对象中的Session对象中也存储了数据后，我们就可以直接使用请求对象中的Session对象中的 `destroy()` 方法来清除Session对象中存储的数据了，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 实例化Web服务器对象。
     const app = express();
     // 导入Express-Session模块。
     const session = require('express-session');
     // 将Express-Session模块注册为全局中间件，并且配置Express-Session模块。
     app.use(session({
         // secret属性的属性值可以为任意字符串。
         secret: 'keyboard cat',
         // 固定写法。
         resave: false,
         // 固定写法。
         saveUninitialized: true
     }));
     // 当Express-Session模块配置成功后，即可通过请求对象中的Session对象来存储用户的关键信息。
     app.post('/api/login',(req,res) => {
         if (req.body.username !== 'admin' || req.body.password !== '000000') {
             return res.send({status: 1, massage: '登录失败'});
         }
         // 将用户信息存储到请求对象中的Session对象中。
         req.session.user = req.body;
         // 将用户登录状态存储到请求对象中的Session对象中。
         req.session.islogin = true;
         res.send({status: 0,massage: '登录成功'});
     });
     // 当Express-Session模块配置成功后，并且请求对象中的Session对象中也存储了数据后，我们就可以直接使用请求对象中的Session对象来读取Session对象中存储的数据了。
     app.get('/api/username',(req,res) => {
         if (!req.session.islogin) {
             res.send({status: 1,massage: 'fall'});
         }
         res.send({status: 0,massage: req.session.user});
     });
     // 当Express-Session模块配置成功后，并且请求对象中的Session对象中也存储了数据后，我们就可以直接使用请求对象中的Session对象中的destroy()方法来清除Session对象中存储的数据了。
     app.post('/api/logout',(req,res) => {
         req.session.destroy();
         res.send({status: 0,massage: '退出登录'});
     });
     ```

     > 注：使用请求对象中的Session对象中的 `destroy()` 方法来清除Session对象中存储的数据时，只会清除当前客户端在服务器中的Session对象中存储的数据，不会清除其它客户端在服务器中的Session对象中存储的数据。

#### 9.6.3.8Session认证案例

- 使用Express-Session模块中的存储功能和读取功能，以及清空功能，代码如下：

  ```html
  <!-- 首页代码 -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>首页</h1>
      <button type="button">退出登录</button>
      <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
      <script>
          $(function() {
              $.get('./api/username',(res) => {
                  if (res.status === 1) {
                      alert(`欢迎登录，尊敬的${res.user}`);
                  } else {
                      alert('您尚未登录，请登录后再执行此操作！');
                      location.href = './login.html';
                  }
              });
              $('button').on('click',() => {
                  $.post('./api/logout',(res) => {
                      if (res.status === 1) {
                          alert(res.massage);
                          location.href = './login.html';
                      }
                  });
              });
          });
      </script>
  </body>
  </html>
  ```

  ```html
  <!-- 登录页面代码 -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <form action="">
          用户名：<input type="text" name="username">
          密码：<input type="password" name="password">
          <button type="submit">登录</button>
      </form>
      <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
      <script>
          $(function() {
              $('form').on('submit',(e) => {
                  e.preventDefault();
                  $.post('./api/login',$('form').serialize(),(res) => {
                      if (res.status === 1) {
                          location.href = './index.html';
                      } else {
                          alert('登录失败');
                      }
                  });
              });
          });
      </script>
  </body>
  </html>
  ```

  ```javascript
  
  // 导入Express模块
  const express = require('express');
  // 实例化Web服务器
  const app = express();
  // 导入Express-session模块
  const session = require('express-session');
  // 将Express-Session模块注册为全局中间件，并配置Express-Session模块。
  app.use(session({
      // secret属性的属性值可以为任意字符串。
      secret: 'keyboard cat',
      // 固定写法。
      resave: false,
      // 固定写法。
      saveUninitialized: true
  }));
  // 托管静态页面。
  app.use(express.static('./pages'));
  // 解析POST提交过来的表单数据。
  app.use(express.urlencoded({ extended: false }));
  // 向Session对象中存储数据。
  app.post('/api/login',(req,res) => {
      if (req.body.username !== 'admin' || req.body.password !== '000000') {
          return res.send({status: 0,massage: '登录失败'});
      }
      req.session.user = req.body;
      req.session.islogin = true;
      res.send({status: 1,massage: '登录成功'});
  });
  // 向Session对象中取数据。
  app.get('/api/username',(req,res) => {
      if (!req.session.islogin) {
          return res.send({status: 0,massage: 'fail'});
      }
      res.send({status: 1,massage: '获取成功',user: req.session.user.username});
  });
  // 清除Session对象中的数据。
  app.post('/api/logout',(req,res) => {
      req.session.destroy();
      res.send({status: 1,massage: '退出登录成功'});
  });
  app.listen(80,function() {
      console.log('Express server running at http://127.0.0.1');
  });
  ```

- 演示结果：

  ![153](imgs/153.gif)

### 9.6.4JWT认证机制

#### 9.6.4.1了解Session认证机制的局限性

- Session认证机制需要配合Cookie才能实现，但是由于Cookie默认是不支持跨域访问的，所以当涉及到前端跨域请求后端接口的时候，就需要做很多额外的配置，才能实现跨域Session认证，因此当前端请求后端接口不存在跨域问题的时候，就推荐使用Session身份认证机制，而当前端需要跨域请求后端接口的时候，就不推荐使用Session身份认证机制，推荐使用JWT认证机制。

#### 9.6.4.2什么是JWT认证机制

- JWT英文全称JSON Web Token，它是目前最流行的跨域认证解决方案。

#### 9.6.4.3JWT认证机制的原理

- JWT认证机制的原理，如下图所示：

  ![154](imgs/154.png)

  > 总结：用户的信息通过Token字符串的形式，保存在客户端浏览器中，服务器通过还原Token字符串的形式来认证用户的身份。

#### 9.6.4.4Token字符串的组成部分

- Token字符串通常由三部分组成，分别是Header（头部）、Payload（有效荷载）、Signature（签名），并且它们之间是用英文的句号隔开的，如以下格式所示：

  ```javascript
  Header.Payload.Signature
  ```

  > 注：以下字符串就是一个Token字符串的示例：
  >
  > ```javascript
  > eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJuaW5naGFvLm5ldCIsImV4cCI6IjE0Mzg5NTU0NDUiLCJuYW1lIjoid2FuZ2hhbyIsImFkbWluIjp0cnVlfQ.SwyHTEx_RQppr97g4J5lKXtabJecpejuef8AqKYMAJc
  > ```

- 注意点：Token字符串组成部分中的Payload部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串，而Header部分和Signature部分是安全性相关的部分，它只是为了保证Token字符串的安全性，如下图所示：

  ![155](imgs/155.png)

#### 9.6.4.5JWT认证机制的使用方法

- 当客户端收到服务器返回的JWT字符串之后，通常会将它储存在localStorage对象或sessionStorage对象中，此后客户端每次与服务器通信，都要带上这个JWT字符串，来进行身份认证，因此推荐的做法就是把JWT字符串放在HTTP请求头的Authorization字段中，如以下格式所示：

  ```javascript
  Authorization: Bearer <token>
  ```

  > 注：JWT字符串就是Token字符串。

#### 9.6.4.6在Express中使用JWT认证机制

1. 在项目中打开终端，在终端中运行 `npm i jsonwebtoken express-jwt` 命令，来下载并安装jsonwebtoken和express-jwt第三方模块，如下图所示：

   > 注1：jsonwebtoken模块是用于生成JWT字符串的。
   >
   > 注2：express-jwt模块是用于将JWT字符串解析还原成JSON对象的。
   >
   > 注3：我们可以使用 `npm i 包的名称1 包的名称2 ··· 包的名称n` 命令来安装多个包，每个包之间用空格隔开。

   ![156](imgs/156.gif)

2. 在项目中导入jsonwebtoken和express-jwt第三方模块，如以下代码所示：

   ```javascript
   // 导入jsonwebtoken模块
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const {expressjwt: expressJWT} = require('express-jwt');
   ```

   > 注：新版的express-jwt模块的导入方式为 `const {expressjwt: expressJWT} = require('express-jwt');`。

3. 在项目中导入Express模块，如以下代码所示：

   ```javascript
   // 导入jsonwebtoken模块
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const {expressjwt: expressJWT} = require('express-jwt');
   // 导入Express模块。
   const express = require('express');
   ```

4. 实例化Web服务器对象，如以下代码所示：

   ```javascript
   // 导入jsonwebtoken模块
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const {expressjwt: expressJWT} = require('express-jwt');
   // 导入Express模块。
   const express = require('express');
   // 实例化Web服务器对象。
   const app = express();
   ```

5. 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据，代码如下所示：

   ```javascript
   // 导入jsonwebtoken模块
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const {expressjwt: expressJWT} = require('express-jwt');
   // 导入Express模块。
   const express = require('express');
   // 实例化Web服务器对象。
   const app = express();
   // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
   app.use(express.urlencoded({extended: false}));
   ```

6. 定义Secret密钥，如以下代码所示：

   ```javascript
   // 导入jsonwebtoken模块
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const {expressjwt: expressJWT} = require('express-jwt');
   // 导入Express模块。
   const express = require('express');
   // 实例化Web服务器对象。
   const app = express();
   // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
   app.use(express.urlencoded({extended: false}));
   // 定义Secret密钥。
   const secretKey = 'hello word';
   ```

   > 注1：为了保证JWT字符串的安全性，防止JWT字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密和解密的Secret密钥，该密钥的作用是当生成JWT字符串的时候，需要使用Secret密钥对用户的信息进行加密，最终得到的是加密好的JWT字符串，当把JWT字符串解析还原成JSON对象的时候，就需要使用Secret密钥进行解密。
   >
   > 注2：密钥的本质就是一个字符串。
   >
   > 注3：密钥建议命名成 `secretKey`。

7. 在用户登录成功后，将用户的信息生成为JWT字符串，如以下代码所示：

   ```javascript
   // 导入jsonwebtoken模块。
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const {expressjwt: expressJWT} = require('express-jwt');
   // 导入Express模块。
   const express = require('express');
   // 实例化Web服务器对象。
   const app = express();
   // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
   app.use(express.urlencoded({extended: false}));
   // 定义Secret密钥。
   const secretKey = 'hello word';
   // 在用户登录成功后，将用户的信息生成为JWT字符串。
   app.post('/api/login',(req,res) => {
       // 将请求体中的数据转存为常量。
       const userinfo = req.body;
       if (userinfo.username !== 'admin' || userinfo.password !== '123456') {
           return res.send({
               status: 0,
               massage: '登录失败'
           });
       }
       // 使用jsonwebtoken模块中的sign()方法，来将用户的信息生成为JWT字符串。
       const tokenStr = jwt.sign({username: userinfo.username},secretKey,{expiresIn: '60s'});
       // 将JWT字符串响应给客户端。
       res.send({
           status: '1',
           massage: '登录成功',
           token: tokenStr
       });
   });
   ```

   > 注1：调用jsonwebtoken模块中的 `sign()` 方法，可以将用户的信息加密成JWT字符串，其中 `sign()` 方法中的参数分别是用户信息对象、Secret密钥、配置对象，其中配置对象中的 `expiresIn` 属性可用于配置JWT字符串的有效期，而用户信息对象是用于设置将那些用户信息转换为JWT字符串的，并且还要特别注意Secret密钥是必不可少的。
   >
   > 注2：不要把用户的密码加密到JWT字符串中。

8. 将JWT字符串还原为JSON对象，如以下代码所示：

   ```javascript
   // 导入jsonwebtoken模块。
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const expressJWT = require('express-jwt');
   // 导入Express模块。
   const express = require('express');
   // 实例化Web服务器对象。
   const app = express();
   // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
   app.use(express.urlencoded({extended: false}));
   // 定义Secret密钥。
   const secretKey = 'hello word';
   // 将express-jwt模块注册为全局中间件，然后配置express-jwt模块来将Token字符串转换为json对象。
   app.use(expressJWT({secret: secretKey,algorithms: ['HS256']}).unless({path: [/^\/api\//]}));
   // 在用户登录成功后，将用户的信息生成为JWT字符串。
   app.post('/api/login',(req,res) => {
       // 将请求体中的数据转存为常量。
       const userinfo = req.body;
       if (userinfo.username !== 'admin' || userinfo.password !== '123456') {
           return res.send({
               status: 0,
               massage: '登录失败'
           });
       }
       // 使用jsonwebtoken模块中的sign()方法，来将用户的信息生成为JWT字符串。
       const tokenStr = jwt.sign({username: userinfo.username},secretKey,{expiresIn: '60s'});
       // 将JWT字符串响应给客户端。
       res.send({
           status: '1',
           massage: '登录成功',
           token: tokenStr
       });
   });
   ```

   > 注1：将express-jwt模块注册为全局中间件并且配置完毕后，客户端每次在访问那些有权限的接口时，都需要主动通过请求头中的 `Authorization` 字段，来将Token字符串发送到服务器中进行身份认证，此时服务器就可以通过express-jwt模块，来自动将客户端发送过来的Token字符串解析还原成JSON对象。
   >
   > 注2：`app.use(expressJWT({secret: secretKey,algorithms: ['HS256']}).unless({path: [/^\/api\//]}));` 代码就是将express-jwt模块注册为全局中间件并且配置，其中 `expressJWT()` 方法括号内的是一个对象，该对象中要有 `secret` 属性和 `algorithms` 属性，并且 `secret` 属性的属性值必须是之前定义的Secret密钥，`algorithms` 属性的属性值固定为 `[HS256]`，最后 `unless()` 方法括号内的也是一个对象，该对象是配置对象，其中的 `path` 属性就是用于设置那些路径下的接口是不需要访问权限的。
   >
   > 注3：不需要访问权限的接口一般在 `api` 路径下，而需要访问权限的接口一般在 `admin` 路径下。

9. 获取用户信息，如以下代码所示：

   ```javascript
   // 导入jsonwebtoken模块。
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const expressJWT = require('express-jwt');
   // 导入Express模块。
   const express = require('express');
   // 实例化Web服务器对象。
   const app = express();
   // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
   app.use(express.urlencoded({extended: false}));
   // 定义Secret密钥。
   const secretKey = 'hello word';
   // 将express-jwt模块注册为全局中间件，然后配置express-jwt模块来将Token字符串转换为JSON对象。
   app.use(expressJWT({secret: secretKey,algorithms: ['HS256']})).unless({path: [/^\/api\//]});
   // 在用户登录成功后，将用户的信息生成为JWT字符串。
   app.post('/api/login',(req,res) => {
       // 将请求体中的数据转存为常量。
       const userinfo = req.body;
       if (userinfo.username !== 'admin' || userinfo.password !== '123456') {
           return res.send({
               status: 0,
               massage: '登录失败'
           });
       }
       // 使用jsonwebtoken模块中的sign()方法，来将用户的信息生成为JWT字符串。
       const tokenStr = jwt.sign({username: userinfo.username},secretKey,{expiresIn: '60s'});
       // 将JWT字符串响应给客户端。
       res.send({
           status: '1',
           massage: '登录成功',
           token: tokenStr
       });
   });
   // 获取用户信息。
   app.get('/admin/user',(req,res) => {
       console.log(req.auth);
       res.send({
           status: '1',
           massage: '获取信息成功',
           data: req.auth
       });
   });
   ```

   > 注：当express-jwt模块注册为全局中间件并且配置完毕后，我们就可以在那些有权限的接口中，使用请求对象中的 `auth` 属性，来获取从JWT字符串中解析出来的用户信息，因为当express-jwt模块注册为全局中间件并且配置完毕后，就会把从JWT字符串解析出来的数据，挂载到请求对象中的 `auth` 属性中。

10. 捕获解析JWT字符串失败后，所产生的错误，如以下代码所示：

   ```javascript
   // 导入jsonwebtoken模块。
   const jwt = require('jsonwebtoken');
   // 导入express-jwt模块。
   const expressJWT = require('express-jwt');
   // 导入Express模块。
   const express = require('express');
   // 实例化Web服务器对象。
   const app = express();
   // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
   app.use(express.urlencoded({extended: false}));
   // 定义Secret密钥。
   const secretKey = 'hello word';
   // 将express-jwt模块注册为全局中间件，然后配置express-jwt模块来将Token字符串转换为JSON对象。
   app.use(expressJWT({secret: secretKey,algorithms: ['HS256']})).unless({path: [/^\/api\//]});
   // 在用户登录成功后，将用户的信息生成为JWT字符串。
   app.post('/api/login',(req,res) => {
       // 将请求体中的数据转存为常量。
       const userinfo = req.body;
       if (userinfo.username !== 'admin' || userinfo.password !== '123456') {
           return res.send({
               status: 0,
               massage: '登录失败'
           });
       }
       // 使用jsonwebtoken模块中的sign()方法，来将用户的信息生成为JWT字符串。
       const tokenStr = jwt.sign({username: userinfo.username},secretKey,{expiresIn: '60s'});
       // 将JWT字符串响应给客户端。
       res.send({
           status: '1',
           massage: '登录成功',
           token: tokenStr
       });
   });
   // 获取用户信息。
   app.get('/admin/user',(req,res) => {
       console.log(req.auth);
       res.send({
           status: '1',
           massage: '获取信息成功',
           data: req.auth
       });
   });
   // 捕获解析JWT字符串失败后，所产生的错误。
   app.use((err,req,res,next) => {
       if (err.name === 'UnauthorizedError') {
           return res.send({
               status: '401',
               massage: '解析JWT字符串错误'
           });
       }
       res.send({
           status: '500',
           massage: '未知错误'
       });
   });
   ```

   > 注1：当使用express-jwt模块解析Token字符串时，如果客户端发送过来的Token字符串过期或不合法，就会产生一个解析失败的错误，这会影响到项目的正常运行，所以我们可以通过Express模块的错误中间件，来捕获这个错误并进行相关的处理，这样就不会影响到项目的正常运行了。
   >
   > 注2：错误名称如果是 `UnauthorizedError` 就表示该错误是解析JWT字符串失败后，所产生的错误。

11. 启动Web服务器，代码如下：

    ```javascript
    // 导入jsonwebtoken模块。
    const jwt = require('jsonwebtoken');
    // 导入express-jwt模块。
    const expressJWT = require('express-jwt');
    // 导入Express模块。
    const express = require('express');
    // 实例化Web服务器对象。
    const app = express();
    // 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
    app.use(express.urlencoded({extended: false}));
    // 定义Secret密钥。
    const secretKey = 'hello word';
    // 将express-jwt模块注册为全局中间件，然后配置express-jwt模块来将Token字符串转换为JSON对象。
    app.use(expressJWT({secret: secretKey,algorithms: ['HS256']})).unless({path: [/^\/api\//]});
    // 在用户登录成功后，将用户的信息生成为JWT字符串。
    app.post('/api/login',(req,res) => {
        // 将请求体中的数据转存为常量。
        const userinfo = req.body;
        if (userinfo.username !== 'admin' || userinfo.password !== '123456') {
            return res.send({
                status: 0,
                massage: '登录失败'
            });
        }
        // 使用jsonwebtoken模块中的sign()方法，来将用户的信息生成为JWT字符串。
        const tokenStr = jwt.sign({username: userinfo.username},secretKey,{expiresIn: '60s'});
        // 将JWT字符串响应给客户端。
        res.send({
            status: '1',
            massage: '登录成功',
            token: tokenStr
        });
    });
    // 获取用户信息。
    app.get('/admin/user',(req,res) => {
        console.log(req.auth);
        res.send({
            status: '1',
            massage: '获取信息成功',
            data: req.auth
        });
    });
    // 捕获解析JWT字符串失败后，所产生的错误。
    app.use((err,req,res,next) => {
        if (err.name === 'UnauthorizedError') {
            return res.send({
                status: '401',
                massage: '解析JWT字符串错误'
            });
        }
        res.send({
            status: '500',
            massage: '未知错误'
        });
    });
    // 启动Web服务器。
    app.listen(80,() => {
        console.log('Express server run in http://127.0.0.1');
    });
    ```

    > 注：运行结果，如下图所示：
    >
    > ![157](imgs/157.gif)

# 10.大事件案例

- 大事件案例的实现步骤：

  1. 创建一个api_server文件夹，并在该目录终端中使用 `npm init -y ` 命令，来快速创建package.json配置文件，如下图所示：

     ![158](imgs/158.gif)

  2. 在api_server文件夹中创建一个app.js文件，将该文件做为项目的入口文件，如下图所示：

     ![159](imgs/159.gif)

  3. 在api_server文件夹目录中，使用终端执行 `npm i express@4.17.1` 命令和 `npm i cors@2.8.5` 命令，来安装指定版本的Express模块和Cors模块，如下图所示：

     ![160](imgs/160.gif)

  4. 初始化api_server文件夹中的app.js文件，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 导入Cors模块。
     const cors = require('cors');
     // 实例化Web服务器对象。
     const app = express();
     // 将Cors模块注册为全局中间件。
     app.use(cors());
     // 配置解析表单数据中间件。
     app.use(express.urlencoded({extended: false}));
     // 启动Web服务器。
     app.listen(3006,() => {
         console.log('api_server is run in http://127.0.0.1');
     });
     ```

  5. 在api_server文件夹中新建一个router文件夹，并在该文件夹中创建一个user.js文件，作为用户的路由模块文件，如下图所示：

     ![161](imgs/161.gif)

  6. 初始化router文件夹中的user.js文件，如以下代码所示：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 创建路由对象。
     const router = express.Router();
     // 用户注册接口。
     router.post('/reguser',(req,res) => {
         res.send('reguser OK');
     });
     // 用户登录接口。
     router.post('/login',(req,res) => {
         res.send('login OK');
     });
     // 向往共享router对象。
     module.exports = router;
     ```

  7. 在api_server文件夹中新建一个router_Handler文件夹，并在该文件夹中新建一个user.js文件，该文件是用于抽离用户路由模块文件中的处理函数的，如下图所示：

     ![162](imgs/162.gif)

     > 注：为什么要抽离用户路由模块文件中的处理函数，这是因为更好的模块化。

  8. 初始化router_Handler文件夹中的user.js文件，如以下代码所示：

     ```javascript
     // 向外共享用户注册时的处理函数。
     exports.regUser = (req,res) => {
         res.send('reguser OK');
     }
     // 向外共享用户登录时的处理函数。
     exports.login = (req,res) => {
         res.send('login OK');
     }
     ```

  9. 将router文件夹中的user.js文件中的代码改成以下的代码：

     ```javascript
     // 导入Express模块。
     const express = require('express');
     // 导入router_Handler文件夹中的user.js文件。
     const router_Handler = require('../router_Handler/user.js');
     // 创建路由对象。
     const router = express.Router();
     // 用户注册接口。
     router.post('/reguser',router_Handler.regUser);
     // 用户登录接口。
     router.post('/login',router_Handler.login);
     // 向往共享router对象。
     module.exports = router;
     ```

  10. 在api_server文件夹中的user.js文件中导入并使用router文件夹中的user.js文件，如以下代码所示：

      ```javascript
      // 导入Express模块。
      const express = require('express');
      // 导入Cors模块。
      const cors = require('cors');
      // 实例化Web服务器对象。
      const app = express();
      // 导入router文件夹中的user.js文件。
      const router = require('./router/user.js');
      // 将Cors模块注册为全局中间件。
      app.use(cors());
      // 配置解析表单数据中间件。
      app.use(express.urlencoded({extended: false}));
      // 使用router文件夹中的user.js文件。
      app.use('/api',router);
      // 启动Web服务器。
      app.listen(3006,() => {
          console.log('api_server is run in http://127.0.0.1');
      });
      ```

      > 注：运行结果，如下图所示：
      >
      > ![163](imgs/163.gif)

  11. 使用MySQL数据库来，新建一个用户信息表，如下图所示：

      ![164](imgs/164.gif)

      > 注：新建用户信息表时，`user_pic` 字段是使用的是 `TEXT` 格式，该格式也是个字符串格式，但是它和 `VARCHAR(255)` 格式的区别在于，`TEXT` 格式是没有字符限制的，而 `VARCHAR(255)` 格式是有字符限制的，它限制字符要在255个字符以内。

  12. 在api_server文件夹目录中，使用终端来执行 `npm i mysql@2.18.1` 命令来安装mysql数据库模块，如下图所示：

      ![165](imgs/165.gif)

  13. 在api_server文件夹目录中新建一个db文件夹，并在该文件夹中新建一个index.js文件，如下图所示：

      ![166](imgs/166.gif)

  14. 初始化db文件夹中的index.js文件，如以下代码所示：

      ```javascript
      // 导入mysql模块。
      const mysql = require('mysql');
      // 创建数据库连接对象。
      const db = mysql.createPool({
          host: '127.0.0.1',// 数据库的IP地址。
          user: 'root',// 登录数据库的账号。
          password: 'admin123',// 登录数据库的密码。
          database: 'my_db_01'// 指定要操作那个数据库。
      });
      // 向外共享db对象。
      module.exports = db;
      ```

  15. 来实现注册功能，在router_Handler文件夹中的user.js文件中编写如下代码：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 向外共享用户注册时的处理函数。
      exports.regUser = (req,res) => {
          // 获取客户端提交到服务器的用户信息。
          const userinfo = req.body;
          // 判断客户端提交到服务器的用户信息是否合法。
          if (!userinfo.username || !userinfo.password) {
              return res.send({
                 status: 1,
                 message: '用户名或密码不合法'
              });
          }
          // 定义SQL语句，查询用户名是否被占用。
          const strSQL = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(strSQL,userinfo.username,(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.send({
                      status: 1,
                      message: err.message
                  });
              }
              // 判断用户名是否被占用。
              if (results.length > 0) {
                  return res.send({
                      status: 1,
                      message: '用户名已被占用'
                  });
              }
          });
      }
      // 向外共享用户登录时的处理函数。
      exports.login = (req,res) => {
          res.send('login OK');
      }
      ```

      > 注：运行结果，如下图所示：
      >
      > ![167](imgs/167.gif)

  16. 在api_server文件夹目录中，使用终端执行 `npm i bcryptjs@2.4.3` 命令来安装bcryptjs模块，来加密用户密码，如下图所示：

      ![168](imgs/168.gif)

  17. 在router_Handler文件夹中的user.js文件中使用bcryptjs模块，来加密用户密码，代码如下所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块。
      const bcryptjs = require('bcryptjs');
      // 向外共享用户注册时的处理函数。
      exports.regUser = (req,res) => {
          // 获取客户端提交到服务器的用户信息。
          const userinfo = req.body;
          // 判断客户端提交到服务器的用户信息是否合法。
          if (!userinfo.username || !userinfo.password) {
              return res.send({
                 status: 1,
                 message: '用户名或密码不合法'
              });
          }
          // 定义SQL语句，查询用户名是否被占用。
          const strSQL = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(strSQL,userinfo.username,(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.send({
                      status: 1,
                      message: err.message
                  });
              }
              // 判断用户名是否被占用。
              if (results.length > 0) {
                  return res.send({
                      status: 1,
                      message: '用户名已被占用'
                  });
              }
          });
          // 调用bcryptjs模块中的hashSync方法来加密用户密码。
          userinfo.password = bcryptjs.hashSync(userinfo.password,10);
      }
      // 向外共享用户登录时的处理函数。
      exports.login = (req,res) => {
          res.send('login OK');
      }
      ```

      > 注1：为什么要加密用户密码，因为为了保证密码的安全性，不建议在数据库中以明文的形式保存用户密码，因此推荐将用户密码进行加密后储存。
      >
      > 注2：bcryptjs模块是对信息加密的模块，经过该模块加密后的信息是无法被逆向破解的，因为同一信息加密多次，所得到的加密结果是各不相同的，这保证了加密后的安全性。
      >
      > 注3：我们可以使用bcryptjs模块中的 `hashSync(需要被加密的信息,随机盐的长度)` 方法来加密信息，其中 `hashSync(需要被加密的信息,随机盐的长度)` 方法括号内的第一个参数就是需要被加密的信息，它可以是数字，字符串等，而第二个参数就是设置信息加密时的随机盐长度，只能是数字。

  18. 往数据库中插入用户数据，来实现用户注册功能，在router_Handler文件夹中的user.js文件中编写如下代码：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块。
      const bcryptjs = require('bcryptjs');
      // 向外共享用户注册时的处理函数。
      exports.regUser = (req,res) => {
          // 获取客户端提交到服务器的用户信息。
          const userinfo = req.body;
          // 判断客户端提交到服务器的用户信息是否合法。
          if (!userinfo.username || !userinfo.password) {
              return res.send({
                 status: 1,
                 message: '用户名或密码不合法'
              });
          }
          // 定义SQL语句，查询用户名是否被占用。
          const strSQL = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(strSQL,userinfo.username,(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.send({
                      status: 1,
                      message: err.message
                  });
              }
              // 判断用户名是否被占用。
              if (results.length > 0) {
                  return res.send({
                      status: 1,
                      message: '用户名已被占用'
                  });
              }
          });
          // 调用bcryptjs模块中的hashSync方法来加密用户密码。
          userinfo.password = bcryptjs.hashSync(userinfo.password,10);
          // 定义插入用户信息SQL语句。
          const inSQL = 'insert into ev_uesrs set ?';
          // 执行插入用户信息SQL语句。
          db.query(inSQL,{username: userinfo.username,password: userinfo.password},(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.send({
                     status: 1,
                     message: err.message 
                  });
              }
              // 判断是否真的插入用户信息成功。
              if (results.affectedRows !== 1) return res.send({
                  status:1,
                  message: '插入用户信息失败'
              });
              res.send({
                  status: 0,
                  message: '插入用户信息成功'
              });
          });
      }
      // 向外共享用户登录时的处理函数。
      exports.login = (req,res) => {
          res.send('login OK');
      }
      ```

      > 注：运行结果，如下图所示：
      >
      > ![169](imgs/169.gif)

  19. 优化 `res.send()` 函数，在api_server文件夹中的app.js文件中编写如下代码：

      ```javascript
      // 导入Express模块。
      const express = require('express');
      // 导入Cors模块。
      const cors = require('cors');
      // 实例化Web服务器对象。
      const app = express();
      // 导入router文件夹中的user.js文件。
      const router = require('./router/user.js');
      // 将Cors模块注册为全局中间件。
      app.use(cors());
      // 配置解析表单数据中间件。
      app.use(express.urlencoded({extended: false}));
      // 优化res.send()函数
      app.use((req,res,next) => {
          res.cc = function(err,status = 1) {
              res.send ({
                  status: status, // 可以直接简写成status
                  message: err instanceof Error ? err.message : err // 判断函数的第一个形参是否为错误对象，如果是就使用该错误对象中的meassage属性中的属性值，如果不是就直接输出第一个形参中的值。
              });
          }
          next();
      });
      // 使用router文件夹中的user.js文件。
      app.use('/api',router);
      // 启动Web服务器。
      app.listen(3006,() => {
          console.log('api_server is run in http://127.0.0.1');
      });
      ```

      > 注1：因为返回给用户的错误信息，基本上都是相同的，所以我们可以给 `res` 对象封装一个函数，这样可以简化我们的代码。
      >
      > 注2：给 `res` 对象封装的函数，要将其注册为中间件，并且要在路由的前面注册，这样才能使用。

  20. 优化了 `res.send()` 函数后，我们就可以将router_Handler文件夹中的user.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块。
      const bcryptjs = require('bcryptjs');
      // 向外共享用户注册时的处理函数。
      exports.regUser = (req,res) => {
          // 获取客户端提交到服务器的用户信息。
          const userinfo = req.body;
          // 判断客户端提交到服务器的用户信息是否合法。
          if (!userinfo.username || !userinfo.password) {
              return res.cc('用户名或密码不合法');
          }
          // 定义SQL语句，查询用户名是否被占用。
          const strSQL = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(strSQL,userinfo.username,(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断用户名是否被占用。
              if (results.length > 0) {
                  return res.cc('用户名已被占用');
              }
          });
          // 调用bcryptjs模块中的hashSync方法来加密用户密码。
          userinfo.password = bcryptjs.hashSync(userinfo.password,10);
          // 定义插入用户信息SQL语句。
          const inSQL = 'insert into ev_users set ?';
          // 执行插入用户信息SQL语句。
          db.query(inSQL,{username: userinfo.username,password: userinfo.password},(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断是否真的插入用户信息成功。
              if (results.affectedRows !== 1) return res.cc('插入用户信息失败');
              res.send({
                  status: 0,
                  message: '插入用户信息成功'
              });
          });
      }
      // 向外共享用户登录时的处理函数。
      exports.login = (req,res) => {
          res.send('login OK');
      }
      ```

      > 注：运行结果，如下图所示：
      >
      > ![170](imgs/170.gif)

  21. 在api_server文件夹目录中，使用终端执行 `npm i joi @escook/express-joi` 命令来安装joi模块和@escook/express-joi模块，来进行表单数据验证，如下图所示：

      ![171](imgs/171.gif)

      > 注1：表单数据验证就是验证前端传输过来的数据是否合法合规，并且表单验证的原则是前端验证为辅，后端验证为主，后端永远不要相信前端提交过来的任何内容，在实际开发中，前后端都需要对表单的数据进行合法性的验证，而且后端做为数据合法性验证的最后一个关口，在拦截非法数据方面，起到了至关重要的作用，如果单纯的使用 `if···else···` 的形式来对数据合法性进行验证，那么会出现效率低下、出错率高、维护性差等缺点，因此推荐使用第三方数据验证模块，来降低出错率并提高验证的效率和可维护性，让后端程序员把更多的精力放在核心业务逻辑的处理上。
      >
      > 注2：joi模块是用来为表单中携带的每个数据项，定义验证规则的。
      >
      > 注3：@escook/express-joi模块是用来实现自动对表单数据进行验证的功能。

  22. 在api_server文件夹中新建一个schema文件夹，并在该文件夹中新建一个user.js文件，该文件是用于定义表单数据验证规则的，如下图所示：

      ![172](imgs/172.gif)

  23. 在schema文件夹中的user.js文件中使用joi模块，来定义表单数据验证规则，代码如下所示：

      ```javascript
      // 导入joi模块。
      const joi = require('joi');
      // 定义用户名的验证规则。
      const username = joi.string().alphanum().min(1).max(18).required();
      // 定义密码的验证规则。
      const password = joi.string().pattern(/^[\s]{6,12}$/).required();
      // 将定义的验证规则打包成对象共享出去。
      exports.reg_login_schema = {
          body: {
              username,
              password
          }
      }
      ```

      > 注1：joi模块中的 `string()` 方法是验证表单数据必须是字符串。
      >
      > 注2：joi模块中的 `alphanum()` 方法是验证表单数据必须只能是a-zA-Z0-9的字符串。
      >
      > 注3：joi模块中的 `min(length)` 方法是验证表单数据最小的长度必须是多少，其中length是用来设置最小的长度是多少的，只能是数字。
      >
      > 注4：joi模块中的 `max(length)` 方法是验证表单数据最大的长度必须是多少，其中length是用来设置最大的长度是多少的，只能是数字。
      >
      > 注5：joi模块中的 `required()` 方法是验证表单数据必须不为空，也就是表单数据不能是undefined。
      >
      > 注6：joi模块中的 `pattern(正则表达式)` 方法是验证表单数据必须是符合设置的正则表达式的规则。
      >
      > 注7：如果你要验证 `req.body` 对象中的参数时，就将定义的验证规则打包成 `body` 对象共享出去，如以上代码所示。
      >
      > 注8：如果你要验证 `req.params` 对象中的参数时，就将定义的验证规则打包成 `params` 对象共享出去。

  24. 将router文件夹中的user.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入Express模块。
      const express = require('express');
      // 导入router_Handler文件夹中的user.js文件。
      const router_Handler = require('../router_Handler/user.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const {req_login_schema} = require('../schema/user.js');
      // 创建路由对象。
      const router = express.Router();
      // 用户注册接口。
      // 在注册新用户的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证，在数据验证通过后，会把这次请求流转给后面的路由处理函数，但是如果数据验证失败，那么就会终止后续代码的执行，并抛出一个全局的Error错误，我们可以进入全局错误级别中间件中来进行处理。
      router.post('/reguser',expressJoi(req_login_schema),router_Handler.regUser);
      // 用户登录接口。
      router.post('/login',router_Handler.login);
      // 向往共享router对象。
      module.exports = router;
      ```

      > 注：需要将验证规则对象传递给@escook/express-joi模块。

  25. 将api_server文件夹中的app.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入Express模块。
      const express = require('express');
      // 导入Cors模块。
      const cors = require('cors');
      // 实例化Web服务器对象。
      const app = express();
      // 导入router文件夹中的user.js文件。
      const router = require('./router/user.js');
      // 导入joi模块。
      const joi = require('joi');
      // 将Cors模块注册为全局中间件。
      app.use(cors());
      // 配置解析表单数据中间件。
      app.use(express.urlencoded({extended: false}));
      // 优化res.send()函数
      app.use((req,res,next) => {
          res.cc = function(err,status = 1) {
              res.send ({
                  status: status, // 可以直接简写成status
                  message: err instanceof Error ? err.message : err // 判断函数的第一个形参是否为错误对象，如果是就使用该错误对象中的meassage属性中的属性值，如果不是就直接输出第一个形参中的值。
              });
          }
          next();
      });
      // 使用router文件夹中的user.js文件。
      app.use('/api',router);
      // 定义错误级别的全局中间件。
      app.use((err,req,res,next) => {
          // 判断是否为表单数据验证失败所导致的错误，如果是就返回表单数据验证失败，如果不是就返回未知错误。
          if (err instanceof joi.ValidationError) return res.cc(err);
          res.cc(err);
      });
      // 启动Web服务器。
      app.listen(3006,() => {
          console.log('api_server is run in http://127.0.0.1');
      });
      ```

      > 注：我们可以在全局错误中间件中处理表单数据验证失败后的相关操作。

  26. 有了第三方表单数据验证后，我们就可以将router_Handler文件夹中的user.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块。
      const bcryptjs = require('bcryptjs');
      // 向外共享用户注册时的处理函数。
      exports.regUser = (req,res) => {
          // 获取客户端提交到服务器的用户信息。
          const userinfo = req.body;
          // 定义SQL语句，查询用户名是否被占用。
          const strSQL = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(strSQL,userinfo.username,(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断用户名是否被占用。
              if (results.length > 0) {
                  return res.cc('用户名已被占用');
              }
          });
          // 调用bcryptjs模块中的hashSync方法来加密用户密码。
          userinfo.password = bcryptjs.hashSync(userinfo.password,10);
          // 定义插入用户信息SQL语句。
          const inSQL = 'insert into ev_users set ?';
          // 执行插入用户信息SQL语句。
          db.query(inSQL,{username: userinfo.username,password: userinfo.password},(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断是否真的插入用户信息成功。
              if (results.affectedRows !== 1) return res.cc('插入用户信息失败');
              res.send({
                  status: 0,
                  message: '插入用户信息成功'
              });
          });
      }
      // 向外共享用户登录时的处理函数。
      exports.login = (req,res) => {
          res.send('login OK');
      }
      ```

      > 注1：有了第三方表单数据验证后，我们就无需使用 `if···else···` 语句来进行表单数据验证了。
      >
      > 注2：运行结果，如下图所示：
      >
      > ![173](imgs/173.gif)

  27. 用户在登录时，我们也要进行表单数据验证，所以我们可以将router文件夹中的user.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入Express模块。
      const express = require('express');
      // 导入router_Handler文件夹中的user.js文件。
      const router_Handler = require('../router_Handler/user.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const { reg_login_schema } = require('../schema/user.js');
      // 创建路由对象。
      const router = express.Router();
      // 用户注册接口。
      // 在注册新用户的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证，在数据验证通过后，会把这次请求流转给后面的路由处理函数，但是如果数据验证失败，那么就会终止后续代码的执行，并抛出一个全局的Error错误，我们可以进入全局错误级别中间件中来进行处理。
      router.post('/reguser',expressJoi(reg_login_schema),router_Handler.regUser);
      // 用户登录接口。
      // 在用户登录的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
      router.post('/login',expressJoi(reg_login_schema),router_Handler.login);
      // 向往共享router对象。
      module.exports = router;
      ```

      > 注1：因为定义表单数据验证规则时，就将用户的用户名和密码的验证进行了定义，所以这里直接调用@escook/express-joi模块即可。
      >
      > 注2：运行结果，如下图所示：
      >
      > ![174](imgs/174.gif)

  28. 用户在登录时我们需要根据用户的用户名来在数据库中查找相对应的用户数据，所以我们可以将router_Handler文件夹中的user.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块。
      const bcryptjs = require('bcryptjs');
      // 向外共享用户注册时的处理函数。
      exports.regUser = (req,res) => {
          // 获取客户端提交到服务器的用户信息。
          const userinfo = req.body;
          // 定义SQL语句，查询用户名是否被占用。
          const strSQL = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(strSQL,userinfo.username,(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断用户名是否被占用。
              if (results.length > 0) {
                  return res.cc('用户名已被占用');
              }
          });
          // 调用bcryptjs模块中的hashSync方法来加密用户密码。
          userinfo.password = bcryptjs.hashSync(userinfo.password,10);
          // 定义插入用户信息SQL语句。
          const inSQL = 'insert into ev_users set ?';
          // 执行插入用户信息SQL语句。
          db.query(inSQL,{username: userinfo.username,password: userinfo.password},(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断是否真的插入用户信息成功。
              if (results.affectedRows !== 1) return res.cc('插入用户信息失败');
              res.send({
                  status: 0,
                  message: '插入用户信息成功'
              });
          });
      }
      // 向外共享用户登录时的处理函数。
      exports.login = (req,res) => {
          // 接收表单数据。
          const userinfo = req.body;
          // 定义查找数据的SQL语句。
          const sqlStr = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(sqlStr,userinfo.username,(err,results) => {
              // 如果SQL语句执行失败将错误信息发送给客户端。
              if (err) return res.cc(err);
              // 如果在数据库中查询不到该用户的用户名，需要返回没有该用户名的错误信息。
              if (results.length !== 1) return res.cc('没有该用户名');
              res.send('login OK');
          });
      }
      ```

      > 注：运行结果，如下图所示：
      >
      > ![175](imgs/175.gif)

  29. 当我们在数据库中查找到了用户的用户数据时，我们还需要对其密码进行验证，所以我们可以将router_Handler文件夹中的user.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块。
      const bcryptjs = require('bcryptjs');
      // 向外共享用户注册时的处理函数。
      exports.regUser = (req,res) => {
          // 获取客户端提交到服务器的用户信息。
          const userinfo = req.body;
          // 定义SQL语句，查询用户名是否被占用。
          const strSQL = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(strSQL,userinfo.username,(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断用户名是否被占用。
              if (results.length > 0) {
                  return res.cc('用户名已被占用');
              }
          });
          // 调用bcryptjs模块中的hashSync方法来加密用户密码。
          userinfo.password = bcryptjs.hashSync(userinfo.password,10);
          // 定义插入用户信息SQL语句。
          const inSQL = 'insert into ev_users set ?';
          // 执行插入用户信息SQL语句。
          db.query(inSQL,{username: userinfo.username,password: userinfo.password},(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断是否真的插入用户信息成功。
              if (results.affectedRows !== 1) return res.cc('插入用户信息失败');
              res.send({
                  status: 0,
                  message: '插入用户信息成功'
              });
          });
      }
      // 向外共享用户登录时的处理函数。
      exports.login = (req,res) => {
          // 接收表单数据。
          const userinfo = req.body;
          // 定义查找数据的SQL语句。
          const sqlStr = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(sqlStr,userinfo.username,(err,results) => {
              // 如果SQL语句执行失败将错误信息发送给客户端。
              if (err) return res.cc(err);
              // 如果在数据库中查询不到该用户的用户名，需要返回没有该用户名的错误信息。
              if (results.length !== 1) return res.cc('没有该用户名');
              // 验证用户输入的密码是否正确。
              const compareResult = bcryptjs.compareSync(userinfo.password,results[0].password);
              // 如果用户输入的密码是错误的，则返回用户名密码错误的错误信息。
              if (!compareResult) return res.cc('用户名密码错误');
              res.send('login OK');
          });
      }
      ```

      > 注1：因为我们之前使用了bcryptjs模块来将用户输入的密码进行加密存储，所以我们要判断用户输入的密码是否正确时，我们可以使用bcryptjs模块中的 `compareSync(用户输入的密码,数据库存储的用户的密码)` 方法来进行判断，如果用户输入的密码和数据库存储的用户的密码是相同的，那么 `compareSync(用户输入的密码,数据库存储的用户的密码)` 方法就会返回 `true` 否则返回 `false`。
      >
      > 注2：运行结果，如下图所示：
      >
      > ![176](imgs/176.gif)

  30. 在api_server文件夹目录中，使用终端执行 `npm i jsonwebtoken` 命令来安装jsonwebtoken模块，来生成Token字符串，如下图所示：

      ![177](imgs/177.gif)

  31. 在router_Handler文件夹中新建一个config.js文件，该文件是一个配置文件，用来存储生成Token字符串所需要的参数配置的，如下图所示：

      ![178](imgs/178.gif)

  32. 向router_Handler文件夹中的config.js文件中，添加以下代码：

      ```javascript
      // 向外共享Token字符串所需要的参数配置。
      module.exports = {
          // 设置加密和解密Token字符串的密钥。
          jwtSecretKey: 'Hello Word',
          // 设置Token字符串的有效期。
          expiresIn: '10h'
      }
      ```

  33. 在router_Handler文件夹中的user.js文件中使用jsonwebtoken模块，来生成用户的Token字符串，代码如下所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块。
      const bcryptjs = require('bcryptjs');
      // 导入jsonwebtoken模块。
      const jwt = require('jsonwebtoken');
      // 导入生成Token字符串所需要的参数配置。
      const config = require('./config.js');
      // 向外共享用户注册时的处理函数。
      exports.regUser = (req,res) => {
          // 获取客户端提交到服务器的用户信息。
          const userinfo = req.body;
          // 定义SQL语句，查询用户名是否被占用。
          const strSQL = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(strSQL,userinfo.username,(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断用户名是否被占用。
              if (results.length > 0) {
                  return res.cc('用户名已被占用');
              }
          });
          // 调用bcryptjs模块中的hashSync方法来加密用户密码。
          userinfo.password = bcryptjs.hashSync(userinfo.password,10);
          // 定义插入用户信息SQL语句。
          const inSQL = 'insert into ev_users set ?';
          // 执行插入用户信息SQL语句。
          db.query(inSQL,{username: userinfo.username,password: userinfo.password},(err,results) => {
              // SQL语句执行失败。
              if (err) {
                  return res.cc(err);
              }
              // 判断是否真的插入用户信息成功。
              if (results.affectedRows !== 1) return res.cc('插入用户信息失败');
              res.send({
                  status: 0,
                  message: '插入用户信息成功'
              });
          });
      }
      // 向外共享用户登录时的处理函数。
      exports.login = (req,res) => {
          // 接收表单数据。
          const userinfo = req.body;
          // 定义查找数据的SQL语句。
          const sqlStr = 'select * from ev_users where username=?';
          // 执行SQL语句。
          db.query(sqlStr,userinfo.username,(err,results) => {
              // 如果SQL语句执行失败将错误信息发送给客户端。
              if (err) return res.cc(err);
              // 如果在数据库中查询不到该用户的用户名，需要返回没有该用户名的错误信息。
              if (results.length !== 1) return res.cc('没有该用户名');
              // 验证用户输入的密码是否正确。
              const compareResult = bcryptjs.compareSync(userinfo.password,results[0].password);
              // 如果用户输入的密码是错误的，则返回用户名密码错误的错误信息。
              if (!compareResult) return res.cc('用户名密码错误');
              // 剔除用户信息中的密码和头像。
              const user = { ...results[0], password: '', user_pic: '' }
              // 将剔除完毕的用户信息，生成为Token字符串。
              const tokenStr  = jwt.sign(user,config.jwtSecretKey,{ expiresIn: config.expiresIn });
              // 用户登录成功后，将生成的Token字符串传递给客户端。
              res.send({
                  status: 0,
                  message: '登录成功',
                  token: 'Bearer ' + tokenStr
              });
          });
      }
      ```

      > 注1：为了方便客户端使用Token字符串，我们可以直接在服务器端上给Token字符串，直接拼上 `Bearer ` 前缀，这样客户端在使用Token字符串时，就无需添加 `Bearer ` 前缀。
      >
      > 注2：运行结果，如下图所示：
      >
      > ![179](imgs/179.gif)

  34. 在api_server文件夹目录中，使用终端执行 `npm i express-jwt` 命令来安装express-jwt模块，用来解析客户端所发送过来的Token字符串，如下图所示：

      ![180](imgs/180.gif)

  35. 在api_server文件夹中的app.js文件中使用express-jwt模块，来解析客户端传递过来的Token字符串，代码如下所示：

      ```javascript
      // 导入Express模块。
      const express = require('express');
      // 导入Cors模块。
      const cors = require('cors');
      // 实例化Web服务器对象。
      const app = express();
      // 导入router文件夹中的user.js文件。
      const router = require('./router/user.js');
      // 导入joi模块。
      const joi = require('joi');
      // 导入express-jwt模块。
      const {expressjwt: expressJWT} = require('express-jwt');
      // 导入生成Token字符串所需要的参数配置。
      const config = require('./router_Handler/config.js');
      // 将Cors模块注册为全局中间件。
      app.use(cors());
      // 配置解析表单数据中间件。
      app.use(express.urlencoded({extended: false}));
      // 优化res.send()函数
      app.use((req,res,next) => {
          res.cc = function(err,status = 1) {
              res.send ({
                  status: status, // 可以直接简写成status
                  message: err instanceof Error ? err.message : err // 判断函数的第一个形参是否为错误对象，如果是就使用该错误对象中的meassage属性中的属性值，如果不是就直接输出第一个形参中的值。
              });
          }
          next();
      });
      // 将express-jwt模块注册为全局中间件，并使用express-jwt模块来解析客户端传递过来的Token字符串，并设置那些请求路径下无需解析客户端传递过来的Token字符串。
      app.use(expressJWT({secret: config.jwtSecretKey,algorithms: ['HS256']}).unless({path: [/^\/api\//]}));
      // 使用router文件夹中的user.js文件。
      app.use('/api',router);
      // 定义错误级别的全局中间件。
      app.use((err,req,res,next) => {
          // 判断是否为表单数据验证失败所导致的错误，如果是就返回表单数据验证失败，如果不是就返回未知错误。
          if (err instanceof joi.ValidationError) return res.cc(err);
          // 判断是否为解析客户端传递过来的Token字符串是错误的，如果是错误的就返回Token字符串验证失败，如果不是就返回未知错误。
          if (err.name === 'UnauthorizedError') return res.cc('Token字符串验证失败');
          res.cc(err);
      });
      // 启动Web服务器。
      app.listen(3006,() => {
          console.log('api_server is run in http://127.0.0.1');
      });
      ```

      > 注1：注册express-jwt模块为全局中间件时，必须将其写在所有路由接口的前面，这样才能在每次请求接口时，就要先经过解析Token字符串的这个步骤，从而达到验证用户的目的。
      >
      > 注2：运行结果，如下图所示：
      >
      > ![181](imgs/181.gif)

  36. 在router文件夹中新建一个userinfo.js文件，该文件是用来获取用户基本信息的，如下图所示：

      ![182](imgs/182.gif)

  37. 初始化router文件夹中的userinfo.js文件，如以下所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 获取用户基本信息。
      router.get('/userinfo',(req, res) => {
          res.send('ok');
      });
      // 向外共享路由对象。
      module.exports = router;
      ```

  38. 将api_server文件夹中的app.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入Express模块。
      const express = require('express');
      // 导入Cors模块。
      const cors = require('cors');
      // 实例化Web服务器对象。
      const app = express();
      // 导入router文件夹中的user.js文件。
      const router = require('./router/user.js');
      // 导入joi模块。
      const joi = require('joi');
      // 导入express-jwt模块。
      const {expressjwt: expressJWT} = require('express-jwt');
      // 导入生成Token字符串所需要的参数配置。
      const config = require('./router_Handler/config.js');
      // 导入router文件夹中的userinfo.js文件。
      const userinfo = require('./router/userinfo.js');
      // 将Cors模块注册为全局中间件。
      app.use(cors());
      // 配置解析表单数据中间件。
      app.use(express.urlencoded({extended: false}));
      // 优化res.send()函数
      app.use((req,res,next) => {
          res.cc = function(err,status = 1) {
              res.send ({
                  status: status, // 可以直接简写成status
                  message: err instanceof Error ? err.message : err // 判断函数的第一个形参是否为错误对象，如果是就使用该错误对象中的meassage属性中的属性值，如果不是就直接输出第一个形参中的值。
              });
          }
          next();
      });
      // 将express-jwt模块注册为全局中间件，并使用express-jwt模块来解析客户端传递过来的Token字符串，并设置那些请求路径下无需解析客户端传递过来的Token字符串。
      app.use(expressJWT({secret: config.jwtSecretKey,algorithms: ['HS256']}).unless({path: [/^\/api\//]}));
      // 使用router文件夹中的user.js文件。
      app.use('/api',router);
      // 使用router文件夹中的userinfo.js文件。
      app.use('/my',userinfo);
      // 定义错误级别的全局中间件。
      app.use((err,req,res,next) => {
          // 判断是否为表单数据验证失败所导致的错误，如果是就返回表单数据验证失败，如果不是就返回未知错误。
          if (err instanceof joi.ValidationError) return res.cc(err);
          // 判断是否为解析客户端传递过来的Token字符串是错误的，如果是错误的就返回Token字符串验证失败，如果不是就返回未知错误。
          if (err.name === 'UnauthorizedError') return res.cc('Token字符串验证失败');
          res.cc(err);
      });
      // 启动Web服务器。
      app.listen(3006,() => {
          console.log('api_server is run in http://127.0.0.1');
      });
      ```

      > 注1：因为我们之前在使用express-jwt模块时，将api路径下的请求都设置成了无需解析Token字符串，并且把其它路径下的请求设置成了需要解析Token字符串，所以我们在其它路径下发起请求，需要在请求头中添加需要解析的Token字符串。
      >
      > 注2：运行结果，如下图所示：
      >
      > ![183](imgs/183.gif)

  39. 在router_Handler文件夹中新建一个userinfo.js文件，该文件是用于抽离用户路由模块文件中的处理函数的，如下图所示：

      ![184](imgs/184.gif)

  40. 初始化router_Handler文件夹中userinfo.js文件，如以下代码所示：

      ```javascript
      // 向外共享获取用户信息时的处理函数
      exports.getUserInfo = (req,res) => {
          res.send('ok');
      }
      ```

  41. 将router文件夹中的userinfo.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 向外共享路由对象。
      module.exports = router;
      ```

  42. 在router_Handler文件夹中的userinfo.js文件中编写获取用户信息所需要的函数，如以下代码所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 向外共享获取用户信息时的处理函数。
      exports.getUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id查询用户的基本信息。
          const sqlstr = 'select id, username, nickname, email, user_pic from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlstr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是没有查询到用户信息。
              if (results.length !== 1) return res.cc('获取用户信息失败！');
              // SQL语句执行成功，并查询到了用户的基本信息，就将用户信息发送给客户端。
              res.send({
                  status: 0,
                  message: '获取用户信息成功',
                  data: results[0]
              });
          });
      }
      ```

      > 注1：SQL语句为什么不获取用户的所有信息呢，是因为为了防止用户的密码泄露，所以我们需要排除用户信息中的password字段。
      >
      > 注2：`req` 对象中的 `auth` 属性是express-jwt模块解析Token字符串成功后，自动帮我们挂载上去的。
      >
      > 注3：运行结果，如下图所示：
      >
      > ![185](imgs/185.gif)

  43. 在router文件夹中的userinfo.js文件中，新增更新用户基本信息的路由，如以下代码所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      router.post('/userinfo',(req,res) => {
          res.send('ok');
      });
      // 向外共享路由对象。
      module.exports = router;
      ```

  44. 抽离更新用户基本信息路由中的处理函数，将抽离的函数写在router_Handler文件夹中的userinfo.js文件中，如以下代码所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 向外共享获取用户信息时的处理函数。
      exports.getUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id查询用户的基本信息。
          const sqlstr = 'select id, username, nickname, email, user_pic from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlstr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是没有查询到用户信息。
              if (results.length !== 1) return res.cc('获取用户信息失败！');
              // SQL语句执行成功，并查询到了用户的基本信息，就将用户信息发送给客户端。
              res.send({
                  status: 0,
                  message: '获取用户信息成功',
                  data: results[0]
              });
          });
      }
      // 向外共享更新用户信息时的处理函数。
      exports.updateUserInfo = (req,res) => {
          res.send('ok');
      }
      ```

  45. 将router文件夹中的userinfo.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      router.post('/userinfo',userinfo_handler.updateUserInfo);
      // 向外共享路由对象。
      module.exports = router;
      ```

      > 注：运行结果，如下图所示：
      >
      > ![186](imgs/186.gif)

  46. 在schema文件夹中的user.js文件中，新增用户在更新用户基本信息时，需要编写对要更新的内容进行数据验证的规则，如以下代码所示：

      ```javascript
      // 导入joi模块。
      const joi = require('joi');
      // 定义用户名的验证规则。
      const username = joi.string().alphanum().min(1).max(18).required();
      // 定义密码的验证规则。
      const password = joi.string().pattern(/^[\S]{6,12}$/).required();
      // 定义id的验证规则。
      const id = joi.number().integer().min(1).required();
      // 定义昵称的验证规则。
      const nickname = joi.string().required();
      // 定义邮箱的验证规则。
      const email = joi.string().email().required();
      // 将定义的验证规则打包成对象共享出去。
      exports.reg_login_schema = {
          body: {
              username,
              password
          }
      }
      // 将定义的验证规则打包成对象共享出去。
      exports.update_userinfo_schema = {
          body: {
              id,
              nickname,
              email
          }
      }
      ```

  47. 将router文件夹中的userinfo.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const { update_userinfo_schema } = require('../schema/user.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      // 在更新用户基本信息的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
      router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo);
      // 向外共享路由对象。
      module.exports = router;
      ```

      > 注：运行结果，如下图所示：
      >
      > ![187](imgs/187.gif)

  48. 在router_Handler文件夹中的userinfo.js文件中编写更新用户基本信息所需要的函数，如以下代码所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 向外共享获取用户信息时的处理函数。
      exports.getUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id查询用户的基本信息。
          const sqlstr = 'select id, username, nickname, email, user_pic from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlstr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是没有查询到用户信息。
              if (results.length !== 1) return res.cc('获取用户信息失败！');
              // SQL语句执行成功，并查询到了用户的基本信息，就将用户信息发送给客户端。
              res.send({
                  status: 0,
                  message: '获取用户信息成功',
                  data: results[0]
              });
          });
      }
      // 向外共享更新用户信息时的处理函数。
      exports.updateUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id来查询需要更新用户基本信息的用户，并将其基本信息进行修改。
          const sqlstr = 'update ev_users set ? where id=?';
          // 执行SQL语句。
          db.query(sqlstr,[req.body,req.body.id],(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if(results.affectedRows !== 1) return res.cc('更新用户的基本信息失败');
              // SQL语句执行成功。
              res.cc('更新用户信息成功！',0);
          });
      }
      ```

      > 注：运行结果，如下图所示：
      >
      > ![188](imgs/188.gif)

  49. 在router文件夹中的userinfo.js文件中，新增重置用户密码的路由，如以下代码所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const { update_userinfo_schema } = require('../schema/user.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      // 在更新用户基本信息的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
      router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo);
      // 重置用户密码。
      router.post('/updatepwd',(req,res) => {
          res.send('ok');
      });
      // 向外共享路由对象。
      module.exports = router;
      ```

  50. 抽离重置用户密码路由中的处理函数，将抽离的函数写在router_Handler文件夹中的userinfo.js文件中，如以下代码所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 向外共享获取用户信息时的处理函数。
      exports.getUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id查询用户的基本信息。
          const sqlstr = 'select id, username, nickname, email, user_pic from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlstr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是没有查询到用户信息。
              if (results.length !== 1) return res.cc('获取用户信息失败！');
              // SQL语句执行成功，并查询到了用户的基本信息，就将用户信息发送给客户端。
              res.send({
                  status: 0,
                  message: '获取用户信息成功',
                  data: results[0]
              });
          });
      }
      // 向外共享更新用户信息时的处理函数。
      exports.updateUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id来查询需要更新用户基本信息的用户，并将其基本信息进行修改。
          const sqlstr = 'update ev_users set ? where id=?';
          // 执行SQL语句。
          db.query(sqlstr,[req.body,req.body.id],(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if(results.affectedRows !== 1) return res.cc('更新用户的基本信息失败');
              // SQL语句执行成功。
              res.cc('更新用户信息成功！',0);
          });
      }
      // 向外共享重置用户密码时的处理函数。
      exports.updatePassword = (req,res) => {
          res.send('ok');
      }
      ```

  51. 将router文件夹中的userinfo.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const { update_userinfo_schema } = require('../schema/user.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      // 在更新用户基本信息的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
      router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo);
      // 重置用户密码。
      router.post('/updatepwd',userinfo_handler.updatePassword);
      // 向外共享路由对象。
      module.exports = router;
      ```

      > 注：运行结果，如下图所示：
      >
      > ![189](imgs/189.gif)

  52. 在schema文件夹中的user.js文件中，重置用户密码时，需要编写对用户的旧密码和新密码进行数据验证的规则，如以下代码所示：

      ```javascript
      // 导入joi模块。
      const joi = require('joi');
      // 定义用户名的验证规则。
      const username = joi.string().alphanum().min(1).max(18).required();
      // 定义密码的验证规则。
      const password = joi.string().pattern(/^[\S]{6,12}$/).required();
      // 定义id的验证规则。
      const id = joi.number().integer().min(1).required();
      // 定义昵称的验证规则。
      const nickname = joi.string().required();
      // 定义邮箱的验证规则。
      const email = joi.string().email().required();
      // 将定义的验证规则打包成对象共享出去。
      exports.reg_login_schema = {
          body: {
              username,
              password
          }
      }
      // 将定义的验证规则打包成对象共享出去。
      exports.update_userinfo_schema = {
          body: {
              id,
              nickname,
              email
          }
      }
      // 将定义的验证规则打包成对象共享出去。
      exports.update_password_schema = {
          body: {
              oldPwd: password,
              newPwd: joi.not(joi.ref('oldPwd')).concat(password)
          }
      }
      ```

      > 注1：joi模块中的 `ref('值')` 方法是验证表单数据是否和设置的值一样。
      >
      > 注2：joi模块中的 `not(值)` 方法是验证表单数据是否和设置的值不一样。
      >
      > 注3：joi模块中的 `concat(验证规则)` 方法是用于合并两个不同的数据验证规则的。
      >
      > 注4：为什么要验证用户的旧密码和新密码是否一样呢，是因为如果用户的旧密码和新密码是一样的，那么就没有重置密码的意义了。

  53. 将router文件夹中的userinfo.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const { update_userinfo_schema,update_password_schema } = require('../schema/user.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      // 在更新用户基本信息的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
      router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo);
      // 重置用户密码。
      router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handler.updatePassword);
      // 向外共享路由对象。
      module.exports = router;
      ```

      > 注：运行结果，如下图所示：
      >
      > ![190](imgs/190.gif)

  54. 在router_Handler文件夹中的userinfo.js文件中编写重置用户密码所需要的函数，如以下代码所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块
      const bcryptjs = require('bcryptjs');
      // 向外共享获取用户信息时的处理函数。
      exports.getUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id查询用户的基本信息。
          const sqlstr = 'select id, username, nickname, email, user_pic from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlstr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是没有查询到用户信息。
              if (results.length !== 1) return res.cc('获取用户信息失败！');
              // SQL语句执行成功，并查询到了用户的基本信息，就将用户信息发送给客户端。
              res.send({
                  status: 0,
                  message: '获取用户信息成功',
                  data: results[0]
              });
          });
      }
      // 向外共享更新用户信息时的处理函数。
      exports.updateUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id来查询需要更新用户基本信息的用户，并将其基本信息进行修改。
          const sqlstr = 'update ev_users set ? where id=?';
          // 执行SQL语句。
          db.query(sqlstr,[req.body,req.body.id],(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if(results.affectedRows !== 1) return res.cc('更新用户的基本信息失败');
              // SQL语句执行成功。
              res.cc('更新用户信息成功！',0);
          });
      }
      // 向外共享重置用户密码时的处理函数。
      exports.updatePassword = (req,res) => {
          // 定义SQL语句，根据用户的id来查询需要重置密码的用户是否存在。
          const sqlStr = 'select * from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlStr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if(results.length !== 1) return res.cc('用户不存在');
              // 判断用户发送的旧密码是否和用户的原密码相同。
              const compareResult = bcryptjs.compareSync(req.body.oldPwd, results[0].password);
              if (!compareResult) return res.cc('原密码错误！');
              // 定义SQL语句，根据用户的id来重置用户的密码。
              const sqlStr = 'update ev_users set password=? where id=?';
              // 对用户发送过来的新密码进行加密处理。
              const newPwd = bcryptjs.hashSync(req.body.newPwd, 10);
              // 执行SQL语句。
              db.query(sqlStr,[newPwd,req.auth.id],(err,results) => {
                  // SQL语句执行失败。
                  if (err) return res.cc(err);
                  // SQL语句执行成功，但是影响行数不等于1。
                  if (results.affectedRows !== 1) return res.cc('更新密码失败！');
                  // 更新密码成功。
                  res.cc('更新密码成功！', 0);
              });
          });
      }
      ```

      > 注1：因为用户传递过来的旧密码是明文，而用户存储在数据库中的密码是经过bcryptjs模块加密过的，所以我们不能直接判断用户的旧密码和用户存储在数据库中的密码是否相同，但是我们可以通过bcryptjs模块中的 `compareSync(值1,值2)` 方法来判断经过bcryptjs模块加密过后的值1和值2是否相同，如果相同 `compareSync(值1,值2)` 方法会返回true，否则会返回false。
      >
      > 注2：因为用户传递过来的新密码是明文，所以我们将用户的新密码存储在数据库中时，还需将用户的新密码经过bcryptjs模块加密。
      >
      > 注3：运行结果，如下图所示：
      >
      > ![191](imgs/191.gif)

  55. 在router文件夹中的userinfo.js文件中，新增更新用户头像的路由，如以下代码所示：

      ```JavaScript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const { update_userinfo_schema,update_password_schema } = require('../schema/user.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      // 在更新用户基本信息的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
      router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo);
      // 重置用户密码。
      router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handler.updatePassword);
      // 更新用户头像。
      router.post('/update/avatar',(req,res) => {
          res.send('ok');
      });
      // 向外共享路由对象。
      module.exports = router;
      ```

  56. 抽离更新用户头像路由中的处理函数，将抽离的函数写在router_Handler文件夹中的userinfo.js文件中，如以下代码所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块
      const bcryptjs = require('bcryptjs');
      // 向外共享获取用户信息时的处理函数。
      exports.getUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id查询用户的基本信息。
          const sqlstr = 'select id, username, nickname, email, user_pic from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlstr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是没有查询到用户信息。
              if (results.length !== 1) return res.cc('获取用户信息失败！');
              // SQL语句执行成功，并查询到了用户的基本信息，就将用户信息发送给客户端。
              res.send({
                  status: 0,
                  message: '获取用户信息成功',
                  data: results[0]
              });
          });
      }
      // 向外共享更新用户信息时的处理函数。
      exports.updateUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id来查询需要更新用户基本信息的用户，并将其基本信息进行修改。
          const sqlstr = 'update ev_users set ? where id=?';
          // 执行SQL语句。
          db.query(sqlstr,[req.body,req.body.id],(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if(results.affectedRows !== 1) return res.cc('更新用户的基本信息失败');
              // SQL语句执行成功。
              res.cc('更新用户信息成功！',0);
          });
      }
      // 向外共享重置用户密码时的处理函数。
      exports.updatePassword = (req,res) => {
          // 定义SQL语句，根据用户的id来查询需要重置密码的用户是否存在。
          const sqlStr = 'select * from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlStr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if(results.length !== 1) return res.cc('用户不存在');
              // 判断用户发送的旧密码是否和用户的原密码相同。
              const compareResult = bcryptjs.compareSync(req.body.oldPwd, results[0].password);
              if (!compareResult) return res.cc('原密码错误！');
              // 定义SQL语句，根据用户的id来重置用户的密码。
              const sqlStr = 'update ev_users set password=? where id=?';
              // 对用户发送过来的新密码进行加密处理。
              const newPwd = bcryptjs.hashSync(req.body.newPwd, 10);
              // 执行SQL语句。
              db.query(sqlStr,[newPwd,req.auth.id],(err,results) => {
                  // SQL语句执行失败。
                  if (err) return res.cc(err);
                  // SQL语句执行成功，但是影响行数不等于1。
                  if (results.affectedRows !== 1) return res.cc('更新密码失败！');
                  // 更新密码成功。
                  res.cc('更新密码成功！', 0);
              });
          });
      }
      // 向外共享更新用户头像时的处理函数。
      exports.updateAvatar = (req,res) => {
          res.send('ok');
      }
      ```

  57. 将router文件夹中的userinfo.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const { update_userinfo_schema,update_password_schema } = require('../schema/user.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      // 在更新用户基本信息的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
      router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo);
      // 重置用户密码。
      router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handler.updatePassword);
      // 更新用户头像。
      router.post('/update/avatar',userinfo_handler.updateAvatar);
      // 向外共享路由对象。
      module.exports = router;
      ```

      > 注：运行结果，如下所示：
      >
      > ![192](imgs/192.gif)

  58. 在schema文件夹中的user.js文件中，更新用户头像时，需要编写对用户的头像的格式进行数据验证的规则，如以下代码所示：

      ```javascript
      // 导入joi模块。
      const joi = require('joi');
      const { use } = require('../router/user');
      // 定义用户名的验证规则。
      const username = joi.string().alphanum().min(1).max(18).required();
      // 定义密码的验证规则。
      const password = joi.string().pattern(/^[\S]{6,12}$/).required();
      // 定义id的验证规则。
      const id = joi.number().integer().min(1).required();
      // 定义昵称的验证规则。
      const nickname = joi.string().required();
      // 定义邮箱的验证规则。
      const email = joi.string().email().required();
      // 定义用户头像的验证规则。
      const avatar = joi.string().dataUri().required();
      // 将定义的验证规则打包成对象共享出去。
      exports.reg_login_schema = {
          body: {
              username,
              password
          }
      }
      // 将定义的验证规则打包成对象共享出去。
      exports.update_userinfo_schema = {
          body: {
              id,
              nickname,
              email
          }
      }
      // 将定义的验证规则打包成对象共享出去。
      exports.update_password_schema = {
          body: {
              oldPwd: password,
              newPwd: joi.not(joi.ref('oldPwd')).concat(password)
          }
      }
      // 将定义的验证规则打包成对象共享出去。
      exports.update_avatar_schema = {
          body: {
              avatar
          }
      }
      ```

      > 注1：joi模块中的 `dataUri()` 方法是验证表单数据是否是base64格式。
      >
      > 注2：base64格式的示例：`data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=`。
      >
      > 注3：为什么用户的头像要使用base64格式是因为用户的头像一般都是小图片，我们将小图片转为base64格式后，就可以减小图片的请求大小，从而减轻服务器的负担。

  59. 将router文件夹中的userinfo.js文件中的代码进行修改，如下所示：

      ```javascript
      // 导入express模块。
      const express = require('express');
      // 创建路由对象。
      const router = express.Router();
      // 导入router_Handler文件夹中的userinfo.js文件。
      const userinfo_handler = require('../router_Handler/userinfo.js');
      // 导入@escook/express-joi模块。
      const expressJoi = require('@escook/express-joi');
      // 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
      const { update_userinfo_schema,update_password_schema,update_avatar_schema } = require('../schema/user.js');
      // 获取用户基本信息。
      router.get('/userinfo',userinfo_handler.getUserInfo);
      // 更新用户基本信息。
      // 在更新用户基本信息的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
      router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo);
      // 重置用户密码。
      router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handler.updatePassword);
      // 更新用户头像。
      router.post('/update/avatar',expressJoi(update_avatar_schema),userinfo_handler.updateAvatar);
      // 向外共享路由对象。
      module.exports = router;
      ```

      > 注：运行结果，如下图所示：
      >
      > ![193](imgs/193.gif)

  60. 在router_Handler文件夹中的userinfo.js文件中编写更新用户头像所需要的函数，如以下代码所示：

      ```javascript
      // 导入db文件夹中的index.js文件。
      const db = require('../db/index.js');
      // 导入bcryptjs模块
      const bcryptjs = require('bcryptjs');
      // 向外共享获取用户信息时的处理函数。
      exports.getUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id查询用户的基本信息。
          const sqlstr = 'select id, username, nickname, email, user_pic from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlstr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是没有查询到用户信息。
              if (results.length !== 1) return res.cc('获取用户信息失败！');
              // SQL语句执行成功，并查询到了用户的基本信息，就将用户信息发送给客户端。
              res.send({
                  status: 0,
                  message: '获取用户信息成功',
                  data: results[0]
              });
          });
      }
      // 向外共享更新用户信息时的处理函数。
      exports.updateUserInfo = (req,res) => {
          // 定义SQL语句，根据用户的id来查询需要更新用户基本信息的用户，并将其基本信息进行修改。
          const sqlstr = 'update ev_users set ? where id=?';
          // 执行SQL语句。
          db.query(sqlstr,[req.body,req.body.id],(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if(results.affectedRows !== 1) return res.cc('更新用户的基本信息失败');
              // SQL语句执行成功。
              res.cc('更新用户信息成功！',0);
          });
      }
      // 向外共享重置用户密码时的处理函数。
      exports.updatePassword = (req,res) => {
          // 定义SQL语句，根据用户的id来查询需要重置密码的用户是否存在。
          const sqlStr = 'select * from ev_users where id=?';
          // 执行SQL语句。
          db.query(sqlStr,req.auth.id,(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if(results.length !== 1) return res.cc('用户不存在');
              // 判断用户发送的旧密码是否和用户的原密码相同。
              const compareResult = bcryptjs.compareSync(req.body.oldPwd, results[0].password);
              if (!compareResult) return res.cc('原密码错误！');
              // 定义SQL语句，根据用户的id来重置用户的密码。
              const sqlStr = 'update ev_users set password=? where id=?';
              // 对用户发送过来的新密码进行加密处理。
              const newPwd = bcryptjs.hashSync(req.body.newPwd, 10);
              // 执行SQL语句。
              db.query(sqlStr,[newPwd,req.auth.id],(err,results) => {
                  // SQL语句执行失败。
                  if (err) return res.cc(err);
                  // SQL语句执行成功，但是影响行数不等于1。
                  if (results.affectedRows !== 1) return res.cc('更新密码失败！');
                  // 更新密码成功。
                  res.cc('更新密码成功！', 0);
              });
          });
      }
      // 向外共享更新用户头像时的处理函数。
      exports.updateAvatar = (req, res) => {
          // 定义SQL语句，根据用户的id来更新用户的头像。
          const sql = 'update ev_users set user_pic=? where id=?';
          // 执行SQL语句。
          db.query(sql, [req.body.avatar, req.auth.id],(err,results) => {
              // SQL语句执行失败。
              if (err) return res.cc(err);
              // SQL语句执行成功，但是影响行数不等于1。
              if (results.affectedRows !== 1) return res.cc('更新头像失败！');
              // 更新头像成功。
              res.cc('更新头像成功！', 0);
          });
      }
      ```

      > 注：运行结果，如下图所示：
      >
      > ![194](imgs/194.gif)
