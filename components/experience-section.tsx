import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  tags?: string[];
  link?: string;
  logoUrl?: string;
};

const defaultExperience: Experience[] = [
  {
    company: 'Viettel Telecom',
    role: 'Software Installation Technician',
    period: '11/2022 — 12/2022',
    location: 'Remote',
    description:
      'Installed and configured Kaspersky antivirus software across the Viettel system, ensuring proper application functionality after setup.',
    tags: ['Kaspersky', 'IT Support', 'Software Installation'],
    link: '#',
    logoUrl: '/viettel.png',
  },
  {
    company: 'MobiFone Services Company Region 9',
    role: 'Backend Developer',
    period: '09/2024 — 12/2024',
    location: 'Can Tho City',
    description:
      'Developed the Work Scheduling system using Oracle Database. Built HRM system modules including Employee Transfer, Resignation, Leave Management, Insurance, and Employee Data Import.',
    tags: ['Node.js', 'Backend Developer', 'Oracle Database', 'HRM System'],
    link: '#',
    logoUrl: '/mobifone.png',
  },
];

export function ExperienceSection({
  items = defaultExperience,
}: {
  items?: Experience[];
}) {
  return (
    <div id='experience'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold md:text-3xl'>Work experience</h2>
        <p className='mt-2 text-muted-foreground'>
          Places I&apos;ve worked and contributed.
        </p>
      </div>

      <ol className='relative border-s'>
        {items.map((job, idx) => (
          <li key={idx} className='ms-6 py-6 first:pt-0 last:pb-0'>
            <span className='absolute -start-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full border bg-background'>
              <span className='h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-600 to-amber-500' />
            </span>
            <Card className='overflow-hidden'>
              <CardContent className='p-5'>
                <div className='flex flex-wrap items-center justify-between gap-4'>
                  <div className='flex items-center gap-3'>
                    {job.logoUrl ? (
                      <img
                        src={job.logoUrl || '/placeholder.svg'}
                        alt={job.company}
                        className='h-8 w-8 rounded-md border object-cover'
                      />
                    ) : null}
                    <div>
                      <div className='text-sm text-muted-foreground'>
                        {job.period}
                      </div>
                      <h3 className='text-lg font-semibold leading-tight'>
                        {job.role}
                      </h3>
                      <p className='text-sm text-muted-foreground'>
                        {job.company}
                        {job.location ? ` • ${job.location}` : ''}
                      </p>
                    </div>
                  </div>
                  {job.link ? (
                    <Link
                      href={job.link}
                      className='hidden text-sm underline underline-offset-4 hover:text-foreground'
                    >
                      Website
                    </Link>
                  ) : null}
                </div>
                {job.description ? (
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {job.description}
                  </p>
                ) : null}
                {job.tags && job.tags.length ? (
                  <div className='mt-3 flex flex-wrap gap-2'>
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className='rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
