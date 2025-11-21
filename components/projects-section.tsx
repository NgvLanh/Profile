import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

type Project = {
  title: string;
  description: string;
  webHref: string;
  sourceHref: string;
  image: string;
  tags: string[];
  status?: 'active' | 'inactive';
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
    status: 'active',
  },
  {
    title: 'Sales Management System',
    description:
      'A desktop application for managing sales, inventory, and customer data in retail businesses.',
    webHref: '',
    sourceHref: '',
    image: '/sales-management-system.png',
    tags: ['C#', 'Entity Framework', 'Winforms', 'SQL Server'],
    status: 'inactive',
  },
  {
    title: 'Box Chat',
    description:
      'A real-time chat application that allows users to communicate instantly through text messages.',
    webHref: 'https://box-chat-h298.onrender.com',
    sourceHref: 'https://github.com/NgvLanh/Box-Chat',
    image: '/box-chat.png',
    tags: ['Node.js', 'MongoDB', 'Socket.io', 'Passport.js', 'Tailwind CSS'],
    status: 'active',
  },
  {
    title: 'Coza Store',
    description:
      'A web application for managing and selling products online with user authentication and payment integration.',
    webHref: '',
    sourceHref: '',
    image: '/coza-store.png',
    tags: ['React', 'Bootstrap', 'Jquery', 'Java', 'Spring Boot', 'MySQL'],
    status: 'inactive',
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
          <div>
            <h2 className='text-2xl font-bold md:text-3xl'>
              Selected projects
            </h2>
          </div>
          <p className='mt-2 text-muted-foreground'>Some recent projects.</p>
          <div className='mt-2 inline-flex items-center gap-2 rounded-md bg-red-100 px-3 py-1'>
            <span className='text-xs font-semibold text-red-700'>
              ⚠️ Free Server
            </span>
            <span className='text-xs text-red-600'>
              Server may take 3-5 min to start. Please wait or{' '}
              <Link href='#contact' className='underline'>
                contact
              </Link>{' '}
              me if the server crashes.
            </span>
          </div>
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
          <Card key={i} className='flex flex-col overflow-hidden pt-0'>
            <img
              src={p.image || '/placeholder.svg'}
              alt={p.title}
              className='h-40 w-full object-cover p-2 rounded-xl'
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
              <Tooltip>
                <TooltipTrigger asChild>
                  {p.status === 'active' ? (
                    <Link
                      href={p.webHref}
                      target='_blank'
                      className='text-sm font-medium hover:underline'
                    >
                      Visit Website
                    </Link>
                  ) : (
                    <span className='text-sm font-medium text-gray-400 cursor-not-allowed'>
                      Non Deployed
                    </span>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  {p.status === 'active'
                    ? 'Click to visit the website'
                    : 'This project is not deployed yet'}
                </TooltipContent>
              </Tooltip>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
