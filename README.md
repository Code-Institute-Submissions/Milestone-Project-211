# Milestone Project 2

## Contents
* [Purpose](#Purpose)
* [UX](#UX)
* [Features](#Features)
* [Technologies Used](#Technologies-Used)
* [Testing](#Testing)
* [Supported Browsers And Devices](#Supported-Browsers-And-Devices)
* [Issues](#Issues)
* [Deployment](#Deployment)
* [Credits](#Credits)
<br>

## Purpose

The purpose of this project is to showcase everything I have learned within the JavaScript and Interactive Frontend Development modules of the Code Institute Full Stack Development course. A full list of technologies used can be found in the technologies section of this document.

The purpose of the website is to show tourists that visit Sydney the best attractions, bars/clubs, hotels and restaurants. 
Please see below for the link to the website.

https://sanjaysanghera.github.io/Milestone-Project-2/
<br>
<br>

## UX

### User Stories

**Who** – Tourist.
<br>
**Want** – To navigate the website easily.
<br>
**Why** – So I can quickly access the information I need to.
<br>
<br>
**Who** – Tourist.
<br>
**Want** – To visit the best attractions in Sydney.
<br>
**Why** – To make the most of my short stay in the city.
<br>
<br>
**Who** – Tourist.
<br>
**Want** – To eat at the best restaurants in Sydney.
<br>
**Why** – To make the most of my short stay in the city.
<br>
<br>
**Who** – Tourist.
<br>
**Want** – To experience the Sydney night life and have a good time.
<br>
**Why** – To make the most of my short stay in the city.
<br>
<br>
**Who** – Tourist.
<br>
**Want** – To find a hotel in a good location that's near the best tourist attractions.
<br>
**Why** – So I don't need to travel to far and see/do as much as I can in the city.
<br>
<br>
**Who** – Tourist.
<br>
**Want** – To suggest more places to visit.
<br>
**Why** – So future tourists have more options to choose from.
<br>
<br>
**Who** – Tourist.
<br>
**Want** – To give feedback on places that have been suggested by the website.
<br>
**Why** – So the site owner knows whether the places they have suggested are still the best.
<br>
<br>
**Who** – Tourist.
<br>
**Want** – To find social media links.
<br>
**Why** – To find out more information about Sydney tourism. 
<br>
### Structure

* The website will be a single scrolling page with 3 page areas.
* The navigation bar will be sticky. This will become collapsible when on mobile device.
* The website will be responsive and the layouts will change according to the screen size.
* The first page area will be named Discover Sydney. This will outline what Sydney has to offer for tourists.
* The second page area will be named Explore. This will show the best attractions, bars/clubs, hotels and restaurants. 
* The third page area will be named Contact. This will have a contact form where tourists can give us feedback and suggestions.
* The footer will contain social media icons.

### Design

#### Colour Scheme
**White** - Page headers, navigation bar and footer, this is because it will contrast well with the background images. 
<br>
**Black** - Navigation bar, section text and footer text, this is because it contrasts well with white.
<br>
#### Typography
**Oswald** - This font will be used throughout the whole webpage, this is because it looks clean, professional and is easy to read.
<br>
#### Wireframes
To see the wireframes for all pages on both desktop and mobile view please click the below link.
<br>
[Wireframes](wireframes/wireframes.pdf)
<br>
<br>

## Features

### Planned Features
* The header will contain a sticky navigation bar. This will have 3 links which will direct you to the following page sections; Home, Explore & Contact.
* The footer will contain 3 social media icons for Facebook, Instagram & YouTube which will direct you to the website of the icon selected.
* The mobile view will get rid of the navigation bar and instead have a navigation button. When clicking this button, the 3 navigation links will appear vertically on the page. 
* The Explore page section will contain 4 buttons for attractions, bars/clubs, hotels and restaurants, as well as a Google Maps API. Clicking on a button will show our top 3 picks for the selected category on the Maps API.
* The Contact page section will contain a contact form which will have the following fields; Name, Email, Message. All fields will be mandatory to fill out and the form will be fully functional. An email will be sent out to the site owner when a form has been submitted.

### Features Left to Implement

**Weather Section**
<br>
This section would show what the weather will be for the current week in Sydney.
<br>
<br>

## Technologies Used

* **HTML** - This has been used to structure the project.
* **CSS** - This has been used to style the project.
* **Java Script** - This has been used to add complex features to the project.
* **Bootstrap** - This has been used to create the navigation bar and contact form.
* **Font Awesome** - This has been used to import Oswald font and social media icons.
* **GitHub** - This has been used to store and deploy the code for the project.
* **GitPod** - This has been used to create the code for the project.
* **Google Chrome Developer Tools** - This has been used to inspect the web pages and debug any issues.
* **Balsamiq Wireframes** - This has been used to create the wireframes for the project.
<br>


## Testing

Below are all the tests that have been carried out to ensure the website is functioning correctly.
<br>
<br>
**Expected** – Navigation bar links go to the correct page section.
<br>
**Testing** – Tested this by clicking each link within the navigation bar.
<br>
**Result** – Each link went to the correct page section.
<br>
<br>
**Expected** – Social media icons go to the correct page in a separate tab.
<br>
**Testing** – Tested this by clicking each social media icon.
<br>
**Result** – Each icon opened up the correct page in a new tab.
<br>
<br>
**Expected** – Explore button links to the explore page section.
<br>
**Testing** – Tested this by clicking the button.
<br>
**Result** – The button went to the explore page section.
<br>
<br>
**Expected** – Buttons on the explore page section display the correct markers on the Google Maps API.
<br>
**Testing** – Tested this by clicking each button.
<br>
**Result** – Each button displayed the correct markers on the Google Maps API.
<br>
<br>
**Expected** – All fields on the contact form are mandatory to fill in.
<br>
**Testing** – Tested by trying to submit the contact form with one field being empty.
<br>
**Result** – An error message pops up saying please fill in this field.
<br>
<br>
**Expected** – Email address field on the contact form requires an email address.
<br>
**Testing** – Enter random text that is not an email address in the field and submit it.
<br>
**Result** – An error message pops up saying please include an @ in the email address.
<br>
<br>
**Expected** – When the contact form has been submitted it sends an email to me with the submitted information.
<br>
**Testing** – Tested this by correctly filling in the contact form and submitting it.
<br>
**Result** – I received an email with the submitted information.
<br>
<br>


### Code Validation

* HTML file has been validated using the W3C HTML Validation Service website.
* CSS file has been validated using the W3C CSS Validation Service website.
* JS files have been validated using the JSHint website.
<br>

### User Story Testing

**User Story** – Tourist wants to navigate the website easily so they can quickly access the information they need.
<br>
**Result** – The navigation bar is top of the page and remains fixed in position when scrolling down.
<br>
![alt text](https://github.com/sanjaysanghera/Milestone-Project-2/blob/master/static/images/home-section.jpg)
<br>
<br>

**User Story** – Tourist wants to visit the best attractions in Sydney.
<br>
**Result** – Clicking on the attractions button within the explore page section will display our top 3 attractions to visit.
<br>
<br>
**User Story** – Tourist wants to eat at the best restaurants in Sydney.
<br>
**Result** – Clicking on the restaurants button within the explore page section will display our top 3 restaurants to eat.
<br>
<br>
**User Story** – Tourist wants to experience the Sydney night life.
<br>
**Result** – Clicking on the bars/clubs button within the explore page section will display our top 3 bars/clubs to visit.
<br>
<br>
**User Story** – Tourist wants to find a hotel in a good location that's near the best tourist attractions.
<br>
**Result** – Clicking on the hotels button within the explore page section will display our top 3 hotels to stay.
<br>
![alt text](https://github.com/sanjaysanghera/Milestone-Project-2/blob/master/static/images/explore-section.jpg)
<br>
<br>

**User Story** – Tourist wants to suggest more places to visit and give feedback on the suggested places.
<br>
**Result** – The contact page section has a contact form the tourist can use to send the site owner a message.
<br>
<br>
**User Story** – Tourist wants to find social media links
<br>
**Result** – The social media links are displayed in the footer of the website.
<br>
![alt text](https://github.com/sanjaysanghera/Milestone-Project-2/blob/master/static/images/contact-section.jpg)
<br>
<br>

## Supported Browsers And Devices

Below is all the browsers and devices the website has been tested on.
<br>
<br>
**Google Chrome (Right clicked the page and selected Inspect then Toggle Device Toolbar)**
<br>
**Microsoft Edge (Right clicked the page and selected Inspect then Toggle Device Emulation)**
* Moto G4
* Galaxy S5
* Pixel 2
* Pixel 2 XL
* iPhone 5/SE
* iPhone 6/7/8
* iPhone 6/7/8 Plus
* iPhone X
* iPad
* iPad Pro
* Surface Duo
* Galaxy Fold
<br>

**Firefox (Right clicked the page and selected Inspect Element then Responsive Design Mode)**
* Galaxy S9/S9+
* iPad
* iPhone 6/7/8
* iPhone 6/7/8 Plus
* iPhone X/XS
* Kindle Fire HDX
<br>

## Issues

**The contact form would not reset after submitting it**
<br>
To resolve this I used the form reset() method from the following website:
<br>
https://www.w3schools.com/jsref/met_form_reset.asp
<br>
<br>
## Deployment

**GitPod Deployment**
<br>
* Open the Milestone-Project-2 repository and click the GitPod button in the top right.
* Navigate to the index.html file and set your Google Maps API key on line 155:
![alt text](https://github.com/sanjaysanghera/Milestone-Project-2/blob/master/static/images/apikey.jpg)
* In the command console type the following and hit enter: python3 -m http.server 3000
* Go to the Open Ports tab next to the command console.
* Click the Open Browser button for port 3000, this will display a preview of the website.
<br>

**GitHub Deployment**
<br>
* Open the Milestone-Project-2 repository.
* Click the "Settings" tab.
* Scroll down to "GitHub Pages" and select the branch as master and the folder as root.
* Save the changes.
* Click on the provided link to go to the published website.
<br>

## Credits

### Content
The text content for the Discover Sydney section was taken from:
<br>
https://www.australia.com/en-gb/places/sydney-and-surrounds/guide-to-sydney.html


### Media
All images used were used from:
<br>
https://pixabay.com/
  
