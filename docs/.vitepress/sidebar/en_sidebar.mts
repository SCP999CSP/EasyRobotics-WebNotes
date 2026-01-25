export default{
    '/Linux/':
    [{
      text: 'Linux Notes'},
      {
        text: 'Chapter 1: Linux Fundamentals and System Usage',
        link: '/Linux/1.0.0',
        items: 
        [
          { text: '1.1 What Is Linux', 
            link: '/Linux/1.1.0',
            collapsed: true,
            items: [
              { text: '1.1.1 Operating System vs Kernel', link: '/Linux/1.1.1' },
              { text: '1.1.2 Linux Use Cases', link: '/Linux/1.1.2' },
              { text: '1.1.3 Core Differences Between Linux and Windows', link: '/Linux/1.1.3' },
            ]
           },
           { text: '1.2 Linux Distributions Overview', 
            link: '/Linux/1.2.0',
            collapsed: true,
            items: [
              { text: '1.2.1 Ubuntu / Debian / CentOS (Overview)', link: '/Linux/1.2.1' },
              { text: '1.2.2 Desktop vs Server Editions', link: '/Linux/1.2.2' },
              { text: '1.2.3 Recommended Learning Environments', link: '/Linux/1.2.3' },
            ]
           },
           { text: '1.3 Linux System Structure Overview', 
            link: '/Linux/1.3.0',
            collapsed: true,
            items: [
              { text: '1.3.1 Kernel / Shell / User Space', link: '/Linux/1.3.1' },
              { text: '1.3.2 Introduction to the Linux Directory Structure', link: '/Linux/1.3.2' },
            ]
           },                 
        ]
      },
      {
        text: 'Chapter 2: Terminal and Shell Basics',
        link: '/Linux/2.0.0',
        items: [
          { text: '2.1 Terminal and Shell Basics', 
            link: '/Linux/2.1.0',
            collapsed: true,
            items: [
              { text: '2.1.1 What a Shell Is and How It Works', link: '/Linux/2.1.1' },
              { text: '2.1.2 Differences Between Terminal, Console, and SSH', link: '/Linux/2.1.2' },
              { text: '2.1.3 Common Keyboard Shortcuts for Efficient Command-Line Use', link: '/Linux/2.1.3' },
            ]
           },
           { text: '2.2 File and Directory Operations (Command Line)', 
            link: '/Linux/2.2.0',
            collapsed: true,
            items: [
              { text: '2.2.1 Navigating the Linux File System', link: '/Linux/2.2.1' },
              { text: '2.2.2 Creating, Moving, Copying, and Deleting Files and Directories', link: '/Linux/2.2.2' },
              { text: '2.2.3 Searching for Files and Checking Disk Usage', link: '/Linux/2.2.3' },
            ]
           },
           { text: '2.3 Viewing and Processing Text Files', 
            link: '/Linux/2.3.0',
            collapsed: true,
            items: [
              { text: '2.3.1 Viewing Text Files', link: '/Linux/2.3.1' },
              { text: '2.3.2 Searching Text Files', link: '/Linux/2.3.2' },
              { text: '2.3.3 Combining Text Files', link: '/Linux/2.3.3' },
            ]
           },
           { text: '2.4 vim Editor Basics', 
            link: '/Linux/2.4.0',
            collapsed: true,
            items: [
              { text: '2.4.1 Basic vim Usage', link: '/Linux/2.4.1' },
              { text: '2.4.2 Basic Editing Operations', link: '/Linux/2.4.2' },
              { text: '2.4.3 Saving and Exiting', link: '/Linux/2.4.3' },
              { text: '2.4.4 Search and Replace (Intro)', link: '/Linux/2.4.4' },
            ]
           },
        ]
      }
    ],

// //1️⃣ Python 基础语法（Syntax Basics）
// 1.1 基本计算与数据类型
// 1.1.1 数值类型（int / float / complex）
// 1.1.2 基本运算符（+ - * / // % **）
// 1.1.3 类型转换（int() / float() / str()）
// 1.2 变量与命名规则
// 1.2.1 变量定义与赋值
// 1.2.2 多变量赋值
// 1.2.3 常见命名规范（snake_case）
// 1.3 输入与输出
// 1.3.1 print() 的使用
// 1.3.2 input() 获取用户输入
// 1.3.3 f-string 格式化输出
// 2️⃣ 逻辑与流程控制（Control Flow）
// 2.1 逻辑运算
// 2.1.1 比较运算符（== != > < >= <=）
// 2.1.2 逻辑运算符（and / or / not）
// 2.1.3 布尔值与条件判断
// 2.2 条件语句
// 2.2.1 if 语句
// 2.2.2 if-else 结构
// 2.2.3 if-elif-else 链
// 2.3 循环结构
// 2.3.1 while 循环
// 2.3.2 for 循环
// 2.3.3 break / continue / pass
// 3️⃣ 数据结构（Data Structures）
// 3.1 列表 List
// 3.1.1 列表定义与访问
// 3.1.2 列表常用方法（append / pop / sort）
// 3.1.3 列表推导式（list comprehension）
// 3.2 元组 Tuple
// 3.2.1 元组定义与不可变性
// 3.2.2 元组解包
// 3.2.3 元组与列表对比
// 3.3 字典 Dict
// 3.3.1 字典的 key-value 结构
// 3.3.2 字典常用方法（keys / values / items）
// 3.3.3 遍历字典
// 3.4 集合 Set
// 3.4.1 集合的唯一性
// 3.4.2 集合运算（并 / 交 / 差）
// 3.4.3 set vs list
// 4️⃣ 函数与模块（Functions & Modules）
// 4.1 函数基础
// 4.1.1 函数定义 def
// 4.1.2 参数与返回值
// 4.1.3 默认参数 / 可变参数
// 4.2 作用域与匿名函数
// 4.2.1 局部变量与全局变量
// 4.2.2 lambda 表达式
// 4.2.3 闭包（closure）基础
// 4.3 模块与包
// 4.3.1 import 的几种方式
// 4.3.2 自定义模块
// 4.3.3 包结构与 init.py
// 5️⃣ 面向对象编程（OOP）
// 5.1 类与对象
// 5.1.1 class 定义
// 5.1.2 init 构造方法
// 5.1.3 实例属性与方法调用
// 5.2 OOP 核心思想
// 5.2.1 封装（Encapsulation）
// 5.2.2 继承（Inheritance）
// 5.2.3 多态（Polymorphism）
// 5.3 高级类特性
// 5.3.1 类变量 vs 实例变量
// 5.3.2 @classmethod / @staticmethod
// 5.3.3 str / repr
// 6️⃣ 异常与文件操作（Exceptions & I/O）
// 6.1 异常处理
// 6.1.1 try / except
// 6.1.2 多异常捕获
// 6.1.3 自定义异常
// 6.2 文件操作
// 6.2.1 打开与关闭文件
// 6.2.2 读取与写入文本文件
// 6.2.3 with 语句
// 7️⃣ 虚拟环境与包管理（Environment & Packages）
// 7.1 Python 运行环境
// 7.1.1 Python 解释器原理
// 7.1.2 pip 的作用
// 7.1.3 site-packages 结构
// 7.2 虚拟环境
// 7.2.1 venv 创建虚拟环境
// 7.2.2 激活与退出虚拟环境
// 7.2.3 虚拟环境目录结构
// 7.3 依赖管理
// 7.3.1 pip install / uninstall
// 7.3.2 requirements.txt
// 7.3.3 依赖冲突与版本锁定
// 8️⃣ 进阶与工程化（Advanced & Engineering）
// 8.1 调试与测试
// 8.1.1 print 调试
// 8.1.2 pdb 调试器
// 8.1.3 pytest 基础
// 8.2 项目结构
// 8.2.1 标准 Python 项目结构
// 8.2.2 main 入口设计
// 8.2.3 配置文件管理//    // 
    '/Python/':
    [{
      text: 'Python Notes'},
      {
        text: 'Chapter 1: Python Basics',
        link: '/Python/1.0.0',
        items: [
          { text: '1.1 Python Basics', 
            link: '/Python/1.1.0',
            collapsed: true,
            items: [
              { text: '1.1.1 Python Basics', link: '/Python/1.1.1' },
              { text: '1.1.2 Python Basics', link: '/Python/1.1.2' },
              { text: '1.1.3 Type Conversion (int() / float() / str())', link: '/Python/1.1.3' },
            ]
           },
           { text: '1.2 Variables and Naming Conventions', 
            link: '/Python/1.2.0',
            collapsed: true,
            items: [
              { text: '1.2.1 Variable Definition and Assignment', link: '/Python/1.2.1' },
              { text: '1.2.2 Multiple Variable Assignment', link: '/Python/1.2.2' },
              { text: '1.2.3 Naming Conventions (snake_case)', link: '/Python/1.2.3' },
            ]
           },
           { text: '1.3 Input and Output', 
            link: '/Python/1.3.0',
            collapsed: true,
            items: [
              { text: '1.3.1 Basic Output with print()', link: '/Python/1.3.1' },
              { text: '1.3.2 Getting User Input with input()', link: '/Python/1.3.2' },
              { text: '1.3.3 Formatted Output with f-Strings', link: '/Python/1.3.3' },
            ]
           },
           
        ]
      },
      {
        text: 'Chapter 2: Control Flow',
        link: '/Python/2.0.0',
        items: [
          { text: '2.1 Logical Operations', 
            link: '/Python/2.1.0',
            collapsed: true,
            items: [
              { text: '2.1.1 Comparison Operators (== != > < >= <=)', link: '/Python/2.1.1' },
              { text: '2.1.2 Logical Operators (and / or / not)', link: '/Python/2.1.2' },
              { text: '2.1.3 Boolean Values and Condition Evaluation', link: '/Python/2.1.3' },
            ]
           },
           { text: '2.2 Conditional Statements', 
            link: '/Python/2.2.0',
            collapsed: true,
            items: [
              { text: '2.2.1 The if Statement', link: '/Python/2.2.1' },
              { text: '2.2.2 The if-else Structure', link: '/Python/2.2.2' },
              { text: '2.2.3 The if-elif-else Chain', link: '/Python/2.2.3' },
            ]
           },
           { text: '2.3 Loops', 
            link: '/Python/2.3.0',
            collapsed: true,
            items: [
              { text: '2.3.1 The while Loop', link: '/Python/2.3.1' },
              { text: '2.3.2 The for Loop', link: '/Python/2.3.2' },
              { text: '2.3.3 Loop Control Statements (break / continue / pass)', link: '/Python/2.3.3' },
            ]
           },

        ]
      },
      {
        text: 'Chapter 3: Data Structures',
        link: '/Python/3.0.0',
        items: [
          { text: '3.1 Lists', 
            link: '/Python/3.1.0',
            collapsed: true,
            items: [
              { text: '3.1.1 List Definition and Access', link: '/Python/3.1.1' },
              { text: '3.1.2 Common List Methods (append / pop / sort)', link: '/Python/3.1.2' },
              { text: '3.1.3 List Comprehension', link: '/Python/3.1.3' },
            ]
           },
           { text: '3.2 Tuples', 
            link: '/Python/3.2.0',
            collapsed: true,
            items: [
              { text: '3.2.1 Tuple Definition and Immutability', link: '/Python/3.2.1' },
              { text: '3.2.2 Tuple Unpacking', link: '/Python/3.2.2' },
              { text: '3.2.3 Tuples vs Lists', link: '/Python/3.2.3' },
            ]
           },
           { text: '3.3 Dictionaries', 
            link: '/Python/3.3.0',
            collapsed: true,
            items: [
              { text: '3.3.1 Key–Value Structure', link: '/Python/3.3.1' },
              { text: '3.3.2 Common Dictionary Methods (keys / values / items)', link: '/Python/3.3.2' },
              { text: '3.3.3 Iterating Over Dictionaries', link: '/Python/3.3.3' },
            ]
           },
        ]
      }
    ],











    '/Language/ROS1/中文/':[{
        text: 'ROS1 课件'},
      {
        text: '第 1 章 ROS概述与环境搭建',
        link: '/Language/ROS1/中文/1ROS概述与环境搭建.md',
        items: [
          { text: '1.1 ROS简介', 
            link: '/Language/ROS1/中文/1.1 ROS简介',
            collapsed: true,
            items: [
              { text: '1.1.1ROS概念', link: '/Language/ROS1/中文/1.1.1ROS概念' },
              { text: '1.1.2ROS设计目标', link: '/Language/ROS1/中文/1.1.2ROS设计目标' },
              { text: '1.1.3ROS发展历程', link: '/Language/ROS1/中文/1.1.3ROS发展历程' }
            ]
           },
           { text: '1.2 ROS安装', 
            link: '/Language/ROS1/中文/1.2 ROS安装',
            collapsed: true,
            items: [
              { text: '1.2.1 安装 ROS', link: '/Language/ROS1/中文/1.2.1 安装 ROS' },
              { text: '1.2.2 测试 ROS', link: '/Language/ROS1/中文/1.2.2 测试 ROS' }
            ]
           },
           { text: '1.3 ROS快速体验', 
            link: '/Language/ROS1/中文/1.3 ROS快速体验',
            collapsed: true,
            items: [
              { text: '1.3.1 HelloWorld实现简介', link: '/Language/ROS1/中文/1.3.1 HelloWorld实现简介' },
              { text: '1.3.2 HelloWorld', link: '/Language/ROS1/中文/1.3.2 HelloWorld' }
            ]
           },
          { text: '1.4 ROS集成开发环境搭建', 
            link: '/Language/ROS1/中文/1.4 ROS集成开发环境搭建',
            collapsed: true,
            items: [
              { text: '1.4.1 安装终端', link: '/Language/ROS1/中文/1.4.1 安装终端' },
              { text: '1.4.2 安装VScode', link: '/Language/ROS1/中文/1.4.2 安装VScode' },
              { text: '1.4.3 launch文件演示', link: '/Language/ROS1/中文/1.4.3 launch文件演示' },
            ]
           },
           { text: '1.5 ROS架构', 
            link: '/Language/ROS1/中文/1.5 ROS架构',
            collapsed: true,
            items: [
              { text: '1.5.1 ROS文件系统', link: '/Language/ROS1/中文/1.5.1 ROS文件系统' },
              { text: '1.5.2 ROS文件系统相关命令', link: '/Language/ROS1/中文/1.5.2 ROS文件系统相关命令' },
              { text: '1.5.3 ROS计算图', link: '/Language/ROS1/中文/1.5.3 ROS计算图' },
            ]
           },
           { text: '1.6 本章小结', link: '/Language/ROS1/中文/1.6 本章小结'},
        ]
      },


      {
        text: '第 2 章 ROS通信机制',
        link: '/Language/ROS1/中文/2 ROS通信机制',
        items: [
          { text: '2.1 话题通信', link: '/Language/ROS1/中文/2.1 话题通信',collapsed: true,
            items: [
               { text: '2.1.1 话题通信理论模型', link: '/Language/ROS1/中文/2.1.1 话题通信理论模型' },
               { text: '2.1.2 话题通信基本操作', link: '/Language/ROS1/中文/2.1.2 话题通信基本操作' },
               { text: '2.1.3 话题通信自定义msg', link: '/Language/ROS1/中文/2.1.3 话题通信自定义msg' },
               { text: '2.1.4 话题通信自定义msg调用', link: '/Language/ROS1/中文/2.1.4 话题通信自定义msg调用' }
            ]
          },
          { text: '2.2 服务通信', link: '/Language/ROS1/中文/2.2 服务通信',collapsed: true,
            items: [
                { text: '2.2.1 服务通信理论模型', link: '/Language/ROS1/中文/2.2.1 服务通信理论模型' },
                { text: '2.2.2 服务通信自定义srv', link: '/Language/ROS1/中文/2.2.2 服务通信自定义srv' },
                { text: '2.2.3 服务通信自定义srv调用', link: '/Language/ROS1/中文/2.2.3服务通信自定义srv调用' },
            ]
           },
          { text: '2.3 参数服务器', link: '/Language/ROS1/中文/2.3 参数服务器',collapsed: true,
            items: [
                { text: '2.3.1 参数服务器理论模型', link: '/Language/ROS1/中文/2.3.1 参数服务器理论模型' },
                { text: '2.3.2 参数操作(Python)', link: '/Language/ROS1/中文/2.3.2 参数操作(Python)' },
            ]
           },
           { text: '2.4 常用命令', link: '/Language/ROS1/中文/2.4 常用命令',collapsed: true,
            items: [
                { text: '2.4.1 rosnode', link: '/Language/ROS1/中文/2.4.1 rosnode' },
                { text: '2.4.2 rostopic', link: '/Language/ROS1/中文/2.4.2 rostopic' },
                { text: '2.4.3 rosmsg', link: '/Language/ROS1/中文/2.4.3 rosmsg' },
                { text: '2.4.4 rosservice', link: '/Language/ROS1/中文/2.4.4 rosservice' },
                { text: '2.4.5 rossrv', link: '/Language/ROS1/中文/2.4.5 rossrv' },
                { text: '2.4.6 rosparam', link: '/Language/ROS1/中文/2.4.6 rosparam' },
            ]
           },
           { text: '2.5 通信机制实操', link: '/Language/ROS1/中文/2.5 通信机制实操',collapsed: true,
            items: [
                { text: '2.5.1 实操01_话题发布', link: '/Language/ROS1/中文/2.5.1 实操01_话题发布' },
                { text: '2.5.2 实操02_话题订阅', link: '/Language/ROS1/中文/2.5.2 实操02_话题订阅' },
                { text: '2.5.3 实操03_服务调用', link: '/Language/ROS1/中文/2.5.3 实操03_服务调用' },
                { text: '2.5.4 实操04_参数设置', link: '/Language/ROS1/中文/2.5.4 实操04_参数设置' },
            ]
           },
           { text: '2.6 通信机制比较', link: '/Language/ROS1/中文/2.6 通信机制比较'},
           { text: '2.7 本章小结', link: '/Language/ROS1/中文/2.7 本章小结'}
        ]
      }
    ],
    '/Language/ROS1/English/':[{
        text: 'ROS1 Note'},
      {
        text: 'Chapter 1: Introduction to ROS and Environment Setup',
        link: '/Language/ROS1/English/1 ROS Overview and Environment Setup',
        items: [
          { text: '1.1 Introduction to ROS', 
            link: '/Language/ROS1/English/1.1 Introduction to ROS',
            collapsed: true,
            items: [
              { text: '1.1.1 ROS Concepts', link: '/Language/ROS1/English/1.1.1 ROS Concepts' },
              { text: '1.1.2 ROS Design Goals', link: '/Language/ROS1/English/1.1.2 ROS Design Goals' },
              { text: '1.1.3 Evolution of ROS', link: '/Language/ROS1/English/1.1.3 Evolution of ROS' }
            ]
           },
           { text: '1.2 Installing ROS', 
            link: '/Language/ROS1/English/1.2 Installing ROS',
            collapsed: true,
            items: [
              { text: '1.2.1 Installing ROS', link: '/Language/ROS1/English/1.2.1 Installing ROS' },
              { text: '1.2.2 Testing ROS', link: '/Language/ROS1/English/1.2.2 Testing ROS' }
            ]
           },
           { text: '1.3 Quick ROS Experience', 
            link: '/Language/ROS1/English/1.3 Quick ROS Experience',
            collapsed: true,
            items: [
              { text: '1.3.1 HelloWorld Overview', link: '/Language/ROS1/English/1.3.1 HelloWorld Implementation Overview' },
              { text: '1.3.2 HelloWorld', link: '/Language/ROS1/English/1.3.2 HelloWorld' }
            ]
           },
          { text: '1.4 ROS Dev Env Setup', 
            link: '/Language/ROS1/English/1.4 ROS Integrated Development Environment Setup',
            collapsed: true,
            items: [
              { text: '1.4.1 Terminal Installation', link: '/Language/ROS1/English/1.4.1 Terminal Installation' },
              { text: '1.4.2 Installing VScode', link: '/Language/ROS1/English/1.4.2 Installing VScode' },
              { text: '1.4.3 Launch File', link: '/Language/ROS1/English/1.4.3 Launch File Demonstration' },
            ]
           },
           { text: '1.5 ROS Architecture', 
            link: '/Language/ROS1/English/1.5 ROS Architecture',
            collapsed: true,
            items: [
              { text: '1.5.1 ROS File System', link: '/Language/ROS1/English/1.5.1 ROS File System' },
              { text: '1.5.2 Filesystem Commands', link: '/Language/ROS1/English/1.5.2 ROS Filesystem Related Commands' },
              { text: '1.5.3 Computation Graph', link: '/Language/ROS1/English/1.5.3 ROS Computation Graph' },
            ]
           },
           { text: '1.6 Chapter Summary', link: '/Language/ROS1/English/1.6 Chapter Summary'},
        ]
      },


      {
        text: 'Chapter 2 ROS Communication Mechanisms',
        link: '/Language/ROS1/English/Chapter 2 ROS Communication Mechanisms',
        items: [
          { text: '2.1 Topic Communication', link: '/Language/ROS1/English/2.1 Topic Communication',collapsed: true,
            items: [
               { text: '2.1.1 Topic Communication Theoretical Model', link: '/Language/ROS1/English/2.1.1 Topic Communication Theoretical Model' },
               { text: '2.1.2 Topic Communication Basic Operations', link: '/Language/ROS1/English/2.1.2 Topic Communication Basic Operations' },
               { text: '2.1.3 Topic Communication Custom msg', link: '/Language/ROS1/English/2.1.3 Topic Communication Custom msg' },
               { text: '2.1.4 Topic Communication Custom msg Call', link: '/Language/ROS1/English/2.1.4 Topic Communication Custom msg Call' }
            ]
          },
          { text: '2.2 Service Communication', link: '/Language/ROS1/English/2.2 Service Communication',collapsed: true,
            items: [
                { text: '2.2.1 Service Communication Theoretical Model', link: '/Language/ROS1/English/2.2.1 Service Communication Theoretical Model' },
                { text: '2.2.2 Service Communication Custom srv', link: '/Language/ROS1/English/2.2.2 Service Communication Custom srv' },
                { text: '2.2.3 Service Communication Custom srv Call', link: '/Language/ROS1/English/2.2.3 Service Communication Custom srv Call' },
            ]
           },
          { text: '2.3 参数服务器', link: '/Language/中文/2.3 参数服务器',collapsed: true,
            items: [
                { text: '2.3.1 参数服务器理论模型', link: '/Language/中文/2.3.1 参数服务器理论模型' },
                { text: '2.3.2 参数操作(Python)', link: '/Language/中文/2.3.2 参数操作(Python)' },
            ]
           },
           { text: '2.4 常用命令', link: '/Language/中文/2.4 常用命令',collapsed: true,
            items: [
                { text: '2.4.1 rosnode', link: '/Language/中文/2.4.1 rosnode' },
                { text: '2.4.2 rostopic', link: '/Language/中文/2.4.2 rostopic' },
                { text: '2.4.3 rosmsg', link: '/Language/中文/2.4.3 rosmsg' },
                { text: '2.4.4 rosservice', link: '/Language/中文/2.4.4 rosservice' },
                { text: '2.4.5 rossrv', link: '/Language/中文/2.4.5 rossrv' },
                { text: '2.4.6 rosparam', link: '/Language/中文/2.4.6 rosparam' },
            ]
           },
           { text: '2.5 通信机制实操', link: '/Language/中文/2.5 通信机制实操',collapsed: true,
            items: [
                { text: '2.5.1 实操01_话题发布', link: '/Language/中文/2.5.1 实操01_话题发布' },
                { text: '2.5.2 实操02_话题订阅', link: '/Language/中文/2.5.2 实操02_话题订阅' },
                { text: '2.5.3 实操03_服务调用', link: '/Language/中文/2.5.3 实操03_服务调用' },
                { text: '2.5.4 实操04_参数设置', link: '/Language/中文/2.5.4 实操04_参数设置' },
            ]
           },
           { text: '2.6 通信机制比较', link: '/Language/中文/2.6 通信机制比较'},
           { text: '2.7 本章小结', link: '/Language/中文/2.7 本章小结'}
        ]
      }
    ]    
}