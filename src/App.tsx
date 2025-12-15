import { Component } from 'react';
import { withTheme } from './hoc/withTheme';
import ThemedButton from './components/ThemedButton';
import ThemedCard from './components/ThemedCard';
import type { ThemeType } from './types';
import './App.css';

// Оборачиваем компоненты в HOC
const ThemedButtonWithTheme = withTheme(ThemedButton);
const ThemedCardWithTheme = withTheme(ThemedCard);

interface AppState {
  theme: ThemeType;
}

/** Главный компонент приложения с управлением темой оформления. */
class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme } = this.state;

    return (
      <div className={`app app-${theme}`}>
        <div className="container">
          <header className="header">
            <h1 className="title">HOC для управления темой</h1>
            <button className="theme-toggle" onClick={this.toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'} Переключить тему
            </button>
          </header>

          <div className="content">
            <section className="section">
              <h2>Текущая тема: {theme === 'light' ? 'Светлая' : 'Тёмная'}</h2>
              
              <div className="demo-section">
                <h3>Пример кнопки с темой:</h3>
                <ThemedButtonWithTheme theme={theme} onClick={this.toggleTheme}>
                  Нажми меня
                </ThemedButtonWithTheme>
              </div>

              <div className="demo-section">
                <h3>Пример карточек с темой:</h3>
                <ThemedCardWithTheme
                  theme={theme}
                  title="Карточка 1"
                  content="Это пример карточки, которая использует тему через HOC. Стили автоматически обновляются при переключении темы."
                />
                <ThemedCardWithTheme
                  theme={theme}
                  title="Карточка 2"
                  content="HOC withTheme передаёт проп theme в компонент, позволяя ему адаптировать свои стили в зависимости от текущей темы."
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
