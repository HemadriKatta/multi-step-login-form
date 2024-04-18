import React, { createContext, useState, useContext } from 'react';


const MyObjectContext = createContext();


export const useMyObject = () => useContext(MyObjectContext);


export const MyObjectProvider = ({ children }) => {
   
   const [email,setEmail] = useState(null);
   const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  
  const [password, setPassword] = useState('');
  const [agreement, setAgreement] = useState(false);
  return (
    <MyObjectContext.Provider value={{name, setName, username, setUsername,email,setEmail,password, setPassword,agreement, setAgreement}}>
      {children}
    </MyObjectContext.Provider>
  );
};