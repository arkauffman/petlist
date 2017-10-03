import React from 'react';
import {Link} from 'react-router-dom';

const SearchPage = ({pets}) => {
    // if (this.pets) {

    //     console.log('etsssss', this.pets)
    // } else {
    //     console.log('wiating!');
    // }
    return (
        <ul>
            {pets.map((pet, index) => {
                {let firstLetter = pet.user.first.charAt(0);
                let uppercaseFirstLetter = firstLetter.charAt(0).toUpperCase();
                let updatedDescription = pet.description.substring(0, 48);
                
                }
                
                return (
                    <li key={pet.title}>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li><Link to='/search-item' target='_blank'>{pet.title}</Link></li>
                            <li>{pet.user.first.charAt(0).toUpperCase() + pet.user.first.slice(1)} {pet.user.last.charAt(0).toUpperCase()}.</li>
                                <div>
                                    {
                                        pet.description.length > 48 ?
                                            <div>
                                                <li>
                                                    {pet.description.substring(0, 48)}

                                                </li>
                                                <li>
                                                    {pet.description}
                                                </li>
                                            </div>
                                        :
                                            <li>{pet.description}</li>
                                    }
                                </div>
                        </ul>
                    </li>
                )
            })}


        </ul>
        // <div>

        //     <Link to='/static/search.json?service=boarding' target='_blank'>Boarding</Link>
        //     <Link to='/static/search.json?service=sitting' target='_blank'>Sitting</Link>
        
        //     <table>
        //         {pets}
        //     </table>
        // </div>
    );
}

export default SearchPage;