// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    /*
    
let table = document.createElement('target');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('target').appendChild(table);



// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "James Clerk";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Netflix";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2.";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Adam White";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "Microsoft";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "3.";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "adam";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "Mic";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);
*/

let table = document.createElement('target');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('target').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');


let heading_1 = document.createElement('th');
heading_1.innerHTML = "I";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "II";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "III";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "IV";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "V";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "VI";
let heading_7 = document.createElement('th');
heading_7.innerHTML = "VII";
let heading_8 = document.createElement('th');
heading_8.innerHTML = "VIII";
let heading_9 = document.createElement('th');
heading_9.innerHTML = "IX";
let heading_10 = document.createElement('th');
heading_10.innerHTML = "X";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
row_1.appendChild(heading_9);
row_1.appendChild(heading_10);



tbody.appendChild(row_1);




// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_11 = document.createElement('th');
row_2_data_11.innerHTML = "II";
let row_2_data_12 = document.createElement('th');
row_2_data_12.innerHTML = "III";
let row_2_data_13 = document.createElement('th');
row_2_data_13.innerHTML = "IV";
let row_2_data_14 = document.createElement('th');
row_2_data_14.innerHTML = "V";
let row_2_data_15 = document.createElement('th');
row_2_data_15.innerHTML = "VI";
let row_2_data_16 = document.createElement('th');
row_2_data_16.innerHTML = "VII";
let row_2_data_17 = document.createElement('th');
row_2_data_17.innerHTML = "VIII";
let row_2_data_18 = document.createElement('th');
row_2_data_18.innerHTML = "IX";
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "2";

row_2.appendChild(row_2_data_11);
row_2.appendChild(row_2_data_12);
row_2.appendChild(row_2_data_13);
row_2.appendChild(row_2_data_14);
row_2.appendChild(row_2_data_15);
row_2.appendChild(row_2_data_16);
row_2.appendChild(row_2_data_17);
row_2.appendChild(row_2_data_18);
row_2.appendChild(row_2_data_1);

tbody.appendChild(row_2);



// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "3";


row_3.appendChild(row_3_data_1);

tbody.appendChild(row_3);


// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "4";


row_4.appendChild(row_4_data_1);

tbody.appendChild(row_4);


let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "5";


row_5.appendChild(row_5_data_1);

tbody.appendChild(row_5);


let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "6";


row_6.appendChild(row_6_data_1);

tbody.appendChild(row_6);



let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.innerHTML = "7";


row_7.appendChild(row_7_data_1);

tbody.appendChild(row_7);

let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.innerHTML = "8";


row_8.appendChild(row_8_data_1);

tbody.appendChild(row_8);

let row_9 = document.createElement('tr');
let row_9_data_1 = document.createElement('td');
row_9_data_1.innerHTML = "9";


row_9.appendChild(row_9_data_1);

tbody.appendChild(row_9);



let row_10 = document.createElement('tr');
let row_10_data_1 = document.createElement('td');
row_10_data_1.innerHTML = "10";


row_10.appendChild(row_10_data_1);

tbody.appendChild(row_10);


//pas correct ! à modifier !

})();
