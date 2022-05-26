import React, { useRef, useState } from 'react';
import './Input.scss'


interface InputProps {
    title: string;
}

const Input = ({ title }: InputProps) => {
    const [activeInput, setActiveInput] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleBlurInput = () => {
        if (inputRef.current && inputRef.current.value) {
            setActiveInput(true);
        } else {
            setActiveInput(false);
        }
    };
    return (
        <div className={`input  ${activeInput && 'active'}`}>
            <input ref={inputRef} onFocus={() => setActiveInput(true)} onBlur={handleBlurInput} type="text" />
            <label htmlFor="">{title}</label>
        </div>
    );
};

export default Input;
