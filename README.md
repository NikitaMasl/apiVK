#**Application goals:**
This project demonstrates the using of VK API

##**Limitations:**
- This application doesn’t work with localhost. It can only be run on the existing domain due to restrictions from VK;.
- The logout from VK doesn’t work properly. This is because the user's information from VK form is stored in user's cookies to which the application doesn’t have access.
- This application was not tested on mobile devices

##**About the application:**
The working application can be viewed here: http://allbestballs.ru/'.

Only required permissions are requested from VK:
- Access to profile
- Access to friends data

Using “get-requests” API, the following data is obtained from the VK
- access token
- user id
- first name
- last name

The demo page shows the logged user information:
- Thumbnail
- Name
- Surname
- Number of friends

Click on the button 'Show the whole list' opens the block with the list of all friends with their thumbnails and names.

At the top of the list the Search field is available. Type the first or last name of the fiend and press the 'Enter' button. As a result the filtered list of friends will be shown.
