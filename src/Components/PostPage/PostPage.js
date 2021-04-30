import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import TouchCarousel, {touchWithMouseHOC, NonPassiveTouchTarget, clamp} from 'react-touch-carousel';

const listOfData = [
    {
      title: 'Card 1',
      background: '#0072bb',
      text: `react-touch-carousel only handles the trouble parts, i.e.
      - touch gestures parsing
      - scroll cursor rounding and modding
      - items padding and looping
      - auto playing`
    },
    {
      title: 'Card 2',
      background: '#ff4c3b',
      text: `It is left up to you to
      - decide the carousel structure
      - render each item in the carousel
      - style everything
      - add some fancy decorators like dots`
    },
    {
      title: 'Card 3',
      background: '#ffca18',
      text: `Install it by
      - npm install --save react-touch-carousel`
    },
    {
      title: 'Card 4',
      background: '#44c1c1',
      text: `See some example code in the '/examples' dir at GitHub. And you can run and play with the code after cloning it, by
      - npm install
      - npm run dev
      - open localhost:5000`
    },
    {
      title: 'Card 5',
      background: '#29c53c',
      text: 'react-touch-carousel is released under MIT license'
    }
  ];

const PostPage = () => {

    const user = useSelector(state=> state.user);
    function CarouselContainer (props) {
        // render the carousel structure
        return <div style={{width: '100px', height:'50px', backgroundColor: 'red'}}></div>
      }
      
      function renderCard (index, modIndex, cursor) {
        const item = listOfData[modIndex]
        // render the item
        return (
            <h1>item.text</h1>
        )
      }
      

    
    return(
        <div>
           {/* { user.id !== -1 ? 
           <div>
            <Post/>
            <Post/>
            <Post/>
            </div>:
            <div>Not aloud </div> } */}
            <TouchCarousel
                component={CarouselContainer}
                cardCount={listOfData.length}
                cardSize={450}
                renderCard={renderCard}
                loop
                autoplay={3000}
/>
        </div>   
    )
}

export default PostPage;