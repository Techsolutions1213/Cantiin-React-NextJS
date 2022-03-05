import React from "react";
import type { creatingPageComponent } from "../types";
import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";

export default function About() :creatingPageComponent {
  return (
    <Box>
      <ol>
        <li><Link href="https://github.com/OmarThinks/Cantiin-React-MaterialUI">Github Repository and Documentation</Link></li>
        <li><Link href="https://www.cantiin-react.com/">Website (Deployed on AWS)</Link></li>
        <li><Link href="">Youtube</Link></li>
        <li><Link href="https://github.com/OmarThinks/Cantiin-React-MaterialUI">RESTful API backend Link</Link></li>
      </ol>



    </Box>
  )
}

About.header="About";
