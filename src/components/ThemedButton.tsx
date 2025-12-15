import { Component } from 'react';
import type { ThemeProps } from '../types';
import { themeConfig } from '../themeConfig';

interface ThemedButtonProps extends ThemeProps {
  onClick?: () => void;
  children: React.ReactNode;
}

/** Компонент кнопки, использующий тему для стилизации. */
class ThemedButton extends Component<ThemedButtonProps> {
  render() {
    const { theme, onClick, children } = this.props;
    const styles = themeConfig[theme];

    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          border: `2px solid ${styles.borderColor}`,
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
      >
        {children}
      </button>
    );
  }
}

export default ThemedButton;
