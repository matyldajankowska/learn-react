import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }
  
  render(){
    return(
      <section className={styles.component}>
        {this.props.title}
      </section>
    );
  }  
}

export default Card;