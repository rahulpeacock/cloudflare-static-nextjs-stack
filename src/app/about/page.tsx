import Link from 'next/link';

export default function About() {
  return (
    <main>
      <section>
        <div>
          <p>About Page with updated content</p>
          <Link href={'/'}>Back to Home</Link>
        </div>
      </section>
    </main>
  );
}
