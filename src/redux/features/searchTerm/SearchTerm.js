import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchTerm.module.css'

import { setSearchTerm, clearSearchTerm, selectSearchTerm } from './searchTermSlice.js';

const searchIconUrl = './icons/search.svg';
const clearIconUrl = './icons/close.svg';


const SearchTerm = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div className={styles["searchTerm"]}>
            <div className={styles["search-container"]}>
                <img className={styles["search-icon]"]} alt="" src={searchIconUrl} />
                <input
                    className={styles["search"]}
                    type="text"
                    value={searchTerm}
                    onChange={onSearchTermChangeHandler}
                    placeholder="Search!"
                />
                {searchTerm.length > 0 && (
                    <button
                        onClick={onClearSearchTermHandler}
                        type="button"
                        className={styles["search-clear-button"]} >
                        <img src={clearIconUrl} alt="" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchTerm;