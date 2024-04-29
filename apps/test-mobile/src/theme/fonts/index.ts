import { configureFonts } from 'react-native-paper';

const baseFont = {
  fontFamily: 'Nunito_400Regular',
} as const;

export const baseVariants = configureFonts({ config: baseFont });

export const customVariants = {
  // Customize individual base variants:
  labelLarge: {
    ...baseVariants.labelLarge,
    fontFamily: 'Nunito_400Regular',
  },
  displayMedium: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Nunito_700Bold',
  },
  headlineMedium: {
    ...baseVariants.headlineMedium,
    fontFamily: 'Nunito_700Bold',
  },
  italic: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Nunito_400Regular_Italic',
  },
  boldItalic: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Nunito_700Bold_Italic',
  },
} as const;
