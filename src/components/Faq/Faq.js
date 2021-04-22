import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {FAQData} from '../../data/dataStore.js';
import styles from './Faq.scss';


const FAQ = () => (
  <Container>
    <h1 className={styles.title}>{FAQData.title}</h1>
    <h2 className={styles.subtitle}>{FAQData.subtitle}</h2>
    <Hero titleText={FAQData.imageTitle} image={FAQData.image}/>
    <p className={styles.content}>{FAQData.content}</p>
  </Container>
);

export default FAQ;