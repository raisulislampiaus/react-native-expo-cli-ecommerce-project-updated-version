import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src'

var { width } = Dimensions.get("window");

const Banner = () => {
    const [ bannerData, setBannerData ] = useState([]);

    useEffect( () => {
        setBannerData([ 'https://cdn.pixabay.com/photo/2012/04/26/22/31/fabric-43354_640.jpg',
        'https://cdn.pixabay.com/photo/2020/10/06/11/55/woman-5632026_640.jpg',
        'https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_640.jpg',
        'https://cdn.pixabay.com/photo/2012/02/23/08/57/bag-15841_640.jpg',
        'https://cdn.pixabay.com/photo/2015/04/04/18/51/offer-706850_640.jpg',
        'https://cdn.pixabay.com/photo/2015/04/04/19/08/ten-706887_640.jpg']
        )
        return () => {
            setBannerData([])
        }
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper 
                style={{ height: width / 2 }}
                showButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                >
                {bannerData.map((item) =>{
                    return(
                        <Image 
                        key={item}
                        style={styles.imageBanner}
                        resizeMode="contain"
                        source={{uri: item }}
                        />
                    );
                })}
                </Swiper>
                <View style={{ height: 20}}></View>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner
