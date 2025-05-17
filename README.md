5/17/25

For my calendar/planner app, I used Javascript/JSX/HTML like in CS290 using REACT as the front end and the REST API as the backend. I have implemented the three main pages being the login page, weekly planner page, and daily planner pages in REACT. I have yet to implement anything for the REST API. 

My pages: 
1. Login page, user inputs email and password, endpoint: "/ "
2. Weekly planner page, shows 7 days in the current week with all events in blocks, endpoint: "/weekly-view"
3. Daily planner page, shows just one day when clicked on in the weekly view page,, endpoint: "daily-view/date_id"
NOT YET IMPLEMENTED:
4. Add event, add event with name, time, dates, repeat, reminders, task/list/event? (like grocery list or a type of event that can be checked off like routine stuff), endpoint: "/event"
5. Edit event, click on the event block to edit it and save it, endpoint: "/event/:event_id"
6. Settings page, change color themes and whatnot "/settings"

microservice ideas: 
•add event:
 -endpoint: '/event'
 -params: {
      user_id: required
     event_id: required
     title, time, date, etc.: required
 }
 -returns: a posted event

•update event:
 -endpoint: '/event/:event_id'
 -params: {
     user_id: required
     event_id: required
     title, time, date, etc.: optional
 }
 -returns: updated event object

•delete event:
 -endpoint: '/event/:event_id'
 -params: {
     user_id: required
     event_id: required
 }
 -returns: deleted event object

•settings screen:
 -endpoint: '/settings'
 -params: {
     user_id: required
     //idk yet fully, but change color theme, reoccuring events, reminder settings
 }
 -returns: setting screen view

•create user: not sure how this will work yet tbh
 -endpoint: '/ '
 -params: {
     email: required
     password: required
 }
 -returns: weekly screen view, user_id

•service preferences: HTML and JavaScript frontend. REST backend. I could use MongoDB for database persistence concerning logins and accounts but I havent looked into that yet.

user_id is unique identifier for a logged-in user
event_id is unique identifier for an event item
date_id is unique identifier to date
