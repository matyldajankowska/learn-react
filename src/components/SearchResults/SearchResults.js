import React from 'react';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import styles from './SearchResults.scss';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render(){
    const {title, icon, cards} = this.props;
    return(
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}>
          <Icon name={icon}/></span>{title}</h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.title} {...cardData} />
          ))}
        </div>             
      </section>
    );        
  }
}

export default SearchResults;