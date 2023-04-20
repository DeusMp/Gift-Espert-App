import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1 ) return;
        
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type={'text'}
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={onInputChange}
            />
            {/* onChange={(e) => onInputChange(e)} */}
        </form>
    )
}
