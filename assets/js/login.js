let link = 'https://6598e4eba20d3dc41cef0930.mockapi.io/login';
function validate(event) {
    event.preventDefault();
     axios.get(link)
        .then((response) => {
            const users = response.data;
            let names = document.getElementById('names').value;
            let pwd = document.getElementById('pass').value;
            const matchedUser = users.some(user => user.name === names && user.pass === pwd);

            if (matchedUser) {
                window.location.href = 'dashboard.html';
            } else {
                showerrormsg();
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            showerrormsg();
        });
}

function showerrormsg() {
    let errorMessage = document.getElementById('showerrormsg');
    errorMessage.innerText = 'Invalid name or password';
    errorMessage.style.display = 'block';
}
