
import React from 'react';
import ReusableTable from './components/ReusableTable';
import "./index.css"



const App = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'NAME' },
    { key: 'age', label: 'AGE' },
    { key: 'place', label: 'PLACE' },
    { key: 'sport', label: 'SPORT' },
    { key: 'teamName', label: 'TEAM NAME' },
    { key: 'score', label: 'SCORE' },
  ];

  const data = [
    {
      id: 1,
      name: 'Divyamsi',
      age: 23,
      place: 'Visakhapatanam',
      sport: 'Volley Ball',
      teamName: 'DSP',
      score: 30,
    },
    {
      id: 3,
      name: 'Srinu',
      age: 20,
      place: 'Hyderabad',
      sport: 'Volley Ball',
      teamName: 'HDM',
      score: 10,
    },
    {
      id: 2,
      name: 'Rakesh',
      age: 21,
      place: 'Gunturu',
      sport: 'Foot Ball',
      teamName: 'DSP',
      score: 30,
    },{
      id: 4,
      name: 'Raju',
      age: 20,
      place: 'Gunturu',
      sport: 'Foot Ball',
      teamName: 'HDM',
      score: 30,
    },
    {
      id: 5,
      name: 'Kiran',
      age: 25,
      place: 'Gunturu',
      sport: 'Foot Ball',
      teamName: 'HDM',
      score: 30,
    },
    {
      id: 6,
      name: 'Mouli',
      age: 20,
      place: 'Gunturu',
      sport: 'Foot Ball',
      teamName: 'HDM',
      score: 30,
    },{
      id: 7,
      name: 'Sai',
      age: 20,
      place: 'Gunturu',
      sport: 'Foot Ball',
      teamName: 'HDM',
      score: 30,
    },{
      id: 8,
      name: 'Vamsi',
      age: 23,
      place: 'Visakhapatanam',
      sport: 'Volley Ball',
      teamName: 'DSP',
      score: 30,
    },
  ];

  return <ReusableTable columns={columns} data={data} />;
};

export default App;
