import React from 'react';
import { createToast } from 'ui';

const Home: React.FC<{}> = () => {
  const test = () => {
    createToast({
      type: 'swap',
      txHash: '0xebfc410bd1b6e008fcd96789f21df62927762abd3ccdececce52a236a1e840e6',
      promise: new Promise((resolve, reject) => {
        resolve('1');
      }),
    });
  };
  return (
    <>
      <div className='flex flex-col'>
        <button onClick={test}>Testni button</button>
      </div>
    </>
  );
};
Home.displayName = 'Web - Turborepo Example';
export default Home;
