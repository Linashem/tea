import React, { useEffect } from "react";
import style from "./OneTeaPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { oneTeaActions } from "../../store/oneTeaReducer";
import {  teaDataPage } from "../../helpers/teaData";

export const OneTeaPage = () => {
  const teaData = useSelector((state) => state.tea);
  const dispatch = useDispatch();

  const isLocation =
    window.location.pathname[window.location.pathname.length - 1];

  useEffect(() => {
    dispatch(
      oneTeaActions(teaDataPage[(isLocation - 2, isLocation - 1, isLocation)])
    );
  }, []);

  return (
    <>
      <div className={style.one_course_block}>
        <div className={style.one_course_top}>
          <img src={teaData.imgSrc} alt={teaData.text} />
          <div className={style.text}>
              <h2 className={style.title}>{teaData.text}</h2>
             
            </div>
          </div>
        </div>
     
    </>
  );
};
