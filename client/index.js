// submit buttons
const getSubmit = document.getElementById('getPost');


// inputs
const paramsInput = document.getElementById('params-input');
const queryInput = document.getElementById('query-input');

// response section
const responseSection = document.getElementsByClassName('response-area')[0];

// handle submits
// getSubmit.addEventListener('click', () => {
//     axios
//         .get('/api/homepage')
//         .then(res => addToView(res.data))
// });

// getParamsSubmit.addEventListener('click', () => {
//     axios
//         .get(`/api/hompage/${paramsInput.value}`)
//         .then(res => addToView([res.data]))
// });

// getQuerySubmit.addEventListener('click', () => {
//     axios
//         .get(`/api/homepage?item=${queryInput.value}`)
//         .then(res => addToView(res.data))
// });

// handle response
function addToView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseSection.appendChild(p)
        })
    }
}

// 
// 
// 
// 
// 
// 
// 
// 
// 
//HACKS.HTML FUNCTIONS START


const sleepOpen = document.getElementById("sleep-open");
const feedOpen = document.getElementById("feed-open");
const diaperOpen = document.getElementById("diaper-open");
const sleep_container = document.getElementById("sleep-container");
const feed_container = document.getElementById("feed-container");
const diaper_container = document.getElementById("diaper-container");
const sleepClose = document.getElementById("sleep-close");
const feedClose = document.getElementById("feed-close");
const diaperClose = document.getElementById("diaper-close");


sleepOpen.addEventListener('click', () =>{
    feed_container.style.visibility = 'hidden';
    diaper_container.style.visibility = 'hidden';
    sleep_container.style.visibility = 'visible';
});
sleepClose.addEventListener('click', () =>{
    sleep_container.style.visibility = 'hidden';
});
feedOpen.addEventListener('click', () =>{
    sleep_container.style.visibility = 'hidden';
    diaper_container.style.visibility = 'hidden';
    feed_container.style.visibility = 'visible';
});
feedClose.addEventListener('click', () =>{
    feed_container.style.visibility = 'hidden';
});
diaperOpen.addEventListener('click', () =>{
    sleep_container.style.visibility = 'hidden';
    feed_container.style.visibility = 'hidden';
    diaper_container.style.visibility = 'visible';
});
diaperClose.addEventListener('click', () =>{
    diaper_container.style.visibility = 'hidden';
});

// HACKS.HTML FUNCTIONS END
// 
// 
// 
// 
// 
// 

// const sequelize = require("../server/dbcontroller.js");

// const dads = require("../dbModels/dads")
// const post = require("../dbModels/post")
// const auth = require("../dbModels/auth")

// dads.hasmany(auth,post);

// sequelize
// .sync({force: true})
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// });

// DB CALL END
//
//
//
//
//
