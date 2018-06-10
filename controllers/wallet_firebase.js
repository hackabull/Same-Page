// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbyLMu4vlv31BJpI_UFThbnpW3C0cyXp0",
    authDomain: "same-page-virtual-wallet.firebaseapp.com",
    databaseURL: "https://same-page-virtual-wallet.firebaseio.com",
    projectId: "same-page-virtual-wallet",
    storageBucket: "",
    messagingSenderId: "642257501077"
  };
  firebase.initializeApp(config);

//create variable for database
var database = firebase.database();

//add transaction on click
$("#add-transaction").on("click", function(event) {

    //allow use of "enter on keyboard for submit
    event.preventDefault();

    //grab values from form input
    var transactionName = $("#transaction-name").val().trim();
    var childDesignation = $("#child-designation").val().trim();
    var transactionDate = $("#transaction-date").val().trim();
    var transactionAmount = $("#transaction-amount").val().trim();


    //send firebase the info
    database.ref().push({
        transactionName: transactionName,
        childDesignation: childDesignation,
        transactionDate: transactionDate,
        transactionAmount: transactionAmount,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

//clear data from form
$("form").trigger("reset");

//get info back from firebase and display it on the page

//watching for when something is added to firebase
database.ref().on("child_added", function(snapshot) {

    var sv = snapshot.val();

    //create new row and new cell once data is entered for each transaction
    var createRow = $("<tr></tr>");
    var createCell = $("<td></td>").append(sv.transactionName);
    createRow.append(createCell);

    //create new cell once data is entered for transaction
    createCell = $("<td></td>").append(sv.childDesignation);
    createRow.append(createCell);

    createCell = $("<td></td>").append(sv.transactionDate);
    createRow.append(createCell);

    createCell = $("<td></td>").append(sv.transactionAmount);
    createRow.append(createCell);

    $("#wallet-table").append(createRow);

    //handle errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
})
