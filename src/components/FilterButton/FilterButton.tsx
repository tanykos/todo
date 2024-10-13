import { Button } from "@mui/material";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      size="small"
      sx={{ textTransform: 'none', borderColor: isActive ? 'var(--text-secondary)' : 'transparent' }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
