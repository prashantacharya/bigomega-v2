---
title: 'A Bash Script With Node.JS'
subtitle: 'Create a bash script with JS to create .prettierrc file with necessary configurations'
date: '2020-12-01'
keywords: 'Node, bash, CLI, commandline, script'
published: true
---

JavaScript is a scripting language, therefore you can write scripts to automate your workflow with JavaScript.

### The background of the snippet

I created a node script recently to automate one workflow that I do repeatedly. Every time I create a new JavaScript project, I’d create a `.prettierrc` file and add 4 configurations.

The file looks something like this,

```plaintext
{  
    "semi": true,  
    "singleQuote": true,  
    "tabWidth": 2,  
    "useTabs": false,  
}
```

For those who don’t know what this is, it is a configuration file for prettier. You can install it in your code editor to format your source code in a certain way.

The configuration I created above will make sure that my JS source code will have a semicolon at the end, it will use a single quote on strings, it will use 2 spaces for indentation and instead of using tabs, the editor will use space for formatting indentations.

This process is extremely repetitive. I would do this twice or thrice somedays when I am testing some simple snippets. I care about consistent formatting even in simple snippets that I create to test code (maybe because I have OCD).

This is why I decided to create this script to save me from this trouble and it was a great learning experience. In my opinion, it will open opportunities for me to do so much with this knowledge.

### The major pieces

Let’s first understand the pieces that create this script and fit it all in together.

### The interpreter

On the top of your scripts, we have to specify the path to the interpreter we plan to use. In our case, it is node. To do so, we have to use [a shebang line](https://en.wikipedia.org/wiki/Shebang_%28Unix%29).

For node

```plaintext
#!/usr/bin/env node
```

Some other examples

```plaintext
- for python   
#!/usr/bin/env python3   
- for bash  
#!/bin/bash
```

### The working directory

For this script to work, it has to know where it is being run at. For example, if I run this script on Projects directory on my home directory (in Linux), it should be able to identify that and create a `.prettierrc` file inside `~/Projects`.

For that, we can extract the current working directory from the node’s global process object.

```plaintext
process.cwd()
```

This gives us the path to the current working directory.

### The file system module

Node ships a file system module by default. We need to grab the writeFile function from the `fs` module and write our `.prettierrc` file to our file system.

Read the [official docs](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback).

**Example**

<iframe src="https://carbon.now.sh/embed?bg=rgba%2891%2C107%2C109%2C1%29&t=one-dark&wt=boxy&l=auto&ds=true&dsyoff=30px&dsblur=68px&wc=false&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=18px&lh=143%25&si=false&es=2x&wm=false&code=%2520%2520const%2520fs%2520%253D%2520require%28%27fs%27%29%253B%250A%250A%2520%2520%252F%2A%2A%250A%2520%2520%2520%2520%2A%2520writeFile%28filename%252C%2520content%252C%2520callback%29%253B%250A%2520%2520%2520%2520%2A%252F%250A%250A%2520%2520fs.writeFile%28%250A%2520%2520%2520%2520%27test.txt%27%252C%2520%250A%2520%2520%2520%2520%27This%2520is%2520the%2520content%2520for%2520the%2520file%27%252C%2520%250A%2520%2520%2520%2520%28error%252C%2520data%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520if%2520%28error%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520console.log%28error%29%253B%250A%2520%2520%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%2520%2520console.log%28%27File%2520written%2520successfully%27%29%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%29%253B" width="700" height="328"></iframe>

### Fitting it all together

Now as we have all the background information, we can create the script.

First, create a file called `prettier-config` or `prettier-config.js` and paste the following content.

**Note:** the extension is not mandatory but remember what you name it because we have to access it later.

<iframe src="https://carbon.now.sh/embed?bg=rgba%2891%2C107%2C109%2C1%29&t=one-dark&wt=boxy&l=javascript&ds=true&dsyoff=30px&dsblur=68px&wc=false&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=18px&lh=143%25&si=false&es=2x&wm=false&code=%2520%2520%2523%21%252Fusr%252Fbin%252Fenv%2520node%250A%250A%2520%2520const%2520fs%2520%253D%2520require%28%27fs%27%29%253B%250A%250A%2520%2520const%2520configs%2520%253D%2520%257B%250A%2520%2520%2520%2520semi%253A%2520true%252C%250A%2520%2520%2520%2520tabWidth%253A%25202%252C%250A%2520%2520%2520%2520useTabs%253A%2520false%252C%250A%2520%2520%2520%2520singleQuote%253A%2520true%252C%250A%2520%2520%257D%253B%250A%250A%2520%2520fs.writeFile%28%250A%2520%2520%2520%2520%2560%2524%257Bprocess.cwd%28%29%257D%252F.prettierrc%2560%252C%250A%2520%2520%2520%2520JSON.stringify%28configs%29%252C%250A%2520%2520%2520%2520%28error%252C%2520data%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520if%2520%28error%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520console.error%28%27Error%2520creating%2520the%2520configuration%2520file.%27%252C%2520error%29%253B%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520console.log%28%27Configuration%2520created%27%29%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%29%253B" width="700" height="328"></iframe>

Here, I am just fitting together the information provided above and mixing it to create the .prettierrc file.

The script stores the configuration file in an object called `configs`. You can add as more configs as you like in this file.

JSON and JS objects might seem similar but they have some minor differences. For example, the keys in a JSON have to be wrapped inside double-quotes. That is the reason why I have used `JSON.stringify(configs)` to convert the JS object into a JSON string while writing to the file.

### Executable permission and global access

We generally want our scripts to be available everywhere in our system. Also, we have to give executable permission to our scripts.

Moving our script to `/usr/local/bin` on our file system will allow us to use the script anywhere on our system. To do so, move the script file,

```plaintext
mv prettier-config /usr/local/bin/prettier-config   
sudo mv prettier-config /usr/local/bin/prettier-config
```

We want our scripts to have executable (x) permission and we want it to provide this permission to the owner/user, group and others (a).

```plaintext
sudo chmod a+x /usr/local/bin/prettier-config
```

Now if you try to run `prettier-config` command anywhere on your file system, you will get a .prettierrc file with necessary configuration created.

![](/blogs/bash-script-node/QxK1TTQ4p.png)

### Conclusion

If you like my content and want to have a chat then please hit me up on [Twitter](https://twitter.com/dev_prashaant).

*Originally published at* [*https://www.bigomega.dev*](https://www.bigomega.dev/bash-script-node)*.*
