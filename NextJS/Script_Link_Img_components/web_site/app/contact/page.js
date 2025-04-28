import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to Contact page");`}
      </Script>
      This is Contact.
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contacts for Facebook",
  description: "This is contact page for Facebook n we can connect with it. ",
};


