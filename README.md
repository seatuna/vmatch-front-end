# VMatch

A web app for generating fight game match-ups based on the players' characters
and the characters they want to play against.

Game Underground at the Natick Mall recently started a training workshop for people who want to improve their Street Fighter V skills.  People who participate are matched up with another person based on which characters they play and which characters they want to play against.  The goal is for newer players to improve their overall skills, and for anyone (including veteran players) to learn specific matchups / get better at fighting against characters they’re weak against.  This app will automate the matchup process, thereby saving the organizers a lot of time (currently it’s done using paper, pen, and Excel spreadsheets).

## Tools

* Ember.js
* Javascript
* HTML
* CSS / SASS

## Wireframes

![VMatch Wireframe](http://img.photobucket.com/albums/v53/chibi_ynm/vmatch-wireframe_zpspytkgghv.jpg)

## User Stories

The following is the user story of the final product.  This app is still under
construction, thus, not everything will work as described.

All users:
*	Can view landing page, about page, contact page, players info
*	Can register, login, change password, log out
*	When clicking on the vmatch page, it will display “must be logged in as admin to access”

Logged in as admin users:
*	Can access content in vmatch page

Players
*	Can input data into text fields and click on “add” button to add player
*	Will search username in database, if doesn’t exist, create
*	If exists, retrieve player – increment participation count (patch)?
*	Form will clear after submitting, and show player at the bottom
*	Can click on “match” button to generate and display SF5 matches based on players’ characters, creates match
*	Double click on player data to edit

About
*	Information about workshop
*	Map of location

Contact
* Lists contact information

## Work in Progress

This will continue to be a work in progress and eventually be used at Game
Underground's VMatch events on Friday nights.
