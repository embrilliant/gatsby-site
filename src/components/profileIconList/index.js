import React from 'react';
import styles from './_profile_icon_list.module.scss';
import { icons } from '../../data/profile-icons.json';

const ProfileIconList = () => {
  const iconList = icons.map((item, index) => {
    const { url, img, alt, width, height, name } = item;
    const imgSrc = (img !== '') ? img : require(`./images/${name}.svg`);

    return (
      <a href={ url } key={ index }>
        <img className={ name } src={ imgSrc } alt={ alt } height={ height } width={ width } />
      </a>
    );
  });

  return (
    <div className={ styles['profile-icons'] }>
      { iconList }
    </div>
  )

}

export default ProfileIconList;
