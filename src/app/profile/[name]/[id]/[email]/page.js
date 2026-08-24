export default async function Profile({ params }) {
  const { name, id, email } =  await params;

  return (
    <div>
      Name: {name}
      <br />
      ID: {id}
      <br />
      Email: {email}
    </div>
  );
}
