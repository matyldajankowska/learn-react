import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {InfoData} from '../../data/dataStore.js';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <h1 className={styles.title}>{InfoData.title}</h1>
    <h2 className={styles.subtitle}>{InfoData.subtitle}</h2>
    <Hero titleText={InfoData.imageTitle} image={InfoData.image}/>
    <p className={styles.content}>{InfoData.content}</p>
  </Container>
);

export default Info;