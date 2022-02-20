import Head from 'next/head'
import React, { useState } from 'react';


export default function Home() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState();

  let rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [null, 0, '.'],
  ]

  function handleOperator(operator) {
    setOperator(operator)
  }

  function handleClick(value) {
    let operateNum;
    if (operator === '') {
      operateNum = num1
    }
    else {
      operateNum = num2
    }

    //checking .
    if (value === 0 && operateNum === '') {
      return;
    }
    if (value === '.' && operateNum.includes('.')) {
      return;
    }

    operateNum = operateNum + value

    if (operator === '') {
      setNum1(operateNum)
    }
    else {
      setNum2(operateNum)
    }

  }

  function calculate() {
    let tempResult = 0
    let tempNum1 = parseFloat(num1)
    let tempNum2 = parseFloat(num2)
    switch (operator) {
      case '+':
        tempResult = tempNum1 + tempNum2;
        break;
      case '-':
        tempResult = tempNum1 - tempNum2;
        break;
      case '*':
        tempResult = tempNum1 * tempNum2;
        break;
      case '/':
        tempResult = tempNum1 / tempNum2;
        break;

    }
    setResult(tempResult)
  }

  function reset() {
    setNum1('')
    setNum2('')
    setOperator('')
    setResult()
  }

  return (
    <div className="container">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div>
          Value1: {num1}
        </div>
        <div>
          Operator: {operator}
        </div>
        <div>
          Value2: {num2}
        </div>
        <br></br>

        <div>
          Result: {result}
        </div>

        <br></br>
        <br></br>

        {rows.map(row => {
          return (
            <div key={row}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>

                {row.map(value => {

                  if (value === null) {
                    return (<div key={value} />)
                  }
                  else {
                    return (<button key={value} onClick={() => handleClick(value)}>
                      {value}
                    </button>)
                  }
                }
                )}
              </div>
              <br></br>
            </div>)
        }
        )}
        <br></br>
        <br></br>


        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => handleOperator('+')}>
            +
          </button>
          <button onClick={() => handleOperator('-')}>
            -
          </button>
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => handleOperator('*')}>
            *
          </button>
          <button onClick={() => handleOperator('/')}>
            /
          </button>
        </div>
        <br></br>


        <button onClick={() => calculate()}>
          =
        </button>
        <br></br>

        <button onClick={() => reset()}>
          Reset
        </button>

      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
