import React from 'react'
import {MdSend} from 'react-icons/md'
function ExpenseForm({amount , charge , handleCharge , handleAmount , handleSubmit , edit}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                <label htmlFor="charge">charge</label>
                <input id="charge" name="charge" className="form-control" type="text" placeholder="e.g. Rent" onChange={handleCharge} value={charge}></input>
                </div>
           
            
                <div className="form-group">
                <label htmlFor="amount">amount</label>
                <input id="amount" name="amount" className="form-control" type="number" placeholder="e.g. 100" onChange={handleAmount} value={amount}></input>
                </div>
            </div>
            <button type="submit" className="btn">
                { edit ? 'edit' : 'submit'} 
                <MdSend className="btn-icon"></MdSend>
            </button>
        </form>
    )
}

export default ExpenseForm
