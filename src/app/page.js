import { PrismaClient } from "./../../generated/prisma";
import { Suspense } from "react";

const prisma = new PrismaClient();

// Separate component for user data with delay
async function UsersList() {
  // Simulate delay to see Suspense working
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="border border-gray-300 p-2 rounded">
          <div className="font-sans">
            {user.name}
            <span className="text-sm text-gray-500 ml-1">
              {user.profile.bio}
            </span>
          </div>
          <div>
            {user.posts.map((post) => (
              <div className="text-lg font-semibold" key={post.id}>
                {post.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default function Home() {
  /*   const userAdd = await prisma.user.create({
    data: {
      name: "Aurora",
      email: "aurora@flennar.com.br",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I love databases and Next.js!" },
      },
    },
  }); */

  return (
    <div className="font-sans grid grid-cols-1 gap-4 p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users, bio and posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
