import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {t} from 'react-native-tailwindcss';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {dataSources, getColorText} from '../helpers';

const Course = ({navigation: {goBack}}) => {
  return (
    <ScrollView>
      <View style={[t.bgPrimary]}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={[t.flexRow, t.pT6, t.pB6, t.pX4, t.itemsCenter]}>
          <Icon
            style={[t.mR1, t.textWhite, t.textBase]}
            name="arrow-back-ios"
          />
          <Text style={[t.fontM, t.textBase, t.textWhite]}>Back</Text>
        </TouchableOpacity>
        <View style={[t.bgWhite, t.hFull, styles.radius, t.p5]}>
          <View style={[t.flexRow, t.itemsCenter]}>
            <View style={[t.w24, t.h24, t.bgSecondary, t.roundedLg, t.mR4]} />
            <View>
              <Text style={[t.text2xl, t.fontB, t.textHeader]}>
                UX - UI Design
              </Text>
              <View style={[t.flexRow, t.itemsCenter, t.mY2]}>
                <Icon style={[t.mR1, t.textSecondary, t.textXl]} name="star" />
                <Text style={[t.fontM, t.textXl, t.fontBlack]}>4.9</Text>
              </View>
            </View>
          </View>
          <Text style={[t.textHeader, t.text2xl, t.fontM, t.pT5]}>
            The Courses includes
          </Text>

          <View style={[t.pY5]}>
            <View style={[t.shadow2xl]}>
              {dataSources.map((item, index) => {
                const {sliceText, remainingText} = getColorText(
                  item.subTitle,
                  item.length,
                );
                return (
                  <View
                    key={item.id}
                    style={[
                      t.p4,
                      t.shadow2xl,
                      t.bgWhite,
                      index === 0 ? styles.radiusUp : null,
                      index === dataSources.length - 1
                        ? styles.radiusDown
                        : null,
                    ]}>
                    <View style={[t.flexRow]}>
                      <View
                        style={[
                          t.w16,
                          t.h16,
                          t.itemsCenter,
                          t.justifyCenter,
                          t[`bg${item.color}`],
                          t.roundedFull,
                          t.mR3,
                        ]}>
                        <Icon
                          style={[t.textWhite, t.text3xl]}
                          name={item.icon}
                        />
                      </View>
                      <View>
                        <Text style={[t.textXl, t.textHeader, t.fontB, t.mY1]}>
                          {item.title}
                        </Text>
                        <Text
                          style={[t.textBase, t.fontR, t[`text${item.color}`]]}>
                          {sliceText}
                          <Text style={[t.textBase, t.fontR, t.textText]}>
                            {remainingText}
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <Text style={[t.textHeader, t.text2xl, t.fontM]}>Teacher</Text>
          <View style={[t.p6, t.shadow2xl, t.bgWhite, styles.radius]}>
            <View style={[t.flexRow, t.justifyBetween]}>
              <Image
                style={[
                  t.h16,
                  t.w16,
                  t.roundedFull,
                  t.mR6,
                  t.border2,
                  t.borderWhite,
                ]}
                source={{
                  uri: 'https://picsum.photos/200',
                }}
              />
              <View>
                <Text style={[t.textXl, t.textHeader, t.fontB, t.mY1]}>
                  Gustavo Kenter
                </Text>
                <Text style={[t.textBase, t.fontR, t.textText]}>Designer</Text>
              </View>
              <Icon style={[t.textPrimary, t.text4xl]} name="east" />
            </View>
          </View>
          <TouchableOpacity
            style={[
              t.wFull,
              t.alignCenter,
              t.justifyCenter,
              t.flexRow,
              t.p3,
              t.bgBlack,
              t.roundedFull,
              t.mY3,
            ]}>
            <Text style={[t.textXl, t.textWhite, t.fontB, t.mY1]}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  radius: {
    borderRadius: 40,
  },
  radiusUp: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  radiusDown: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});

export default Course;
