import Link from "next/link";

export default function TopNavbar() {
  return (    
      <nav className="grid grid-cols-1 border-b-1 p-4">
        <ul className="flex space-x-4 items-center justify-center text-sm">
          <li>
            <Link className="text-blue-500 hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 hover:underline" href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 hover:underline" href="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>    
  );
}