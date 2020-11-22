import React from 'react';
import styled from 'styled-components';
import backButton from '../../images/back_button.svg';
import emptystarImage from '../../images/star_empty.png';
import fullstarImage from '../../images/star_full.png';
import addImage from '../../images/add_img.png';
import reviewImage from '../../images/upload_img.png';
import deleteImage from '../../images/upload_delete.png';

export function ReviewPage(props){
    return (
        <Wrap>
            <Header>
                <img src={backButton} className={"back_btn"}/>
                <text className={"txt_header"}>리뷰 남기기</text>
            </Header>
            <Title background={props.thumbnailUrl}>
                <Text>{props.title}</Text>
            </Title>
            <Review>
                <Star>
                    <div className={"star1"}/>
                    <div className={"star2"}/>
                    <div className={"star3"}/>
                    <div className={"star4"}/>
                    <div className={"star5"}/>
                </Star>
                <textarea
                    type="text"
                    className={"review_txt"}
                    placeholder="솔직한 리뷰를 작성해주세요!" />
            </Review>
            <UploadImage>
                <button className={"img_btn"}/>
                <div className={"review_img"}>
                    <button className={"delete_btn"}/>
                </div>
                <div className={"review_img"}>
                    <button className={"delete_btn"}/>
                </div>
            </UploadImage>
            <button className={"btn"}>리뷰작성</button>
        </Wrap>
    );
}

ReviewPage.defaultProps = {
    title: '제목'
};

const Header = styled.div`
    width: 100%;
    height: 52px;
    text-align: center;  
    .back_btn {
        width: 12px;
        height: 19px; 
        float: left;     
        display: inline-block;
        margin-left: 17.5px;
        margin-top: 17px;   
    }
    .txt_header{    
        display: inline-block;
        margin-top: 13px;     
        color: #1A465F;
        font-size: 18px;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
const Text = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: transparent;
    font-size: 24px;
    font-family: 'Noto Sans KR', sans-serif;
`;
const Title = styled.div`
    width: 100%;
    height: 219px;
    border: transparent;
    background: url(${(props) => props.background});
`;
const Review = styled.div`
    width: 100%;
    text-align: center; 
    .review_txt {
        width: 90%;
        float: center;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
const Star = styled.div`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    .star1 {
        width: 32px;
        height: 32px;
        margin: 20px 6px 20px 6px;
        background: url(${fullstarImage});
    }
    .star2 {
        width: 32px;
        height: 32px;
        margin: 20px 6px 20px 6px;
        background: url(${fullstarImage});
    }
    .star3 {
        width: 32px;
        height: 32px;
        margin: 20px 6px 20px 6px;
        background: url(${fullstarImage});
    }
    .star4 {
        width: 32px;
        height: 32px;
        margin: 20px 6px 20px 6px;
        background: url(${fullstarImage});
    }
    .star5 {
        width: 32px;
        height: 32px;
        margin: 20px 6px 20px 6px;
        background: url(${emptystarImage});
    }
`;
const UploadImage = styled.div`
    width: 100%;
    height: 102px;
    margin: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    .img_btn {
        width: 102px;
        height: 102px;
        background: url(${addImage});
        border: transparent;
    }
    .review_img {
        width: 102px;
        height: 102px;
        margin-left: 20px;
        background: url(${reviewImage});
        border: transparent;
    }
    .delete_btn {
        width: 12px;
        height: 12px;
        float: right;
        margin: 10px;
        background: url(${deleteImage});
        border: transparent;
    }
`;
const Wrap = styled.div`
    textarea { 
        border: 1px solid #eee;
        font-size: 14px;
        width: 100%; 
        height: 142px; 
        margin-top: 10px;
        padding: 10px;
        background-color: #eee;
        font-family: 'Noto Sans KR', sans-serif;
    }    
    .btn {
        width : 90%;
        height: 43px;
        margin : auto;
        display : block;
        border-radius : 10px;
        border : 0;
        outline : 0;        
        background : linear-gradient(to right, #82C3FF, #C464FF);        
        color : white;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 18px;
    }
`;