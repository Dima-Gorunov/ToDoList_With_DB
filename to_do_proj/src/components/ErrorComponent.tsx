import React from 'react';

const ErrorComponent= ({Dirty, Duplicate}: any) => {
    return (
        <div>
            {Dirty && <div>Поле не может быть пустым</div>}
            {Duplicate && <div>Заметка существует</div>}
        </div>
    );
};

export default ErrorComponent