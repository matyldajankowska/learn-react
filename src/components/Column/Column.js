import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from './../Creator/Creator.js';
import { settings } from '../../data/dataStore';


class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }



    addCard(title){
        this.setState(state => (
          {
            columns: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
                icon: 'list-alt',
            
              }
            ]
          }
        ));
      }

    render(){
        return(
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.columnTite}</h3>
                <div>
                    {this.state.cards.map(({key, ...cardProps}) => (
                    <Card key={key} {...cardProps} />
                    ))}
                </div>
                
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
                </div>
            </section>
            
        );        
    };
};

export default Column;