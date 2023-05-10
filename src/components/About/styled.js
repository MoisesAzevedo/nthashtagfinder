import styled from "styled-components";


export const AboutMainStyled = styled.div`

    background:  linear-gradient(#003390, #0A1744);
    width: 100%;
    height: 1000px;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center ;
    justify-content:space-evenly;
        h1{
            margin:0px;
            text-align: left;
            font-size:40px;
        }
        @media screen and (max-width: 970px) {
            height: 2500px;
            
        };
        @media screen and (max-width: 414px) {
            background:  linear-gradient(#003390, #0A1744, #0A1744);
            
        };  
    
`

export const AboutTextAndImageStyle = styled.div`

    width:90%;
    height:300px;
    display:flex;
    align-items:center ;
    justify-content:space-around;
    #titleAndTextContent{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        letter-spacing:0.5px;
        width: 40%;
        height:100%;
        h1 {
          font-weight: bold;
        }
    };
    #aboutImageContent{

        display:flex;
        justify-content:flex-end;  
        color:black;
            img{
             width:400px;
                height:350px;
            };
    };
    @media screen and (max-width: 1170px) {

        width: 100%;
        height:350px;
        display:flex;
        justify-content:space-between;
            #titleAndTextContent{
                width:50%;
                justify-content:space-around;
                margin:5px;
            };
            #aboutImageContent{
                width:50%;
            };
            
    };
    @media screen and (max-width: 800px) {

        height:800px;
        display:flex;
        flex-direction:column;
            #titleAndTextContent{
                width:90%;
                justify-content:space-around;
              
            };
            #aboutImageContent{
                width:100%;
                background-color:yellow;
            };
    };
    @media screen and (max-width: 414px) {
            #aboutImageContent{
                justify-content:center;
                background-color:yellow;
            };
            #aboutImageContent{
                img{
                    width:90%;
                    background-color:red;
                }
            };
    };
`

export const AboutUsStyle = styled.div`

    width:85%;
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly ;
        h2{
            font-weight:bold;
            font-size:25px;
        };
        #itensPositions{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
        };
        #developersDataContent{
            width:19%;
            height:300px;
            background-color:#0B1A57; 
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-evenly;
            border: 1px solid #FFFFFF24;
            border-radius: 10px;
                #developersImage{
                    width:100px;
                    height:100px;
                    border-radius:100%;
                
                };
                p{
                    width:80%;
                    text-align:center;
                };
                #iconsBoxContent{
                    display:flex;
                    flex-direction:row;
                    justify-content:space-around;
                    width:50%;
                };
        };
        @media screen and (max-width: 1170px) {
            width: 100%;   
        };
        @media screen and (max-width: 970px) {
            height:1600px;
                h2{
                    text-align:center;
                }
                #itensPositions{  
                    width:100%;
                    height:90%;
                    flex-direction:column;
                    align-items:center;
                    justify-content:space-around;
                };
                #developersDataContent{
                    width:90%;
                    height:250px;
                    justify-content:space-around; 
                };
        };
        @media screen and (max-width: 414px) {
            height:1600px;
                h2{
                    text-align:start;
                    margin-left:20px;
                    width:200px;
                   
                }
              
        };
`
