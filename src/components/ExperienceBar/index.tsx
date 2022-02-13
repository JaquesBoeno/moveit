import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import style from './styles.module.scss';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <>
      <header className={style.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextLevel}%` }} />

          <span
            className={style.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    </>
  );
}
