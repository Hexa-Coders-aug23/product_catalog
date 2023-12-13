import { Link } from 'react-router-dom';
import vectorIcon from '../../static/icons/Chevron_Arrow_Right.svg';
import homeIcon from '../../static/icons/Home.svg';
import gmail from '../../static/icons/Gmail.svg';
import git from '../../static/icons/Git.svg';
import linkedin from '../../static/icons/Linkedin.svg';
import telegram from '../../static/icons/Telegram.svg';

import svytoslav from '../../static/members/Svytoslav.jpeg';
import dmytro from '../../static/members/Dmytro.jpeg';
import maksim from '../../static/members/Maksim.jpg';
import nazar from '../../static/members/Nazar.jpeg';
import olena from '../../static/members/Olena.jpeg';
import solomia from '../../static/members/Solomia.jpeg';

import styles from './Contacts.module.scss';

export const Contacts: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.contacts}>
        <Link to="/home">
          <img src={homeIcon} alt="icon" className={styles.contactIcon} />
          <img src={vectorIcon} alt="icon" className={styles.contactIcon} />
        </Link>

        <p className={styles.textContact}>Contacts</p>
      </div>

      <h1 className={styles.main_contacts}>Contacts</h1>

      <section className={styles.members}>
        <div className={`${styles.member} ${styles.members_first}`}>
          <img src={svytoslav} alt="Sviatoslav" className={styles.photo} />
          <h2 className={styles.name}>Sviatoslav Kondur</h2>

          <div className={styles.services}>
            <a href="sviatikkondur5@gmail.com" target="_blank" rel="noreferrer">
              <img
                src={gmail}
                alt="Gmail"
                className={`${styles.gmail} ${styles.iconParams}`}
              />
            </a>

            <a
              href="https://github.com/sviatikkondur"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={git}
                alt="Git"
                className={`${styles.git} ${styles.iconParams}`}
              />
            </a>
          </div>

          <div className={styles.socialMedia}>
            <a
              href="https://www.linkedin.com/in/sviatoslav-kondur/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className={`${styles.linkedin} ${styles.iconParams}`}
              />
            </a>

            <a
              href="https://t.me/sviatoslavkondur"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={telegram}
                alt="Telegram"
                className={`${styles.telegram} ${styles.iconParams}`}
              />
            </a>
          </div>
        </div>

        <div className={`${styles.member} ${styles.second}`}>
          <img src={dmytro} alt="Dmytro" className={styles.photo} />
          <h2 className={styles.name}>Dmytro Panin</h2>
          <div className={styles.services}>
            <a
              href="panindmytro.job@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gmail}
                alt="Gmail"
                className={`${styles.gmail} ${styles.iconParams}`}
              />
            </a>

            <a
              href="https://github.com/PaninDmytro"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={git}
                alt="Git"
                className={`${styles.git} ${styles.iconParams}`}
              />
            </a>
          </div>

          <div className={styles.socialMedia}>
            <a
              href="https://www.linkedin.com/in/dmytro-panin-7247252a0/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className={`${styles.linkedin} ${styles.iconParams}`}
              />
            </a>

            <a href="https://t.me/LikeAnAngel" target="_blank" rel="noreferrer">
              <img
                src={telegram}
                alt="Telegram"
                className={`${styles.telegram} ${styles.iconParams}`}
              />
            </a>
          </div>
        </div>

        <div className={`${styles.member} ${styles.third}`}>
          <img src={solomia} alt="Solomiia" className={styles.photo} />
          <h2 className={styles.name}>Solomiia Hanets</h2>
          <div className={styles.services}>
            <a href="solomiyahanets@gmail.com" target="_blank" rel="noreferrer">
              <img
                src={gmail}
                alt="Gmail"
                className={`${styles.gmail} ${styles.iconParams}`}
              />
            </a>

            <a
              href="https://github.com/BetterSol"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={git}
                alt="Git"
                className={`${styles.git} ${styles.iconParams}`}
              />
            </a>
          </div>
          <div className={styles.socialMedia}>
            <a href="http://surl.li/ofqns" target="_blank" rel="noreferrer">
              <img
                src={linkedin}
                alt="Linkedin"
                className={`${styles.linkedin} ${styles.iconParams}`}
              />
            </a>

            <a href="https://t.me/pure_sol" target="_blank" rel="noreferrer">
              <img
                src={telegram}
                alt="Telegram"
                className={`${styles.telegram} ${styles.iconParams}`}
              />
            </a>
          </div>
        </div>

        <div className={styles.member}>
          <img src={nazar} alt="Nazar" className={styles.photo} />
          <h2 className={styles.name}>Nazar Bidenko</h2>
          <div className={styles.services}>
            <a
              href="bidenko.nazar.dev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gmail}
                alt="Gmail"
                className={`${styles.gmail} ${styles.iconParams}`}
              />
            </a>

            <a
              href="https://github.com/Clover247"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={git}
                alt="Git"
                className={`${styles.git} ${styles.iconParams}`}
              />
            </a>
          </div>

          <div className={styles.socialMedia}>
            <a
              href="https://www.linkedin.com/in/nazar-bidenko/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className={`${styles.linkedin} ${styles.iconParams}`}
              />
            </a>

            <a href="https://t.me/Qwerty724" target="_blank" rel="noreferrer">
              <img
                src={telegram}
                alt="Telegram"
                className={`${styles.telegram} ${styles.iconParams}`}
              />
            </a>
          </div>
        </div>

        <div className={styles.member}>
          <img src={olena} alt="Olena" className={styles.photo} />
          <h2 className={styles.name}>Olena Tsyhypalo</h2>
          <div className={styles.services}>
            <a href="olenatsyhypalo@gmail.com" target="_blank" rel="noreferrer">
              <img
                src={gmail}
                alt="Gmail"
                className={`${styles.gmail} ${styles.iconParams}`}
              />
            </a>

            <a
              href="https://github.com/Helen-arch"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={git}
                alt="Git"
                className={`${styles.git} ${styles.iconParams}`}
              />
            </a>
          </div>

          <div className={styles.socialMedia}>
            <a
              href="https://www.linkedin.com/in/olena-tsyhypalo-897a7121b/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className={`${styles.linkedin} ${styles.iconParams}`}
              />
            </a>

            <a
              href="https://t.me/mrs_dandelion"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={telegram}
                alt="Telegram"
                className={`${styles.telegram} ${styles.iconParams}`}
              />
            </a>
          </div>
        </div>

        <div className={styles.member}>
          <img
            src={maksim}
            alt="Maksim"
            className={`${styles.photo} ${styles.photoMaksim}`}
          />
          <h2 className={styles.name}>Maksim Drozd</h2>
          <div className={styles.services}>
            <a href="getsize1144@gmail.com" target="_blank" rel="noreferrer">
              <img
                src={gmail}
                alt="Gmail"
                className={`${styles.gmail} ${styles.iconParams}`}
              />
            </a>

            <a
              href="https://github.com/Maksim114488"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={git}
                alt="Git"
                className={`${styles.git} ${styles.iconParams}`}
              />
            </a>
          </div>

          <div className={styles.socialMedia}>
            <a href="#f" target="_blank" rel="noreferrer">
              <img
                src={linkedin}
                alt="Linkedin"
                className={`${styles.linkedin} ${styles.iconParams}`}
              />
            </a>

            <a href="https://t.me/SantosMaks" target="_blank" rel="noreferrer">
              <img
                src={telegram}
                alt="Telegram"
                className={`${styles.telegram} ${styles.iconParams}`}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
