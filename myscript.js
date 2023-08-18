var rollNum, nameV, gender, address;

function readFom() {
    rollNum = document.getElementById("roll").value;
    nameV = document.getElementById("name").value;
    gender = document.getElementById("gender").value;
    address = document.getElementById("address").value;
    console.log(rollNum, nameV, address, gender);
}

document.getElementById("insert").onclick = function () {
    readFom();

    firebase.databaseURL().ref("employees/" + rollNum)
        .set({
            rollNo: rollNum,
            name: nameV,
            gender: gender,
            address: address,
        });

    alert("Data Inserted!!!");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
    readFom();

    firebase.databaseURL().ref("employees" + rollNum)
        .on("value", function (snap) {
            document.getElementById("roll").value = snap.val().rollNo;
            document.getElementById("name").value = snap.val().name;
            document.getElementById("gender").value = snap.val().gender;
            document.getElementById("address").value = snap.val().address;
        });
};

document.getElementById("update").onclick = function () {
    readFom();

    firebase.databaseURL().ref("employees" + rollNum)
        .update({
            //   rollNo: rollNum,
            name: nameV,
            gender: gender,
            address: address,
        });
    alert("Data Update!!!");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";

};
document.getElementById("delete").onclick = function () {
    readFom();

    firebase.databaseURL().ref("employees" + rollNum)
        .remove();
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
    alert("Data Deleted!!!");

};