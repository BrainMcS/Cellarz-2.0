import React, {useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import Typewriter from 'typewriter-effect';

import img0 from '../../assets/Nfts/bighead.svg';
import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';
import ETH from '../../assets/icons8-ethereum-48.png'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
position: relative;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&>*:nth-child(3){
  animation-duration: 15s;
}
&>*:last-child{
  animation-duration: 20s;
}
`

const move = keyframes`
0%{ transform:translateX(100%) }
100%{ transform:translateX(-100%) }
`

const Row = styled.div`
//background-color: lightblue;
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};

`
const ImgContainer = styled.div`
width: 20rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.body};


border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.body};
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600;
}
`
const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`
const Cursive = styled.title`
color: ${props => props.theme.body};
text-transform: capitalize;
display: flex;
justify-content: flex-start;
align-items: center;
font-family: 'Akaya Telivigala', cursive;
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
text-transform: capitalize;
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 20px;
margin-top: 20px;

span{
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;

}
.text-1{
    color: royalblue;
}
.text-2{
    color: orange;
}
.text-3{
    color: paleturquoise;
}
.text-4{
    color: gold;
}
`

const NFTItem = ({img, number, price, passRef}) => {
let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}

  return(
    <ImgContainer onMouseOver={e =>pause(e)} onMouseOut={e =>play(e)}  >
      <img src={img} alt="The NFTs" />
      <Details>
        <div>
          <span>NFT asset</span> <br/>
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
          <img src={ETH} alt="ETH" />
          <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return(

    <Section>
      <Title>With&nbsp;
        <Cursive>
          Cellarz
        </Cursive>,
      </Title>
        <Title>
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
            onInit={(typewriter) => {
                typewriter.typeString('<span class="text-1">display your collection!<span/>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">grow your audience.<span/>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">sell/trade your contents freely.<span/>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-4">empower content creators!<span/>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            />
        </Title>
      <Row direction="none" ref={Row1Ref}>
        <NFTItem img={img0} number={581} price={1}  passRef={Row1Ref} />
        <NFTItem img={img1} number={177} price={1.5}  passRef={Row1Ref} />
        <NFTItem img={img2} number={18} price={2.0}  passRef={Row1Ref} />
        <NFTItem img={img3} number={652} price={0.5}  passRef={Row1Ref} />
        <NFTItem img={img4} number={123} price={0.5}  passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NFTItem img={img5} number={972} price={1.5}  passRef={Row2Ref} />
        <NFTItem img={img6} number={331} price={1.5}  passRef={Row2Ref} />
        <NFTItem img={img7} number={21} price={0.7}  passRef={Row2Ref} />
        <NFTItem img={img8} number={100} price={0.5}  passRef={Row2Ref} />
        <NFTItem img={img9} number={718} price={0.1}  passRef={Row2Ref} />
      </Row>
    </Section>
  )
}

export default Showcase