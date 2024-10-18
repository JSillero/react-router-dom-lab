// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/NavBar";
import { useState } from 'react';
import { MailboxList } from './components/MailboxList';
import { MailboxForm } from './components/MailboxForm';
import { MailboxDetails } from './components/MailboxDetails';



const App = () => {
  const [mailboxArray, setMailboxArray] = useState([{ boxHolder: "John Doe", size: "Small" }]);
  const newMail = (e) => {
    e.preventDefault();
    setMailboxArray([...mailboxArray, { boxHolder: formData.name, size: formData.size }]);
    navigate('/new-mailbox');
  }
  const [formData, setFormData] = useState({
    name: '',
    size: '',
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (<>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxArray}></MailboxList>} />
      <Route path="/new-mailbox" element={<MailboxForm newMail={newMail} formData={formData} handleChange={handleChange} />} />
      <Route path="/mailboxes/:mailboxindex" element={<MailboxDetails mailboxes={mailboxArray}/>  }>   </Route>

      <Route path="*" element={<h2> Not found</h2>} />
    </Routes>
  </>)
};

export default App;
