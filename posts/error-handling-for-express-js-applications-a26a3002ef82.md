---
title: 'Error handling for express.js applications'
subtitle: 'Handling error in express applications can be more challenging than building web applications and APIs'
date: '2020-05-05'
published: true
---

#### Handling error in express applications can be more challenging than building web applications and APIs

Building web applications or APIs with express.js is not difficult in my opinion. I think it is more difficult to handle errors, error status codes and error messages properly. Below, I’m going to list out a few techniques by which I handle errors in my express.js applications.

We need to understand **middleware** to handle errors if you want to apply the technique I am going to suggest. Simply, a middleware in express is a function that has access both the request and the response objects for a particular route. Additionally, they take in an argument **next** which is a function that gets called after the middleware function is executed.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=one-dark&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=true&amp;pv=14px&amp;ph=13px&amp;ln=false&amp;fl=1&amp;fm=Anonymous%20Pro&amp;fs=18px&amp;lh=133%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=const%2520express%2520%253D%2520require%28%27express%27%29%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%250Aconst%2520app%2520%253D%2520express%28%29%250A%250Afunction%2520someMiddleware%28req%252C%2520res%252C%2520next%29%257B%250A%2509console.log%28%27Request%2520made%27%29%250A%2520%2520%2509%252F%252F%2520after%2520the%2520task%2520of%2520middleware%2520is%2520complete%250A%2520%2520%2509%252F%252F%2520we%2520call%2520the%2520next%2520function%250A%2520%2520%2509next%28%29%250A%257D%250A%250A%252F%252F%2520this%2520middleware%2520get%27s%2520called%2520before%2520%2520the%2520%252Fsomeroute%2520get%27s%2520hit%250A%252F%252F%2520some%250Aapp.use%28someMiddleware%29%250Aapp.get%28%27%252Fsomeroute%27%252C%2520controller%29" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Middleware example

In the above example, if you send a get request to */someroute* route ‘Request made’ will be logged on the console.

#### Controllers and Middlewares

![](/blogs/error-handling-for-express-js-applications-a26a3002ef82/TmwzFC2OY.png)

Controllers and Middlewares

The above image explains what is a controller and what is middleware. When a request is received on a particular route, middleware-1,2 and 3 gets called before the controller for that route is called. The controller can then send a response. However, the middleware function also has access to the response object, middleware can also send a response and close the request. So, you can assume that any middleware is a controller and any controller is a middleware.

For example, a middleware function to verify JWTs can be created. The middleware will verify if the token is valid. If it is invalid, the middleware will send an error response back to the client and close the request. The middlewares/controller after that JWT verification middleware will not be called in that case.

#### Project Structure

Express is an unopinionated web framework for building web applications using Node.JS. Since, it is an unopinionated web framework, the directory structure for organizing project is not strictly recommended by the framework creators. Below, I am going to show you the screenshot of my project structure which you can follow to organize your projects, however, you can follow your own structure if that feels right.

Project Structure

#### Function to create error objects

Inside *utils/createError.js* file, I have a function that takes in two things: a status code and an error message and returns an error object.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=one-dark&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=true&amp;pv=14px&amp;ph=13px&amp;ln=false&amp;fl=1&amp;fm=Anonymous%20Pro&amp;fs=18px&amp;lh=133%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=module.exports%2520%253D%2520%28status%252C%2520message%29%2520%253D%253E%2520%257B%2509%2509%2509%2509%2509%250A%2509const%2520error%2520%253D%2520new%2520Error%28message%29%250A%2520%2520%2520%2520error.status%2520%253D%2520status%250A%2520%2520%2509return%2520error%250A%257D" width="700" height="328" frameborder="0" scrolling="no"></iframe>

**utils/createError.js**

### Centralized Error Handler in app.js

This is the main part of this story. We are going to make a middleware function that can accept error objects and if an error is received, it can send an error response to the client making the request. To do so, we are going to create 2 middleware functions. One of the middleware will get triggered if none of the routes above gets called and another will get triggered if any middleware/controller throws an error.

The structure of our app.js will look something like the following.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=one-dark&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=true&amp;pv=14px&amp;ph=13px&amp;ln=false&amp;fl=1&amp;fm=Anonymous%20Pro&amp;fs=18px&amp;lh=133%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=const%2520express%2520%253D%2520require%28%27express%27%29%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%2509%250Aconst%2520app%2520%253D%2520express%28%29%250A%250A......%2520Othe%2520code%2520.....%250A%250Aapp.use%28someMiddleware%29%250Aapp.get%28%27%252Fsomeroute%27%252C%2520controller%29%250Aapp.use%28%27%252Fauth%27%252C%2520authRouter%29%250Aapp.use%28%27%252Fpost%27%252C%2520postRouter%29%250A............%250A%250A%252F%252F%2520the%25202%2520middlewares%2520I%2520mentioned%250A%252F%252F%2520if%2520none%2520of%2520the%2520routes%2520above%2520gets%2520hit%250Aapp.use%28%28req%252C%2520res%252C%2520next%29%2520%253D%253E%2520%257B%250A%2509next%28createError%28404%252C%2520%27Page%2520not%2520found%27%29%29%250A%257D%29%250A%250A%252F%252F%2520middleware%2520that%2520can%2520accept%2520errors%250A%252F%252F%2520the%2520first%2520argument%2520has%2520error%250Aapp.use%28%28error%252C%2520req%252C%2520res%252C%2520next%29%2520%253D%253E%2520%257B%250A%2520%2520%2509res%250A%2520%2520%2520%2520%2509.status%28error.status%2520%257C%257C%2520500%29%250A%2520%2520%2520%2520%2509.send%28%257B%2520status%253A%2520%27Error%27%252C%2520message%253A%2520error.message%2520%257D%29%253B%250A%257D%29" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Middleware functions

Generally, all errors have a message property so, you can trust that there will be a message with error object in our error handling middleware. If in case there’s not one then, by default ‘Internal server error will be sent.’

#### How to trigger an error to utilize our centralized error handler?

Imagine that you have a controller that logs in users to the application. A high-level implementation example will be shown in the example here. On the bottom of this story, I will add a GitHub repository of an express application which will include all these applied on a real project.

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=one-dark&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=20px&amp;dsblur=68px&amp;wc=true&amp;wa=true&amp;pv=14px&amp;ph=13px&amp;ln=false&amp;fl=1&amp;fm=Anonymous%20Pro&amp;fs=18px&amp;lh=133%25&amp;si=false&amp;es=2x&amp;wm=false&amp;code=app.post%28%27%252Fauth%252Flogin%27%252C%2520async%2520%28req%252C%2520res%252C%2520next%29%2520%253D%253E%2520%257B%2509%2509%2509%250A%2509try%2520%257B%250A%2520%2520%2520%2520%2520%2520%2509%252F%252F%2520find%2520a%2520user%2520matchign%2520username%2520from%2520the%2520DB%250A%2520%2520%2520%2520%2509const%2520user%2520%253D%2520await%2520User.find%28req.body.username%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520if%2520there%27s%2520no%2520user%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28!user%29%2520throw%2520createError%28403%252C%2520%27Username%2520or%2520password%2520do%2520not%2520match%27%29%2509%2509%2509%2509%250A%2520%2520%2520%2520%2520%2520%2509%252F%252F%2520if%2520password%2520does%2520not%2520equal%2520hashed%2520password%250A%2520%2520%2520%2520%2520%2520%2509%252F%252F%2520throw%2520error%250A%2520%2520%2520%2520%2520%2520%2509if%28user.password%2520%253D%253D%2520hashed%28req.body.password%29%29%2509%2509%2509%2509%2509%2509%2509%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2509res.send%28%27Logged%2520in%27%29%250A%2520%2520%2520%2520%2520%2520%2509else%2520throw%2520createError%28403%252C%2520%27Username%2520or%2520password%2520do%2520not%2520match%27%29%250A%2520%2520%2520%2520%257D%2520catch%2520%28error%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2509%252F%252F%2520this%2520will%2520be%2520handled%2520by%2520our%2520error%2520handler%250A%2520%2520%2520%2520%2509next%28error%29%250A%2520%2520%2520%2520%257D%250A%257D%29" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Login and error handling example

This is how you can apply error handling practices in your express.js applications.

If you want to see a project with all these applied, go to this [GitHub Repository](https://github.com/prashantacharya/idea-submission) and see the code in action.

Thank you for reading. I also write contents for my own website [https://bigomega.dev.](https://bigomega.dev.) You can sign up for my newsletter.

### **A note In Plain English**

Did you know that we have four publications and a YouTube channel? You can find all of this from our homepage at [**plainenglish.io**](https://plainenglish.io/) — show some love by giving our publications a follow and [**subscribing to our YouTube channel**](https://www.youtube.com/channel/UCtipWUghju290NWcn8jhyAw)**!**
