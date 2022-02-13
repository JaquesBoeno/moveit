import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import style from './styles.module.scss';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/JaquesBoeno.png" alt="JaquesBoeno" />

      <div>
        <strong>Jaques Boeno</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
