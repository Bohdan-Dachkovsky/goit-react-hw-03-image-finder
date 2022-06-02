import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import  from './ContactList/ContactList';
// import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import ImagineGallery from 'components/ImagineGallery/ImagineGallery';
import ImagineGalleryItem from 'components/ImagineGalleryItem/ImagineGalleryItem';
import Searchbar from 'components/Searchbar/Searchbar';
import 'index.css';
import WatchProps from 'components/Loader/Watch';

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFetch = () => {
    setIsLoading(true);
    fetch('https://reqres.in/api/users?page=0')
      .then(respose => respose.json())
      .then(respose => {
        setUsers(respose.data);
        setIsLoading(false);
        // Optional code to simulate delay
        // setTimeout(() => {
        //   setUsers(respose.data);
        //   setIsLoading(false);
        // }, 3000);
      })
      .catch(() => {
        setErrorMessage('Unable to fetch cats list');
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      {isLoading ? (
        <WatchProps />
      ) : (
        <div className="userlist-container">
          {users.map((item, index) => (
            <div className="user-container" key={index}>
              <img src={item.avatar} alt="" />
              <div className="userDetail">
                <div className="first-name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
                <div className="last-name">{item.email}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <Searchbar click={handleFetch.bind(this)} disabled={isLoading} />
      <ImagineGallery>
        <ImagineGalleryItem />
      </ImagineGallery>

      <Button />
    </div>
  );
}
