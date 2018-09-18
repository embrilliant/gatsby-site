import React from 'react';
import styles from './_archive.module.scss';
import { archive } from '../../data/site-archive.json';

const Archive = () => (
    <div className={ styles.archive }>
    	<h4>Archive of My Personal Sites</h4>
    	<ul>
    		{ 
    			archive.map((item, index) => (
					<li key={ index }>
		    			<a href={ item.url } target="_site">
		    				{ item.year }
		    			</a>
		    		</li>
    			)) 
    		}
    	</ul>
    </div>
)

export default Archive;
