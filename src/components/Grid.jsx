
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
    <h2 className=' max-w-[1240px] py-3 pt-10 text-center text-[35px] mx-auto bg-gray-100'>Check some other locations you must visit in <span className="text-red-600">Skopje</span></h2>
    <div id='locations' className="max-w-[1240px] bg-gray-100 mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

    {/* <h1>Locations to visit</h1> */}
      
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
