import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import ImagineGallery from 'components/ImagineGallery/ImagineGallery';
import ImagineGalleryItem from 'components/ImagineGalleryItem/ImagineGalleryItem';
import Searchbar from 'components/Searchbar/Searchbar';
import s from './index.css';
import WatchProps from 'components/Loader/Watch';

export default function App() {
  // const state = {
  //   cats: '',
  // };
  // formSubmit = cats => {
  //   this.setState({ cats });
  // };

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
        setErrorMessage('Unable to fetch user list');
        setIsLoading(false);
      });
  };

  return (
    <div>
      {isLoading ? (
        <WatchProps />
      ) : (
        <div className={s.userContainer}>
          {users.map((item, index) => (
            <div className={s.userContainer} key={index}>
              <img src={item.avatar} alt="" />
              <div>
                <div
                  className={s.firstName}
                >{`${item.first_name}                
                                   ${item.last_name}`}</div>
                <div className={s.lastName}>{item.email}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {errorMessage && <div className={s.error}>{errorMessage}</div>}
      <Searchbar />
      <ImagineGallery>
        <ImagineGalleryItem />
      </ImagineGallery>
      <Modal />
      <Button click={handleFetch.bind(this)} disabled={isLoading} />
    </div>
  );
}
