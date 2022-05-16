// globalStyle.js

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/*------- to reset css -------*/

html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul {
  list-style: none;
}
button,
input,
select {
  margin: 0;
}
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
img,
video {
  height: auto;
  max-width: 100%;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}

/*------- base style -------*/

body {
  margin: 0;
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-weight: 500;
}

#root,
body,
html {
  margin: auto;
  max-width: 1440px;
  min-width: 1024px;
  min-height: 780px;
  height: 100vh;
}

#root {
  display: flex;
  flex-direction: column;
}


`;

export default GlobalStyle;
