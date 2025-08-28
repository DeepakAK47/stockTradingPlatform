// In short: Routing is about navigating between different "views" or "pages" within your React application.



// Using an API (Application Programming Interface)
// What it is: A set of rules and protocols that allows one software application to request data or functionality from another application, which is usually running on a server.

// Where it happens: Between the client (browser) and a remote server.

// What it manages: Data. APIs are used to CRUD (Create, Read, Update, Delete) data.

// How it works:

// Your React component needs some data (e.g., a list of users).

// It makes an HTTP request (using fetch or axios) to a specific API endpoint (a URL) on a server.

// The server processes the request (e.g., reads the database).

// The server sends back a response (usually in JSON format) containing the data.

// Your React component receives the data and uses it to update the UI (e.g., displays the list of users).


// Key Differences Summary Table
// Feature	Routing	Using an API
// Purpose	Navigate within the app and change the UI.	Get/send data from/to an external server.
// Location	Happens entirely in the client-side (browser).	Happens between client and server.
// What it affects	The view (which component is visible).	The data displayed in the views.
// Libraries/Tools	React-Router, Reach Router	Native fetch, Axios, Apollo Client (for GraphQL)
// Example Input	A URL path like /about	A server URL like https://api.myapp.com/users
// Example Output	Renders the <About /> component	Receives JSON data like [{ "id": 1, "name": "John" }]




// So, routing decides what the user sees, and APIs provide the data that fills it. They are complementary but entirely distinct concepts.


// What is React?
// React is a JavaScript library for building user interfaces (UIs), specifically for web applications. It was created by Facebook (now Meta) and is now maintained by Meta and a vast community of developers. Its core purpose is to make it easier to build complex, interactive, and dynamic websites.
// The Core Idea: Components
// Think of a webpage. Instead of seeing it as one giant, monolithic block of code, React lets you break it down into small, independent, and reusable pieces called Components.



// Whata is the difference framework and the library?
// Conclusion: The core difference is inversion of control. You call a library. A framework calls you.



// No, that is not correct. This is a crucial distinction to understand.

// React is the library for building the user interface (UI).
// Create React App (CRA) and Vite are tools to set up the development environment and build process for a project that uses React (or other libraries).


// What is the meaning of the DOM?
// In one sentence: The DOM is the bridge between your HTML/CSS and JavaScript, allowing JavaScript to change the content and style of a webpage.