import * as React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-cols-1 gap-2 p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">
        Next.js / Auth.js / Prisma / Postgres (supabase)
      </h1>
      <p className="text-gray-600">
        <span>
          <Link className="text-blue-500 hover:underline" href="/login">
            Clique aqui
          </Link>
        </span>{" "}
        para fazer login.
      </p>
      <p className="text-gray-600">
        <span>
          <Link className="text-blue-500 hover:underline" href="/dashboard">
            Clique aqui
          </Link>
        </span>{" "}
        para ir direto para o dashboard.
      </p>
    </div>
  );
}
