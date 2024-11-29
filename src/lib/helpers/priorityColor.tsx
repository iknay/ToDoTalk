export const getBadgeColor = (priority: string) => {
  switch (priority) {
    case 'low':
      return 'text-green-500 bg-green-500/10 hover:border-green-500';
    case 'medium':
      return 'text-yellow-500 bg-yellow-500/10 hover:border-yellow-500';
    case 'high':
      return 'text-red-500 bg-red-500/10 hover:border-red-500';
    default:
      return 'text-gray-500';
  }
};
