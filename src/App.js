import './App.css';
import { Game } from './components/Game/Game.tsx';

export const App = () => {
  return (
    <div>
      <Game />
    </div>
  );
}

document.title = 'Tic Tac Toe'