// Interface for Card component props
export interface CardProps {
  title: string;
  imageUrl: string;
  location: string;
  price: string;
  description?: string; // optional
}

// Interface for Button component props
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string; // for additional styling
  disabled?: boolean;
}
