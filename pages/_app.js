import App, { Container } from 'next/app';
import React from 'react'
import axios from 'axios'
import 'isomorphic-fetch'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default class MyApp extends App {
  static async getInitialProps() {
    const res = await fetch('http://api.2018.thewoo.com/wp-json/wp/v2/pages/9')
    const json = await res.json()
    return { data: json }
  }

  render() {
    const { Component, data } = this.props;
   
    return (
      <Container>
        <div>         
          <TransitionGroup className="transition-group-wrapper">
            <CSSTransition
              classNames="page"
              key={this.props.router.pathname}
              timeout={250}
            >
              <Component
                {...data}
                {...this.state}
              />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <style jsx global>{`
          /* common styles shared through the application */
          body {
            background: white;
            color: #333;
            font-family: 'Josefin Sans', serif;
            font-size: 16px;
            word-spacing: 1px;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
            line-height: 1.2;
            overflow-x: hidden;
          }

          *,
          *:before,
          *:after {
            box-sizing: border-box;
            margin: 0;
          }

          a,
          a:visited,
          a:active {
            color: orangered;
            text-decoration: none;
          }

          button {
            margin-bottom: 10px;
            background: orangered;
            border: 0;
            cursor: pointer;
            padding: 6px 8px;
            font-size: 16px;
            color: white;
            border-radius: 4px;
          }

          h1,
          h2,
          h3,
          h4 {
            font-family: 'Playfair Display', serif;
            font-weight: normal;
          }

          main {
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          }          
        `}</style>
      </Container>
    );
  }
}
