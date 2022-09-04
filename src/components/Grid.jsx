
import { useState } from 'react';
import data from './data'
import GridImageCard from './GridImageCard';
import GridModal from './GridModal';


const Grid = () => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (img, title, desc) => {
    let tempData = [img, title, desc];
    setTempData(item => [1, ...tempData])
    return setModal(true)
  }


  return (
    <>
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {data.cardData.slice(0,6).map((item, index) => {
        return (
          <GridImageCard getData={getData} imgSrc={item.imgSrc} title={item.title} desc={item.desc} key={index}/>
        )
      })}

      {/* <GridImageCard bg={OldBazaar} text="Old Bazaar" />
      <GridImageCard bg={MuseumClock} text="Museum Clock" />
      <GridImageCard bg={HolyTempleNight} text="The Holy Tample" />
      <GridImageCard bg={OldBazaar2} text="Old Bazaar at night" />
      <GridImageCard bg={Mariot} text="Main square" />
      <GridImageCard bg={SquareNight} text="Main square at night" /> */}

    </div>
    { modal === true ? <GridModal imgSrc={tempData[1]} title={tempData[2]} desc={tempData[3]} closeModal={() => setModal(false)}/> : ''}
    </>
  );
};

export default Grid;
