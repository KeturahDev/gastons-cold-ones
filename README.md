# Gastons-Cold-Ones
## By: Ketuah Howard || April 20th 2020
#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description 

Mock bar selling pints for Gaston from Beauty and the Beast. Made with the intention of practicing basic state manipulation in React. Inlcudes create and read functionality along with conditional rendering.


## Preview
***[Deployed Applicatoin](https://keturahdev.github.io/gastons-cold-ones/)***
<img width="1315" alt="Screen Shot 2020-04-24 at 8 32 25 PM" src="https://user-images.githubusercontent.com/32975967/80270189-dbc50900-866a-11ea-98c3-f5db8ae17d94.png">

*component diagram*
<img width="815" alt="Screen Shot 2020-04-24 at 9 48 04 AM" src="https://user-images.githubusercontent.com/32975967/80236977-cae7a980-8610-11ea-8eff-2098cb79edc7.png">

## Project Specifications
### User Stories
* As an employee at Gaston's Cold Ones, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent .
* As an employee, I want to submit a form to add a new keg to a list.
* As an employee, I want to be able to click on a keg to see its detail page and view the description and how many kegs are left.
* As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.
* As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.
* As an employee I want to by warned when a keg is almost empty
* As an employee I want to by told when a keg is empty and not be permited to sell any more

### Behavior Driven Development

|Behavior|Input|Output|
|---|:---:|:---:|
|display all kegs|-|*list of kegs*|
|display form|user clicks add keg|*form for new kegs appears*|
|user can add new keg to list|user clicks submit on form|*new keg at bottom of menu*|
|user can see keg details|user clicks on keg|*keg details display with back to menu button at bottom*|
|user can navigate back to menu |user clicks on button on details page|*menu reappears*|
|user can sell 1 pint buy clicking "order" |user clicks order button on keg|*pint decreases by 1*|
|user can sell 1 pint buy clicking "order" |user clicks order button on keg|*pint decreases by 1*|


## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/KeturahDev/gastons-cold-ones```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} gastons-cold-ones```
* On Windows: ```gastons-cold-ones```

_Download Manually:_

* Navigate to https://github.com/KeturahDev/gastons-cold-ones.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Navigate to folder called "react-merchent-store" in terminal.
* Run "npm start" to auto start a local instance in your browser at http://localhost:3000/.


## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/KeturahDev/gastons-cold-ones/issues) here on GitHub._

## Technologies Used

* React
* npm
* Webpack
* Javascript
* HTML & CSS
* Bootstrap 4

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 *Keturah Howard*