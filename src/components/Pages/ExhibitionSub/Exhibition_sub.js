import './Exhibition_sub.css'
import Exhibition_sub_comp from './Comp/Exhibition_sub_poster.json'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk'
function Exhibition_sub() {
    const location = useLocation();
    const type = location.state;
    const Exhibition_list = Exhibition_sub_comp.filter((ExhibitionComp) => (ExhibitionComp.id === type.type))


    const [modal, setmodal] = useState(false);
    const Exhibition_sub_modal1 = () => {
        setmodal(true)
    }
    const Exhibition_sub_modal2 = () => {
        setmodal(false)
    }
    return (

        <div className="Exhibition_sub">
            <section className='Exhibition_sub_title'>
                <ul className='Exhibition_go'>
                    <li><Link to='/'>홈</Link></li>
                    <li className='Exhibition_arrow'></li>
                    <li><Link to='/exhibition'>전시·공연</Link></li>
                </ul>
            </section>
            {Exhibition_list.map((list) => (
                <div key={list.id}>
                    <section className='Exhibition_sub_hitop'>
                        <div className='Exhibition_sub_top'>    
                            <img src={require('./images/ex' + list.id + '.png')} alt='Exhibition_sub_top'/>
                            <ul className='Exhibition_sub_po'>
                                <li className='Exhibition_sub_title_name'>{list.title}</li>
                                <li className='Exhibition_sub_pa'>기간 <span className='Exhibition_sub_pa_span'>{list.sub_title1}</span></li>
                                <li className='Exhibition_sub_pa'>시간 <span className='Exhibition_sub_pa_span'>{list.sub_title2}</span></li>
                                <li className='Exhibition_sub_pa'>장소 <span className='Exhibition_sub_pa_span'>{list.sub_title3}</span>
                                    <button onClick={() => Exhibition_sub_modal1()} className='Exhibition_sub_modal'>위치보기 </button>
                                    {modal && (
                                        <div id='modal'>
                                            <div className="modal-overlay" >
                                                <div className="modal-window">
                                                    <div className="content">
                                                        <Map className='Exhibition_sub_map'
                                                            center={{ lat: list.lat, lng: list.lng }}
                                                            style={{ width: "600px", height: "600px" }}
                                                            level={5}
                                                        >
                                                            <MapMarker className='Exhibition_sub_map_point' position={{ lat: list.lat, lng: list.lng }}>{list.marker}<div style={{ color: "#999" }}></div>
                                                            </MapMarker>
                                                        </Map>
                                                        <div  className="Exhibition_sub_map_close" onClick={Exhibition_sub_modal2}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <li className='Exhibition_sub_pa'>예매기간<span className='Exhibition_sub_pa_span'>{list.sub_title4}</span></li>
                                <li className='Exhibition_sub_pa'>예매시간<span className='Exhibition_sub_pa_span'>{list.sub_title5}</span></li>
                                <li className='Exhibition_sub_pa'>가격<span className='Exhibition_sub_pa_span'>{list.sub_title6}</span></li>
                                <li className='Exhibition_sub_pa'>신청<span className='Exhibition_sub_pa_span'>{list.sub_title7}</span></li>
                                <li className='Exhibition_sub_pa'>문의<span className='Exhibition_sub_pa_span'>{list.sub_title8}</span></li>
                            </ul>
                        </div>
                    </section>
                    <section className='Exhibition_sub_main'>
                        <div className='Parry_sub_main_start'>
                            <p className='Exhibition_sub_center'>행사소개&안내</p>
                            <div className='Exhibition_sub_Exhibition_line'></div>
                            </div>
                        <h2 className='Exhibition_sub_ExhibitionInfo'>행사안내</h2>
                        <h4 className='Exhibition_sub_ExhibitionInfo1'>프로그램안내</h4>
                        <pre className='Exhibition_sub_json_list'>{list.Exhibition_info1}</pre>
                        <h4 className='Exhibition_sub_ExhibitionInfo2'>행사기간</h4>
                        <div className='Exhibition_sub_json_list'>{list.sub_title1}</div>
                        <h4 className='Exhibition_sub_ExhibitionInfo3'>행사시간</h4>
                        <div className='Exhibition_sub_json_list'>{list.sub_title2}</div>
                        <h4 className='Exhibition_sub_ExhibitionInfo3'>행사장소</h4>
                        <div className='Exhibition_sub_json_list'>{list.sub_title3}</div>
                        <h4 className='Exhibition_sub_ExhibitionInfo3'>입장료</h4>
                        <div className='Exhibition_sub_json_list'>{list.sub_title6}</div>
                        <h2 className='Exhibition_sub_ExhibitionInfo_0'>예매안내</h2>
                        <div className='Exhibition_sub_json_list'>{list.sub_title7}</div>
                        <h2 className='Exhibition_sub_ExhibitionInfo_0'>유의사항안내</h2>
                        <pre className='Exhibition_sub_json_list'>{list.Exhibition_info2}</pre>
                        <div className='Exhibition_sub_back'><Link to='/exhibition' className='Exhibition_sub_backList'>목록</Link></div>
                    </section>
                </div>)
            )}
        </div>
    );
}

export default Exhibition_sub;