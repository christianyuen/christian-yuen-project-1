// ADDING A BLOG POST

// select our <form> element
const formElement = document.querySelector('form');

// add a 'submit' event listener to the <form>
formElement.addEventListener('submit', function (event) {
    console.log(event)
    event.preventDefault(); // prevents auto refresh after form is 'SUBMIT'

    
    // get the post from the <input> element 
    const inputElement1 = document.getElementById('name');
    const inputElement2 = document.getElementById('email');
    const inputElement3 = document.getElementById('message');

    // find value of the <input> element and slap task in a variable (const)
    const post1 = inputElement1.value
    const post2 = inputElement2.value
    const post3 = inputElement3.value

    console.log(post1);
    console.log(post2);
    console.log(post3);

    // only log the task and reset the input if there is a post
    if (post1, post2, post3) {

        // create a <p> element that contains the blog text
        const pItemElement1 = document.createElement('p');
        const pItemElement2 = document.createElement('p');
        const pItemElement3 = document.createElement('p');

        // add the post text to the paragraph element
        pItemElement1.textContent = `${post1}`;
        pItemElement2.textContent = `${post2}`;
        pItemElement3.textContent = `${post3}`;

        // select the div element
        divElement = document.querySelectorAll('divP');

        // append paragraph element to div item element

        // KEEP GETTING ERROR WHEN TRYING TO APPEND!!!
        divElement.append(pItemElement1);
        divElement.append(pItemElement2);
        divElement.append(pItemElement3);

        // reset the input
        inputElement1.value = '';
        inputElement2.value = '';
        inputElement3.value = '';
    }
}); 


// 🆘NOTE.. CANT GET P ITEMS TO APPEND TO PAGE :( I THINK IM ALMOST THERE...!




