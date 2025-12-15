import type { ComponentType } from 'react';
import type { ThemeProps } from '../types';

/** HOC для предоставления темы оформления оборачиваемому компоненту через пропсы. */
export function withTheme<P extends object>(
  WrappedComponent: ComponentType<P & ThemeProps>
): ComponentType<P & ThemeProps> {
  const ThemedComponent = (props: P & ThemeProps) => {
    return <WrappedComponent {...props} />;
  };

  // Сохраняем имя исходного компонента для удобства отладки
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ThemedComponent.displayName = `withTheme(${displayName})`;

  return ThemedComponent;
}
