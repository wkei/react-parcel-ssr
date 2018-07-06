import React, { Component } from 'react';

class Html extends Component {
  render () {
    const { markup } = this.props
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <link rel="stylesheet" type="text/css" href="http://localhost:1234/client.css" />
        </head>
        <body>
          <div id='main-app' dangerouslySetInnerHTML={{__html: markup}} />
          <script src="http://localhost:1234/client.js" />
        </body>
      </html>
    )
  }
}

export default Html
