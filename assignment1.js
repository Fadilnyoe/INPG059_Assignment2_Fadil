function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function onSubmit() {
    var inputNama = document.getElementById("formNama").value;
    var inputRole = document.getElementById("Role").value;
    var inputAvailability = document.getElementById("Availability").value;
    var inputUsia = document.getElementById("Usia").value;
    var inputLokasi = document.getElementById("Lokasi").value;
    var inputYearsExperience = document.getElementById("Years Experience").value;
    var inputEmail = document.getElementById("Email").value;


    document.getElementById("value-nama").innerHTML = inputNama; 
    document.getElementById("Avail").innerHTML = inputAvailability;
    document.getElementById("Usia").innerHTML = inputUsia;
    document.getElementById("Lokasi").innerHTML = inputLokasi;
    document.getElementById("Pengalaman").innerHTML = inputYearsExperience
    document.getElementById("Email").innerHTML = inputEmail
    document.getElementById("Role").innerHTML = inputRole















    event.preventDefault();
    document.getElementById("myForm").style.display = "none";
}

