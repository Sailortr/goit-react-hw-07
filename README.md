Vercel Link for Project : https://goit-react-hw-07-peach-sigma.vercel.app/

📞 Phonebook Application with React and Redux Toolkit
This project is a Phonebook Application developed using React, Redux Toolkit, and integrated with a mock backend API. The project allows users to manage their contacts efficiently with features like adding, deleting, and searching contacts.

🚀 Features
Add New Contacts: Add a new contact with a name and phone number.
Delete Contacts: Remove any contact from the list with a delete button.
Search Contacts: Search contacts dynamically using the search input.
Icons for Better UI: Person and phone icons are displayed for contacts, and a delete button includes an "X" icon for better usability.

🛠️ Technologies Used
React: Component-based UI development.
Redux Toolkit: For state management.
Redux Thunk: Asynchronous logic handling.
Axios: To make HTTP requests to the mock API.
Yup & Formik: For form validation and handling.
CSS Modules: Custom styling for components.
MockAPI: A mock backend to store and retrieve contact data.

🔧 Installation
Follow these steps to run the project on your local machine:

Clone the repository:

bash:
git clone https://github.com/Sailortr/goit-react-hw-07.git
cd phonebook-app

Install dependencies:
bash: npm install

Start the development server:
bash: npm start

Open your browser and go to: http://localhost:5173

📂 Project Structure
plaintext:
src/
|-- components/
| |-- ContactList.jsx
| |-- ContactForm.jsx
| |-- SearchBox.jsx
|-- redux/
| |-- contactsSlice.js
| |-- contactsOps.js
| |-- store.js
|-- assets/
| |-- icons/ (Contains SVG or font icons)
|-- App.jsx
|-- index.jsx
|-- index.css

📚 Dependencies
react
react-redux
@reduxjs/toolkit
axios
formik
yup
nanoid
mockAPI

🌟 How It Works
Contacts are fetched from a mock backend API using Axios.
State management is handled with Redux Toolkit. The slice contains:
items: List of contacts.
loading: Loading status during HTTP requests.
error: Error handling during failed requests.
Asynchronous operations (e.g., fetching, adding, and deleting contacts) are managed using createAsyncThunk.
The UI includes forms validated with Formik and Yup to ensure correct data entry.
Contacts can be filtered dynamically using the search input.
📷 Screenshot

🎉 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

📄 License
This project is open-source and available under the MIT License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
