import gmail from '../../../static/icons/Gmail.svg';
import git from '../../../static/icons/Git.svg';
import linkedin from '../../../static/icons/Linkedin.svg';
import telegram from '../../../static/icons/Telegram.svg';
import { Member } from '../../../types/Member';
import styles from './Members.module.scss';

interface Props {
  member: Member;
}

export const Members: React.FC<Props> = ({ member }) => {
  return (
    <div className={styles.member}>
      <img src={member.photo} alt="Sviatoslav" className={styles.photo} />
      <h2 className={styles.name}>{member.name}</h2>

      <div className={styles.services}>
        <a href={member.gmail} target="_blank" rel="noreferrer">
          <img
            src={gmail}
            alt="Gmail"
            className={`${styles.gmail} ${styles.iconParams}`}
          />
        </a>

        <a href={member.git} target="_blank" rel="noreferrer">
          <img
            src={git}
            alt="Git"
            className={`${styles.git} ${styles.iconParams}`}
          />
        </a>
      </div>

      <div className={styles.socialMedia}>
        <a href={member.linkedin} target="_blank" rel="noreferrer">
          <img
            src={linkedin}
            alt="Linkedin"
            className={`${styles.linkedin} ${styles.iconParams}`}
          />
        </a>

        <a href={member.telegram} target="_blank" rel="noreferrer">
          <img
            src={telegram}
            alt="Telegram"
            className={`${styles.telegram} ${styles.iconParams}`}
          />
        </a>
      </div>
    </div>
  );
};
