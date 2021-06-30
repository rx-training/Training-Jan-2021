import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
export default function Backbutton() {
    return (
        <h4
            onClick={() => {
                window.history.back();
            }}
            className="ml-4  backlink"
        >
            <MdKeyboardBackspace />
        </h4>
    );
}
