import React from "react";

export const QuestionForm = ( { 
    input,
    handleSubmit, 
    handleChange, 
    showResponse, 
    value
 } ) => {

    return(
        <>
            <form onSubmit={handleSubmit}>
                { input.type === 'select' &&
                    <select value={value} onChange={handleChange} disabled={showResponse}>
                        <option>Choose an option</option>
                        {
                            input.options.map((option) => 
                                <option key={option.id} value={option.value}>
                                    {option.value}
                                </option>
                            )
                        }
                    </select>
                }
                { input.type !== 'select' &&
                    <input
                        type={input.type}
                        value={value}
                        onChange={handleChange}
                        disabled={showResponse}
                    />
                }
                <button type="submit" disabled={value ==='' || showResponse}>Submit</button>
            </form>
        </>
    )
}