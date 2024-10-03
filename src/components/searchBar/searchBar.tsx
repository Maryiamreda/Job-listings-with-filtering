import { useDispatch, useSelector } from 'react-redux';
import './searchBar.scss';
import Icon from '../../images/icon-remove.svg'
import { RootState } from '../../store/store'; // Adjust the import path as needed
import { clearSearchItems, removeSearchItem } from '../../store/searchItemSlice';
const SearchBar = () => {
    const searchItems = useSelector((state: RootState) => state.searchItems);
    const dispatch = useDispatch();
    return (
        <div className='search-bar'>
            <div className='search-items'> {searchItems.length > 0 && searchItems.map((item) => (
                <div className='search-item'>
                    <b>{item}</b>
                    <button onClick={() => { dispatch(removeSearchItem(item)) }}><img src={Icon} alt=''></img></button>
                </div>)
            )}</div>

            <button onClick={() => dispatch(clearSearchItems())}>clear</button>
        </div>);
}

export default SearchBar;