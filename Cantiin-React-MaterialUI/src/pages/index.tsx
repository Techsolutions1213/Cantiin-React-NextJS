import React from "react";

export default function Home({  }) :JSX.Element{
  return (
    <p>
      Hi
    </p>
  )
}

Home.header="Home";

Home;



type customNumber = number & { 
  abc?: number 
};


let i:customNumber;
i=1;
i.abc=5;









