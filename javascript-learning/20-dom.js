//?/ DOM: Document Object Model - is a programming interface for web documents. 
//?/ It represents the structure of the document as a tree of nodes. 
//?/ Each node is an object representing a part of the document.

//*/ 1. Selecting elements

// getElementById - returns an Element object representing the element whose id property matches the specified string.
const container1 = document.getElementById('container1');

// children - returns a live HTMLCollection of child elements of the given element.
const childrenContainer = container1.children;

// parentElement - returns the parent element of the specified element.
const parentContainer = container1.parentElement;

// getElementsByTagName - returns a live HTMLCollection of elements with the given tag name.
const divs = document.getElementsByTagName('div');

// getElementsByClassName - returns a live HTMLCollection of elements with the given class name.
const containers = document.getElementsByClassName('container');

// querySelector - returns the first Element within the document that matches the specified selector, or group of selectors.
const box = document.querySelector('#container1 .box');

// querySelectorAll - returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
const boxes = document.querySelectorAll('#container1 .box');

// closest - returns the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
const closestContainer = box.closest('.container');

// matches - returns true if the element would be selected by the specified selector string; otherwise, returns false.
const isBox = box.matches('.box');

// contains - returns a Boolean value indicating whether a node is a descendant of a given node or not.
const isBoxInContainer = container1.contains(box);


//*/ 2. Modifying elements

// createElement - creates the HTML element specified by tagName.
const newDiv = document.createElement('div');

// textContent - represents the text content of a node and its descendants.
newDiv.textContent = 'New Div';

// setAttribute - sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
newDiv.setAttribute('id', 'new-id');
newDiv.setAttribute('class', 'active');

// innerHTML - represents the markup of the element's content.
newDiv.innerHTML = '<b>New Div</b>';

// style - represents an element's style attribute.
newDiv.style.color = 'red';
newDiv.style.backgroundColor = 'blue';
newDiv.style.fontSize = '24px';

// classList - returns the class attribute of the element as a DOMTokenList object.
newDiv.classList.add('active');
newDiv.classList.remove('active');

// toggle - toggles the existence of a class in an element's classList.
newDiv.classList.toggle('active');

// contains - returns a Boolean value indicating whether an element has the specified class name.
const hasClass = newDiv.classList.contains('active');

// dataset - allows access, both in reading and writing mode, to all the custom data attributes (data-*) set on the element.
newDiv.dataset.id = 1;
newDiv.dataset.name = 'New Div';

// append - inserts a set of Node objects or DOMString objects after the last child of the ParentNode.
newDiv.append('New Div');

// prepend - inserts a set of Node objects or DOMString objects before the first child of the ParentNode.
newDiv.prepend('New Div');

// attribute - allows access to the element's attributes.
newDiv.id = 'new-id';
newDiv.className = 'active';


//*/ 3. Adding elements to the DOM

// appendChild - adds a node to the end of the list of children of a specified parent node.
container1.appendChild(newDiv);

// insertAdjacentElement - inserts a given element node at a given position relative to the element it is invoked upon.
container1.insertAdjacentElement('afterbegin', newDiv); // as first child
container1.insertAdjacentElement('beforebegin', newDiv); // before the parent element
container1.insertAdjacentElement('beforeend', newDiv); // as last child
container1.insertAdjacentElement('afterend', newDiv); // after the parent element


// replaceWith - replaces the element with the provided element.
document.querySelector('#container1 .box').replaceWith(newDiv);


//*/ 4. Removing elements from the DOM

// removeChild - removes a child node from the DOM and returns the removed node.
const parent = document.getElementById('container1');
const boxToRemove = parent.querySelector('.box');

if (boxToRemove) {
    parent.removeChild(boxToRemove);
}


//*/ 5. Event handling

// addEventListener - sets up a function that will be called whenever the specified event is delivered to the target.
const button = document.getElementById('button');

button.addEventListener('click', () => {
    console.log('Button clicked');
});

// removeEventListener - removes an event listener from the target.
button.removeEventListener('click', () => {
    console.log('Button clicked');
});

// Event object - provides information about the event and the element on which the event occurred.
button.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX, event.clientY);
    console.log(event.altKey, event.ctrlKey, event.shiftKey);
    console.log(event);
});


//*/ 6. Event propagation - describes the order in which event handlers are called when one element is nested inside a second element, 
//*/ and both elements have registered a listener for the same event.

// bubbling (false) - the event is first captured and handled by the innermost element and then propagated to outer elements.

// capturing (true) - the event is first captured by the outermost element and propagated to the inner elements.


// Event propagation 
const container = document.getElementById('container1');

container.addEventListener('click', () => {
    console.log('Click on container');
} /*, { capture: true } */);

const box1 = document.querySelector('.box');

box1.addEventListener('click', (event) => {
    event.stopPropagation(); // stop the propagation
    console.log('Click on box');
} /*, { capture: true } */);


//*/ 7. Styles modification

