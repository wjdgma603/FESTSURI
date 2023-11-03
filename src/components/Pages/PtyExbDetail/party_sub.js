import './Party_sub.css'
import Party_sub_comp from './Comp/Party_sub_poster.json'
import { useLocation } from 'react-router-dom';

function Party_sub() {
    const location = useLocation();
    const type = location.state;
    const party_list = Party_sub_comp.filter((partyComp) => (partyComp.id.includes(type.type)))
    return (
        <div className="Party_sub">
            <section className='Party_sub_title'>
                <ul className='party_go'>
                    <li><a>홈</a></li>
                    <li className='party_arrow'></li>
                    <li><a>행사</a></li>
                    <li className='party_arrow'></li>
                    <li>현재있는페이지</li>
                </ul>
            </section>
            {party_list.map((list) => (
                <div>
                    <section className='Party_sub_hitop'>
                        <div className='Party_sub_top'>
                            <img src={require('./images/psp' + list.id + '.png')} />
                            <ul className='Party_sub_po'>
                                <li className='Party_sub_title_name'>{list.title}</li>
                                <li className='Party_sub_line'></li>
                                <li className='Party_sub_pa'>기간 <span className='Party_sub_pa_span'>{list.sub_title1}</span></li>
                                <li className='Party_sub_pa'>시간 <span className='Party_sub_pa_span'>{list.sub_title2}</span></li>
                                <li className='Party_sub_pa'>장소 <span className='Party_sub_pa_span'>{list.sub_title3}</span></li>
                                <li className='Party_sub_pa'>예매기간<span className='Party_sub_pa_span'>{list.sub_title4}</span></li>
                                <li className='Party_sub_pa'>예매시간<span className='Party_sub_pa_span'>{list.sub_title5}</span></li>
                                <li className='Party_sub_pa_two'>가격<span className='Party_sub_pa_span'>{list.sub_title6}</span></li>
                                <li className='Party_sub_pa'>신청<span className='Party_sub_pa_span'>{list.sub_title7}</span></li>
                                <li className='Party_sub_pa'>문의<span className='Party_sub_pa_span'>{list.sub_title8}</span></li>
                            </ul>
                        </div>
                    </section>
                    <section className='Party_sub_main'>
                        <div className='Parry_sub_main_start'>
                        <p className='Party_sub_center'>행사소개&안내</p>
                        <div className='party_sub_line'></div></div>
                        <h2 className='Party_sub_partyInfo'>행사안내</h2>
                        <h4 className='Party_sub_partyInfo1'>프로그램안내</h4>
                        <h4 className='Party_sub_partyInfo2'>행사기간</h4>
                        <h4 className='Party_sub_partyInfo3'>행사시간</h4>
                        <h4 className='Party_sub_partyInfo3'>행사장소</h4>
                        <h4 className='Party_sub_partyInfo3'>입장료</h4>
                        <h2 className='Party_sub_partyInfo'>예매안내</h2>
                        <h2 className='Party_sub_partyInfo_1'>유의사항안내</h2>
                    </section>
                </div>)
            )}
        </div>
    );
}

export default Party_sub;