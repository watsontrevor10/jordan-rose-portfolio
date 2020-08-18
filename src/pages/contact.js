import React from "react"
import styled from "styled-components"

// Styles
import { SubCont } from "../styles/mainStyles"

const Contact = () => (
  <SubCont id="contact" style={{}}>
    <h1>CONTACT ME</h1>
    <Container>
      <TextCont>
        <ul>
          <li>Remote Recording</li>
          <li>Studio Recording</li>
          <li>Live Performance</li>
          <li>Drum Lessons</li>
          <li>Drum Questions</li>
        </ul>
      </TextCont>
      <FormCont>
        <form acceptCharset="UTF-8" action="" method="POST">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label for="name">Name</label>
            <FormBox type="text" name="name" required />
            <label for="email">Email</label>
            <FormBox type="email" name="email" required />
            <label for="message">Message</label>
            <TextArea name="message" required />
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
  margin: 4px;
  width: 60%;
`

const FormBox = styled.input`
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
`

const TextArea = styled.textarea`
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
`

const Submit = styled.input`
  border-radius: 18px;
  padding: 8px;
  margin: 7px;
  width: 40%;
  align-self: center;
  background-color: black;
  color: #ffffff;
`

export default Contact
