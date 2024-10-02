import { useState } from "react";
import Card from "./jobCard/jobCard";
import SearchBar from "./searchBar/searchBar";
import './wrapper.scss';

const Wrapper = () => {
    const [dataFromChild, setDataFromChild] = useState<string[]>([]); // Change to an array

    function handleDataFromChild(data: string[]) {
        setDataFromChild(data); // Update state with the new array
    }

    return (
        <div>
            {dataFromChild.length > 0 && ( // Only display if dataFromChild has items
                <div className="search">
                    <SearchBar />
                </div>
            )}
            <div style={{ marginTop: dataFromChild.length > 0 ? '20px' : '160px' }} >
                <Card sendDataToParent={handleDataFromChild} />
            </div>
        </div>
    );
}

export default Wrapper;
