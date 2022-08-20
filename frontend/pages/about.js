import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About page</h1>
      <Link href={"/"} children="Home" />
    </div>
  );
}
