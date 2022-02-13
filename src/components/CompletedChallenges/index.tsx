import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import style from './styles.module.scss';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={style.CompletedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
