import React from "react"
import styled from "styled-components"

// Styles
import { SubCont } from "../styles/mainStyles"

const Contact = () => (
  <SubCont id="contact" style={{  }}>
    <h1>Contact Me</h1>
    <Container>
      <TextCont>
        <ul>
          <li>Studio Recording</li>
          <li>Live performance</li>
          <li>Drum Lessons</li>
          <li>Remote Recording</li>
          <li>Drum Questions</li>
        </ul>
      </TextCont>
      <FormCont>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormBox type="text" name="name" placeholder="Name" required />
            <FormBox type="text" name="email" placeholder="Email" required />
            <TextArea name="message" placeholder="Message" required />
            <Submit type="submit" value="Submit" />
          </div>
        </form>
      </FormCont>
    </Container>
  </SubCont>
)

const Container = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: stretch;
`

const TextCont = styled.div`
  margin: 5px;
  width: 40%;
`

const FormCont = styled.div`
  margin: 5px;
  width: 60%;
`

const FormBox = styled.input`
  border-radius: 18px;
  padding: 10px;
  margin: 5px;
`

const TextArea = styled.textarea`
  border-radius: 18px;
  padding: 10px;
  margin: 5px;
`

const Submit = styled.input`
  border-radius: 18px;
  padding: 10px;
  margin: 5px;
  width: 50%;
  align-self: center;
  background-color: #2f6c68;
  color: #ffffff;
`



export default Contact
