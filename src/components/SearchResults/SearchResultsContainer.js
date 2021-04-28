import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSearchResults} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  return {
    cards: getSearchResults(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);