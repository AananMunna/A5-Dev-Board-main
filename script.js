let taskAssigned = 6;
let checkedValue = 23;

const buttons = document.querySelectorAll('.completed');
for(let button of buttons){
    button.addEventListener('click', function(event){
        alert('Board updated Successfully')

        // disable button
        event.target.disabled = true;
        event.target.classList.remove('cursor-pointer')
        event.target.classList.add('cursor-not-allowed')
        event.target.classList.remove('hover:scale-110')
        event.target.style.background = '#ced6ff'

        // decrease taskAssigned value
        taskAssigned = taskAssigned - 1;
        document.getElementById('taskAssigned').innerText = taskAssigned;
        if(taskAssigned === 0){
            alert('congrats!!! You have completed all the current task')
        }

        // increase checkedValue
        checkedValue = checkedValue + 1;
        document.getElementById('checkedValue').innerText = checkedValue;

        // select title
        const title = event.target.parentNode.parentNode.querySelector('h3').innerText;
        console.log(title);

        const now = new Date();
        const time = now.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        });

        const div = document.createElement('div');
        div.innerHTML = `<p class="text-start bg-[#f2f5fd] mt-5 p-3 rounded-lg transition hover:scale-105">You have Complete The Task <span class='font-semibold'>${title}</span> at ${time}</p>`

        const historyContainer = document.getElementById('historyContainer');
        historyContainer.appendChild(div)

    })
    
}




// Create a new Date object
const currentDate = new Date();
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayOfWeek = weekdays[currentDate.getDay()];
const month = months[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate = `${month}   ${day}   ${year}`;

document.getElementById('day').innerText = dayOfWeek;
document.getElementById('formattedDate').innerText = formattedDate;




// clear history
document.getElementById('clearHistory').addEventListener('click', function(){
    const historyContainer = document.getElementById('historyContainer').innerHTML = '';
})



// random background color
const button = document.getElementById("colorButton");

button.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById('blogLink').addEventListener('click', function(){
    window.location.href = './blog.html'
})

