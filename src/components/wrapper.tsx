import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Adjust the import path as needed
import Card from "./jobCard/jobCard";
import SearchBar from "./searchBar/searchBar";
import './wrapper.scss';

const Wrapper = () => {
    const searchItems = useSelector((state: RootState) => state.searchItems);

    return (
        <div>
            {searchItems.length > 0 && (
                <div className="search">
                    <SearchBar />
                </div>
            )}
            <div style={{ marginTop: searchItems.length > 0 ? '20px' : '160px' }}>
                <Card />
            </div>
        </div>
    );
}

export default Wrapper;