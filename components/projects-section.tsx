import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  webHref: string;
  sourceHref: string;
  image: string;
  tags: string[];
};

const defaultProjects: Project[] = [
  {
    title: 'Templar Mail',
    description:
      'A web app for configuring email templates and scheduling automated email delivery.',
    webHref: 'https://templar-mail.onrender.com',
    sourceHref: 'https://github.com/NgvLanh/Templar-Mail',
    image: '/templar-mail.png',
    tags: ['Java', 'Spring MVC', 'Thymleaf', 'Jquery', 'Bootstrap', 'Supabase'],
  },
];

export function ProjectsSection({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) {
  return (
    <div>
      <div className='mb-8 flex items-end justify-between gap-4'>
        <div>
          <h2 className='text-2xl font-bold md:text-3xl'>Selected projects</h2>
          <p className='mt-2 text-muted-foreground'>
            A few things I&apos;ve shipped recently.
          </p>
        </div>
        <Link
          href='#'
          className='hidden rounded-md border bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground
          ' //  md:inline-flex'
        >
          See all
        </Link>
      </div>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((p, i) => (
          <Card key={i} className='flex flex-col overflow-hidden'>
            <img
              src={p.image || '/placeholder.svg'}
              alt={p.title}
              className='h-40 w-full object-cover'
            />
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className='rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className='mt-auto'>
              <Link
                href={p.webHref}
                className='text-sm font-medium text-foreground underline-offset-4 hover:underline'
                target='_blank'
              >
                Go to website
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
