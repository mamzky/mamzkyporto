// import logo from './logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [listPost, setPost] = useState(null)

  useEffect(() => {

    try {

      axios.get('https://dummyjson.com/posts').then(
        (response) => {
          setPost(response?.data?.posts)
        },
        (err) => {
          console.log('ERROR ==> ', err)
        }
      )

    } catch (error) {
      console.log('CATCH ERROR => ', error)
    }

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          POST
        </p>
        {listPost?.map((item) => {
          return (
            <div style={{marginBottom: 18}}>
              <p style={{fontSize: 20, fontStyle:'italic'}}>
                {item?.title}
              </p>
              <p style={{fontSize: 12}}>
                {item?.body}
              </p>
            </div>
          )
        })}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
