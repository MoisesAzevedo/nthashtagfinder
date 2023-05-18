import React, { useEffect, useState } from "react";
import {
  Background,
  Wrapper,
  Container,
  Title,
  List,
  HeadList,
  HeadListItems,
  ItemHashtag,
  Item,
  Items,
  TextList,
  TextHashtag,
  Texts,
  Text
} from "./style";
import Header from "../Header";
import Airtable from "airtable";


const SearchList = () => {
 /*  var listing = [
    {
      hashtag: "#hashtagname",
      data: "xx/xx",
      hora: "xx:xx"
    }
  ];



  //substituir mais tarde
  var n = 0;

  while (n < 6) {
    n++;
    listing.push({
      hashtag: "#hashtagname",
      data: "xx/xx",
      hora: "xx:xx"
    });
  } */
  
const [hashtags, setHashtags] = useState([])

useEffect(()=>{
  const hashtagvazio = []
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keykXHtsEPprqdSBF'}).base('app6wQWfM6eJngkD4');
  var squadId = '05-23';
  
  base('Buscas').select({
    // Selecting the first 3 records in Grid view:
    view: "Grid view",
    filterByFormula: `Squad = '${squadId}'`,
    sort: [{field: "Data", direction: "desc"}],
    //maxRecords: 10,
    pageSize: 10,
    
  })
  .eachPage(
    function page(records, fetchNextPage, offSet) {
    // This function (`page`) will get called for each page of records.

    hashtagvazio.push(...records) 
    console.log("offSet", offSet)
      
    fetchNextPage();
  }, 
  
  function done(err) {
    if (err) { 
      console.error(err); 
      return;
    }

     let recordsHashtag = hashtagvazio.map((record)=> {
      let pickUpDate = new Date(record.get('Data'));
      

      return{
        hashtagName: record.get('Hashtag'),
        //hashtagDate:''+ pickUpDate.getDay() + '/' + pickUpDate.getMonth() + '/' + pickUpDate.getFullYear(),
        hashtagDate: pickUpDate.toLocaleDateString('pt-BR'),
        /* hashtagHour: ''+ pickUpDate.getHours() + ':' + pickUpDate.getMinutes(), */
        hashtagHour: pickUpDate.toLocaleTimeString('pt-BR').slice(0,-3),
    }})
    
     setHashtags(recordsHashtag) 
  });
  
},[])

console.log('hashtags1', hashtags)
let hashtags1 = hashtags.map((hashtagUnit)=>{return(hashtagUnit)}) 
/* let palavras = hashtags1.join(' ');
console.log('palavras', palavras) */

/* let palavras2 = [palavras] */

  return (
    <>
      <Background />
      <Header />
      <Wrapper>
        <Container>
          <Title>Buscas realizadas</Title>
          <List>
            <HeadList>
              <HeadListItems>
                <ItemHashtag>Hashtag</ItemHashtag>
                <Items>
                  <Item>Data</Item>
                  <Item>Hora</Item>
                </Items>
              </HeadListItems>
            </HeadList>

            {hashtags1.map((hashtagUnit)=>{ 
              return (
                <TextList > 
                  <TextHashtag>
                      {hashtagUnit.hashtagName}
                  </TextHashtag>

                  <Texts>
                    <Text>
                      {hashtagUnit.hashtagDate}
                    </Text>
                    <Text>{hashtagUnit.hashtagHour}</Text>
                  </Texts>
                </TextList>
              )
            })}
            
          </List>
        </Container>
      </Wrapper>
    </>
  );
};

export default SearchList;
