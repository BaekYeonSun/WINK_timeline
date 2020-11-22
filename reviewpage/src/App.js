import React, { Component } from 'react';
import {ReviewPage} from './components/ReviewPage/ReviewPage';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet"/>
      <ReviewPage
          title={"소융대 비빔면+삼겹살"}
          thumbnailUrl={"https://user-images.githubusercontent.com/55418359/99904874-239b3400-2d11-11eb-95e5-c3fa39d11012.png"}
      />
    </>
  );
}

export default App;
