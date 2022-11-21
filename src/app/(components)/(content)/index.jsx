'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../(card)';
import {
  arrayAndArrayOfArraysToArrayOfObjects,
  formatDate,
} from '../../../js/helpers';

const Content = () => {
  /**
   * useStates
   */

  const [data, setData] = useState(null);
  const [cols, setCols] = useState(null);
  const [rows, setRows] = useState(null);
  const [dataObj, setDataObj] = useState(null);

  /**
   * fetch data
   */

  useEffect(() => {
    // const fetchData = async () => {
    //   const url = process.env.NEXT_PUBLIC_API_URL;
    //   axios(url).then((res) => {
    //     setData(JSON.parse(res.data.substring(47).slice(0, -2)));
    //   });
    // };
    // fetchData();

    /*******************************************************************/
    // test data while in dev
    setData({
      version: '0.6',
      reqId: '0',
      status: 'ok',
      sig: '232116398',
      table: {
        cols: [
          { id: 'A', label: 'Image', type: 'string' },
          { id: 'B', label: 'Title', type: 'string' },
          { id: 'C', label: 'Description', type: 'string' },
          { id: 'D', label: 'Date', type: 'date', pattern: 'dd-mm-yyyy' },
          { id: 'E', label: 'Code used', type: 'string' },
        ],
        rows: [
          {
            c: [
              { v: 'Cyril' },
              { v: 'First website' },
              {
                v: 'This is my first website, it doesn\u0027t look good lol. But I tried my best',
              },
              { v: 'Date(2020,5,17)', f: '17-06-2020' },
              { v: 'Javascript, HTML, CSS' },
            ],
          },
          {
            c: [
              { v: 'Tetst' },
              { v: 'Second one' },
              {
                v: 'My second website was a lot quicker to make. I tried to use grids more often and use react',
              },
              { v: 'Date(2021,2,1)', f: '01-03-2021' },
              { v: 'React, JSX, HTML, SCSS' },
            ],
          },
          {
            c: [
              { v: 'Cyze' },
              { v: 'Last one ?' },
              { v: 'I\u0027m done with coding' },
              { v: 'Date(2022,8,30)', f: '30-09-2022' },
              { v: 'NextJS, JSX, HTML, SCSS' },
            ],
          },
        ],
        parsedNumHeaders: 1,
      },
    });

    /*******************************************************************/
  }, []);

  /**
   * setState of selected data
   */

  useEffect(() => {
    //only possible if there is actual data
    if (data) {
      setCols(data.table.cols.map((col) => col.label.replaceAll(' ', '_')));
      setRows(data.table.rows.map((row) => row.c.map((cell) => cell.v)));
    }
    console.log(formatDate('2021,2,1', '-'));
  }, [data]);

  useEffect(() => {
    //only possible if cols and rows are created
    if (cols && rows) {
      setDataObj(arrayAndArrayOfArraysToArrayOfObjects(cols, rows));
    }
  }, [cols, rows]);

  /**
   * return elements when dataObj is created
   */

  if (dataObj) {
    return (
      <>
        {dataObj.map(({ Image, Title, Description, Date, Code_used }, i) => (
          <Card
            key={i}
            // TODO: fetch Image
            title={Title}
            description={Description}
            date={formatDate(Date.replace(/[a-z()]/gi, ''), '-')}
            code_used={Code_used}
            // TODO: fetch alt
          />
        ))}
      </>
    );
  } else {
    /**
     * return elements before data is fetched or if there is no data is available
     */
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
