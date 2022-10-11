import React from 'react';
import { Accordion } from 'flowbite-react';
const Blog = () => {
    return (
        <div className='sm:w-3/4 lg:w-1/2  mx-auto mt-8 p-4'>
                <h2 className='text-3xl font-bold text-orange-500 mb-8'>FAQ Questions On React!</h2>
            <Accordion alwaysOpen={true}>
  <Accordion.Panel>
    <Accordion.Title>
    What is the purpose of react router?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      React Router is a standard library for routing in React. Its purpose is : It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
      ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    2.	How does context API works?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Context API provides a way to pass data through the component tree from parent to child components, without having to pass props down manually at each level. SO we dont have to use prop drilling in our app if we use Context API.To use Context API we need to use <span className='text-orange-500'>CreateContext()</span> and to use that context We Just need to <span className='text-orange-500' >UseContext()</span>.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      What is React useRef HOOK?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      React's useRef hook, short for reference, allows us to persist data across renders without causing the component to rerender. A typical use case for this hook would be to store a DOM element, which we can use to access it programmatically. we can also use it to keep a reference to the previous state of a component.
      The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
      the useRef hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
        </div>
    );
};

export default Blog;