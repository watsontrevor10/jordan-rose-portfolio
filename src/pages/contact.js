import React from "react"
import styled from "styled-components"

// Styles
import { SubCont } from "../styles/mainStyles"
import { IconContext } from "react-icons"
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"

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
        <IconContext.Provider value={{ size: "5em" }}>
          <IconCont>
            <div>
              <a
                href="https://www.instagram.com/jrosedrums/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagramSquare />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/user/jjrosedrums1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaYoutubeSquare />
              </a>
            </div>
          </IconCont>
        </IconContext.Provider>
      </TextCont>
      <FormCont>
        <form
          acceptCharset="UTF-8"
          action="https://getform.io/f/58ac9b67-f81e-4c7f-8753-e0fc1768e5ea"
          method="POST"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label for="name">Name</label>
            <FormBox type="text" id="name" name="name" required />
            <label for="email">Email</label>
            <FormBox type="email" id="email" name="email" required />
            <label for="message">Message</label>
            <TextArea name="message" id="message" required />
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

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

const TextCont = styled.div`
  margin: 5px;
  width: 40%;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const IconCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin: 1.3em 1em 1.3em 1em;
  row-gap: 1em;
  column-gap: 1em;
`

const FormCont = styled.div`
  margin: 4px;
  width: 60%;

  @media (max-width: 500px) {
    width: 100%;
  }
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

  :hover {
    cursor: pointer;
    background-color: #237b87;
  }
`

export default Contact
