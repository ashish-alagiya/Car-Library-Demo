// Define a type for the color keys used in the Colors object.

type ColorType =
  | 'black'
  | 'white'
  | 'primary'
  | 'success'
  | 'primary100'
  | 'primary200'
  | 'manual'
  | 'automatic'
  | 'background'
  | 'manualText'
  | 'automaticText'
  | 'lightPink'
  | 'bordercolor'
  | 'gray'
  | 'lightGray'
  | 'darkGray'
  | 'blue'
  | 'red'
  | 'error';

// This object provides a centralized way to manage and reference color values throughout the application, ensuring consistency in color usage.
// Color code should be Hex values.

export const Colors: Record<ColorType, string> = {
  black: '#000000',
  white: '#ffffff',
  primary: '#00909A',
  success: '#54AB6A',
  primary100: '#9B72D2',
  primary200: '#e8d9fdff',
  manual: '#D6F5E3',
  manualText: '#10A024',
  automatic: '#FFE7CB',
  automaticText: '#997C4C',
  background: '#FFF5EE',
  lightPink: '#9B72D22A',
  bordercolor: '#cbcbcbff',
  gray: '#666666',
  lightGray: '#F5F5F5',
  darkGray: '#757575',
  error: '#DF3145',
  blue: '#2196F3',
  red: '#f71414ff',
};
