import React from 'react'
import style from "./Card.module.scss";
import { Link } from 'react-router-dom';


export const Card = ({ text,id }) => {
  return (
    <Link to={`/tea/${id}`} className={style.card_link}>
    {/* <div className={style.card} style={{ backgroundImage: `url(${imgSrc})` }}> */}
      <div className={style.text}>
        <h4 className={style.card_title}>
          {text}
        </h4>
      </div>
    {/* </div> */}
  </Link>
  )
}
