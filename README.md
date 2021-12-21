# DEVFORMS
  Server-Side solution for front end developers.
 
## Description?
  **DevForms** is a server-side solution for front-end developers which allows them to create and submit their form data into targeted email address.During the whole process,they don't need to write a single line of code for server side programming.
 
## How it works?
  1. Developers need to register on the website before they can get a Unique Api Form URL. They just need to create a Form by providing the `form name` and `target email address`. Once the form is created they can copy that Unique URL from the integration section.
 
  2. Paste the Unique URL as value of the `Action attribute` of form tag & set the request method `POST method`. That's all.
 
  3. Rest of the things we will handle automatically!
 
  4. When anyone submit that form they are redirected to Google recaptcha page, once captcha is filled form data is sent to targeted email address.
 
## My Inspiration
  When I was building my portfolio, I was looking for something that can automatically send my form data to my email address. I tried so much through youtube, copy-pasted so much code to submit my form data but it did not really work for me because at that time I was just a beginner, trying all these things without any knowledge of server-side programming.
  Later, I found `Formspree` which is a backend solution for developers. Then I simply created a form on that website & pasted the URL inside my code. As I submitted the form it automatically sent my form data to my email address. That thing really fascinated me.
