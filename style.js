 document.getElementById("btn1").addEventListener('click', function () {
    document.getElementById("para").innerText = "Thanks for clicking here..!"
})

document.getElementById("btn2").addEventListener('click',function(){
    alert("Thanks for Clicking");

}
)
document.getElementById("btn3").addEventListener('click',function(){
    document.getElementById("boxx").style.backgroundColor="red"
})

document.getElementById("btn4").addEventListener("click",function(){
    document.getElementById('inner').style.color="white"
})

//this is a variable
const firstname = "Praveen"
const lastname = "kumar"
const age = 23
const address = "Phagwara"
const phoneNumber = 6280008301

console.log(firstname)
console.log(lastname)
console.log(age)
console.log(address)
console.log(phoneNumber)

//this is a object

const transactionDetail={
    PersonName : "Praveen",
    transactionId : "abe46372hsddj473",
    paymentAmount : 10000,
    paymentMode : "Online",
    upiId : "abc123@paytm",
    mobileNo : 6280008201,
};


const transaction = {
  transactionId: "XY352SGDSH",
  date: "2026-02-11",
  senderName: "Parveen Kumar",
  receiverName: "Manraj Singh",
  amount: 5000,
  transactionType: "Transfer",
  status: "Completed"
};

console.log(transactionDetail)
console.log(transaction);

const btn5 = document.getElementById("btn5")



// btn5.addEventListener("click", function () {
   
//   document.getElementById("blank").textContent=
//     "Transaction ID: " + transaction.transactionId
// });

   
  document.getElementById("emptyFirstName").textContent=
     transactionDetail.PersonName 
document.getElementById("tid").textContent=transactionDetail.transactionId
document.getElementById("TAmount").textContent=transactionDetail.paymentAmount



