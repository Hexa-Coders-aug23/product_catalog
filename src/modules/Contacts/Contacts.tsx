import { Link } from 'react-router-dom';
import vectorIcon from '../../static/icons/Chevron_Arrow_Right.svg';
import homeIcon from '../../static/icons/Home.svg';

import { membersInformation } from '../../utils/members';

import styles from './Contacts.module.scss';
import { Members } from './Members/Members';

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
        {membersInformation.map((member) => (
          <Members member={member} />
        ))}
      </section>
    </main>
  );
};
