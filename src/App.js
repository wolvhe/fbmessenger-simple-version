import React, {useEffect, useState} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel, IconButton} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {  
    db.collection('messages').orderBy('timestamp', 'desc') 
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
    
  }, []) 

  //console.log(messages);
  //for sending a message
  const sendMessage = (event) => {   
      //logic for list of msg
      event.preventDefault();
      db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })      
      setInput('');
  }

  return (
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVKvGW_04tITbEzMo0lO41u6SCGA4KF3HReA&usqp=CAU"/>
      <h2>Welcome {username}</h2>
      <form className="app__form">  
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id, message}) =>(
        <Message key={id} username={username} message={message} />
        )) 
      }
      </FlipMove>
      
    </div>




  );
}

export default App;
