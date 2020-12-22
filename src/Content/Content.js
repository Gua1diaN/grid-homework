import React from 'react';
import styles from './Content.module.css';

const Content = () => {
    return (
    <div className={styles.container}>  
      <div className={styles.topTitle}>
        No Runner
      </div>
      <div className={styles.top}>
        Table
      </div>
      <div className={styles.menu}>
        Menu
      </div>
      <div className={styles.content}>
        asdasdad
      </div>
      <div className={styles.botTitle}>
        Market%
      </div>
      <div className={styles.bot}>
        asdad
      </div>
    </div>
    );
}

export default Content;