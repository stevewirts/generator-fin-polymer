generator-fin-polymer
================

This generator creates a seed polymer project with a minimal grunt server.  The project is derived from the polymer groups cannonical seed structure as closely as possible so look there for documentation as well.  
This generator launches a livereload connect process to view the docs AND your element demo page.  The element has been factored into 3 files to seperate out the javascript so that it can be linted;<br>  
  - my-element.pre.html
  - my-element.js
  - my-element.post.html

On any file change, the grunt process concats these 3 files together into my-element.html. The same goes for the test script in the test diretory.  

## getting started

to use this generator, 
  - create a directory and cd into it
  - execute with a name that contains at least one '-'
  - yo fin-polymer my-polymer-seed-name
  - cd into your newly created directory
  - npm install  //< you may to use sudo on this step... 
