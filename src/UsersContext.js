import React, { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export function UsersProvider(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://611f264e9771bf001785c73e.mockapi.io/users"
      );
      const result = await res.json();
      //console.log(users);
      setUsers(result);
    };
    fetchData();
  }, []);
  return (
    <>
      <UsersContext.Provider value={[users, setUsers]}>
        {props.children}
      </UsersContext.Provider>
    </>
  );
}
