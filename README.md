# Crafty Lass Project Manager

This non-relational database was created for my milestone project 3 - Back End Development

The live website can be found .....****heruko link*****

The aim was to allow the user to keep track of craft projects started and almost a project to do list

<br><br>

## Crafty Lass Project Manager Overview
***

The home page is bright and colourful, and directs the user into the application. The application will store and allow the user CRUD functionality to organise their craft propjects.

<br><br>

RESPONSIVENESS PLACEHOLDER

<br>

The first page is the landing page, which details the purpose of the Crafty Lass task manager.This page is responsive and image resizes nicely for the desktop and mobiles.

![Am I Responsive image of how the landing page looks across different browser sizes](/assets/images/amiresponsive.png) 
<br>

The second Am I responsive screenshot shows a game in progress. The mobile device showing for this on that webpage doesnt appear to demonstrate the game on a mobile as checking various phone types this was not the case.

<br>

![Am I Responsive image of how the game page looks across different browser sizes](/assets/images/finalResponsive.jpg) 


<br>


- [Crafty Lass Project Manager](#crafty-lass-project-manager)
  - [Crafty Lass Project Manager Overview](#crafty-lass-project-manager-overview)
  - [Project Research](#project-research)
    - [Research Analysis](#research-analysis)
  - [User Experience Design](#user-experience-design)
  - [User stories](#user-stories)
      - [First Time Visitor Goals](#first-time-visitor-goals)
    - [Returning Visitor Goals](#returning-visitor-goals)
    - [Frequent Visitor Goals](#frequent-visitor-goals)
  - [Features](#features)
  - [Existing Features](#existing-features)
  - [Design](#design)
  - [Wireframes](#wireframes)
  - [Technologies](#technologies)
  - [Test Strategy](#test-strategy)
    - [Testing](#testing)
- [](#)
    - [Manual Testing](#manual-testing)
    - [Feedback from User Testing](#feedback-from-user-testing)
    - [Validator Testing](#validator-testing)
    - [Unfixed Bugs](#unfixed-bugs)
  - [Deployment](#deployment)

## Project Research 
***
Having a 4 year old that needs constant stimulation or fun things to do, is itself challenging! Anything that keeps the attention span of a pre-schooler for more than 5mins would be a win! 
<br><br>

 ### Research Analysis
  ***
Research Analysis
Children like bright colours, playful styles and easy to follow instructions.
<br><br>

## User Experience Design
***
* Feedback from users, suggested a home page link was added within the footer to return back. This was to avoid scrolling back up the page, even though these pages were not designed to be long.

<br>

![Screenshots of final homepage design](/assets/images/screenshots/ss1-final.jpg) 

<br>

* This is a screenshot of the final home page with green backdrop removed. When the timer is clicked, the user can enter the number of minutes for the game

<br>

![Screenshots of final timer design](/assets/images/screenshots/ss2-final.jpg)

<br>

* This screenshot shows the timer in action counting down from the user's choice. It also shows the move counter which counts two card flips as one move. 

<br>

![Screenshots of final game in progress design](/assets/images/screenshots/ss3-final.jpg) 

<br>

* This third screenshot shows the message when the game has been completed and the cards matched, and the number of moves the game was completed in. No more cards can be turned and will remain showing until the New Game button is pressed.

<br>

![Screenshots of final New game design](/assets/images/screenshots/ss4-final.jpg) 

<br>

* Once "New Game" is clicked, the cards are flipped and shuffled, the timer and move counter will be reset and the congratulations message will clear ready for the next game.

## User stories
***
* Users did enjoy the game, and suggested some tweaks such as a larger pool of cards to randomly select from as improvements moving forward. The younger testers found the game entertaining even if only for 5minutes


<br>

#### First Time Visitor Goals

- As a First Time user, I want to easily understand the main purpose of the game and follow the instructions.
- As a First Time user, I want to be able to navigate throughout the site pages to find relevant content.
- As a First Time user, I want to view the website and content clearly on the device I am currently using and switch between devices and have the webpage be responsive.


### Returning Visitor Goals

- As a Returning user, I want to try improve my score.
- As a Returning user, I may want follow them on social media.

### Frequent Visitor Goals

- As a Frequent user, I want to beat my previous score, and possibly increase the difficulty.
- As a Frequent user, I may want to see a variety of dodgy artwork(!)

<br><br>

 ## Features
 ***
 ## Existing Features 

<Br>

 * ### Navigation
***
 * The user is led through the game by big bright buttons. The page on loading has a landing page with instructions and a "Let's Go!" button to take the user to the game area. 
 * Navigation is very simple and intended for children.
 * When a game is completed, the user simply presses New Game to reset the game area and reshuffle the cards.
  
<br><br>

* ### The Timer
***

* The timer is clicked and the user can set an optional timer. The user enters the time in minutes required for the game, and begins to count down.
* The timer has an interactive pause and play button which will pause and start the timer respectively. This is simply styled with limited text.
   
  - The game page is fully responsive.
<br><br>

* ### Future Features
***
* A more complex timer could be added. To start on first card flip, and stop when game completes.
* A difficulty selector could be added on the home page. For example, a 3x3 card play area could be displayed when the user selects the easy option, 4x4 for medium and 5x5 for hard.
* Record of high score could be something that could be added, but this may need a user to log in with the ability for it to display the top high scores.
* Sounds could also be added to card flips for amusement value, although parents may not be impressed!

<br><br>

## Design
***
   * ### Colour Scheme
     I wanted a colour scheme based around the chosen background, which was bright. Complementary colours have been used, so yellows, pale greens and purples to catch the eye with bold colouring.
  * ### Favicon 
      I used the Favicon.io website to create a favicon for my website. I wanted a cog icon to represent thinking. I used the Font Awesome icon and styled it - using favicon to produce the file.
  * ### Typography
    I wanted a simple yet playful looking font, so avoided cursive or handwritting styles. The font used was 'Happy Monkey' from Google Fonts.
  * ### Imagery
    The background imagery was sourced from pexels.com, and the cards themselves drawn by me on Krita using a drawing tablet and pen. Initially these were designed to be placeholder images, however positive feedback (in the form of laughter) from my 4 year old convinced me to develope the game using these badly drawn creations! 

  * ### Layout
    The two page layout seemed more professional than a single game page, but limiting this to two pages has kept the overal design very neat and simple.

<br><br>

## Wireframes
***
I wanted the game to appear the same on all devices, two page wireframes as below for home page

- [Home Page Wireframe](assets/images/wireframes/wfhomepage.png)
- [Game Page Wireframe](assets/images/wireframes/wfgamepage/png)

<br>

## Technologies
***
* HTML
	* This project uses HTML as the main language used to complete the structure of the Website. The Gitpod template used was created by Code Institute
* CSS
	* This project uses custom written CSS to style the html.
* Javascript
	* This was based on the memory game by CodingNepal, for card flip animations and basic styling with adaptions including a user controlled timer from https://www.youtube.com/watch?v=PIiMSMz7KzM (Easy timer code)
* [Font Awesome](https://fontawesome.com/)
	* Font awesome icons are present throughout the website - the favicon, and the controls for the timer are prefixed with a font awesome icon.  
* [GitHub](https://github.com/)
	* GitHub was the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
* [Gitpod](https://git-scm.com/)
	* Git was used to create and edit all code used to build the website and store assets. It also functions as version control software to commit and push code to the GitHub repository where the source code is stored.
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
	* Google chromes built in developer tools are used to inspect page elements and help debug issues with the site layout and test different CSS styles. Allows the testing of features/code without editing of your own HTML/CSS.
* [Krita](https://krita.org/en/)
	* This was used to create wireframes for 'The Skeleton Plane' stage of UX design. Although this changed slightly during the design and testing.
    * This free to use programme was also used to produce the card images so that the style and feel of the cards was similar and inkeeping.
* [MS PAINT](https://support.microsoft.com/en-us/windows/get-microsoft-paint-a6b9578c-ed1c-5b09-0699-4ed8115f9aa9)
    * Used to edit some of the images present on the website, mainly those used in the navigation bar.
* [Post CSS](https://postcss.org/)
    * I ran my code through this tool to ensure no errors were present and it was recommended to use to fix any errors with Ipad resolutions. 
* [Favicon](https://favicon.io/)
    * Favicon.io was used to make the site favicon - the font icon itself was taken from Font Awesome.

<br>

## Test Strategy 
***

 ### Testing
Testing for this website was done using the built-in Chrome Developer Tools to check responsiveness on different screensizes and general debugging. Testing was also done on an iPhone 10 using Safari and other mobile devices. No issues were found with responsiveness and previous issues have been dealt with through custom screen aspect media queries.

In addition to my own testing, I sent my website link to family and friends and asked for them to test the website out using the same methods listed below. With thanks to Graeme Arthur for peer review and testing, as well as my son, Rufus for his very blunt criticism and laughter.

Home page

* Verify that the images are correctly shown on all browsers and at all breakpoints.
* Verify that the buttons present the user with the correct links and the timer popup. 
* Ensure that the modals display correctly on all screen sizes and can be closed easily by the user to return to the page behind.

Game page
* Verify that the game adjusts responsively to various devices and screen sizes
* Verify the game can be played
* Verify that the game can be completed and board disabled when game won.
* Verify that timer can be started, paused and reset.


The website contains no backend functionality therefore testing will concentrate on:

* Testing navigational links open on an external page, as well as the site logo which is designed to redirect to the home page
* Testing the responsiveness of the website, making sure the layout and navigational features remain user friendly with UX design maintained


<br><br>

#
   ### Manual Testing
***
  * Navigation - Repeated steps on all pages.
       * Click on "Get Started!" button takes user to the Current project (or tasks) page.
         * Verify that pages are responsive to screen size and switches accordingly.
         * Side bar navigations direct user to correct pages.
         * Crafty Lass Home link in footer takes user back to landing page.
        <br><br>
    * Crafty Lass Home page
        * Verify that the images are correctly shown on all browsers and at all breakpoints.
        * No modals were used in this project.
        
        <br><br>
      * 
        * Verify that projects can be added on various platforms
        * Verify that projects can be edited on various platforms
        * Verify that categories can be added on various platforms
        * Verify that categories can be edited on various platforms
        <br><br>

  ### Feedback from User Testing
***
  The main piece of feedback from my user testing was a clean, following design, with playful contrasting and bright colours.
  This feedback also identified problems with the game being responsive which were since solved.
  <br><br>
        
### Validator Testing 
***
- HTML
  - No errors were returned when passing through the official [W3C validator]
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator]
<br><br>

### Unfixed Bugs
***
There are no unfixed bugs present within the website. 
<br><br>

## Deployment
***
Once the development was in progress, I deployed to Heroku with automatic updates to test throughout development.

<br><br>

* ### Code
<br>
The html, CSS and Javascript code for game was adapted from the TaskManager tutorial on non-relational databases, using a Code Instiute template (CodeAnywhere) with deployment via Heroku.

I referred to W3Schools, YouTube tutorials, Slack, Stack Overflow and peers when I encountered issues, which were primarily to do with layout issues and media queries.

* ### Content
<br>
The images were a mixture of free images from Pexels.com and some generated by Bing Image Creator. 