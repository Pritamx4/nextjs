const Hellos = async () => {
  const response = await fetch("http://localhost:3000/api/hello");
  const users = await response.json();
  // console.log(users);
  const data = users.data;

  return (
    <div>
      <h1>Hellos</h1>
      <hr />
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Hellos;