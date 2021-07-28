import React from "react";
import Links from "./Links.js";

export default function About({bio,github,linkedin}) {
//  console.log(github);
  return (
    <div id="about">

      <h2>About Me</h2>
      {
        bio ? <p> {bio}</p> : null
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <Links github={github} linkedin={linkedin}/> 
    </div>
  );
};