import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup Manager</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Listed Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
