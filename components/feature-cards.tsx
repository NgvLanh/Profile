import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Gauge, Rocket, ShieldCheck } from 'lucide-react';

export function FeatureCards() {
  return (
    <div className='grid gap-6 md:grid-cols-3'>
      <Card className='relative overflow-hidden'>
        <div className='pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-400/20 blur-2xl' />
        <CardHeader>
          <div className='flex items-center gap-2'>
            <Gauge className='h-5 w-5 text-fuchsia-600' />
            <Badge className='bg-fuchsia-600/15 text-fuchsia-700 hover:bg-fuchsia-600/20'>
              Fast
            </Badge>
          </div>
          <CardTitle className='mt-2'>Performance first</CardTitle>
          <CardDescription>
            Ship experiences that feel instant. I optimize for Core Web Vitals
            and perceived speed.
          </CardDescription>
        </CardHeader>
        <CardContent className='text-sm text-muted-foreground'>
          Static rendering, streaming, and smart caching to keep interactions
          snappy.
        </CardContent>
      </Card>

      <Card className='relative overflow-hidden'>
        <div className='pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-300/30 blur-2xl' />
        <CardHeader>
          <div className='flex items-center gap-2'>
            <Rocket className='h-5 w-5 text-amber-600' />
            <Badge className='bg-amber-500/15 text-amber-700 hover:bg-amber-500/20'>
              Modern
            </Badge>
          </div>
          <CardTitle className='mt-2'>Modern stack</CardTitle>
          <CardDescription>
            ReactJS, TypeScript, Tailwind, and shadcn/ui for clean, maintainable
            UIs.
          </CardDescription>
        </CardHeader>
        <CardContent className='text-sm text-muted-foreground'>
          Accessible components and scalable patterns for long-term success.
        </CardContent>
      </Card>

      <Card className='relative overflow-hidden'>
        <div className='pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-400/20 blur-2xl' />
        <CardHeader>
          <div className='flex items-center gap-2'>
            <ShieldCheck className='h-5 w-5 text-purple-600' />
            <Badge className='bg-purple-500/15 text-purple-700 hover:bg-purple-500/20'>
              Quality
            </Badge>
          </div>
          <CardTitle className='mt-2'>Accessible and tested</CardTitle>
          <CardDescription>
            Design with accessibility in mind to ensure usability for all users.
          </CardDescription>
        </CardHeader>
        <CardContent className='text-sm text-muted-foreground'>
          Write semantic HTML, support keyboard navigation, and use testing to
          prevent bugs.
        </CardContent>
      </Card>
    </div>
  );
}
