[![Join the chat at https://gitter.im/BrysonWilding/21CardTrickCS3750](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/BrysonWilding/21CardTrickCS3750?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Getting setup

### Things you'll need 

- node.js - Here's the site: https://nodejs.org/en/

### How to get started

- Install node.js
- Clone the project
- Open a terminal window, cd to the project root and do
    - npm install -g jade less gulp
    - This will install jade, less and gulp
  
Jade is an HTML templating language, the syntax is here: http://jade-lang.com
Less is a CSS precompiler, the syntax is here: http://lesscss.org
Gulp is a frontend build tool for node. It'll be in charge of building our project for us

The actual project files are in three folders: js, less and views

- js contains our application logic in .js files, similar to controllers in C#, Java or Ruby
- less contains our different styles and will be processed into css files.
- views contains our jade files, which are like encapsulated html elements. They will be processed into our actual HTML

#### Gulp

Gulp is an immensely powerful front-end build system. I highly recommend the pluralsight course if you're at all interested in front end development
> http://www.pluralsight.com/courses/javascript-build-automation-gulpjs

John Papa is a great pluralsight resource and I also recommend any of his courses!

If you're not interested in how it works, I'll let you know when I have it up. The syntax to run it will be to open a terminal at the project root and enter
> gulp

And it will do everything for you

**Please PLEASE if you have any question, ask them in gitter.**
