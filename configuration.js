const mode  = 1;
const host_local = 'http://localhost:8080';
const host_remote = 'https://finalproject-latest-pt7o.onrender.com';

const route = false; 

function getHost(){
    return (mode == 0)? host_local : host_remote;
} 
function isLoggedIn(){
    if(localStorage.getItem('token')){
        return true;
        
    }
    else{
        return false;
    }
}

// console.log(localStorage.getItem('token'));
function getToken(){
    return localStorage.getItem('token');
}
function setToken(token){
    localStorage.setItem('token', token);
    // updateTheNavigationBar();
}
function removeToken(){
    localStorage.removeItem('token');
    // updateTheNavigationBar();
}
let configuration = {
    isLoggedIn: ()=> isLoggedIn(),  host: ()=> getHost(), token:()=> getToken()
}

// updateTheNavigationBar();

// async function updateTheNavigationBar(){
//     const navigation = document.getElementsByClassName("topnav")[0];
//     let loginTag = navigation.children[navigation.children.length-1];
//     if(configuration.isLoggedIn()){
//         loginTag.innerHTML = '<li class="right"> <a href="#" onClick= "logout()">Logout</a></li>';
//     }
//     else{
//         loginTag.innerHTML = '<li class="right"> <a href="login.html">Login</a></li>';
//     }
// }

async function login(){
    
    let username = document.getElementById('email-login').value;
    let password = document.getElementById('password-login').value;
    let customer = {username: username, password: password};
    let request = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(customer)};
    localStorage.setItem('email', username);
    
        try{let response = await fetch(getHost() + "/signin", request);
        if (response.status == 200){
            alert("Login successful");
            const token = await response.text();
            setToken(token);
            if( route ){
                location.href = "delivery.html";
            }
            else{
                location.href = "homepage.html";
            }
           
        }
        else{
            console.log(`response status: ${response.status}`)
            removeToken()
            alert("Invalid username or password");
            location.href = "login.html";

        }}catch(err){
            console.error("Error logging in: ", err);
           alert("An error occurred while logging in", err)
        }
        

        
    }
   
    

async function logout(){
    removeToken();
    
}