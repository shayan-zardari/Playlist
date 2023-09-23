
let song_name = document.querySelector("#song_name_input");

let artist_name = document.querySelector("#artist_name_input");

let table = document.querySelector("table");

const calc_serial = () => {

    let index_last_row = table.rows.length;

    return index_last_row;
}

const addRow = (serial) => {
        
    let table_body = document.querySelector(".table_body");

    let new_row = document.createElement("tr");

    let serial_number_cell = document.createElement("td");
    serial_number_cell.innerHTML = serial;
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
    let serial = calc_serial();
    if (song_name.value !== "" && artist_name.value !== "") {
        addRow(serial);
        song_name.value = "";
        artist_name.value = "";
    }   else    {
        alert("Enter the Song and Artist.")
    }
}

document.addEventListener('DOMContentLoaded', function() {
  
    table.addEventListener('click', function(e) {

        for (let i = 0; i < table.rows.length; i++)    {
            let current_row = table.rows[i];
            current_row.classList.remove("selected");
        }

        let target = e.target; 

        if (target.tagName === 'TD') {
            var row = target.parentElement; 
            toggleRowSelection(row);
        }
        
    });
});

function toggleRowSelection(row) {
    row.classList.toggle('selected'); 
}