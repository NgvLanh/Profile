import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Education = {
  school: string;
  degree: string;
  period: string;
  details?: string;
  logoUrl?: string;
};

const defaultEducation: Education[] = [
  {
    school: 'FPT Polytechnic',
    degree: 'Software Development',
    period: '2022 — 2025',
    details:
      'Specialized in practical App & Web Development; completed industry-oriented projects using Java, C#, and modern frameworks.',
    logoUrl: '/fpt.png',
  },
  {
    school: 'Can Tho University',
    degree: 'Information Technology',
    period: '2025 - Now',
    details:
      'Studying core IT foundations, including algorithms, data structures, computer networks, databases, and software engineering.',
    logoUrl: '/ctu.png',
  },
];

export function EducationSection({
  items = defaultEducation,
}: {
  items?: Education[];
}) {
  return (
    <div id='education'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold md:text-3xl'>Education</h2>
        <p className='mt-2 text-muted-foreground'>
          My learning journey and skill development.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {items.map((ed, i) => (
          <Card key={i} className='overflow-hidden'>
            <CardHeader className='flex flex-row items-center gap-3'>
              {ed.logoUrl ? (
                <img
                  src={ed.logoUrl || '/placeholder.svg'}
                  alt={ed.school}
                  className='h-10 w-10 rounded-md border object-cover'
                />
              ) : null}
              <div>
                <CardTitle className='text-base'>{ed.school}</CardTitle>
                <div className='text-xs text-muted-foreground'>{ed.period}</div>
              </div>
            </CardHeader>
            <CardContent className='pt-0'>
              <p className='text-sm font-medium'>{ed.degree}</p>
              {ed.details ? (
                <p className='mt-2 text-sm text-muted-foreground'>
                  {ed.details}
                </p>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
