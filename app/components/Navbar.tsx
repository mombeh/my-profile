import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <div className="text-2xl font-bold">MyLogo</div>
        <div className="space-x-6">
          <Link href="#home"><a className="hover:text-blue-600">Home</a></Link>
          <Link href="#portfolio"><a className="hover:text-blue-600">Portfolio</a></Link>
          <Link href="#skills"><a className="hover:text-blue-600">Skills</a></Link>
          <Link href="#contact"><a className="hover:text-blue-600">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
