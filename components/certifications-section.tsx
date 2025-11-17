import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

type Cert = {
  title: string;
  issuer: string;
  year: string;
  verifyUrl?: string;
  badgeUrl?: string;
};

const defaultCerts: Cert[] = [
  {
    title: 'Microsoft Office Specialist (MOS)',
    issuer: 'Microsoft',
    year: '2024',
    badgeUrl: '/mos-badge.png',
  },
];

export function CertificationsSection({
  certs = defaultCerts,
}: {
  certs?: Cert[];
}) {
  return (
    <div id='certifications'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold md:text-3xl'>Certifications</h2>
        <p className='mt-2 text-muted-foreground'>
          Professional certification I&apos;ve earned.
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {certs.map((c, i) => (
          <Card key={i} className='flex flex-col overflow-hidden'>
            <CardHeader className='flex flex-row items-center gap-3'>
              {c.badgeUrl ? (
                <img
                  src={c.badgeUrl}
                  alt={c.issuer}
                  className='h-10 w-10 rounded-md border object-cover'
                />
              ) : null}
              <div>
                <CardTitle className='text-base leading-tight'>
                  {c.title}
                </CardTitle>
                <div className='text-xs text-muted-foreground'>
                  {c.issuer} • {c.year}
                </div>
              </div>
            </CardHeader>
            <CardContent className='pt-0'>
              <p className='text-sm text-muted-foreground'>
                Certified proficiency in Microsoft Office applications.
              </p>
            </CardContent>
            <CardFooter className='mt-auto'>
              {c.verifyUrl && (
                <Link
                  href={c.verifyUrl}
                  className='text-sm underline underline-offset-4 hover:text-foreground'
                >
                  View certificate
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
