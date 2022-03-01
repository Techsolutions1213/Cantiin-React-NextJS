import React from "react";

export default function Layout({ children }) {
    return (
      <>
        <main>
            <div>Header</div>
                {children}
            <div>Footer</div>
        </main>
      </>
    )
  }