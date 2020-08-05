import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '901010',
  'gender': '남자',
  'job': '회사원'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '강남길',
  'birthday': '950204',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '성춘향',
  'birthday': '990102',
  'gender': '여자',
  'job': '연예인'
},
]

class App extends React.Component {
  render () {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
