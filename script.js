showData();
function validateForm(){
  // Get input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  // Check name field
  if ((!/^[a-zA-Z ]+$/.test(name)) && name==""){
    alert("Name should not be empty and should contain only letters and spaces.");
    
  }
  
  // Check email field
  if ((!/\S+@\S+\.\S+/.test(email))&& email=="") {
    alert("Email must be provided and address is not in a valid format.");
  }
  
  // Check mobile field
  if ((!/^\d{10}$/.test(phone))&& phone!="") {
    alert("Mobile No should contain only numbers and be 10 digits long.");
  }
  
  // Form is valid
  saveData();

}


  

function saveData()
{
let name,email,psw;
name=document.getElementById("name").value;
email=document.getElementById("email").value;

phone=document.getElementById("phone").value;

let employee_records=new Array();
employee_records=JSON.parse(localStorage.getItem("employee_array"))?JSON.parse(localStorage.getItem("employee_array")):[]
employee_records.push({
  "name":name,
  "email":email,
  "phone":phone
})
localStorage.setItem("employee_array",JSON.stringify(employee_records));

showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let employee_records=new Array();
employee_records=JSON.parse(localStorage.getItem("employee_array"))?JSON.parse(localStorage.getItem("employee_array")):[]
  if(employee_records)
  {
    for(let i=0;i<employee_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px;">'+employee_records[i].name+'</div><div class="col-sm-4" style="padding: 10px;">'+employee_records[i].email+'</div><div class="col-sm-4" style="padding: 10px;">'+employee_records[i].phone+'</div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
}
