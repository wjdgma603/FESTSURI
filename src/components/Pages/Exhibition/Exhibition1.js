import './Exhibition.css';
import Poster from './Comp/Poster';


const Exhibition = () => {



    return (
        <div className="Exhibition">
            <section className='sub_top'>
                <h2>전시·공연</h2>
            </section>
            <section className='sub_middle'>
                <ul className='sub_go'>
                    <li><a>홈</a></li>
                    <li className='sub_arrow'></li>
                    <li><a>전시·공연</a></li>
                </ul>
                <ul class="sub_menu">
                    <li><button class="sub_tab_menu_1" data-text="전시" data-id="exhi" href="javascript:void(0)">전시</button></li>
                    <li><button class="sub_tab_menu_2" data-text="공연" data-id="show" href="javascript:void(0)">공연</button></li>
                </ul>
                <div id="exhi" class="dis_none active">
                    <section className='sub_exhibition1'>
                        <article className="sub_exhibitionFirst">
                            <Poster Poster_img='Poster_img1 poster' title='한국-파키스탄 수교 40주년 문화유산 사진전' subtitle1={'기간 : 2023-10-27 ~ 2023-11-26'} />
                            <Poster Poster_img='Poster_img2 poster' title='2023 전승지원사업 기획행사<쪽빛의 원형>' subtitle1={'기간 : 2023-10-21 ~ 2023-10-28'} />
                            <Poster Poster_img='Poster_img3 poster' title='2023 전승지원사업 기획행사 <이야기로 전하는 우리자수(세번째 이야기)>' subtitle1={'기간 : 2023-10-25 ~ 2023-10-30'} />
                            <Poster Poster_img='Poster_img4 poster' title='2023 전승지원사업 기획행사 <心線神針>' subtitle1={'기간 : 2023-09-22 ~ 2023-10-17'} />
                        </article>
                    </section>
                    <section className='sub_exhibition2'>
                        <article className='sub_exhibitionSecond'>
                            <Poster Poster_img='Poster_img5' title='2023 전승지원사업 공개행사 <2023 방짜유기 기법 시연회>' subtitle1={'기간 : 2023-10-19 ~ 2023-10-21'} />
                            <Poster Poster_img='Poster_img6' title='2023 전승지원사업 공개행사 <예 禮를 얹고 미美를 쓰다>' subtitle1={'기간 : 2023-10-17 ~ 2023-10-29'} />
                            <Poster Poster_img='Poster_img7' title='2023 전승지원사업 기획행사 <금박연가-영광을 입히다>' subtitle1={'기간 : 2023-10-10 ~ 2023-10-22'} />
                            <Poster Poster_img='Poster_img8' title='2023 전승지원사업 공개행사 <조선왕조궁중음식(병과)>' subtitle1={'기간 : 2023-10-05 ~ 2023-10-07'} />
                        </article>
                    </section>
                    <section className='sub_exhibition3'>
                        <article className='sub_exhibitionThird'>
                            <Poster Poster_img='Poster_img9' title='2023 전승지원사업 기획행사 <2023 살장이전>' subtitle1={'기간 : 2023-09-28 ~ 2023-10-08'} />
                            <Poster Poster_img='Poster_img10' title='2023 전승지원사업 기획행사 <잠시 머무는 동안 전통을 통해 “현대를 보둠자“>' subtitle1={'기간 : 2023-10-04 ~ 2023-10-15'} />
                            <Poster Poster_img='Poster_img11' title='2023년 이수자 지원사업 <공(工). 휴(休). 일(日)>' subtitle1={'기간 : 2023-09-26 ~ 2023-10-09'} />
                            <Poster Poster_img='Poster_img12' title='공존(共存) : 전통공예, 우리와 함께한 시간' subtitle1={'기간 : 2023-09-01 ~ 2023-10-15'} />
                        </article>
                    </section>
                    <section className='sub_exhibition4'>
                        <article className='sub_exhibitionFourth'>
                            <Poster Poster_img='Poster_img13' title='[상설전시] 2023년 무형문화유산홍보관 ‘위대한 금손`s 마켓’' subtitle1={'기간 : 2023-04-21 ~ 2023-10-31'} />
                        </article>
                    </section>
                    <ul>
                        <li className='sub_exhibition_num'><a>1</a></li>
                    </ul>

                </div>
            </section>
            <div id="show" class="dis_none active">
                    <section className='sub_exhibition1'>
                        <article className="sub_exhibitionFirst">
                            <Poster Poster_img='Poster_img14' title='한국-파키스탄 수교 40주년 문화유산 사진전' subtitle1={'기간 : 2023-10-27 ~ 2023-11-26'} />
                            <Poster Poster_img='Poster_img15' title='2023 전승지원사업 기획행사<쪽빛의 원형>' subtitle1={'기간 : 2023-10-21 ~ 2023-10-28'} />
                            <Poster Poster_img='Poster_img16' title='2023 전승지원사업 기획행사 <이야기로 전하는 우리자수(세번째 이야기)>' subtitle1={'기간 : 2023-10-25 ~ 2023-10-30'} />
                            <Poster Poster_img='Poster_img17' title='2023 전승지원사업 기획행사 <心線神針>' subtitle1={'기간 : 2023-09-22 ~ 2023-10-17'} />
                        </article>
                    </section>
                    <section className='sub_exhibition2'>
                        <article className='sub_exhibitionSecond'>
                            <Poster Poster_img='Poster_img18' title='2023 전승지원사업 공개행사 <2023 방짜유기 기법 시연회>' subtitle1={'기간 : 2023-10-19 ~ 2023-10-21'} />
                            <Poster Poster_img='Poster_img19' title='2023 전승지원사업 공개행사 <예 禮를 얹고 미美를 쓰다>' subtitle1={'기간 : 2023-10-17 ~ 2023-10-29'} />
                            <Poster Poster_img='Poster_img20' title='2023 전승지원사업 기획행사 <금박연가-영광을 입히다>' subtitle1={'기간 : 2023-10-10 ~ 2023-10-22'} />
                            <Poster Poster_img='Poster_img21' title='2023 전승지원사업 공개행사 <조선왕조궁중음식(병과)>' subtitle1={'기간 : 2023-10-05 ~ 2023-10-07'} />
                        </article>
                    </section>
                    <section className='sub_exhibition3'>
                        <article className='sub_exhibitionThird'>
                            <Poster Poster_img='Poster_img22' title='2023 전승지원사업 기획행사 <2023 살장이전>' subtitle1={'기간 : 2023-09-28 ~ 2023-10-08'} />
                            <Poster Poster_img='Poster_img23' title='2023 전승지원사업 기획행사 <잠시 머무는 동안 전통을 통해 “현대를 보둠자“>' subtitle1={'기간 : 2023-10-04 ~ 2023-10-15'} />
                            <Poster Poster_img='Poster_img24' title='2023년 이수자 지원사업 <공(工). 휴(休). 일(日)>' subtitle1={'기간 : 2023-09-26 ~ 2023-10-09'} />
                            <Poster Poster_img='Poster_img25' title='공존(共存) : 전통공예, 우리와 함께한 시간' subtitle1={'기간 : 2023-09-01 ~ 2023-10-15'} />
                        </article>
                    </section>
                    <section className='sub_exhibition4'>
                        <article className='sub_exhibitionFourth'>
                            <Poster Poster_img='Poster_img26' title='[상설전시] 2023년 무형문화유산홍보관 ‘위대한 금손`s 마켓’' subtitle1={'기간 : 2023-04-21 ~ 2023-10-31'} />
                            <Poster Poster_img='Poster_img27' title='[상설전시] 2023년 무형문화유산홍보관 ‘위대한 금손`s 마켓’' subtitle1={'기간 : 2023-04-21 ~ 2023-10-31'} />
                            <Poster Poster_img='Poster_img28' title='[상설전시] 2023년 무형문화유산홍보관 ‘위대한 금손`s 마켓’' subtitle1={'기간 : 2023-04-21 ~ 2023-10-31'} />
                            <Poster Poster_img='Poster_img29' title='[상설전시] 2023년 무형문화유산홍보관 ‘위대한 금손`s 마켓’' subtitle1={'기간 : 2023-04-21 ~ 2023-10-31'} />
                        </article>
                    </section>
                    <ul>
                        <li className='sub_exhibition_num'><a>1</a></li>
                    </ul>

                </div>

            
        </div>
    );
}

export default Exhibition;