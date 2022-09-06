
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
    <div id='locations' className="w-full bg-gray-100 mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

      {data.cardData.slice(0,6).map((item, index) => {
        return (
          <GridImageCard getData={getData} imgSrc={item.imgSrc} title={item.title} desc={item.desc} key={index}/>
        )
      })}

    </div>
    { modal === true ? <GridModal imgSrc={tempData[1]} title={tempData[2]} desc={tempData[3]} closeModal={() => setModal(false)}/> : ''}
    </>
  );
};

export default Grid;
