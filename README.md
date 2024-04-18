# React Assignment 9


# Luxy Realty
# [Live Url](https://luxy-realty.web.app/)
# [Github repo](https://github.com/programming-hero-web-course-4/b9a9-real-estate-mk-munna)


# Features and Characteristics

# NPM packages name
1. animate.css
2. swiper slider
3. React Hook form,

# Routes

this website has many routes routes
<!-- Home, register page, login page, -->

* Home page

1. banner
Home page has slidable banner with some text and a button

2. Hot Deal card section
It has 3 card showing hot deals text if you mouse over the cards it will grow up and image will move 

3. Estate Listing
There is a swiper slider in this section. the slider will show 1 card in smaller devices and 4 cards in large devices and 2 cards in medium devices and 3 cards in other devices

every card shows -
1) Estate title
2) Price
2) Image
4) Status over the image
5) Facilities

4. Todays Discount section 
this section shows title and description left side of the section and it has automatic sliding product card at right side of the section.the section has a background image too.

5. Explore Apartments types section
the section contain a image on the left side of the section , a slidable product card at the middle of the section and a title and description right side of the section.
the slider is automatically slide one by one

6. Our Partner section
the section slides the partner company logo one by one



* Registration Page
here a new user can register with his details like name, email , photoUrl and password
this section has password validation enabled and will stop the user if they do not put the same password

it will show a toast message if user successfully registered their account
it will show a toast message if user use a used email address
it will show a toast message if user put different password on the confirm password field

a Sign In button will redirect to the login page  

this section has account setting right at the right sidebar


* login Page
this section has a login form with email address and password field
it also has Google and GitHub login method 
it also shows toast messages when user successfully login or failed

a signUp button will redirect to the Registration page

this section has account setting right at the right sidebar

# Private routes

1. Profile 
here, user can see their information like image, username and email address
here's a edit profile button  lined with update profile route

* Update profile
here, user can update their information like image and photo Url by clicking the save changes button

* Estate Details page

if the user is not logged in it will be redirected to login page. after login it will be redirected to Estate Details page again.

* Contact us

Contact us section has a message form. a logged in user can send message. it also has a join newsletter form



# Every page has navbar and a footer
* Nav bar
Nav bar contains website title, navigation link, search bar, date and time, user profile image, my card and wishlist icon at the top.

if a logged in user hover over the image icon it will show the user name and if click the icon it will show - user profile , update profile, settings and logout option as a dropdown menu. if a user click the logout button it will logged out the user profile and show a toast message.

if a not logged in user click the user icon it will show login and registration page button as a dropdown menu

* Footer
/added a eye catching footer underneath the site

* error page
added error page for unknown route

# responsive for mobile devices, tablets and pc

<!--Note : Please wait until all the data has been loaded first time(if the content doesn't showing perfectly for mobile, tablets or pc, double click the toggle toolbar when you will check the responsiveness)-->
