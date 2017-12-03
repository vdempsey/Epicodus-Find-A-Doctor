# Epicodus-JS-Find-A-Doctor

#### _Find a doctor application, December 1, 2017_


#### By _**Valia Dempsey**_



## Description

_This is an application which helps a user to find a doctor in Portland, Or. The user can search by condition or by Dr's name or specialty. It uses API provided by https://developer.betterdoctor.com/. _


## Setup/Installation Requirements

  ### Required:
    - Node and Bower are installed on your machine globally
    - Basic knowledge of ES6 vocabulary and syntax

  ### Installation Setup:
    1. Clone project from GitHub repository, by copying and pasting the url of this GitHub repository following the $git clone command into your favorite command line program, such as Terminal on Mac.  
        - For example, $git clone https://github.com/vdempsey/Epicodus-Find-A-Doctor

    2. In the command line run the following commands at the root level of your cloned repository folder:
        - $npm install
        - $bower install
        - $gulp build
        - $gulp watch (to preview live server updates)

    3. If needed, ready for production by running command $gulp build --production


## Specifications


| Description        | Input           | Output |
| ------------- |:-------------| :-----|
| Search term for medical condition:      | acne | **Kristina Jacobson**<br>9775 SW Wilshire St, Portland OR<br>5033501420<br>_currently accepting new patients_<br><br>**Charlotte Tsai**<br>3600 N Interstate Ave, Portland OR<br>5032859321 / https://healthy.kaiserpermanente.org/<br>_currently accepting new patients_<br><br>**Deborah Altemus**<br>800 SW 13th Ave, Portland OR<br>5032741697<br>_currently accepting new patients_ |
| Search Term for specific doctor      | Yoon      |   **Jerry Yoon** <br> 5528 SE Powell Blvd, Portland OR <br> 5037773999 <br> _currently accepting new patients_ |
| Search Term: | empty input     |  Please enter your search |
| Search Term for condition that does not return any matches in API results: | fever     | Your search did not return any results. Please try again. |
| When API request error occurs, the user will get an alert. | fever     | Something went wrong. Please try again. If you continue having this issues, please contact give us a call (888) - XXX - XXXX')|

### Known Bugs / Potential Improvements

_At the current state of the project the search results will display any doctor that has a matching search term in their api results block (example: bio). If you search for "Ghandi", the list contains the names of doctors, who's first and last name do not match "Ghandi". _

_Need more CSS work to create a layout and improve the flow of components._


## Support and contact details

_Please feel free to reach out with any questions, etc. to valiadempsey@gmail.com._


## Technologies/Resources Used

* ES6 (JavaScript)
* Node.js, including:
  - Bower
  - Gulp
* jQuery
* Bootstrap (CSS, JavaScript)
* HTML, CSS
* https://developer.betterdoctor.com/


### License

*Developed under the MIT license.*

Copyright (c) 2017 **_Valia Dempsey_**
