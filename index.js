let countryName = document.getElementById("countryName");
const countryList = document.getElementById("country_list");
let country_count = document.getElementById("country_count");
let alertMessage = document.getElementById("alert");
let selectedRow = null;
let countryCount = 0;
country_count.innerText = countryCount;


function saveCountry() {
    if(validateForm()) {
        if(selectedRow == null) {
            addCountry();
        } else {
            updateCountryList();
        }
        resetCountryForm();
    }
}

function validateForm() {
    if(countryName.value === "") {
        countryName.className = "form-control border-danger border-1";
        return false;
    } else {
        countryName.className = "form-control";
        return true;
    }
}

function addCountry() {
    let addRow = document.createElement("tr");
    addRow.innerHTML = `
    <td>${countryName.value}</td>
    <td>
        <button class="btn btn-success btn-sm" onClick="editCountryName(this)"><i class="fa fa-pencil-square-o pe-1"></i>Edit</button>
        <button class="btn btn-danger btn-sm" onClick="deleteCountryName(this)"><i class="fa fa-trash-o pe-1"></i>Delete</button>
    </td>`;
    countryList.appendChild(addRow);
    countryCount++;
    country_count.innerText = countryCount;
    showAlert("alert alert-success", "Country Name added successfully")
}

function editCountryName(td) {
    selectedRow = td.parentElement.parentElement;
    countryName.value = selectedRow.cells[0].innerHTML;
}

function updateCountryList() {
    selectedRow.cells[0].innerHTML = countryName.value;
    showAlert("alert alert-success", "Country Name updated successfully")
}

function resetCountryForm() {
    countryName.value = "";
}

function deleteCountryName(td) {
    td.parentElement.parentElement.remove();
    countryCount--;
    country_count.innerText = countryCount;
    showAlert("alert alert-danger", "Country Name removed successfully")
}

function showAlert(alertClass, message) {
    alertMessage.innerHTML = `<div class="${alertClass}" id="msg" role="alert">${message}</div>`;
    setTimeout(() => alertMessage.innerHTML = "", 1000);
}






