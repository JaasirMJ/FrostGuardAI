import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-slate-900 p-4 flex gap-6 text-white">
      <Link href="/">Home</Link>
      <Link href="/create">Create</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/scan">Scan</Link>
    </div>
  );
}