
let song_name = document.querySelector("#song_name_input");

let artist_name = document.querySelector("#artist_name_input");


const calc_serial = () => {

    let table = document.queryElementByTagName("table");
    let index_last_row = table.rows.length ;

    console.log(index_last_row);

    
}


const addRow = () => {
        
    let table_body = document.querySelector(".table_body");

    let new_row = document.createElement("tr");

    let serial_number_cell = document.createElement("td");
    serial_number_cell.innerHTML = "1";
    new_row.appendChild(serial_number_cell);

    let song_cell = document.createElement("td");
    song_cell.innerHTML = song_name.value;
    new_row.appendChild(song_cell);

    let artist_cell = document.createElement("td");
    artist_cell.innerHTML = artist_name.value;
    new_row.appendChild(artist_cell);

    table_body.appendChild(new_row);
}

const addSong = () => {
    if (song_name.value !== "" && artist_name.value !== "") {
        addRow();
        song_name.value = "";
        artist_name.value = "";
    }   else    {
        alert("Enter the Song and Artist.")
    }
}