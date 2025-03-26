// Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout.
// parallel routes are created using slots(@<slot name>)
// by default, all these slots with the same names are passed down to layout.tsx component as props

// within each slot, slot can have its own routing/error handling/loaders
// conditionally when the sub routes of slot are rendered, when the page re-renders, we will get a not found page.
// to avoid, we have to include a default.jsx page for all the other slots which gets rendered when we are on sub-route

// since children is an implicit slot, you also need to create a default.js file to render a fallback for children

export default function DashboardLayout({
  children,
  users,
  metrics,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  metrics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className='flex gap-4 m-4'>
        <div className='flex flex-col gap-2 '>
          <div>{users}</div>
          <div>{metrics}</div>
        </div>
        <div className='flex flex-1 justify-center'>{notifications}</div>
      </div>
    </>
  );
}
