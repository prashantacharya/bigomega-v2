---
title: 'Simple Markdown Parser with JavaScript and Regular Expressions'
subtitle: 'By the completion of this blog, you will have a function that takes in a markdown text and return a HTML text.'
date: '2020-08-21'
keywords: 'Regular Expression, JavaScript, Markdown, Compiler, Parser, RegEx'
published: true
---

#### In this article, you will learn to build a Markdown parser which compiles into HTML with JavaScript and Regular Expression

Markdown is a markup language like HTML. It is quite popular among developers to write blogs, readme files, and documentation. Some of the popular websites that support rich text like Reddit, GitHub, Notion etc allow you to write Markdown. I use Markdown to convert my blog from a Markdown file to HTML web pages. Markdown is simple yet very powerful. In this blog, I will be writing about how to build a simple Markdown parser to convert Markdown to HTML with JavaScript using Regular Expressions.

![](/blogs/markdown-parser/8uKea52PI.png)

Markdown Parser

### How does Markdown text look like

If you open a markdown file, you’ll see the following syntax.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=markdown&amp;ds=true&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=true&amp;pv=56px&amp;ph=56px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=14px&amp;lh=133%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=%2523%2520The%2520text%2520after%2520hash%2520is%2520converted%2520to%2520an%2520h1%2520in%2520HTML%250A%250A%2523%2523%2520Get%27s%2520converted%2520to%2520h2%250A%250A%2A%2AThis%2520is%2520a%2520bold%2520text%2A%2A%2520_italics_%250A%255BLink%2520Text%255D%28url%29" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Markdown text example

Learn more from this [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Regular Expressions

A regular expression is a character sequence that helps us to capture patterns in a text. We can use it to validate user input, find and replace texts and yup, you guessed it, build our Markdown parser. 😉

Different languages have different ways to represent RegEx. Here is how it is done in JavaScript.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=false&amp;pv=56px&amp;ph=56px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=%252F%252F%2520Validates%2520all%2520the%2520text%2520that%2520includes%2520the%2520text%2520Hello%2520%28case%2520sensitive%29%250Aconst%2520pattern%2520%253D%2520%252FHello%252F%250Aconst%2520text%2520%253D%2520%27Hello%252C%2520beautiful%2520people%27%250Apattern.test%28text%29%2520%252F%252F%2520Returns%2520true" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Markdown example in JavaScript

I will explain the patterns we use in our parser as we reach that section. However, if you want to read more about regular expressions, visit [https://javascript.info](https://javascript.info/regular-expressions).

### Markdown parser

The Markdown parser I intend to build is a function that takes Markdown text as input and returns HTML.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=19px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=function%2520parseMarkdown%28markdownText%29%2520%257B%250A%2509const%2520htmlText%2520%253D%2520markdownText%2520%250A%2520%2520%2520%2520%252F%252F%2520do%2520something%2520to%2520this%2520markdown%2520text%250A%250A%2509return%2520htmlText%250A%257D" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Markdown parser function

Here, we want to find a certain pattern in `markdownText` and perform replace operations.

### String replace function

Our Markdown parser is simple. It captures a pattern from Markdown string passed to the function as `markdownText` argument and replaces it with certain HTML pattern.

Here is how the string replace function works.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=text%2520%253D%2520%27hello%2520world%2520and%2520hello%2520everyone%27%250AregEx%2520%253D%2520%252FHello%252Fgi%250Aconsole.log%28text.replace%28regEx%252C%2520%27hi%27%29%29%250A%252F%252F%2520prints%253A%2520%27hi%2520world%2520and%2520hi%2520everyone%27" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Working of replace function

*Note: Here the* ***i flag represents case insensitive*** *and* ***g flag represents global****, which means it matches patterns everywhere on the string, not just the first match.*

### Capturing groups in Regular Expression

Regular Expressions allows us to capture patterns of text and reference them with something like an index. We can use the index in the replace operation. To represent a group, we can simply wrap it in a parenthesis `()`.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=text%2520%253D%2520%27hello%2520world%2520and%2520hello%2520everyone%27%250A%252F%252F%2520RegEx%2520to%2520match%2520a%2520string%2520starting%2520with%2520hello%2520followed%2520by%2520anything%250AregEx%2520%253D%2520%252F%28Hello%29.%2A%252Fi%250Aconsole.log%28text.replace%28regEx%252C%2520%27Matched%2520Group%253A%2520%25241%27%29%29%250A%252F%252F%2520prints%253A%2520%27Matched%2520Group%253A%2520hello%27" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Capturing groups in Regular Expression

Here, we have stored the starting hello in a group. The group can then be referenced with **$1** on our replace operation.

### Back to the parser

Now, we want to parse the Markdown text and replace it with HTML.

Here are the RegExes we will use in our parser and their explanation.

**Heading**   
For heading, we want a string that starts with a hash(es) and captures everything after those characters.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=const%2520h3%2520%253D%2520%252F%255E%2523%2523%2523%2520%28.%2A%2524%29%252Fgim" width="700" height="328" frameborder="0" scrolling="no"></iframe>

RegEx for h3

Here the first carat `^` represents line starting with and m flag represents multiple lines and by doing .\* we are capturing everything (letters, numbers, special characters) that exists there.

**Blockquote**  
For blockquote, we want a line that starts with`>` and captures everything after that character.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=const%2520bq%2520%253D%2520%252F%255E%255C%253E%2520%28.%2A%2524%29%252Fgim" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Blockquote RegEx

Note: \\> represents escaping > character. That means, don’t treat > as a part of special regEx character but as a part of that text itself.

**Bold Text**   
For bold text, we want to capture a text between 2 asterisks.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=const%2520bold%2520%253D%2520%252F%255C%2A%255C%2A%28.%2A%29%255C%2A%255C%2A%252Fgim" width="700" height="328" frameborder="0" scrolling="no"></iframe>

RegEx for Bold text

**Italics Text**   
For italic text, we want to capture a text between one asterisk.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=const%2520italics%2520%253D%2520%252F%255C%2A%28.%2A%29%255C%2A%252Fgim" width="700" height="328" frameborder="0" scrolling="no"></iframe>

RegEx for Italics

**Image, links and line break**

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=%252F%252F%2520!%255BAlt%2520text%255D%28url%29%250Aconst%2520image%2520%253D%2520%252F!%255C%255B%28.%2A%253F%29%255C%255D%255C%28%28.%2A%253F%29%255C%29%252Fgim%250A%252F%252F%2520%255Btext%255D%28url%29%250Aconst%2520link%2520%253D%2520%252F%255C%255B%28.%2A%253F%29%255C%255D%255C%28%28.%2A%253F%29%255C%29%252Fgim%250Aconst%2520lineBreak%2520%253D%2520%252F%255Cn%2524%252Fgim" width="700" height="328" frameborder="0" scrolling="no"></iframe>

RegEx for Image, Link and Line break

### Fitting it all together

By this point, you probably have all the background necessary to understand the concepts. Let’s fit all the things that we have learnt up to now and build the parser.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=function%2520parseMarkdown%28markdownText%29%2520%257B%250A%2509const%2520htmlText%2520%253D%2520markdownText%250A%2509%2509.replace%28%252F%255E%2523%2523%2523%2520%28.%2A%2524%29%252Fgim%252C%2520%27%253Ch3%253E%25241%253C%252Fh3%253E%27%29%250A%2509%2509.replace%28%252F%255E%2523%2523%2520%28.%2A%2524%29%252Fgim%252C%2520%27%253Ch2%253E%25241%253C%252Fh2%253E%27%29%250A%2509%2509.replace%28%252F%255E%2523%2520%28.%2A%2524%29%252Fgim%252C%2520%27%253Ch1%253E%25241%253C%252Fh1%253E%27%29%250A%2509%2509.replace%28%252F%255E%255C%253E%2520%28.%2A%2524%29%252Fgim%252C%2520%27%253Cblockquote%253E%25241%253C%252Fblockquote%253E%27%29%250A%2509%2509.replace%28%252F%255C%2A%255C%2A%28.%2A%29%255C%2A%255C%2A%252Fgim%252C%2520%27%253Cb%253E%25241%253C%252Fb%253E%27%29%250A%2509%2509.replace%28%252F%255C%2A%28.%2A%29%255C%2A%252Fgim%252C%2520%27%253Ci%253E%25241%253C%252Fi%253E%27%29%250A%2509%2509.replace%28%252F!%255C%255B%28.%2A%253F%29%255C%255D%255C%28%28.%2A%253F%29%255C%29%252Fgim%252C%2520%2522%253Cimg%2520alt%253D%27%25241%27%2520src%253D%27%25242%27%2520%252F%253E%2522%29%250A%2509%2509.replace%28%252F%255C%255B%28.%2A%253F%29%255C%255D%255C%28%28.%2A%253F%29%255C%29%252Fgim%252C%2520%2522%253Ca%2520href%253D%27%25242%27%253E%25241%253C%252Fa%253E%2522%29%250A%2509%2509.replace%28%252F%255Cn%2524%252Fgim%252C%2520%27%253Cbr%2520%252F%253E%27%29%250A%250A%2509return%2520htmlText.trim%28%29%250A%257D" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Time to test the parser.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=const%2520text%2520%253D%2520%2560%250A%2523%2520Hello%2520World%250A%2A%2AThis%2520is%2520a%2520bold%2520text%2A%2A%250A%2560%250A%250Aconsole.log%28parseMarkdown%28text%29%29" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Testing the parser

Should print:

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=material&amp;wt=none&amp;l=htmlmixed&amp;ds=true&amp;dsyoff=15px&amp;dsblur=24px&amp;wc=true&amp;wa=false&amp;pv=20px&amp;ph=23px&amp;ln=false&amp;fl=1&amp;fm=Fira%20Code&amp;fs=16px&amp;lh=150%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=%253Ch1%253EHello%2520World%253C%252Fh1%253E%250A%253Cb%253EThis%2520is%2520a%2520bold%2520text%253C%252Fb%253E%253Cbr%2520%252F%253E" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Output

Our Markdown parser is now completed. It doesn’t cover everything that Markdown supports. Try implementing them and share the solution with me via twitter.

*Originally published at* [*https://www.bigomega.dev*](https://www.bigomega.dev/markdown-parser)*.*
