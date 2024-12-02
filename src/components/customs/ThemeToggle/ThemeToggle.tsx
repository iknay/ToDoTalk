import { useTheme } from '@/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

const ThemeToggle = ({ onThemeChange }: Props) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    onThemeChange?.(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={handleToggle} variant="ghost" size="icon">
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
