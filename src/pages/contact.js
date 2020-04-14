import React from "react"

// Styles 
import {  } from "../styles/mainStyles"

const Contact = () => (
  <div id="contact">
    <h1>Contact Me</h1>
    <form>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}> 
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
)

export default Contact
