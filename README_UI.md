- All styled components need to be a child of `ThemeProvider` to use the custom theme.
  This can be nested and you can also access the theme with `useTheme()`.

```
import { ThemeProvider } from '@material-ui/core/styles';
import { AVERYCORP_THEME } from './Theme';

function App() {
    return (
        <ThemeProvider theme={AVERYCORP_THEME}>...</ThemeProvider>
    );
}
```

- To have `Typography` and html elements honor the theme, use `CssBaseline` 
  before those elements or place it within something like a `Paper` surface.
```
import { CssBaseline } from '@material-ui/core/CssBaseline';

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}
```


## Resources:

- Material UI: https://material-ui.com
