import { About } from '../layouts/About';
import { Benefits } from '../layouts/Benefits';
import { Comunity } from '../layouts/Comunity';
import { Contact } from '../layouts/Contact';
import { HelloWorld } from '../layouts/HelloWorld';
import { Projects } from '../layouts/Projects';
import { Sidebar } from '../layouts/Sidebar';

export default function Home() {
  return (
    <div className="bg-white-text w-screen min-h-screen flex flex-col gap-16">
      <HelloWorld />
      <Sidebar />
      <main className="lg:pl-24 lg:pr-24 pl-7 pr-7 w-screen flex flex-col gap-16">
        <Benefits />
        <About />
        <Projects />
        <Comunity />
      </main>
      <Contact />
    </div>
  );
}
