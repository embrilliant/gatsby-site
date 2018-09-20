import React from 'react';
import styles from './_archive.module.scss';
import { archive } from '../../data/site-archive.json';

const Archive = () => {
    return (
        <div className={ styles.archive }>
        	<h4>Archive of My Personal Sites</h4>
        	<ul>
        		{ 
        			archive.map((item, index) => {
                        const img = item.screenshot === true ? require(`./images/${item.year}.png`) : null;

                        return (
        					<li key={ index }>
        		    			<a className={ styles['year-link'] } href={ item.url } target="_site">
        		    				{ item.year }
        		    			</a>

                                {item.screenshot &&
                                    <div className={ styles.screenshot }>
                                        <img src={ require(`./images/${item.year}.png`) } alt="screenshot"/>
                                        <p>Go to site</p>
                                    </div>
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
