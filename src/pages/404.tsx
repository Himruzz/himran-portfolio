import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">
        <a className="mt-6 text-blue-500 hover:underline">Go back home</a>
      </Link>
    </div>
  );
}
