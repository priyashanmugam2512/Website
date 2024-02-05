let link ='https://659a7af5652b843dea539988.mockapi.io/ideas'
function save(e){
    e.preventDefault();
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let myfile = document.getElementById('myfile').files[0];
    console.log('image',myfile.name)
    let mail=document.getElementById('mail_id').value;
    let phone=document.getElementById('mbl_num').value;
    let selected_html= document.querySelector('input[name="html"]:checked').value;
    let selected_css= document.querySelector('input[name="css"]:checked').value;
    let selected_script=document.querySelector('input[name="script"]:checked').value;
    let selected_js=document.querySelector('input[name="js"]:checked').value;
    let selected_speak=document.querySelector('input[name="Speak"]:checked').value;
    let selected_area_write=document.querySelector('input[name="write"]:checked').value;
    let job_title=document.getElementById('job_title').value;
    let data={fname:fname,lname:lname,image:myfile.name,mail:mail,phone:phone,html:selected_html,css:selected_css,script:selected_script,js:selected_js,speak:selected_speak,write:selected_area_write,job:job_title}
    axios.post(link,data)
    showsuccessmessage()
    hideForm();
    appendButton();
}
function showsuccessmessage() {
    let successMessage = document.getElementById('showmessage');
    successMessage.innerText = 'Form submitted successfully!';
    successMessage.style.display = 'block';
}
function hideForm(){
    let get_form = document.querySelector('.form_parent_section');
    get_form.style.display='none'
}
function appendButton(){
  let login_btn=document.querySelector('.login_btn');
  login_btn.style.display='block'
}
