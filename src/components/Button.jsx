import MuiButton from '@mui/material/Button';

const VARIANT_STYLES = {
  primary: {
    background: 'linear-gradient(135deg, #2196f3, #1976d2)',
    color: '#fff',
    border: '2px solid #64b5f6',
    '&:hover': {
      background: 'linear-gradient(135deg, #1976d2, #1565c0)',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(33,150,243,0.7)',
    },
    '&:active': { transform: 'scale(0.95)' },
  },
  secondary: {
    background: 'transparent',
    color: '#2196f3',
    border: '2px solid #2196f3',
    '&:hover': {
      background: '#2196f3',
      color: '#fff',
    },
  },
};

function Button({ children, variant = 'primary', size = 'medium', onClick, sx, ...props }) {
  const muiSize = size === 'md' ? 'medium' : size === 'lg' ? 'large' : size === 'sm' ? 'small' : size;
  const variantStyles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary;

  return (
    <MuiButton
      variant="contained"
      size={muiSize}
      onClick={onClick}
      disableElevation
      sx={{
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: '6px',
        transition: 'all 0.2s',
        ...variantStyles,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
