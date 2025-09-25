import { Suspense } from "react";
import TopNavbar from "@/components/my-top-navbar";
import { SignIn, SignOut } from "@/components/auth-components";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

// Add this line to force fresh data on page reload
// For better standard, in future update to: 1. On-Demand Revalidation (Recommended) / 2. Database Webhooks Pattern / 3. React Query/SWR Pattern (Client-Side)
export const dynamic = "force-dynamic";

// Separate component for user data with delay
async function UsersList() {
  // Simulate delay to see Suspense working
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const users = await prisma.userBlog.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="border-l-2 border-gray-300 p-2">
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

export default async function Dashboard() {
  /*   const userAdd = await prisma.userBlog.create({
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

  const session = await auth();

  return (
    <div className="font-sans grid grid-cols-1 gap-4 p-4 max-w-md mx-auto">
      <TopNavbar />
      {!session ? (
        <div className="text-center">
          <SignIn />
        </div>
      ) : (
        <>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-gray-300">Signed in as:</p>
              <p className="text-white">{session.user?.email}</p>
            </div>

            <div className="text-center">
              <p className="text-gray-300">Data fetched from DB with Prisma:</p>
            </div>

            <div className="text-center">
              <SignOut />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold my-4">Users, bio and posts</h1>
            <Suspense fallback={<div>Loading...</div>}>
              <UsersList />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}
