import React from 'react';

const Notes = ({Notes, deleteNoteThunk}: any) => {

    console.log(Notes);
    return (
        <div className="notes">
            {Notes ? Notes.map((e: any, index: number) => (
                    <div key={`not${index}`}>
                        <div className="notes_text-container">
                            <div className="note_number">{index + 1}</div>
                            <div className="note_text">{e.Text}</div>
                            <div className="del_note" onClick={() => deleteNoteThunk(e.Id)}>
                                <span/>
                            </div>
                        </div>
                        <hr className="hr-shelf"/>
                    </div>))
                : <div className="notes">
                    <div className="notes_text-container">
                        Здесь будет ваша первая заметка
                    </div>
                </div>
            }
        </div>
    );
};

export default Notes;