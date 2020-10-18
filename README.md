## Inspiration
Considering the pandemic going on, education in schools, colleges has become online pretty much in most places. The commonly preferred platform for classes, exams has been Google Meet. Although Google Meet has good UI and comfortable experience, it lacks many features that students and teachers feel are important. Hence, our project, Google Meet power-ups comes for the rescue. For this hackathon we added a much requested feature on the google meet support page - **Image Sharing!**

## What it does
- It add the image sharing capabilities to google meet. It is the much requested thing on google meet support forum. User can send the image in the google meet chat just like they can send text messages.

## Challenges I ran into
- Getting the elements of google meet page was the difficult thing as google is not giving static ids or classnames to elements. we studied Xpaths and tried lot of different ways to get the DOM elements in our javascript code.
- Getting updates for every new message that arrives. We had no clue how it can be done. We searched github, stackoverflow and blogs to get the idea about getting notification for every new meet message, but there were no such thing available. After digging much into the docs, we found MutationObserver and used that for this. We are proud that we are probably the first one to make it happen.

## Accomplishments that we're proud of
- We are able to get the incoming messages in realtime asynchronously using MutationObserver. We learned that th
ing by reading about it from the docs. There are very few resources available for that. We are happy that we learned this concept and implemented it in our application.
- We learned about adding the paste event and listening for it on input box of meet. We learned event propagation for that.

## What we learned
- Mutation Observer API
- Event Bubbling
- How to build extensions

## What's next for Meet Powerups
- File transfer support.

## Try it out
http://powermeetup.space/
