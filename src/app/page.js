import { PrismaClient } from "./../../generated/prisma";

const prisma = new PrismaClient();

export default async function Home() {
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
  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  return (
    <div className="font-sans grid grid-cols-1 gap-4 p-4 max-w-md mx-auto">
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
    </div>
  );
}
