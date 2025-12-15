export type ThemeType = 'light' | 'dark';

export interface ThemeProps {
  theme: ThemeType;
}

export interface ThemeConfig {
  light: {
    backgroundColor: string;
    color: string;
    borderColor: string;
  };
  dark: {
    backgroundColor: string;
    color: string;
    borderColor: string;
  };
}
