import { AppBar, Container, Toolbar, Typography } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="center" sx={{ width: '100%' }}>
            Recipe Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
};
