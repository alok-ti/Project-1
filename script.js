function calculateAttendance() {
    let total = parseInt(document.getElementById("total").value);
    let present = parseInt(document.getElementById("present").value);

    if (!total || !present || present > total) {
        document.getElementById("output").innerHTML = "Please enter valid numbers!";
        return;
    }

    let percentage = (present / total) * 100;

    document.getElementById("output").innerHTML =
        "Attendance: " + percentage.toFixed(2) + "%";
}
