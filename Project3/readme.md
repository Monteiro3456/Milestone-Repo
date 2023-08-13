The Task Management App is a simple React application that allows users to manage their tasks. Users can add tasks, mark them as completed or pending, and remove tasks from the list.


Features
Add tasks with unique IDs and statuses (completed/pending).
Toggle the status of tasks between completed and pending.
Remove tasks from the list.
Responsive design for various screen sizes.
Prerequisites
To run the Task Management App locally, you'll need:

Node.js and npm (Node Package Manager) installed on your machine.


Usage
The app displays a form where users can enter task names.
Users can add tasks to the list by typing a task name and clicking the "Add" button.
Each task in the list includes a status indicator and "Update Status" and "Remove" buttons.
Clicking the "Update Status" button toggles the task's status between completed and pending.
Clicking the "Remove" button removes the task from the list.
Components
App.js
The main component that manages the state of tasks and their management functions.

List.js
Renders the list of tasks and provides buttons for updating status and removing tasks.

Dependencies
The Task Management App uses the following technologies:

React
React Icons (for icons)
CSS (for styling)
