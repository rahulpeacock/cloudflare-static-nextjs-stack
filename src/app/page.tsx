import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <p>Home page</p>
          <Link href='/about'>Go to About</Link>
        </div>
      </section>
    </main>
  );
}
