import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  //  const params = useParams();
  const {heroeId} = useParams();
   // console.log(params);
   const hero = getHeroById(heroeId);

    if (!hero) {
        return <Redirect to="/"/>;    
    }
  //  console.log(hero);
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
