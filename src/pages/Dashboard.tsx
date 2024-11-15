import _ from 'lodash';
import Tasks from '@/components/customs/Tasks/TasksTable';

const Dashboard = () => {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex w-full h-full space-x-4">
      <div className="flex flex-col w-full h-full space-y-4">
        <div className="p-4 space-y-3 rounded-xl bg-secondary">
          <h1 className="text-4xl font-bold">Hello, Yancee!</h1>
          <p className="text-sm text-muted">It's {date}</p>
        </div>
        <div className="h-full p-4 pb-0 space-y-4 rounded-xl bg-secondary">
          {/* <Tasks /> */}
        </div>
      </div>
      <div className="h-full p-4 space-y-4 rounded-t-xl background-image min-w-[30%]" />
    </div>
  );
};

export default Dashboard;
