import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {fetchRESAS} from '../components/FetchPrefectures';
test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('api key is not notfound',() =>{
  const apikey = process.env.API_KEY;
  expect(apikey).not.toBeNull();
  expect(apikey).not.toBeUndefined();
});

test('fetch prefectures api',() =>{
 const prefecturesList:any = fetchRESAS("https://opendata.resas-portal.go.jp/api/v1/prefectures/result/prefName");
 expect(prefecturesList).not.toBeUndefined();
 // 都道府県のみにしたとき47都道府県になるかを確認する。
 expect(prefecturesList).toHaveLength(47);
});