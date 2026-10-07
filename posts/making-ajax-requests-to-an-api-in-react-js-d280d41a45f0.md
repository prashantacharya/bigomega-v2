---
title: 'Making AJAX requests to an API in React JS'
subtitle: 'This blog is targetted to beginners who are learning React JS. It is going to be a short blog in which I will talk about making an API request in React JS.…'
date: '2019-04-18'
published: true
---

This blog is targetted to beginners who are learning React JS. It is going to be a short blog in which I will talk about making an API request in React JS. I will link the core concepts required to make API calls to the official documentation of react as we encounter them in the story.

First of all, **create a react project**. To do so, you can use the **create-react-app** package provided by Facebook. I am assuming that you know how to do so. If you don’t, use the following steps to do so. Open the terminal and type the following commands (not the ones on BLOCK letters).

<iframe src="https://carbon.now.sh/embed?bg=rgba%2846%2C76%2C98%2C1%29&amp;t=material&amp;wt=none&amp;l=application%2Fx-sh&amp;ds=false&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=true&amp;pv=88px&amp;ph=100px&amp;ln=false&amp;fm=Fira%20Code&amp;fs=18px&amp;lh=131%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=INSTALL%2520create-react-app%2520GLOBALLY%2520ON%2520YOUR%2520MACHINE%250Anpm%2520install%2520-g%2520create-react-app%250A%250ASTART%2520A%2520NEW%2520PROJECT%250Acreate-react-app%2520ajax-req%250A%250ANAVIGATE%2520TO%2520THE%2520PROJECT%2520FOLDER%250Acd%2520ajax-req%250A%250ASTART%2520THE%2520DEVELOPMENT%2520SERVER%250Anpm%2520start" width="700" height="323" frameborder="0" scrolling="no"></iframe>

Creating a new react app

**Project Structure  
**The create-react-app creates all the necessary boilerplate code for us. Open the project in your favourite text editor. Mine happens to be Visual Studio Code. The project structure will look like this

You can get rid of most of the files here but I am not going to talk about it. Now we are going to talk about the actual thing we’re planning to do.

#### Let’s Code

Open **App.js** and *remove the unnecessary code (you can copy the codes below)*. The code should look like this:

<iframe src="https://carbon.now.sh/embed?bg=rgba%2883%2C94%2C110%2C1%29&amp;t=material&amp;wt=none&amp;l=auto&amp;ds=false&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=true&amp;pv=52px&amp;ph=100px&amp;ln=false&amp;fm=Fira%20Code&amp;fs=15px&amp;lh=152%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=import%2520React%252C%2520%257B%2520Component%2520%257D%2520from%2520%27react%27%253B%2509%2509%2509%2509%250A%250Aclass%2520App%2520extends%2520Component%2520%257B%250A%2509render%28%29%2520%257B%250A%2509%2509return%2520%28%250A%2509%2509%2509%253Cdiv%2520className%253D%2522App%2522%253E%250A%2509%2509%2509%250A%2509%2509%2509%253C%252Fdiv%253E%250A%2509%2509%29%253B%250A%2509%257D%250A%257D%250A%250Aexport%2520default%2520App%253B%250A" width="700" height="323" frameborder="0" scrolling="no"></iframe>

App.js file till this point

Now, we want to **initialize the application state** inside the App component. To do so, we can simply **initialize state as an empty object**. The code must look like the following:

<iframe src="https://carbon.now.sh/embed?bg=rgba%2883%2C94%2C110%2C1%29&amp;t=material&amp;wt=none&amp;l=auto&amp;ds=false&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=true&amp;pv=52px&amp;ph=100px&amp;ln=false&amp;fm=Fira%20Code&amp;fs=15px&amp;lh=152%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=%250Aclass%2520App%2520extends%2520Component%2520%257B%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%250A%2509state%2520%253D%2520%257B%257D%250A%250A%2509render%28%29%2520%257B%250A%2509%2509console.log%28this.state%29%250A%2509%2509return%2520%28%250A%2509%2509%2509%253Cdiv%2520className%253D%2522App%2522%253E%250A%250A%2509%2509%2509%253C%252Fdiv%253E%250A%2509%2509%29%253B%250A%2509%257D%250A%257D" width="700" height="323" frameborder="0" scrolling="no"></iframe>

**WHAT EXACTLY IS A STATE?**

> A state is a property of React Components with the help of which we can make them interactive, dynamic. We can assign different behavior according to the available application state.  
> **For example:  
> **In many applications such as an online store, you can enter the product name as a search query. Until the data is loaded, we can see some pre loading animations. As soon as the data is available the preloader disappears and we can see our result. This can be achieved with the help of state change.

> **Read more about states on the** [**official documentation**](https://reactjs.org/docs/state-and-lifecycle.html).

Inside the render method, I have **logged the application state** to the console *(first line on the render method)*. If you go to [http://localhost:3000](http://localhost:3000/) on your browser and see the console, you’ll find **an empty object {}**.

#### Lifecycle Methods

> A react component goes through mounting, updating and unmounting phases. To deal with these, we have these methods called lifecycle methods which act handy to do something if something happens to the component like mounting, unmounting, change of state, receiving props etc.

> **Read more about Lifecycle Methods on the** [**official documentation**](https://reactjs.org/docs/state-and-lifecycle.html)**.**

**Mounting  
**Mounting of react components simply means rendering the component in the page. We have *componentDidMount(),* that gets called as soon as the component gets mounted in the view.   
**Mounting and unmounting process of a react component:  
***1\. Render the content returned by the render() method.  
2\. Check componentDidMount() method to see anything that happens after mounting action occurs.  
3\. Update the component if the application state changes. (re-rendering)  
4\. Unmount*

So we use componentDidMount lifecycle method to make AJAX request to [this URL](https://jsonplaceholder.typicode.com/users) and change the application state.

<iframe src="https://carbon.now.sh/embed?bg=rgba%2883%2C94%2C110%2C1%29&amp;t=material&amp;wt=none&amp;l=javascript&amp;ds=false&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=false&amp;pv=0px&amp;ph=0px&amp;ln=false&amp;fm=Fira%20Code&amp;fs=15px&amp;lh=152%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=class%2520App%2520extends%2520Component%2520%257B%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%250A%2509state%2520%253D%2520%257B%257D%2509%250A%250A%2509componentDidMount%28%29%2520%257B%250A%2509%2509fetch%28%27https%253A%252F%252Fjsonplaceholder.typicode.com%252Fusers%27%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2509.then%28response%2520%253D%253E%2520response.json%28%29%29%250A%2509%2509%2509.then%28users%2520%253D%253E%2520this.setState%28%257Busers%257D%29%29%250A%2509%257D%250A%250A%2509render%28%29%2520%257B%250A%2509%2509console.log%28this.state%29%250A%2509%2509return%2520%28%250A%2509%2509%2509%253Cdiv%2520className%253D%2522App%2522%253E%250A%2509%2509%2509%253C%252Fdiv%253E%250A%2509%2509%29%250A%2509%257D%250A%257D" width="700" height="323" frameborder="0" scrolling="no"></iframe>

The code above makes an API request to the given URL, then it parses the response as json then we pass the data to *this.setState()* which sets the state of the application with the data we get from the request. If you check the console now, in few seconds you will see objects with data of 10 users logged on the console.

![](/blogs/making-ajax-requests-to-an-api-in-react-js-d280d41a45f0/GUF-mdxrP.png)

Now you can do anything you want with the data. Try to do something with it. You can find the source code on my GitHub. [Here’s the link](https://github.com/Prashant-Acharya/making-ajax-request).

Thank you for reading.
