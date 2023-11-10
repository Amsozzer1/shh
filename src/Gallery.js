import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DenseAppBar from './menu_bar'

import './App.css';

export default function StandardImageList() {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#FFF9C4' }}>
      <DenseAppBar />
      <h1 style={{ textAlign: 'center' }}>Cherish All the memories we made together</h1>
      <div>
        <ImageList
          className='SCROLL_HIDE'
          sx={{
            width: '90%',
            height: '100%',
            margin: '4%',
            backgroundColor: '#FFF9C4',
            padding: 2,
          }}
          cols={3}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={1} rows={1} style={{ padding: '4px' }}>
              <img
                src={`https://drive.google.com/uc?export=view&id=${item.img}`}
                alt={item.title}
                loading="lazy"
                className='IMAGES'
                style={{ borderWidth:'8px' ,width: '100%', height: '100%', objectFit: 'cover' }}
                onClick={() => {
                  window.open(`https://drive.google.com/file/d/${item.img}/view?usp=sharing`, "_blank");
                }}
                
              />
            </ImageListItem>
          ))}
        </ImageList>
        <h1 style={{ textAlign: 'center' }}> And load More to come </h1>
      </div>
      <br></br>
    </div>
  );
}
const itemData = [
  {
    img: '1NUeBk4Wj0qIPfWlHs1zQu6O1PfJ3m3ZI',
    title: 'BROO',
  },
  {
    img: '1hqWEEEOEC6AEOEHMeTtTkU7rSpEnF1RN',
    title: 'Burger',
  },
  {
    img: '1xNamOHVPA-qAHjS6kQIQ0OT2YkbwtD_2',
    title: 'Camera',
  },
  {
    img: '18yzZc3h1ab-mTX0eWspa-L8ZJrJn_7F4',
    title: 'Mushrooms',
  },
  
  {
    img: '15acAq5heS0CkwSsEotXxhW43wkdsTMLQ',
    title: 'Hats',
  },
  {
    img: '1SH1vakuklkhjZxYbKfo_axMlmPyINuLV',
    title: 'Honey',
  },
  {
    img: '1yQb1gbC6RXPlzABipS45Iq6TX_XJSOse',
    title: 'Basketball',
  },
  {
    img: '1MjJx23Z71U00hz4VnAgVb7NkdJPgbat7',
    title: 'Fern',
  },
  {
    img: '1UWvO1DdxGpJeInsB3i1apGLAcY0qIyQE',
    title: 'Coffee',
  },

];