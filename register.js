async function signup() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let customer = { username: email, password: password };

  let request = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
  };

  
      let response = await fetch(getHost() + "/signup", request);
      
      if (response.status === 200) {  
          alert("The registration was successful!");
          location.href = "login.html";
      } else if (response.status === 401) {
          alert("You are already registered!");
      } else {
          console.log(`response status:${response.status}`);            
          alert("Something went wrong!");
      }
}