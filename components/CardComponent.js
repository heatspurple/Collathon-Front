import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Grid,
  Content
} from 'native-base';

export default class CardComponent extends Component {
  render() {
    return (
    <Content>
      <Card style={{ backgroundColor: 'white' }}>
        <CardItem>
          <Left style={{ backgroundColor: 'white' }}>
            <Grid
              style={{
                flexDirection: 'column',
                paddingLeft: 20,
              }}>
              <Thumbnail
                source={{ uri : 'https://yt3.ggpht.com/a/AGF-l7_cK8PJQgLUBqtnXdqJfqBvoAP6P_4pM3Jsfw=s176-c-k-c0x00ffffff-no-rj-mo'}}
                resizeMode='contain'
                style={{ width: 100, height: 100 }}
              />
              <Text style={{paddingLeft: 10, paddingTop: 10}}>채널 등급 
              <Text style={{ color: 'red' }}> 레드</Text></Text>
            </Grid>
            <Grid style={{paddingBottom: 30}}>
              <Body style={{
                left: -40,
                top: 40,
                paddingBottom: 30
              }}>
                <Text style={{ paddingTop: 10, fontSize: 25}}>보겸 TV</Text>
                <Text note style={{ paddingTop: 10, fontSize:10}}>구독자 360.5만명</Text>
                <Button style={{
                backgroundColor: 'white', paddingTop: 10}}>
                  <ImageBackground
                  source={require('../assets/images/rectangle1.png')} style={{ width: '100%', height: '100%'}}>
                    <Text style={{ color: 'white', alignItems:'center', justifyContent:'center', paddingLeft: 10, paddingTop: 5 }}>종합 평가 바로보기 ></Text>
                  </ImageBackground>
                </Button>
              </Body>
            </Grid>
          </Left>
          </CardItem>
          {/* N일동안 미접속란 */}
          <CardItem style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 20}}>
          <ImageBackground resizeMode='contain' source={require('../assets/images/youtube.png')} style={{ width:105, height: 79, alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Image source={require('../assets/images/video.png')} style={{ width:34, height:24}} resizeMode='contain'/>
            <Text style={{ fontSize: 8}}>N일동안 영상 미등록</Text>
          </ImageBackground>
          <ImageBackground resizeMode='contain' source={require('../assets/images/youtube.png')} style={{ width:105, height: 79, alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Image source={require('../assets/images/Group.png')} style={{ width:34, height:24}} resizeMode='contain'/>
            <Text style={{ fontSize: 8}}>이번달 구독자수 N명 증가</Text>
          </ImageBackground>
          <ImageBackground resizeMode='contain' source={require('../assets/images/youtube.png')} style={{ width:105, height: 79, alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Image source={require('../assets/images/dollar-sign.png')} style={{ width:34, height:24}} resizeMode='contain'/>
            <Text style={{ fontSize: 8}}>수익 창출 시작</Text>
          </ImageBackground>
          </CardItem>
          <CardItem style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <ImageBackground resizeMode='contain' source={require('../assets/images/youtube.png')} style={{ width:105, height: 79, alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Image source={require('../assets/images/window-close.png')} style={{ width:34, height:24}} resizeMode='contain'/>
            <Text style={{ fontSize: 8}}>유튜브 신고 접수</Text>
          </ImageBackground>
          <ImageBackground resizeMode='contain' source={require('../assets/images/youtube.png')} style={{ width:105, height: 79, alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Image source={require('../assets/images/downarrow.png')} style={{ width:34, height:24}} resizeMode='contain'/>
            <Text style={{ fontSize: 8}}>월간 조회수 급감</Text>
          </ImageBackground>
          <ImageBackground resizeMode='contain' source={require('../assets/images/youtube.png')} style={{ width:105, height: 79, alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Image source={require('../assets/images/brokenheart.png')} style={{ width:34, height:24}} resizeMode='contain'/>
            <Text style={{ fontSize: 8}}>좋아요 수 급감</Text>
          </ImageBackground>
          </CardItem>
        
          {/* 최근 핫한 콘텐츠 */}
        <Card style={{ paddingTop: 15}}>
        <CardItem style={{ flexDirection: 'column', paddingTop: 40, paddingBottom:80,alignItems:'center', justifyContent:'center'}}>
          <Grid style={{left: -35, paddingBottom: 10}}>
          <Button style={{ backgroundColor: 'white', alignItems:'center', justifyContent:'center'}}>
          <Image
            source={{ uri : 'https://i.ytimg.com/vi/gJkBMPgDA6U/default.jpg'}}
            style={{ height: 80,aspectRatio: 1.5, alignItems:'center', justifyContent: 'center'}}
          />
          </Button>
          <Text style={{paddingLeft: 15, paddingTop: 17, paddingBottom: 10, alignItems:'center', justifyContent:'center'}}>최근 가장 핫한 콘텐츠</Text>
          </Grid>
          <Grid style={{left: -33, bottom: -40}}>
          <Button style={{ backgroundColor: 'white', alignItems:'center', justifyContent:'center', }}>
          <Image
            source={{uri:'https://i.ytimg.com/vi/oor6VV4yyLE/default.jpg'}}
            style={{ height: 80, aspectRatio: 1.5, alignItems:'center', justifyContent: 'center'}}
          />
          </Button>
          <Text style={{paddingLeft: 10, paddingTop: 20, paddingBottom: 20, alignItems:'center', justifyContent:'center'}}>최근 가장 저조한 콘텐츠</Text>
          </Grid>
        </CardItem>
        </Card>
        
        {/* 키워드 */}
        <Card>
        <CardItem>
            <Left>
            <Text style={{ paddingTop: 10 }}>연관 검색어</Text>
            </Left>
        </CardItem>
        <Grid style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
        <CardItem>
          <ImageBackground resizeMode='contain' source={require('../assets/images/rectangle2.png')} style={{height: 30, width: 20, alignItems: 'center', justifyContent: 'center'}} />
          <Text>#게임</Text>
        </CardItem>
        <CardItem>
          <ImageBackground resizeMode='contain' source={require('../assets/images/rectangle2.png')} style={{height: 16, width: 20, alignItems: 'center', justifyContent: 'center'}} />
          <Text>#공포게임</Text>
        </CardItem>
        <CardItem>
          <ImageBackground resizeMode='contain' source={require('../assets/images/rectangle2.png')} style={{height: 16, width: 20, alignItems: 'center', justifyContent: 'center'}} />
          <Text>#모바일게임</Text>
        </CardItem>
        <CardItem>
          <ImageBackground resizeMode='contain' source={require('../assets/images/rectangle2.png')} style={{height: 16, width: 20, alignItems: 'center', justifyContent: 'center'}} />
          <Text>#게임노래</Text>
        </CardItem>
        </Grid>
        <Grid style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
        <CardItem>
          <ImageBackground resizeMode='contain' source={require('../assets/images/rectangle2.png')} style={{height: 16, width: 20, alignItems: 'center', justifyContent: 'center'}} />
          <Text>#예능</Text>
        </CardItem>
        <CardItem>
          <ImageBackground resizeMode='contain' source={require('../assets/images/rectangle2.png')} style={{height: 16, width: 20, alignItems: 'center', justifyContent: 'center'}} />
          <Text>#일본예능</Text>
        </CardItem>
        <CardItem>
          <ImageBackground resizeMode='contain' source={require('../assets/images/rectangle2.png')} style={{height: 16, width: 20, alignItems: 'center', justifyContent: 'center'}} />
          <Text>#예능 레전드</Text>
        </CardItem>
        <CardItem>
          <ImageBackground resizeMode='contain' source={require('../assets/images/rectangle2.png')} style={{height: 16, width: 20, alignItems: 'center', justifyContent: 'center'}} />
          <Text>#오락</Text>
        </CardItem>
        </Grid>
        </Card>
    </Card>
    </Content>
    );
  }
}
