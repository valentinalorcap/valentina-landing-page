import { Hero } from '@/components/sections/Hero';

// Ordered list of page sections. Today it's just the hero; adding a
// future section (About, Projects, Experience, Contact...) means
// creating the component and appending it here — nothing else changes.
const sections = [Hero];

export default function Home() {
  return (
    <main>
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </main>
  );
}
