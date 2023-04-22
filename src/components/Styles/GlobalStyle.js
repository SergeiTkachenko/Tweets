import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: 'Montserrat';
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
  background: repeating-linear-gradient(45deg, black 27% 20%, #4f2d9d 45% 45%);
  min-height: 100vh;
  padding: 50px;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

img {
    display: block;
}

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0px;
}
`;
