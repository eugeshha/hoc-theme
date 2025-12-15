import { Component } from 'react';
import type { ThemeProps } from '../types';
import { themeConfig } from '../themeConfig';

interface ThemedCardProps extends ThemeProps {
  title: string;
  content: string;
}

/** Компонент карточки, использующий тему для стилизации. */
class ThemedCard extends Component<ThemedCardProps> {
  render() {
    const { theme, title, content } = this.props;
    const styles = themeConfig[theme];

    return (
      <div
        style={{
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          border: `2px solid ${styles.borderColor}`,
          padding: '20px',
          borderRadius: '12px',
          margin: '10px 0',
          boxShadow: theme === 'dark' 
            ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
            : '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{title}</h3>
        <p style={{ margin: 0 }}>{content}</p>
      </div>
    );
  }
}

export default ThemedCard;
