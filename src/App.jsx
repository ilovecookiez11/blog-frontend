import React from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import router from './routes';

const font =  "'Inter Tight', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none"
    }
  },
})

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
