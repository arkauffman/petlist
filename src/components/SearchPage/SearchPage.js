import React from 'react';
import {Link} from 'react-router-dom';
import {Collection, CollectionItem, Button, Icon, Input, Row} from 'react-materialize';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

const SearchPage = ({pets, handleClick}) => {
    return (
        <div className='container'>
            <Collection header='Pets'
                style={{
                    boxShadow: '10px 10px grey',
                    textAlign: 'center',
                    color: 'yellow !important'
                }}>
                <br />
                <CollectionItem> 
                    Looking for: 
                    <br /> <br /> &nbsp; &nbsp;
                    <Link to='/static/search.json?service=boarding'>
                        <Button>Boarding at host's home</Button>
                    </Link> 
                    <br /> <br /> &nbsp; &nbsp;
                    <Link to='/static/search.json?service=sitting'>
                        <Button>Sitting at my home</Button>
                    </Link>
                    <br /> <br />
                </CollectionItem>
            
                {pets.map((pet, index) => {
                    return (
                        <div key={pet.title}>
                            <CollectionItem
                                style={{
                                    borderBottom: '0.5px solid #e0e0e0',
                                    borderTop: '0.5px solid #e0e0e0'
                                }}>
                                            
                                <Link to={`/#/${pet.title.trim().replace(/[^\w\s-]/g, '', pet.title).replace(/\s+/g, '-').toLowerCase().replace(/-{2,}/g, '-')}`} target='_blank'>
                                    {pet.title}
                                </Link>

                                <br />
                                {pet.user.first.charAt(0).toUpperCase() + pet.user.first.slice(1)} {pet.user.last.charAt(0).toUpperCase()}. {pet.pet.name.charAt(0).toUpperCase() + pet.pet.name.slice(1)}
                                <br />
                                <div>
                                    {
                                        pet.description.length >= 48 ? 
                                            <div>
                                                {pet.description.substring(0, 47).replace(/\s+\S*$/, "")}...
                                            </div>
                                        :
                                            <div>{pet.description}</div>
                                    }
                                </div>
                            
                            </CollectionItem>
                        </div>
                    )
                })}
            
            </Collection>
        </div>    
    );
}

export default SearchPage;