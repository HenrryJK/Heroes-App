import React from 'react';
import  queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({history}) => {
    const location = useLocation();
  //  console.log(location.search);
    const {q = ''} =  queryString.parse(location.search)
 
    const [formValues , handleInputChange] = useForm({
        searchText: q
    });

     const heroesFiltrer = heroes;
     
    const {searchText} = formValues;
    const handleSearch = (event) => {
        event.preventDefault();
        history.push(`?q=${searchText}`)
      //  console.log(searchText);
    }
    return (
        <div>
          <h1>Search Screen</h1>
          <hr/>
        <div className="row">

        <div className="col-5">
            <h4>Search Form</h4>
        <form onSubmit={handleSearch}>
            <input
            type ="text"
            placeholder="Find your hero..."
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}
            />

        <button
        type="submit"
        className="btn m-1 btn-block btn-outline-primary"
        >
            Search
        </button>


        </form>

        </div>

        <div className="col-7">
        <h4>Results</h4>
        <hr/>
        {
            heroesFiltrer.map(hero => (
                <HeroCard
                key = {hero.id}
                {...hero}
                />
            ))
        }
        </div>

        </div>

        </div>

    )
}
