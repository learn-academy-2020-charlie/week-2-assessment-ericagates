# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: Super is used in the constructor of a child class to inherit the same properties as the constructor in the parent class.

  Researched answer: Within in the constructor method we call super() which passes the attributes from the constructor in the parent class (https://github.com/LEARNAcademy/Syllabus/blob/master/javascript/class-inheritance.md)



2. What is a virtual DOM?

  Your answer: DOM stands for Document Object Model.

  Researched answer: 
  The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. (https://reactjs.org/docs/faq-internals.html)

  A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen. In summary, here’s what happens when you try to update the DOM in React:

  1. The entire virtual DOM gets updated.
  2. The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
  3. The changed objects, and the changed objects only, get updated on the real DOM.
  4. Changes on the real DOM cause the screen to change.

  (https://www.codecademy.com/articles/react-virtual-dom)




3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:
   A class, that extends a react component, a render,  a return, and content "hello world",  export default

  Researched answer:
    // We're using React and Component from the react library
    import React, { Component } from 'react'

    // We create a new component that extends the Component class, which React provides

    class App extends Component{
    // When the component is first put on the page, and every time something changes in our component, the render function is called
    // This function builds the JSX that will be put on the page by React
      render(){
        // Most of the React apps use something called JSX to preprocess HTML (XML actually) back into plain old JavaScript before the file is sent to the browser

        return (
          <h1>A Basic Class Component</h1>
        )
      }
    }
    // Every component must be exported
    export default App

    (https://github.com/LEARNAcademy/Syllabus/blob/master/react/create-react-app.md)



4. What is JSX?

  Your answer: JavaScript XML markup language is used with React to display things to a web page

  Researched answer:  JSX is JavaScript flavored HTML that behaves almost like HTML with a couple small exceptions (https://github.com/LEARNAcademy/Syllabus/blob/master/react/nested-components.md) JSX is used in React apps to preprocess HTML (XML actually) back into plain old JavaScript before the file is sent to the browser (https://github.com/LEARNAcademy/Syllabus/blob/master/react/create-react-app.mdß)
 


5. What is state in React?

  Your answer: A state is the current data in a react component that changes dynamically.

  Researched answer: State is an object that stores a component's dynamic data and determines how the component renders and behaves. (https://github.com/LEARNAcademy/Syllabus/blob/master/react/state.md)





6. STRETCH: What is hoisting in JavaScript?

  Your answer: No idea!

  Researched answer: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function). Variables and constants declared with let or const are not hoisted! JavaScript only hoists declarations, not initializations. (https://www.w3schools.com/js/js_hoisting.asp)





## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.Mounting means putting elements into the DOM. React has four built-in methods that gets called when mounting a component. The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props.React has five built-in methods that gets called when a component is updated. The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it. React has only one built-in method that gets called when a component is unmounted. 
(https://www.w3schools.com/react/react_lifecycle.asp)

- event.preventDefault()
The event.preventDefault() method stops the default action of an element from happening. For example:
Prevent a submit button from submitting a form
Prevent a link from following the URL (https://www.w3schools.com/jquery/event_preventdefault.asp)

- DOM events

DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened.(https://developer.mozilla.org/en-US/docs/Web/Events
)
HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document. Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button). JavaScript can be executed when an event occurs, like when a user clicks on an HTML element. (https://www.w3schools.com/jsref/dom_obj_event.asp
)

- React props
React Props are like function arguments in JavaScript and attributes in HTML.To send props into a component, use the same syntax as HTML attributes. https://www.w3schools.com/react/react_props.asp

- onChange
The onchange property of the GlobalEventHandlers mixin is an EventHandler for processing change events. Change events fire when the user commits a value change to a form control. This may be done, for example, by clicking outside of the control or by using the Tab key to switch to a different control. (https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange) The onchange event occurs when the value of an element has been changed. (https://www.w3schools.com/jsref/event_onchange.asp)

