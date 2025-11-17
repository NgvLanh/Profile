export function SiteFooter() {
  return (
    <footer className='border-t py-8'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row md:px-6'>
        <p>
          {'\u00A9'} {new Date().getFullYear()} Nguyen Van Lành. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
