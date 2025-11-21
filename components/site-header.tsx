'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Flame, Github, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'>
        <Link href='/' className='flex items-center gap-2'>
          <span className='relative inline-flex h-8 w-8 items-center justify-center'>
            <span className='absolute inset-0 rounded-xl bg-gradient-to-br from-red-500 to-amber-500 blur-sm' />
            <Flame className='relative z-10 h-5 w-5 text-foreground' />
          </span>
          <span className='font-semibold tracking-tight'>Nguyen Van Lanh</span>
        </Link>

        <nav className='hidden items-center gap-6 text-sm md:flex'>
          <Link
            href='#projects'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Projects
          </Link>
          <Link
            href='#contact'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Contact
          </Link>
          <Link
            href='#skills'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Skills
          </Link>
          <Link
            href='#experience'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Experience
          </Link>
          <Link
            href='#education'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Education
          </Link>
          <Link
            href='#certifications'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Certs
          </Link>
          <Link
            href='https://github.com/NgvLanh'
            target='_blank'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            GitHub
          </Link>
          <Button asChild variant='outline'>
            <Link href='/resume.pdf' target='_blank'>
              Resume
            </Link>
          </Button>
        </nav>

        <div className='flex items-center gap-2 md:hidden'>
          <Button variant='ghost' size='icon' asChild>
            <Link aria-label='GitHub' href='https://github.com'>
              <Github className='h-5 w-5' />
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' aria-label='Open Menu'>
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <div className='flex flex-col gap-8'>
                <div>
                  <h2 className='text-lg font-semibold m-3'>Navigation</h2>
                  <nav className='space-y-3'>
                    {[
                      { href: '#projects', label: 'Projects' },
                      { href: '#skills', label: 'Skills' },
                      { href: '#experience', label: 'Experience' },
                      { href: '#education', label: 'Education' },
                      { href: '#certifications', label: 'Certifications' },
                      { href: '#contact', label: 'Contact' },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        onClick={() => setOpen(false)}
                        href={item.href}
                        className='block text-sm text-muted-foreground hover:text-foreground transition-colors px-3'
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className='border-t pt-6 space-y-3 px-3'>
                  <Button asChild className='w-full' variant='default'>
                    <Link
                      onClick={() => setOpen(false)}
                      href='/resume.pdf'
                      target='_blank'
                    >
                      Download Resume
                    </Link>
                  </Button>
                  <Button asChild className='w-full' variant='outline'>
                    <Link
                      onClick={() => setOpen(false)}
                      href='https://github.com/NgvLanh'
                      target='_blank'
                    >
                      <Github className='mr-2 h-4 w-4' />
                      GitHub Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
