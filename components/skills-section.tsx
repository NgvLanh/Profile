import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Skill = {
  name: string;
  level?: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';
};
type SkillGroup = { title: string; skills: Skill[] };

const defaultSkills: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS/JavaScript', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      {
        name: 'Tailwind CSS, Bootstrap, shadcn/ui',
        level: 'Advanced',
      },
      { name: 'AngularJS, Next.js', level: 'Intermediate' },
      { name: 'TypeScript', level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java, C#', level: 'Advanced' },
      { name: 'REST/API', level: 'Advanced' },
      { name: 'Node.js, Python', level: 'Intermediate' },
      { name: 'Oracle, MySQL, SQL Server', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Basic' },
      { name: 'Supabase', level: 'Basic' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git/GitHub', level: 'Advanced' },
      { name: 'Postman, Vite', level: 'Intermediate' },
      { name: 'VS Code, IntelliJ', level: 'Intermediate' },
      { name: 'Docker, CI/CD', level: 'Basic' },
    ],
  },
];

export function SkillsSection({
  groups = defaultSkills,
}: {
  groups?: SkillGroup[];
}) {
  return (
    <div id='skills'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold md:text-3xl'>Skills</h2>
        <p className='mt-2 text-muted-foreground'>
          A summary of the technologies and tools I use daily.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-3'>
        {groups.map((group) => (
          <Card key={group.title} className='relative overflow-hidden'>
            <div className='pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-amber-300/20 blur-2xl' />
            <CardHeader>
              <CardTitle className='tracking-tight'>{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='grid gap-2'>
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className='flex items-center justify-between gap-2'
                  >
                    <span className='text-sm'>{s.name}</span>
                    {s.level ? (
                      <span className='inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-muted-foreground'>
                        {s.level}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
