import { useEffect } from 'react';
import { getJoke } from '../apis/api';


export default function Test() {
  const get = () => {
    getJoke.randomJoke.one()
    .then(data => {
      if (data == 'error') {
        
      }
    })
  }

  useEffect(() => get(), [])

  return (
    <>TestPage</>
  );
}