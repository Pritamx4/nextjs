// export async function GET() {
//     return Response.json([
//         { id: 1, name: "pritam, Next.js!" },
//         { id: 2, name: "sahil, React.js!" },
//         { id: 3, name: "rohit, Node.js!" },
//     ]);
// }

// export async function POST(request) {
//     const data = await request.json();
//     console.log(data);
//     return Response.json({
//         message: "Data received successfully",
//         data: data,
//     });
// }


// Temporary in-memory storage
let users = [];

// GET all users
export async function GET() {
  return Response.json({
    message: "Users fetched successfully",
    data: users,
  });
}

// POST a new user
export async function POST(request) {
  const body = await request.json();

  if(Array.isArray(body)) {
    users = [...users, ...body];
  } else {
    users.push(body);
  }

  return Response.json(
    {
      message: "User added successfully",
      data: users,
    },
    { status: 201 }
  );
}

export async function PUT(request) {
  const { id, name} = await request.json();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return Response.json(
      {
        message: "User not found",
      },
      { status: 404 }
    );
  }

  users[userIndex] = { ...users[userIndex], name };

  return Response.json({
    message: "User updated successfully",
    data: users[userIndex],
  });
}

export async function DELETE(request) {
  const { id } = await request.json();
  users = users.filter((user) => user.id !== id);
  return Response.json({
    message: "User deleted successfully",
  });
}