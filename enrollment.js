var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var n = 1;
var x = 0;

function AddRow() {

    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("email").value;
    list3[x] = document.getElementById("education").value;
    if (document.getElementById('gender1').checked) { list5[x] = document.getElementById('gender1').value }
    else if (document.getElementById('gender2').checked) { list5[x] = document.getElementById('gender2').value }
    list4[x] = document.getElementById("age").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];

    n++;
    x++;
}
function RemoveSelectedRow() {
    document.getElementsById("name").value = " ";
    document.getElementsById("email").value = " ";
    document.getElementsById("education").value = " ";
    document.getElementsById("age").value = " ";
    document.getElementsById("gender").value = " ";
}
