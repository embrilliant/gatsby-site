import React from 'react';
import './_archive.scss';
import { archive } from '../../data/site-archive.json';

const Archive = () => {
    return (
        <div className='archive'>
        	<h4>Archive of My Personal Sites</h4>
        	<ul>
        		{ 
        			archive.map((item, index) => {
                        const img = item.screenshot === true ? require(`./images/${item.year}.png`) : null;

                        return (
        					<li key={ index }>
        		    			<a className='year-link' href={ item.url } target="_site">
        		    				{ item.year }
        		    			</a>

                                {item.screenshot &&
                                    <a href={ item.url } className='screenshot-link'>
                                        <div className='screenshot'>
                                            <img src={ require(`./images/${item.year}.png`) } alt="screenshot"/>
                                            <p>Go to site</p>
                                        </div>
                                    </a>
                                }
        		    		</li>
                        );
                    }) 
        		}
        	</ul>
        </div>
    );
};

export default Archive;
