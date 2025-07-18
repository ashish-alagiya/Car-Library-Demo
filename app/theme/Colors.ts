// Define a type for the color keys used in the Colors object.

type ColorType =
  | 'black'
  | 'white'
  | 'primary'
  | 'success'
  | 'primary100'
  | 'manual'
  | 'automatic'
  | 'background'
  | 'manualText'
  | 'automaticText';

// This object provides a centralized way to manage and reference color values throughout the application, ensuring consistency in color usage.
// Color code should be Hex values.

export const Colors: Record<ColorType, string> = {
  black: '#000000',
  white: '#ffffff',
  primary: '#00909A',
  success: '#54AB6A',
  primary100: '#9B72D2',
  manual: '#D6F5E3',
  manualText: '#10A024',
  automatic: '#FFE7CB',
  automaticText: '#997C4C',
  background: '#FFF5EE',
};
