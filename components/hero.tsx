import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Cta = { href: string; label: string };

export function Hero({
  name = 'Alex Rivera',
  role = 'Frontend Engineer',
  tagline = 'I build fast, delightful web apps with React, Next.js, and TypeScript.',
  primaryCta = { href: '#contact', label: 'Contact me' },
  secondaryCta = { href: 'https://github.com', label: 'View GitHub' },
}: {
  name?: string;
  role?: string;
  tagline?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute inset-0 -z-10'>
        <div className='pointer-events-none absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/20 to-amber-300/30 blur-3xl' />
        <div className='pointer-events-none absolute left-[10%] top-1/3 h-64 w-64 rounded-full bg-amber-300/20 blur-2xl' />
        <div className='pointer-events-none absolute right-[10%] top-1/4 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-2xl' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]' />
      </div>

      <div className='container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:py-24'>
        <div>
          <div className='inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur'>
            <span className='inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-amber-400' />
            Available for development work
          </div>
          <h1 className='mt-4 text-4xl font-extrabold tracking-tight md:text-6xl'>
            Hi, I&apos;m {name}
          </h1>
          <p className='mt-2 text-lg text-muted-foreground md:text-xl'>
            {role}
          </p>
          <p className='mt-4 max-w-[50ch] text-base text-muted-foreground md:text-lg'>
            {tagline}
          </p>
          <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
            <Button
              asChild
              className='bg-gradient-to-r from-red-600 to-amber-500 text-white shadow hover:opacity-95'
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>

          {/* <div className='mt-10 flex flex-wrap items-center gap-4 text-xs text-muted-foreground'>
            <span>Featured in</span>
            <img
              src='/tech-logo-abstract.png'
              alt='Tech publication logo'
              className='h-6 w-20 opacity-70'
            />
            <img
              src='/tech-logo-2.png'
              alt='Conference logo'
              className='h-6 w-20 opacity-70'
            />
            <img
              src='/abstract-tech-logo-3.png'
              alt='Community logo'
              className='h-6 w-20 opacity-70'
            />
          </div> */}
        </div>

        <div className='relative isolate'>
          <div className='relative overflow-hidden rounded-2xl border bg-card shadow'>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-amber-300/10' />
            <img
              src='/me.jpg'
              alt='Showcase of UI components and code preview'
              className='relative z-10 block h-full w-full'
            />
          </div>
          <div className='pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-amber-300/30 blur-2xl' />
        </div>
      </div>
    </section>
  );
}
