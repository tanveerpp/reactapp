import React from 'react';
const Contact=()=>
{
    return(
        <>
        <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Enter Name</label>
    <input type="text" className="form-control" id="email" />
  </div>
  <div class="form-group">
    <label for="email">Enter Email</label>
    <input type="email" className="form-control" id="email" />
  </div>
  <div class="form-group">
    <label for="email">Enter Mobile</label>
    <input type="number" className="form-control" id="email" />
  </div>
  <div class="form-group">
    <label for="email">Enter Your Query</label>
    <textarea rows="5" className="form-control"></textarea>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
        </>
    )
}
export default Contact;