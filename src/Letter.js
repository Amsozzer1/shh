import React from 'react';
import DenseAppBar from './menu_bar.js';
import { Typography } from '@mui/material';
import './Letter.css';
const LoveLetter = () => {
  return (
    <div style={{position:'absolute',width:'100%',backgroundColor:'#FFF9C4'}}>
      <DenseAppBar />
      <div className = "heart" ></div> 

      <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', marginTop:'100px'}}>
        <Typography variant="h4" style={{ marginBottom: '18%', }}>
          My Dearest Babu,
        </Typography>
        <Typography>
          As I sit down to pen these words, my heart is overflowing with a warmth that only your love could bring.
          There are moments in life when words alone seem inadequate to capture the depth of emotions, but I'm determined
          to articulate the profound love that resides within me for you.
        </Typography>
        <br></br>
        <Typography>
        From the very first moment our paths crossed, I felt an inexplicable connection, a magnetic pull that transcended the ordinary. Your presence became the melody to the song of my days, and your laughter, the sweetest note that dances through the corridors of my heart. In your eyes, I discovered a universe where love knows no bounds, and in your embrace, I found my sanctuary.
        </Typography>
        <br></br>
        <Typography>
        Our journey together, with its twists and turns, has only strengthened the foundation of what we share. Through joyous highs and challenging lows, your unwavering support has been my anchor, and your love, a guiding light that illuminates even the darkest of days.
        </Typography>
        <br></br>
        <Typography>
        Our journey together, with its twists and turns, has only strengthened the foundation of what we share. Through joyous highs and challenging lows, your unwavering support has been my anchor, and your love, a guiding light that illuminates even the darkest of days.
        </Typography>
        <br></br>
        <Typography>
        I am continually amazed by the depth of your kindness, the beauty of your soul, and the strength of your spirit. Your quirks, your dreams, and the way your eyes light up when you speak about the things you love—all of these intricacies are etched into the canvas of my heart.
        </Typography>
        <br></br>
        <Typography>
        In your love, I find solace and inspiration. It's a love that has weathered storms and embraced sunny days, a love that has grown with each passing moment. With you, I've learned that love is not just a fleeting emotion; it's a journey we embark on together, hand in hand, creating a story that is uniquely ours.
        </Typography>
        <br></br>
        <Typography>
        As we navigate the chapters of our lives, I look forward to the unwritten pages that we will fill with shared dreams, laughter, and the countless little moments that make our love extraordinary. You are my confidante, my partner in crime, and my greatest source of joy.
        </Typography>
        <br></br>
        <Typography>
        Thank you for being the beautiful soul that you are and for gracing my life with the brilliance of your love. Here's to the countless tomorrows that we'll face together, hand in hand, and to a love that continues to grow, evolve, and withstand the test of time.
        </Typography>
        <br></br>
        {/* Add the rest of the letter content here */}
        {/* ... */}
        <Typography variant="h4" style={{ marginTop: '20px', textAlign: 'center' }}>
          Forever Yours,
          <br />
          Your Jaan
        </Typography>
      </div>
    </div>
  );
};

export default LoveLetter;
