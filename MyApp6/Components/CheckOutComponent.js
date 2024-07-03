import React from 'react'
import { View,Image, Text, ScrollView } from 'react-native'

const CheckOutComponent = () => {
  return (
          <ScrollView>
            <View style={{paddingRight: 20, gap: 30, marginBottom: 50}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: 380}}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}> 
                                <Image source={require('../assets/Images/dress1.png')} style={{height: 130, objectFit: 'contain'}}/>
                            </View>
                            <View style={{flexDirection: 'column',}}>
                                <View style={{marginTop: 20}}>
                                  <Text style={{fontSize: 17, fontWeight: '400', marginBottom: 6}}>OFFICE WEAR</Text>
                                  <Text style={{fontSize: 16, fontWeight: '400', marginBottom: 4}}>Office wear for your office</Text>
                                  <Text style={{color: '#F88379', fontSize: 18, fontWeight: '500'}}>$120</Text>
                                </View>
                                <View style={{width: 25, height: 25, borderRadius: 14, alignItems: 'center', alignSelf: 'flex-end', marginTop: 5}}>
                                  <Image source={require('../assets/Images/remove.png')} style={{width: 23, height: 23, objectFit: 'contain'}}/>
                                </View>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: 380}}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}> 
                                <Image source={require('../assets/Images/dress2.png')} style={{height: 130, objectFit: 'contain'}}/>
                            </View>
                            <View style={{flexDirection: 'column',}}>
                                <View style={{marginTop: 20}}>
                                  <Text style={{fontSize: 17, fontWeight: '400', marginBottom: 6}}>OFFICE WEAR</Text>
                                  <Text style={{fontSize: 16, fontWeight: '400', marginBottom: 4}}>Office wear for your office</Text>
                                  <Text style={{color: '#F88379', fontSize: 18, fontWeight: '500'}}>$120</Text>
                                </View>
                                <View style={{width: 25, height: 25, borderRadius: 14, alignItems: 'flex-start', alignSelf: 'flex-end', marginTop: 5}}>
                                  <Image source={require('../assets/Images/remove.png')} style={{width: 23, height: 23, objectFit: 'contain'}}/>
                                </View>
                            </View>
                        </View>




            </View>
          </ScrollView>
  )
}

export default CheckOutComponent
