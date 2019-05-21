// from data.js
var tableData = data;

// show data function
function showData(array) {
    
    // Thank your Frederik de Bruyker for his help with the code. 
    // Show tableData in html
    var htmlTbody = "";
   
   // Used a forEach loop to get the data from data.js and store as Table Data
    array.forEach(function (rowData) {

        htmlTbody += "<tr scope='row'>";
        htmlTbody += "<td>" + rowData.datetime + "</td>";
        htmlTbody += "<td>" + rowData.city + "</td>";
        htmlTbody += "<td>" + rowData.state + "</td>";
        htmlTbody += "<td>" + rowData.country + "</td>";
        htmlTbody += "<td>" + rowData.shape + "</td>";
        htmlTbody += "<td>" + rowData.durationMinutes + "</td>";
        htmlTbody += "<td>" + rowData.comments + "</td>";
        //Added a column of data on how crazy 
        htmlTbody += "<td>" + rowData.crazyFactor + "</td>";
        htmlTbody += "</tr>";
    });

   // Use D3 to select the table
    var newTable = d3.select("#ufo-table");

    // Homework was to use d3 to create a bootstrap striped table
    // Starter code has striped table, so inserting Dark Table
    newTable.attr("class", "table table-hover table-dark");


    // Insert data into the html table
    document.getElementById("insertsomethinghere").innerHTML = htmlTbody;

    return;
}
// Thank your Jonathan Randolph for his help with this code. 

// Create variable to select the filtered data.  
var filterData = d3.select("#filter-btn");

//Identify the noise event when the buttoned is clicked to filter the date. 
filterData.on("click", () => {
    d3.event.preventDefault();

// Create var to filter input
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property('value');
    
// show what is being inputed 
    console.log(inputElement);
    console.log(inputValue);

// 
    var filteredData = data.filter (object => inputValue === object.datetime);
    console.log(filteredData);

//
    showData(filteredData);
});

showData(tableData);

// stated to look at this code, but did not use it. 

// <?php foreach($test AS $key => $val): ?>
// <table>
//     <tr>
//         <th>Test1</th>
//         <th>Test2</th>
//         <th>Test3</th>
//     </tr>
//     <?php foreach($val AS $v => $info): ?>
//     <tr>
//         <td><?php echo $v; ?></td>
//         <td><?php echo $info[0][0]['total']; ?></td>
//         <td><?php echo $info[1][0]['total']; ?></td>
//     </tr>
//     <?php endforeach; ?>
// </table>    
// <?php endforeach; ?>