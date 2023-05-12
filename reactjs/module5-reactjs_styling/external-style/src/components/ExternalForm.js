import React from "react";
const cal = "assets/images/book.gif";
function ExtenalForm()
{
    return(
        <>
            <section id="main-section">
                <div className="content-1">
                    <img src={cal} alt="calender" />
                </div>

                <div className="content-2">
                    <form>
                        <h1>Appointment Form</h1>
                        <p>Book your appointments here </p>
                        <input type='text' name="fname" placeholder='Enter your Name *' required /><br/><br/>
                        <input type='text' name="lname" placeholder='Enter your Surname *' required /><br/><br/>
                        <input type='email' name="email" placeholder='Enter your Email *' required /><br/><br/>
                        <input type='number' name="number" placeholder='Enter your Phone No. *' required /><br/><br/>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                        
                    </form>
                </div>
            </section>
        </>
    )
}
export default ExtenalForm;