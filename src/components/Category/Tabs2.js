import React from 'react';
import Service from './mock/Service';
import './Tabs2.css';

const Tabs2 = () => {
    return (
        <div className="tabs2 bg-white mb-3">
          <h3 className="font-bold text-lg px-5 pb-5 pt-3">각종 서비스</h3>
          <nav className="flex" style={{flexWrap: 'wrap'}}>
            {
              Service.map((service,i)=>(
                <li className="w-1/2" key={i}><a href="/" className="pl-5 py-5 block">{service.name}</a></li>
              ))
            }
          </nav>
        </div>
    )
}

export default Tabs2;