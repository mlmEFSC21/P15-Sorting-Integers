const unsortedArray = [];
const sortedArray = [];
let i = 0;
while (i < 5) {
    unsortedArray[i] = parseInt(prompt("Please enter an integer."));
    i++;
}
//arrow function to sort the unsorted array.
sortedArray = unsortedArray.sort((a, b) => a - b);
const arrayContainer = document.querySelector("#arrayContainer");
//create the unsorted table
const unsortedTable = document.createElement("table");
unsortedTable.setAttribute("class", "unsortedTable");
unsortedTable.setAttribute("id", "unsortedTable");
//create the sorted table
const sortedTable = document.createElement("table");
sortedTable.setAttribute("class", "sortedTable");
sortedTable.setAttribute("id", "sortedTable");
//fill the table with other elements
unsortedTable.innerHTML = `
<caption>
Unsorted Array Table
</caption>
<thead>
<tr class="theadRow">
<th>Index 0</th>
<th>Index 1</th>
<th>Index 2</th>
<th>Index 3</th>
<th>Index 4</th>
</tr>
</thead>
<tbody>
<tr>
<td>${unsortedArray[0]}</td>
<td>${unsortedArray[1]}</td>
<td>${unsortedArray[2]}</td>
<td>${unsortedArray[3]}</td>
<td>${unsortedArray[4]}</td>
</tr>
</tbody>`;
arrayContainer.append(unsortedTable);
//fill the table with other elements
sortedTable.innerHTML = `
<caption>
Sorted Array Table
</caption>
<thead>
<th>Index 0</th>
<th>Index 1</th>
<th>Index 2</th>
<th>Index 3</th>
<th>Index 4</th>
</thead>
<tbody>
<tr>
<td>${sortedArray[0]}</td>
<td>${sortedArray[1]}</td>
<td>${sortedArray[2]}</td>
<td>${sortedArray[3]}</td>
<td>${sortedArray[4]}</td>
</tr>
</tbody>`;
arrayContainer.append(sortedTable);

console.log(unsortedArray);
console.log(sortedArray);

// prettier-ignore;
// document.getElementById(
//     "unsorted"
// ).innerText = `${unsortedArray[0]} ${unsortedArray[1]} ${unsortedArray[2]} ${unsortedArray[3]} ${unsortedArray[4]} `;

// // prettier-ignore
// document.getElementById("sorted").innerText =
// `${sortedArray[0]} ${sortedArray[1]} ${sortedArray[2]} ${sortedArray[3]} ${sortedArray[4]} `;
