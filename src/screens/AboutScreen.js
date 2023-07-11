import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
       <Image
        source={{ uri: 'https://dummyimage.com/200x200' }} // Replace with your actual dummy image URL
        style={styles.image}
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero nunc. Proin
        volutpat ligula non eleifend dictum. Phasellus imperdiet leo in lacus luctus, vel pulvinar
        quam tempus. Nunc at nisl sed velit pretium rhoncus. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Etiam congue blandit lectus, at sollicitudin
        nibh varius et. Morbi ac feugiat lectus, nec ultricies turpis. In bibendum nisi id nisl
        congue, in auctor massa euismod. Pellentesque id diam arcu. Sed lobortis eu ligula sit amet
        ullamcorper. Fusce pulvinar quam id urna tincidunt consequat. Integer id turpis id lectus
        pretium facilisis. Pellentesque et faucibus dolor. Nullam ut consectetur elit. Mauris id
        tempus libero. Curabitur elementum nisl eget rutrum sagittis.
      </Text>
      <Text style={styles.text}>
        Nulla facilisi. Sed quis ante interdum, dignissim dolor in, posuere mi. Maecenas id commodo
        nulla. Curabitur rutrum nisi ex, a aliquet ligula dapibus non. Integer varius turpis mauris,
        a fringilla turpis facilisis at. Integer sit amet lorem vel odio faucibus dapibus vitae eget
        mi. Aliquam nec mauris a tellus volutpat lobortis a ac odio. Vivamus vel ipsum sit amet nisi
        tincidunt efficitur nec non nisl. Sed faucibus gravida lectus, a feugiat sem rutrum in.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Nullam ut ante in felis aliquet condimentum. Vestibulum posuere sem ex, eget elementum elit
        consequat eu. Proin eu elit mi. Ut vitae libero malesuada, placerat est at, tincidunt felis.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('5%'),
  },
  image: {
    width: wp('30%'),
    aspectRatio: 1, // Maintains the aspect ratio of the image
    marginBottom: hp('3%'),
  },
  text: {
    marginBottom: hp('2%'),
  },
});

export default AboutScreen;
