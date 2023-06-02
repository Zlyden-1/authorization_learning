import React from "react";
import s from './MainPage.module.scss'

export const MainPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.imgcontent}>
                <div className={s.text}>Оставьте все <br />заботы нам</div>
                <div className={s.textin}>
                    <div>
                        <input type="text" />
                    </div>
                    <div className={s.input}>Поиск</div>
                </div>
            </div>
            <div className={s.textcat}>
                Категории Исполнителей
            </div>
            <div className={s.textcat}>
                Как работает SkillMatch?
            </div>
            <div className={s.wrappercardinfo}>
                <div className={s.cardinfo1}></div>
                <div className={s.cardinfo2}></div>
                <div className={s.cardinfo3}></div>
            </div>
            <div className={s.textcardinfo}>
                <div className={s.cardtext}>Опишите задачу</div>
                <div className={s.cardtext}>Получите отклики</div>
                <div className={s.cardtext}>Выберите исполнителя</div>
            </div>
        </div >
    )
}