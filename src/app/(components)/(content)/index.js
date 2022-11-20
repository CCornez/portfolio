'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../(card)';

const Content = () => {
  const [data, setData] = useState(null);
  const [rows, setRows] = useState(null);
  const [head, setHead] = useState(null);
  const [body, setBody] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.NEXT_PUBLIC_API_URL;
      axios(url).then((res) => {
        setData(JSON.parse(res.data.substring(47).slice(0, -2)));
      });
    };
    fetchData();
    // setData({
    //   version: '0.6',
    //   reqId: '0',
    //   status: 'ok',
    //   sig: '232116398',
    //   table: {
    //     cols: [
    //       { id: 'A', label: 'Image', type: 'string' },
    //       { id: 'B', label: 'Title', type: 'string' },
    //       { id: 'C', label: 'Description', type: 'string' },
    //       { id: 'D', label: 'Date', type: 'date', pattern: 'dd-mm-yyyy' },
    //       { id: 'E', label: 'Code used', type: 'string' },
    //     ],
    //     rows: [
    //       {
    //         c: [
    //           { v: 'Cyril' },
    //           { v: 'First website' },
    //           {
    //             v: 'This is my first website, it doesn\u0027t look good lol. But I tried my best',
    //           },
    //           { v: 'Date(2020,5,17)', f: '17-06-2020' },
    //           { v: 'Javascript, HTML, CSS' },
    //         ],
    //       },
    //       {
    //         c: [
    //           { v: 'Tetst' },
    //           { v: 'Second one' },
    //           {
    //             v: 'My second website was a lot quicker to make. I tried to use grids more often and use react',
    //           },
    //           { v: 'Date(2021,2,1)', f: '01-03-2021' },
    //           { v: 'React, JSX, HTML, SCSS' },
    //         ],
    //       },
    //       {
    //         c: [
    //           { v: 'Cyze' },
    //           { v: 'Last one ?' },
    //           { v: 'I\u0027m done with coding' },
    //           { v: 'Date(2022,8,30)', f: '30-09-2022' },
    //           { v: 'NextJS, JSX, HTML, SCSS' },
    //         ],
    //       },
    //     ],
    //     parsedNumHeaders: 1,
    //   },
    // });
  }, []);

  useEffect(() => {
    if (data) {
      setRows(data.table.rows);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (rows) {
      setHead(rows[0].c);
      setBody(rows.slice(1));
    }
  }, [rows]);

  if (data) {
    return (
      <table className='table'>
        <thead>
          <tr>
            {head ? (
              head.map(({ v }, i) => <th key={i}>{v}</th>)
            ) : (
              <th>no data</th>
            )}
          </tr>
        </thead>
        <tbody>
          {body ? (
            body.map(({ c }, i) => (
              <tr key={i}>
                {c.map(({ v }, i) => (
                  <td key={i}>{v}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td>no data</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  } else {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>no data</th>
          </tr>
        </thead>
      </table>
    );
  }
};

export default Content;
