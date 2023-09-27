
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

const removeSong = () => {

    for (let i = 0; i < table.rows.length; i++) {
        let current_row = table.rows[i];
        if (current_row.classList.contains("selected")) {
            let selected_row_index = current_row.rowIndex;
            table.deleteRow(selected_row_index);
            decrementSerialNumber(selected_row_index);
            return;
        }
    }

    alert("Please select a row to delete!");

}

function decrementSerialNumber(previousSerial) {
    for (let i = previousSerial; i < table.rows.length; i++) {
        let row = table.rows[i];
        let serial_cell = row.cells[0];
        serial_cell.innerHTML = previousSerial;
        previousSerial++;
    }
}


// ******* NOT MY CODE (BELOW THIS) ******** //

// ****** COPIED IT FROM https://codepen.io/tmrDevelops/pen/vOPZBv ********** //

var c = document.getElementById('canv');
var $ = c.getContext('2d');


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;
var x;
var y;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.01;
  window.requestAnimationFrame(run);
}

run();


// ****** NOT MY CODE (ABOVE THIS) ******* //

let timeline = document.getElementById("timeline2");

const animateTimeline = () => {
    
    timeline.style.transformOrigin = "left center"
    timeline.style.transform = "scale(1)";

    

}

animateTimeline();