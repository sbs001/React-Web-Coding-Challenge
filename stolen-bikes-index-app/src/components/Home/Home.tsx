import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { getStolenBikes } from '../../redux/actions';
import { State } from '../../redux/reducer';
import DisplayCards from '../DisplayCards/DisplayCards';
import SearchBar from '../Search/Search';
import Spinner from '../Spinner/Spinner';
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const allItems = useSelector((state:State) => state.stolenBikes);
 
  const [results, setResults] = useState<SimpleStolenBikes[]>([]);

  useEffect(() => {
    if (!allItems.length) { dispatch(getStolenBikes()); }
  }, []);

  return (
    <div className="homeCtn fadeIn">
      <h1>Stolen bikes</h1>
      <SearchBar onChange={setResults} />
      {!allItems.length ? <Spinner />
        : <DisplayCards list={results.length ? results : allItems} />}
    </div>
  );
}
