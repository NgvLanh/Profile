import { CertificationsSection } from '@/components/certifications-section';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { FeatureCards } from '@/components/feature-cards';
import { Hero } from '@/components/hero';
import { ProjectsSection } from '@/components/projects-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SkillsSection } from '@/components/skills-section';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='relative flex min-h-[100dvh] flex-col'>
      <SiteHeader />
      <main className='flex-1'>
        <Hero
          name='Nguyen Van Lanh'
          role='Full Stack Developer'
          tagline='Building modern web applications with passion and precision'
          primaryCta={{
            href: '#contact',
            label: 'Contact me',
          }}
          secondaryCta={{
            href: 'https://github.com/NgvLanh',
            label: 'View GitHub',
          }}
        />
        <section className='py-12 md:py-20'>
          <div className='container mx-auto max-w-6xl px-4 md:px-6'>
            <FeatureCards />
          </div>
        </section>
        <section id='skills' className='py-12 md:py-20 border-t'>
          <div className='container mx-auto max-w-6xl px-4 md:px-6'>
            <SkillsSection />
          </div>
        </section>
        <section id='experience' className='py-12 md:py-20 border-t'>
          <div className='container mx-auto max-w-6xl px-4 md:px-6'>
            <ExperienceSection />
          </div>
        </section>
        {/* <section className='py-12 md:py-20 border-t'>
          <div className='container mx-auto max-w-6xl px-4 md:px-6'>
            <CodeDemo />
          </div>
        </section> */}
        <section id='projects' className='py-12 md:py-20 border-t'>
          <div className='container mx-auto max-w-6xl px-4 md:px-6'>
            <ProjectsSection />
          </div>
        </section>
        <section id='education' className='py-12 md:py-20 border-t'>
          <div className='container mx-auto max-w-6xl px-4 md:px-6'>
            <EducationSection />
          </div>
        </section>
        <section id='certifications' className='py-12 md:py-20 border-t'>
          <div className='container mx-auto max-w-6xl px-4 md:px-6'>
            <CertificationsSection />
          </div>
        </section>
        <section id='contact' className='py-12 md:py-20 border-t'>
          <div className='container mx-auto max-w-4xl px-4 md:px-6'>
            <div className='relative overflow-hidden rounded-2xl border bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-amber-400/10 p-8 md:p-12'>
              <div className='pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl' />
              <div className='pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl' />
              <div className='relative'>
                <h3 className='text-2xl font-bold md:text-3xl'>
                  Let&apos;s build something great
                </h3>
                <p className='mt-3 text-muted-foreground md:text-lg'>
                  I&apos;m available for freelance work and collaborations.
                  Email me or reach out on social.
                </p>
                <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                  <Link
                    href='mailto:nguyenlanh121004@gmail.com'
                    className='inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-amber-500 px-6 text-sm font-medium text-white shadow transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400'
                  >
                    nguyenlanh121004@gmail.com
                  </Link>
                  <Link
                    href='https://zalo.me/0395420077'
                    className='inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400'
                  >
                    Zalo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
