import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './Components/Form.jsx'
import TableComponent from './Components/TableComponent.jsx'
import {
  // BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {

    path: "/form",
    element: <Form />,
  },
  {
    path: "/tableComponent",
    element: <TableComponent />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>)