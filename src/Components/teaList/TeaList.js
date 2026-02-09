import React from "react";
import style from "./TeaList.module.scss";
import { teaData, teaDataPage } from "../../helpers/teaData";
import { useDispatch } from "react-redux";
import { Card } from "../card/Card";
import { oneTeaActions } from "../../store/oneTeaReducer";

export const TeaList = () => {
  const dispatch = useDispatch();

  const goToTea = (item) => {
    dispatch(oneTeaActions(item));
  };
  return (
    <div className={style.tea_items_block}>
      <h2 className={style.tea_title}>Ассортимент чая</h2>
      <div className={style.cards}>
        {teaDataPage.map((el) => (
          <div key={el.id} className={style.card_box}>
            <div className={style.img_link} onClick={() => goToTea(el)}>
              <Card text={el.text} imgSrc={el.imgSrc} id={el.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
