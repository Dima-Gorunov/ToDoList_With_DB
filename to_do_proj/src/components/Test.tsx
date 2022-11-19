import React, {useEffect, useState} from 'react';
import NotesContainer from "./NotesContainer";
import RecyclingSvg from "./RecyclingSvg";

const Test = ({InputValue, deleteAllNotesThunk, setDataOnServerThunk, changeInput, checkDuplicate, Duplicate, DataFromServer}: any) => {
        const [theme, setTheme] = useState('light')
        console.log(DataFromServer);
        useEffect(() => {
            const backgroundColor = `var(--background-color-theme-${theme})`;
            const backgroundColor1 = `var(--background-color-theme-${theme}-2)`;
            const lineColor = `var(--line-color-theme-${theme})`;
            const textColor = `var(--text-color-theme-${theme})`;
            document.body.style.setProperty('--background-color', backgroundColor)
            document.body.style.setProperty('--background-color-1', backgroundColor1)
            document.body.style.setProperty('--line-color', lineColor)
            document.body.style.setProperty('--text-color', textColor)
        }, [theme])

        const changeThem = () => {
            if (theme === "light") {
                setTheme('dark')
            } else {
                setTheme("light")
            }
        }
        const change = (e: any) => {
            e.preventDefault()
            changeInput(e.currentTarget.value)
            checkDuplicate()
            e.currentTarget.value && e.currentTarget.value != "" ? setDirty(false) : setDirty(true)
        }
        const addNodes = (e: any) => {
            e.preventDefault()
            if (InputValue) {
                setDataOnServerThunk(InputValue)
                setDirty(false)
            } else {
                setDirty(true)
            }
        }
        const [Dirty, setDirty] = useState(false);
        return (
            <div className="main-block">
                <button className="note_button theme" onClick={changeThem}>
                    сменить тему
                </button>
                <form className="main_form" action="">
                    <div className="form__group field">
                        <div className="error-message">
                            {Dirty && "Поле не может быть пустым"}
                            {Duplicate && "Заметка существует"}
                        </div>
                        <input type="input" value={InputValue} onChange={change} className="form__field" placeholder="Name"
                               name="name" id='name' autoComplete="off"
                               maxLength={44} required/>
                        <label htmlFor="name" className="form__label">Заметка</label>
                    </div>
                    <div className="submit_button-container">
                        <button className="note_button" onClick={(e) => {
                            addNodes(e)
                        }}
                                disabled={Duplicate}
                        >Создать
                        </button>
                        <div className="recycle-svg" onClick={deleteAllNotesThunk}>
                            <RecyclingSvg/>
                        </div>
                    </div>
                </form>
                <NotesContainer/>
            </div>
        );
    }
;

export default Test;