
import Link from "next/link";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Signin",
    href: "/signup",
  },
  {
    name: "Login",
    href: "/login",
  },
];

export function Header() {
 

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold">ReduxThunk</span>
        </div>
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

       
      </div>
    </div>
  );
}