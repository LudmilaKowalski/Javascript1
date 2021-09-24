// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here


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
heading_1.innerHTML = "1";


row_1.appendChild(heading_1);

thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "2";


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

})();
