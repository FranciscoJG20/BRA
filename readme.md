# Bias Reporting Application (BRA)

![alt text](https://user-images.githubusercontent.com/36175254/43053373-4d374578-8dfa-11e8-9569-58c81d4d3c99.png)

## Description:

A company wide tool to encourage employees to report bias-related incididents / hate crimes in the workplace. The tool consists of an online form, requiring employees to create an account with their work email address. Once logged in, employees can view the form and submit it when ready. In the homepage, employees can also view an FAQ that addresses how the form works, examples of bias-related incidents, and company policy.

## Technologies used:

NodeJS, Express, Bcrypt, Body-Parser, Connect-Flash, Handlebars, Express-Session, Method-Override, Mongoose, Passport, HTML, CSS, Google Fonts

## Installing and running app locally:

You can run app locally by:

1.  Forking and cloning this repository
2.  Running npm install in the root folder, BRA

    `npm install`

3.  Adding form seed data with seed file

    `node db/seed.js`

4.  Running the server

    `nodemon index.js`

5.  Opening your browser and navigating to localhost://3001

## Unsolved Issues:

I am trying to make the bias reporting form only accessible when a user logs in. Currently, you can see the form (/form) without authenticating. I would also like to add a name property to my user model so that when a user logs in, they are greeted by their name instead of their email address.

## For more information including Data Survey, User Stories and Form Questions, see below:

### Survey Data

Sample Size: 13

54% of respondents had experienced discrimination at work or said they weren't sure if they had experienced discrimination at work.
31% did not report the incident to their employer
54% of respondents said they would feel very comfortable reporting discrimination / a hate crime through an online form and 38% said they would feel somewhat comfortable.

"I mentioned to the employer and they pretty much shrugged it off"

What are some ways to encourage people to report discrimination-related incidents / hate crimes at work?

"Communicating that diversity and acceptance are of utmost importance in the company culture. That way employees feel safer and and more comfortable reporting any hate crimes committed against them"

Lead with action. If your boss volunteers for equality focused movements, it sends the message that they will listen.

"Create an open environment where people feel alright reporting when [discrimination] happens. Rather than assuming [that discrimination] generally doesn't happen and that someone should/will report it when it does, create an environment where it's assumed [that] it does happen [and because] we're all learning how to be more inclusive, let's talk about how we can all be better."

### User Stories

Michelle

"I've attend company events where I don't always feel welcomed. My colleagues aren't explicitly biased towards me, but I notice when they treat me differently from our other peers. Most of the times, I power through it, but over time I've built a lot of frustration. I wish our company culture was different."

David

"My manager said something that didn't quiet sit well with me. When I shared that my partner and I had celebrated Pride, they said they had left town to avoid 'the noise.' I didn't think too much about it initially, but I'm realizing that this is the not the first time they say something seemingly dismissive about members of the LGBTA community.

Rosa

"I was running late to my first meeting because I had to drop off my daughter with her babysitter. I apologized to my colleagues but overheard two of them say they were lucky they weren't parents. I reported the conversation because it seemed offensive, but HR didn't think there were any issues in their language."

### Form questions:

1.  Where did the incident take place? input field
2.  When did the incident take place?
3.  Detailed description of event? large text box
4.  Are you concerned for your safety or anyone else's? YES / NO (To include or not include)
5.  Type of Incident
6.  Type of Bias
7.  Did anyone witness the event?
