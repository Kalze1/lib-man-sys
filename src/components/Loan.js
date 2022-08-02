import React from 'react'

function Loan() {
  const [loanDetails, setLoanDetails] = React.useState({
    Name: "",
    LoanedTo: '',
    LoanerPhone: "",
    LoanDate: "",
    ReturnDate: "",
})




const [table, setTable] = React.useState([
{
  Name: "",
  LoanedTo: "",
  LoanerPhone: "",
  LoanDate: "",
  ReturnDate: "",
}

]
)

function saveLoan(){
  setTable(prevdata=>
    [
      ...prevdata,
      {
        Name: loanDetails.Name,
        LoanedTo: loanDetails.LoanedTo,
        LoanerPhone: loanDetails.LoanerPhone,
        LoanDate: loanDetails.LoanDate,
        ReturnDate: loanDetails.ReturnDate,
  
      }

    ]
)
console.log(table)
}


function trackName(e){
  setLoanDetails(prevDetails=>{
    return (
      {
        ...prevDetails,
        Name: e.target.value 
      }
      )
    }
    )
}


function trackLoanedTO(e){
  setLoanDetails(prevDetails=>{
    return (
    {
      ...prevDetails,
      LoanedTo: e.target.value 
    }
    )
  }
  )
}


function trackLoanerPhone(e){
  setLoanDetails(prevDetails=>{
    return (
      {
        ...prevDetails,
        LoanerPhone: e.target.value 
      }
      )
    }
    )
}


function trackLoandDate(e){
  setLoanDetails(prevDetails=>{
  return (
    {
      ...prevDetails,
      LoanDate: e.target.value 
    }
    )
  }
  )
}


function trackReturnDate(e){
  setLoanDetails(prevDetails=>{
    return (
      {
        ...prevDetails,
        ReturnDate: e.target.value 
      }
      )
    }
    )
}


  return (
    <div className='container'>
        
    <form className='login-form loan-form' action="">
        <h1 className="header">Loan Books</h1>
        <hr />
     <div className="mover-reg">
        <input className='login-info' type="text" name="Name" onChange={trackName} value={loanDetails.name} placeholder='Insert name of the book to be loaned' />
        <input className='login-info' type="text" name="LoanedTo" onChange={trackLoanedTO} value={loanDetails.LoanedTo} placeholder='Insert name of loaner' />
        <input className='login-info' type="text" name="LoanerPhone" onChange={trackLoanerPhone} value={loanDetails.LoanerPhone} placeholder='Insert phone no.'/>
        <input className='login-info' type="date" name="LoanDate" onChange={trackLoandDate} value={loanDetails.LoanDate} placeholder='Insert loan date'/>
        <input className='login-info' type="date" name="ReturnDate" onChange={trackReturnDate} value={loanDetails.ReturnDate} placeholder='Insert return date'/>

     </div>
        <button type='button' className='btn btn-loan' onClick={saveLoan}>Loan</button>
        
    </form>


    
    <div className="move-reg"> 
    <table className="books-table login-form">
   <tr className='rows'>
     <th>Book Title</th>
     <th>Loaner</th>
     <th>Phone</th>
     <th>Loan Date</th>
     <th>Return Date</th>
     
   </tr>


   {table.map(d=>{
    return(
      <tr className='rows'>
        <td>{d.Name}</td>
       <td>{d.LoanedTo}</td>
       <td>{d.LoanerPhone}</td>
       <td>{d.LoanDate}</td>
       <td>{d.ReturnDate}</td>

      </tr>
    )
   })}

    
   </table>
</div>




</div>
  )
}

export default Loan
