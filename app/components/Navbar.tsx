import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold select-none">MyLogo</div>
        <div className="space-x-6">
          <Link href="#home" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="#portfolio" className="hover:text-blue-500">
            Portfolio
          </Link>
          <Link href="#skills" className="hover:text-blue-500">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
