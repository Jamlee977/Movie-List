let btn = document.getElementById("btn");
let title = document.getElementsByClassName("title")[0];
let language = document.getElementsByClassName("movie-lang");
let genre = document.getElementById("genre");
let checkBox = document.getElementById("r-rated");
let counter = 1;
let table = document.getElementById("table-of-elements");

btn.addEventListener('click', () => {
    // ! checks if there is input from the user in the input field
    if(title.value === "") { alert("Movie title is required!"); return; }

    // * adds new row
    let row = table.insertRow(counter);
    // * adds a cell of the number of the movie
    let number = row.insertCell(0);
    // * adds a cell for the name of the movie
    let movieTitle = row.insertCell(1);

    // * adds a cell for the language, either arabic or english
    let languageSelected = row.insertCell(2);
    // * adds the number of the element
    number.innerHTML = counter;
    // * adds the movie title
    movieTitle.innerHTML = title.value
    // * adds the language of the movie
    if(language[0].checked) {
        languageSelected.innerHTML = language[0].value
    } else {
        languageSelected.innerHTML = language[1].value
    }

    // * adds a cell for the genre
    let genreSelection = row.insertCell(3);
    // * adds the genre of the movie
    genreSelection.innerHTML = genre.value;

    // * adds a cell for R-Rated stuff
    let check = row.insertCell(4);
    // * R-Rated or not
    check.innerHTML = checkBox.checked ? 'Yes' : 'No';
    
    // * adds a button cell to the table
    let delButtonCell = row.insertCell(5);
    const deleteButton = document.createElement("button");
    // * sets the attribute of the button to be a button
    deleteButton.setAttribute('type', 'button')
    deleteButton.setAttribute('class', 'action-button')
    deleteButton.innerHTML = 'Delete';

    // * appends the button to the table
    delButtonCell.appendChild(deleteButton);

    // * adds a functionality for the 'delete' button to delete a certain row in the table
    deleteButton.addEventListener('click', () => {
        row.remove();
        counter--;
    })

    // * resets the input of the using the the input bar to start over
    title.value = ""
    if(checkBox.checked) checkBox.checked = !(checkBox.checked)

    ++counter;
});
