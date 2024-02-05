let link = 'https://659a7af5652b843dea539988.mockapi.io/ideas';
axios.get(link).then((e) => {
    const specificValue = e.data;
    const container = document.getElementById('list_data_section');
    const container_skill = document.getElementById('expertise')
    const container_proficiency = document.getElementById('proficiency')
    const image_section = document.getElementById('image_section')
    const candidate_names = document.getElementById('candidate_name')
    let currentCharts = [];
    function showPieChart(data) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        container_skill.innerHTML = '';
        container_skill.appendChild(canvas);
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['HTML', 'CSS', 'Script', 'JavaScript'],
                datasets: [{
                    data: [data.html, data.css, data.script, data.js],
                    backgroundColor: ['red', 'blue', 'green', 'yellow'],
                }]
            },
            options: {
                maintainAspectRatio: false,
            }
        });
        currentCharts.push(pieChart);
    }
    function showBarChart(data) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        container_proficiency.innerHTML = '';
        container_proficiency.appendChild(canvas);
        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Speak', 'Write'],
                datasets: [{
                    label: 'Proficiency',
                    data: [data.speak, data.write],
                    backgroundColor: ['blue', 'green'],
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        currentCharts.push(barChart);
    }
    function showimage(data) {
        const image = document.createElement('img')
        const imagePath = `./assets/image/${data.image}`;
        image.src = imagePath;
        image_section.innerHTML = ''
        image_section.appendChild(image)
        currentCharts.push(image);
    }
    function showname(data) {
        const candidate_name = document.createElement('h1');
        candidate_name.innerHTML = `${data.fname} ${data.lname} Skills`
        candidate_names.innerHTML = ''
        candidate_names.appendChild(candidate_name)
        currentCharts.push(candidate_name)
    }
    specificValue.forEach(value => {
        const items = document.createElement('div');
        items.classList.add('list_data');
        items.innerHTML = `<p>First Name: ${value.fname}</p>
                             <p>Last Name: ${value.lname}</p>
                             <p>Email: ${value.mail}</p>
                             <p>Phone: ${value.phone}</p>
                             <p>Job Title: ${value.job}</p>`;
        items.addEventListener('click', function () {
            showPieChart(value);
            showname(value);
            showBarChart(value);
            showimage(value);
        });
        container.appendChild(items);
    });
    initSlickSlider();
})
function initSlickSlider() {
    $('#list_data_section').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    arrows: false,
                    dots: true,
                    infinite: true,
                }
            },
        ]
    });
}
function retrieveText(e) {
    e.preventDefault()
    console.log('start')
    var cmt= document.getElementById('feedback').value;
    var  comment= document.getElementById('comments');
    comment.innerHTML = cmt;
    comment.style.display = 'block';
    console.log('startv')
}