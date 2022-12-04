import 'server-only';
import axios from 'axios';
import { arrayAndArrayOfArraysToArrayOfObjects } from '../../js/helpers';

export default async function getData() {
  /**
   * fetch data
   */

  const key = process.env.API_KEY;
  const res = await axios(key).then((res) =>
    JSON.parse(res.data.substring(47).slice(0, -2))
  );

  /**
   * create dataObj
   */

  const cols = res?.table.cols.map((col) => col.label.replaceAll(' ', '_'));
  const rows = res?.table.rows.map((row) => row.c.map((cell) => cell.v));
  const dataObj = arrayAndArrayOfArraysToArrayOfObjects(cols, rows);

  return dataObj;
}
