import { Syne } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

import Link from "next/link"

export function Component() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PaletteIcon className="h-6 w-6" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Work
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div
            className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Rohit Kulkarni</h1>
                <h2 className="text-xl font-medium text-muted-foreground">Full Stack Dev</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Crafting beautiful and intuitive digital experiences. Passionate about design, technology, and
                  problem-solving.
                </p>
              </div>
            </div>
            {/* <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" /> */}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a selection of my recent design projects.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project"
                    className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105" />
                  <div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-primary-foreground">Project 1</h3>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project"
                    className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105" />
                  <div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-primary-foreground">Project 2</h3>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project"
                    className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105" />
                  <div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-primary-foreground">Project 3</h3>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project"
                    className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105" />
                  <div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-primary-foreground">Project 4</h3>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project"
                    className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105" />
                  <div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-primary-foreground">Project 5</h3>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project"
                    className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105" />
                  <div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-primary-foreground">Project 6</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function PaletteIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>)
  );
}
