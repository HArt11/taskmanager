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
The popularity of crafting and home-based creative projects is booming. Website like Pinterest offer the user the ability to "pin" projects, but these can then get lost in the large number of boards a user can bave. This website is designed to keep track of all these projects in one place, and if you're anything like me, like to start a craft project and then put it down and forget where you're at!
Raverly offers users the ability to save the patterns and print, but not so much for tracking projects.

<br><br>

## User Experience Design
***
* Feedback from users, suggested a home page link was added within the footer to return back. This was to avoid scrolling back up the page, even though these pages were not designed to be long.

<br>

![Screenshots of final homepage design](/taskmanager/static/screenshots/ss1.jpg)
<br>

* This is a screenshot of the final home page with the Get started button. The footer and header both contain some degree of navigation. Highligh 1 shows the nav bar on desktops, highlight shows the nav bar as a burger menu, 3 shows the footer with icon link to home page and the "Helen Arthur" takes users to my LinkedIn page for a bit self promotion!
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
* Users liked the ability to search external sites for project ideas.
* Users found the "gift" slider button userful when adding projects to remind which projects where gift ideas.
* The "deadline" was designed to encourage the completion of the project


<br>

#### First Time Visitor Goals

- As a First Time user, I want to easily understand the main purpose of the page
- As a First Time user, I want to add new projects to the page

### Returning Visitor Goals

- As a Returning user, I want to record my projects.
- As a Returning user, I may want to be able to share my projects with external sites.
- As a Returning user, I may want to update the "deadline" dates to prioritise my projects

### Frequent Visitor Goals

- I would like to update my project and mark off when complete.
- I would like to link my saved projects to their source url.

<br><br>

 ## Features
 ***
 * The user can seek inspiration from the cards displayed on the project (tasks) screen. These have links to external sites such as Pinterest and Ravelry for porject ideas. These all open to the correct url in a new wab for good UX design.
 * 
 ## Existing Features 

<Br>

 * ### Navigation
***
 * The user can either use the burger menu on the side on smaller screens or mobile screens, or on larger desktops and screens, the navigation bar features to the right of the main heading. There is also a logo in the footer which will take the user back to the home page.
  
<br><br>

* ### Future Features
***
* A user log in and authentication function to be added.
* Completed projects section to be added, where completed projects can be stored, for future reference if for example a gift or toy was particularly popular. It could be found again with relative ease, including links to the source url.
* Ability to upload and save images of current and past projects, with completed ones moving to a different database perhaps.
* The ability to share completed porjects with the craft community, either through forums or social media.


<br><br>

## Design
***
   * ### Colour Scheme
     I wanted a colour scheme based around the chosen background, which was bright. Complementary colours have been used, greens and purples to catch the eye with bold colouring.
  * ### Typography
    I wanted a simple yet playful looking font, so avoided cursive or handwritting styles. The font used was 'Raleway' from Google Fonts.
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
	* This project uses HTML as the main language used to complete the structure of the Website. The Gitpod template used was created by Code Institute, and then the IDE used was the CodeAnywhere, with Heroku used to host the pooject.
* CSS
	* This project uses custom written CSS to style the html.
* Javascript
	* This was based on the task manager walkthrough project as part of the Code Institute learning and adapted.
* [Font Awesome](https://fontawesome.com/)
	* Font awesome icons are present throughout the website - imported into the base template.
* [GitHub](https://github.com/)
	* GitHub was the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
	* Google chromes built in developer tools are used to inspect page elements and help debug issues with the site layout and test different CSS styles. Allows the testing of features/code without editing of your own HTML/CSS.
* [Krita](https://krita.org/en/)
	* Use to add writing to the book image for "coming soon"
* [MS PAINT](https://support.microsoft.com/en-us/windows/get-microsoft-paint-a6b9578c-ed1c-5b09-0699-4ed8115f9aa9)
    * Used to edit some of the images present on the website.
* [Post CSS](https://postcss.org/)
    * I ran my code through this tool to ensure no errors were present and it was recommended to use to fix any errors with Ipad resolutions. 
* [Heroku] (https://heroku.com/)
  * The hosting platform used for the porject deployment.

<br>

## Test Strategy 
***

 ### Testing
Testing for this website was done using the built-in Chrome Developer Tools to check responsiveness on different screensizes and general debugging. Testing was also done on an iPhone 10 using Safari and other mobile devices. No issues were found with responsiveness and previous issues have been dealt with through custom screen aspect media queries.

In addition to my own testing, I sent my website link to family and friends and asked for them to test the website out using the same methods listed below. With thanks to Graeme Arthur for peer review and testing.

Home page

* Verify that the images are correctly shown on all browsers and at all breakpoints.
* Verify that the buttons present the user with the correct links and the timer popup. 
* Ensure that the modals display correctly on all screen sizes and can be closed easily by the user to return to the page behind.

Project page
* Verify that the project pages adjust responsively to various devices and screen sizes
* Verify the projects can be updated.
* Verify that the game can be completed and board disabled when game won.
* Verify that timer can be started, paused and reset.


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
  The addition of user log in would be the next step in improving the site. The ability to store completed projects and upload a picture of the completed project would also be useful which is beyond the scope of this project.
   
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
The html, CSS and Javascript code for game was adapted from the TaskManager tutorial on non-relational databases, using a Code Instiute template (CodeAnywhere) with deployment via Heroku.,and SQLAlchemy.

I referred to W3Schools, YouTube tutorials, Slack, Stack Overflow and peers when I encountered issues, which were primarily to do with layout issues and media queries.

* ### Content
<br>
The images were a mixture of free images from Pexels.com and some generated by Bing Image Creator. 