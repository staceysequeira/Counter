import { withTimer } from "@/lib/withTimer";
import "@fortawesome/fontawesome-svg-core/styles.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


export function SecondsCounter({ seconds }) {
  let secondsInString = seconds.toString();
  let paddedStart = secondsInString.padStart(6, "0");
  let digits = paddedStart.split("");

  return (
    <div className="row">
      <div className="col text-xl" style={{ padding: 20}}>
      <FontAwesomeIcon icon={ faClock } size="3x"  style={{ color: "white"}} />
      </div>
      {digits.map((digit, index) => {
        return (
          <div
            key={index}
            className="col text-xl"
            style={{ padding: 20, border: "solid 1px black" }}
          >
            <h1>{digit}</h1>
          </div>
        );
      })}
    </div>
  );
}

export const SecondsCounterWithTimer = withTimer(SecondsCounter);
