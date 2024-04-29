import { redOrange } from './colors/redOrange';
import { keppel } from './colors/keppel';
import { tangaroa } from './colors/tangaroa';
import { kidnapper } from './colors/kidnapper';
import {
  DefaultTheme,
  MD3LightTheme,
  configureFonts,
} from 'react-native-paper';
import { baseVariants, customVariants } from './fonts';

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: { ...baseVariants, ...customVariants } }),
  colors: {
    ...MD3LightTheme.colors, 
    primary: redOrange[500],
    secondary: keppel[500],
    tertiary: tangaroa[500],
    ligthGreen: kidnapper[100],
    surfaceVariant: '#D3DAE3',

    onPrimary: redOrange[300],
    onSecondary: keppel[200],
    onTertiary: tangaroa[50],
    onLigthGreen: kidnapper[100],
    onPrimaryContainer: tangaroa[950],
    onSurfaceVariant: '#333333',
   // onSurface: '#19191999',
  },
};
