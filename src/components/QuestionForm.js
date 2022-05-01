import React from "react";

export const QuestionForm = ( { input, handleSubmit, handleChange, showResponse, value } ) => {

    return(
        <form onSubmit={handleSubmit}>
            {input.type === 'select' ? 
                <select value={value} onChange={handleChange} className={showResponse ? 'disabled' : ''}>
                    <option>Choose an option</option>
                    {
                        input.options.map((option) => 
                            <option key={option.id} value={option.value}>
                                {option.value}
                            </option>
                        )
                    }
                </select>
                :<input
                    className={showResponse ? 'disabled' : '' } 
                    type={input.type}
                    value={value}
                    onChange={handleChange}
                />
            }
            <button
                type="submit"
                disabled={value === ''}
                className={showResponse ? 'disabled' : ''} 
            >Submit
            </button>
        </form>
    )
}