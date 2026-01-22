import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

type User = {
  id: number;
  username: string;
  email: string;
  fullName: string;
  role: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const onGetUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8001/api/users");
      setUsers(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onGetUsers();
  }, []);

  return (
    <>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.fullName}</p>
          <p>{user.role}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default App;
