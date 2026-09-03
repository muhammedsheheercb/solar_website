import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-start justify-center gap-6 pt-28">
      <p className="eyebrow">404</p>
      <h1 className="section-title max-w-3xl">This page is off the grid.</h1>
      <p className="body-large max-w-xl">
        The page you are looking for may have moved, or the link needs a quick inspection.
      </p>
      <Link className="button-primary" href="/">
        Return home
      </Link>
    </main>
  );
}
