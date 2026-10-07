---
title: 'The Switch to Visual Studio Code and the things that I love about it.'
subtitle: 'A little bit of History'
date: '2018-12-29'
published: true
---

**A little bit of History**

I was a sublime text fanboy before I started using Visual Studio Code. I would like to address some issues here. I was kind of a beginner back then and I had no idea about the performance of text editors. All I cared about is syntax completion and highlighting, themes (dark themes to be precise) and that’s probably it. I heard from the people I worked with about the performance of Sublime text being superior to other text editors but I didn’t care much about that back then. So why exactly did I switch?

### React JS

The main reason why I switched to Visual Studio Code is React JS. Like all text editors, sublime text makes syntax highlighting and predictions according to the type of file you’re using. That makes perfect sense. The files that React is written in is a JavaScript file with .js extension. That is also fine but the problem is, React uses something called JSX which doesn’t go well through syntax highlighting on Sublime text. Now, I know, switching the syntax highlighting to Babel would have solved the issue but as a beginner, I did not know that.

![](/blogs/the-switch-to-visual-studio-code-and-the-things-that-i-love-about-it-8d97e24425c3/c5ox6VJOS.png)

The image above shows what’s wrong and what I went through.

```
 <div>  
      <h1>Hello, world!</h1>  
      <h2>It is {new Date().toLocaleTimeString()}.</h2>  
    </div>
```

The problem with the syntax highlighting is the code above is not regular JavaScript. It is a JSX. This breaks the syntax highlighting of the regular JavaScript.

![](/blogs/the-switch-to-visual-studio-code-and-the-things-that-i-love-about-it-8d97e24425c3/bEaau9Ayn.png)

The same code on VS Code

The same code on VS code produces the above result with no customization on syntax prediction and highlighting. This is one driving factor that made me switch to Visual Studio Code.

![](/blogs/the-switch-to-visual-studio-code-and-the-things-that-i-love-about-it-8d97e24425c3/UxOk7w8ns.png)

On Sublime Text with Babel syntax extension.

### Quokka.js

Yes, Finally we are talking about Quokka JS, probably the greatest innovation in the history of mankind. To those who don’t know what Quokka js is, it is a live scratchpad for JavaScript. Quokka is an extremely useful tool to have for JavaScript developers. Once you install Quokka.js extension on Visual Studio Code, running and debugging JavaScript becomes a lot easier. The image below shows exactly what I am talking about.

The magic of Quokka.js on display.

See the focused contents in the above image? That is Quokka.js on action. The number 20 on line number 2 is actually the output that JavaScript would give on browsers console or node’s console when you run the code. It updates as soon as you make changes to the code. Also, the lines 4 to 8 has red squares in front of the line numbers and the lines 1 and 2 have green squares, that is quokka.js telling you that there are errors on that particular line of your code. You will get to see your output and error as you type your codes. That is definitely a boost in the workflow. Quokka.js uses node so if you are writing Client-Side JavaScript, it is not going to work as node.js doesn’t have access to the document and window objects. You might have to install browser plugin separately for that.

![](/blogs/the-switch-to-visual-studio-code-and-the-things-that-i-love-about-it-8d97e24425c3/YqOK3GMFO.png)

### Extensions

The power of Visual Studio Code comes from its extensions. There are so many extensions of Visual Studio Code available on its store. You can even play your Spotify playlist through Visual Studio Code with the Spotify extension.

![](/blogs/the-switch-to-visual-studio-code-and-the-things-that-i-love-about-it-8d97e24425c3/gTQxgsbB2.png)

Finding and installing VS code extensions is also a super easy thing to do. You just click on the button highlighted by yellow on the above image, search the extension you would like to install by typing the name of the extension on the red box and installing the extension with a click.

![](/blogs/the-switch-to-visual-studio-code-and-the-things-that-i-love-about-it-8d97e24425c3/jHTq1E2o4.png)

Installing a theme extension on Visual Studio Code.

Did I mention that you can create your own extensions with ease for Visual Studio Code? [This](https://blog.lftechnology.com/build-your-own-vs-code-snippet-extension-e8faa76eb9c6) 5-minute blog by my brother [***Yankee Maharjan***](https://blog.lftechnology.com/@yankee.exe) says exactly how you could do so. Check it out if you’re interested.

### Live Share

This is another extension that I absolutely love. I have not used live share that much but in short, it is like video chat for codes. You login with your GitHub or Microsoft account, start a collaboration session, send a link to your peer for collaboration and collaborate on the code that you are working. **Live Share Audio** is another extension that should be installed if you want to do it while talking to each other. I absolutely recommend you installing Live Share Audio as well because if you don’t your code will be the next messaging app (Speaking from my personal experience).

![](/blogs/the-switch-to-visual-studio-code-and-the-things-that-i-love-about-it-8d97e24425c3/tgN_6IEd6.png)

#### **Did the switch worth it?**

To answer this question, I would like to make comparisons with two other most popular code editors available in the market, **Atom** and **Sublime Text**. *Atom* is one of the most beautiful text editors available right now if not the most beautiful one. I was impressed by it when I first used it even if I had heard that it is slow. It was right. In a few days, I was assured that it is really slow. So I stopped using it. *Sublime text* is a tricky choice, however. It is faster than Visual Studio Code. Sublime text is written in C++ and Visual Studio Code is written in JavaScript with electron.js. This gives Sublime the superiority on performance than the other two.

### Jumping into the Conclusion

If I have to summarize the entire article and my experience in a line then straight to the point, I would say, “Visual Studio Code is the best.” Visual Studio Code might be slower than Sublime text but in my usage, it is pretty much unnoticed. Most of the people reading this story might have similar feelings associated with their usage. If we remove the performance factor from the context then I doubt there is any text editor that is as good as Visual Studio Code is. It has a great debugger, a plethora of extensions, a built-in terminal, highly customizable features and much more. I don’t see anyone not using Visual Studio Code.

*Thanks for reading. I would appreciate the feedbacks in the comments below and did you know that you could clap 50 times? Try it!* 😉
