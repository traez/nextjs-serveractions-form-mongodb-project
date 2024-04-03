import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking does not exist</p>
      <p><b><Link href="/">Click here</Link></b> to go back to the homepage</p>
    </div>
  );
}
