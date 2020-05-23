// VERSION 1

/*
1.
Write a function that:
- Logs to the console numbers 1 to 100.
- However, if the number is a multiple of both 3 and 5 it should log "Jackpot!" instead of the number.
- If it doesn't pass the function should log "multiple of 3" if it's a multiple of only 3
- If it's a multiple of 5 it should log "This is a multiple of 5"

Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
Hint: the order of conditional statements is important!
*/

const jackpot = num => {
    for(i = 0; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('Jackpot!');
        } else if(i % 3 === 0) {
            console.log('multiple of 3');
        } else if (i % 5 === 0){
            console.log('multiple of 5');
        } else {
            console.log(i);
        }
    }
}
jackpot(100);

/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!") 
- Creates an empty <img> element and add it to the document.
- When the button is clicked, inserts an image URL into an <img> tag and remove the button
- Use the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/

const button = document.createElement('button');
button.innerText = 'Click Me!';
document.body.appendChild(button);
const img = document.createElement('img');
document.body.appendChild(img);

button.addEventListener('click', e => {
    img.setAttribute('src', 'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4');
    img.setAttribute('alt', 'Hack Your Future Logo');
    e.target.remove();
})

/* 
3. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less. 
*/

/*API stands for Application Programming Interface. I understand it as a common platform where you can communicate or machines communicates one another. It establishes connections between machines to be able to understand each other. For example, in a restaurant I am a client and I want to eat some Kibbeling. There are chiefs who cook meals. I don't order directly to chiefs but to waiters. They note down what I want, pass it to the chiefs, chiefs cook it and then sends it with waiters. Neither me or chiefs see one another but we can get connected with waiters. In this scenario, waiters are API's. They are the interface. Another example is fetch API. If I want to get some data from a server with a api link, I can use fetch API syntax. fetch API fetches the data and brings to me. However, I should exactly use the FETCH keyword to do so. It works as a waiter in the restaurant. I can't say bringmydata(apiLink)[unless a function named so which use fetch syntax], neither I can't order some Kibbeling to a delivery guy in a restaurant. fetch(apiLink) is the interface which establishes a channel and brings the data.

For HackYourRepo project, we use github api which enable us to get the data from its database. We fetches the data with fetch(githubApiLink) and fetchAPI fetches a response. Github sends us this response. It contains everything we need in our project, users, contributors(needed another fetch), status code, headers, etc. Then we parsed our json user or contributor object to take advantage of it in our js file. So we spoke with github server with the api link they provide public. */

/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following API: https://reqres.in/api/users
- Make use of async/await syntax
- Parses the response and then displays the "first_name" and "last_name" of the first THREE users within the DOM
- Creates an <ul> for each user
- Makes use of async/await
*/
const url = 'https://reqres.in/api/users';
const body = document.querySelector('body');

const fetchJSON = async (userURL, cb) => {
    try {
        const response = await fetch(userURL);
        const parsedData = await response.json();
        const users = parsedData.data
        cb(null, users)
    } catch (error) {
        cb(error, null)
    }   
    
}

const renderUserDetails = user => {
    const ul = document.createElement('ul'); // 5th artical. Creating ONE ul, but li's for each user would be nicer.
    const li = document.createElement('li');
    li.innerHTML = `<p>${user.first_name} ${user.last_name}</p>`
    ul.appendChild(li)
    body.appendChild(ul)
}

fetchJSON(url, (err, users) => {
    if(err) {
        const div = document.createElement('div');
        div.innerText = err;
        body.appendChild(div);
    }
    users
        .slice(0,3)
        .forEach(user => renderUserDetails(user))
})
/*
5.
a) Create a class, called Person, that includes:
- A constructor method
- "name", "age", "home city" properties
- 1 additional method, called "getName", which returns the name

b) Instantiate the class, and give it your name + attributes

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/

class Person {
    constructor(name, age, homeCity) {
        this._name = name;
        this._age = age;
        this._homeCity = homeCity;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get homeCity() {
        return this._homeCity;
    }

    getName() {
        return this._name;
    }
}

const omer = new Person('Ömer', 28, 'Wassenaar');

/* OOP is not a new language or library. It is a way of coding, like a developer's style of coding. 
In this example, we encapsulate our needs in a class. It is more efficient when we want to create lots of variables, functions, objects etc. which have same and repeating properties and functionalities. I defined a class and pass  some properties to it, then added a method in it. So, now I can create multiple person or user objects with this constructor class function. Just a one line (e.g. line 142), I can initiate person objects and can benefit all the method that class has, with this object. */

/*
6. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
*/
const ctx = document.getElementById('myChart');
ctx.parentNode.style.width = '600px';
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        with: '200px'
    }]
    
}
const myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
});

/*MY NOTES:
First of all, I went to the library site and clicked get started. I looked for how I can use it with cdn link and then
copy paste cdn link to my html file so I can use it (Before my test.js file to take advantage of it in the test.js). Then I examined the Getting Started section, especially Usage section. I  added a canvas element in my html file with an id. The chart will appear inside canvas element. There is an example of using it with a Bar chart. I used it, however it is too big for my page. I tried to change the size of it with ctx.style.width = '600px' with pure JS but it didn't work. Then I went back to documentation page and found Responsive charts. In this section I tried to understand some possible option how to change the size of the chart and found a working one and used it in the line 155 above. Then in the documentation, I went to Bar section to see how I can make a horizontal bar. It says it is possible to change the property of Chart Class "type" as 'horizontalBar' and changed it so. You see a horizontal bar on the page. So on, you can read and modify your chart according to your needs. */
