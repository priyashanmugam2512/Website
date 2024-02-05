let link ='https://6598e4eba20d3dc41cef0930.mockapi.io/login'
function save(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let pass=document.getElementById('password').value;
    let data={name:name,pass:pass}
    axios.post(link,data)
    showsuccessmessage()
    refresh()
}
function showsuccessmessage() {
    let successMessage = document.getElementById('showmessage');
    successMessage.innerText = 'Account Registered successfully!';
    successMessage.style.display = 'block';
}
function refresh(){
    document.getElementById('name').value=''
    document.getElementById('password').value=''
}