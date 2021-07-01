import React from 'react'
import InputTextField from './InputTextField'
import styled from 'styled-components'

const Styles = styled.div`
  .icons {
    font-size: 24px;
  }
  input:focus {
    position: relative;
    outline: none;
    box-shadow: none;
  }
  .search-icon {
    position: absolute;
    z-index: 5;
    right: 7%;
    top: 25%;
  }
`;

export default function InputField() {
  return (
    <Styles>
      <div className="row">
        <div className="col col-7">
          <InputTextField />
        </div>
        <div className="col col-5">
          <div className="row" id="basic-addon2" >
            <div className="col col-3 py-1 ">
              <svg className="" viewBox="0 0 16 16" fill="currentcolor" tabIndex="-1" focusable="false" aria-hidden="true" role="img"><path d="M8 16a1 1 0 01-.74-.33c-1-1.06-4-4.92-4.86-8.56-.5-2.64.31-4.86 2.22-6.11a6.4 6.4 0 016.85 0c1.87 1.26 2.64 3.48 2.12 6.08-.76 3.47-3.83 7.45-4.85 8.56A1 1 0 018 16zM3.37 6.89C4.18 10.32 7 14 8 15c1-1.07 3.92-4.84 4.63-8.1.45-2.21-.16-4-1.7-5a5.38 5.38 0 00-5.74 0C3.59 2.87 3 4.67 3.37 6.89zM8 8.49a2.84 2.84 0 01-2.87-2.8 2.87 2.87 0 015.74 0A2.84 2.84 0 018 8.49zm0-4.61a1.84 1.84 0 00-1.87 1.81 1.87 1.87 0 003.74 0A1.84 1.84 0 008 3.88z"></path></svg>
            </div>
            <div className="col col-3 py-1 ">
              <svg className="" viewBox="0 0 16 16" fill="currentcolor" tabIndex="-1" focusable="false" aria-hidden="true" role="img"><path d="M1.82 15.93A1.81 1.81 0 010 14.12v-9.6a1.81 1.81 0 011.8-1.81h5.97l.13-1.06A1.82 1.82 0 019.7.07h4.48A1.81 1.81 0 0116 1.88v9.6a1.81 1.81 0 01-1.8 1.81h-3.3l-1 2.34a.52.52 0 01-.4.3zm0-12.22a.8.8 0 00-.8.81v9.6a.8.8 0 00.8.81h6.57l-1.51-1.88a1 1 0 01-.29-.83l1.06-8.51zm6.53 9.58l1 1.17.49-1.16zm5.83-1a.8.8 0 00.8-.81v-9.6a.8.8 0 00-.8-.81H9.7a.81.81 0 00-.8.71L7.59 12.29zM4.66 9.62H3.34L4 7.7zm-2 1.45a.32.32 0 00.27-.18l.27-.76h1.59l.27.76a.32.32 0 00.27.18H6l-1.55-4h-.87l-1.58 4zM13.53 9V5.45h.57v-.68h-1.95v.68h.49v1.31c-.18.16-1.22.16-1.27-.14a.88.88 0 00.46-.82 1.09 1.09 0 00-1.23-1.06 1.35 1.35 0 00-1.12.53l.56.52a.6.6 0 01.54-.32.4.4 0 01.44.42c0 .28-.22.5-.73.48v.73c.63 0 .9.18.9.45a.48.48 0 01-.53.48 1 1 0 01-.82-.51l-.61.57a1.66 1.66 0 001.41.68 1.26 1.26 0 001.4-1.28.85.85 0 00.59 0V9z"></path></svg>
            </div>
            <div className="col col-3 py-1 ">
              <svg className="" viewBox="0 0 16 16" fill="currentcolor" tabIndex="-1" focusable="false" aria-hidden="true" role="img"><path d="M8 16a8 8 0 118-8 8 8 0 01-8 8zm-3.51-1.95a7 7 0 007 0A4.43 4.43 0 0110 12.94a4.26 4.26 0 01-.85-1.44 7 7 0 01-1 .29h-.19a6.32 6.32 0 01-.96-.24 4.85 4.85 0 01-1.2 1.63 5.21 5.21 0 01-1.31.87zM10 11a3.51 3.51 0 00.69 1.25 3.91 3.91 0 001.77 1.09 7 7 0 10-9 0 4.52 4.52 0 001.61-.92 4.2 4.2 0 00.94-1.31A2.84 2.84 0 014.58 8.9a1.44 1.44 0 010-2.52 4 4 0 01.77-1.67A3.3 3.3 0 018 3.28a3.34 3.34 0 012.48 1.21 3.51 3.51 0 01.8 1.87 1.41 1.41 0 010 2.58A2.86 2.86 0 0110 11zM8 4.27a2.42 2.42 0 00-1.84 1.06 3 3 0 00-.6 1.47v.34l-.33.08a.45.45 0 000 .86l.39.09v.4c0 1.14.81 1.89 2.44 2.22.92-.2 2.35-.75 2.34-2.22v-.45h.45a.43.43 0 00.37-.42.41.41 0 00-.37-.41l-.44-.06v-.49a2.63 2.63 0 00-.59-1.6A2.34 2.34 0 008 4.27zM5 6.74z"></path></svg>
            </div>
          </div>
        </div>
      </div>

    </Styles>
  )
}
