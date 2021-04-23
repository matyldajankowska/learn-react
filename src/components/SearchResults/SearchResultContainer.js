import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSearchResults} from '../../redux/cardsRedux.js';
import {createActionAddCard} from '../../redux/cardsRedux.js';
import  {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  const title = props.match.params.title;
  const filteredLists = state.lists.filter(list => list.title == title);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    cards: getSearchResults(state),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.match.params.title,
    title,
  })),
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);