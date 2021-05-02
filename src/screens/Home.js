import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {t} from 'react-native-tailwindcss';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {courses, courses2, width} from '../helpers';

const Home = ({navigation: {navigate}}) => {
  return (
    <ScrollView>
      <View style={[t.bgPrimary]}>
        <View style={[t.flexRow, t.pT6, t.pB6, t.pX4, t.itemsCenter]}>
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
            <Text style={[t.text2xl, t.textWhite, t.fontB]}>Hi, Davis</Text>
            <Text style={[t.textBase, t.textWhite, t.fontR]}>
              learning is easier and faster with us
            </Text>
          </View>
        </View>
        <View style={[t.bgWhite, t.hFull, styles.radius]}>
          <Text style={[t.textHeader, t.text2xl, t.fontM, t.pT5, t.pL6]}>
            Top Courses
          </Text>

          <View style={[t.pY5]}>
            <Carousel
              data={courses}
              firstItem={1}
              layout="default"
              sliderWidth={width}
              itemWidth={330}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigate('Course')}
                  key={item.id}
                  style={[
                    t.p4,
                    t[`bg${item.color}`],
                    t.shadow2xl,
                    styles.radius,
                  ]}>
                  <View
                    style={[
                      t.flexRow,
                      t.itemsCenter,
                      t.justifyCenter,
                      t.bgWhite,
                      t.w20,
                      t.h10,
                      t.roundedFull,
                      t.mY2,
                    ]}>
                    <Icon
                      style={[t.mR1, t.textSecondary, t.textXl]}
                      name="star"
                    />
                    <Text style={[t.fontM, t.textXl, t.fontBlack]}>
                      {item.rate}
                    </Text>
                  </View>

                  <Text style={[t.text2xl, t.fontB, t.textWhite, t.mY4]}>
                    {item.name}
                  </Text>
                  <View style={[t.flexRow, t.itemsCenter]}>
                    <Image
                      style={[t.h20, t.w20, t.roundedFull, t.mR6]}
                      source={{
                        uri: item.image,
                      }}
                    />
                    <View>
                      <Text style={[t.textBase, t.textWhite, t.fontR, t.mY3]}>
                        Teacher
                      </Text>
                      <Text style={[t.textXl, t.textWhite, t.fontB]}>
                        {item.teacher}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <Text style={[t.textHeader, t.text2xl, t.fontM, t.pT5, t.pL6]}>
            For You
          </Text>
          <View style={[t.flexRow, t.itemsCenter, t.flexWrap, t.pX5]}>
            {courses2.map(course => (
              <View
                key={course.id}
                style={[
                  styles.card,
                  t.shadow2xl,
                  styles.smallRadius,
                  {
                    backgroundColor: course.color,
                  },
                ]}>
                <View style={[t.flexRow, t.itemsCenter, t.p2]}>
                  <Image
                    style={[
                      t.h16,
                      t.w16,
                      t.roundedFull,
                      t.border2,
                      t.borderWhite,
                      t.mR1,
                    ]}
                    source={{
                      uri: course.image,
                    }}
                  />
                  <View>
                    <Text style={[t.textBlack, t.fontM, t.mY3]}>
                      {course.teacher}
                    </Text>
                  </View>
                </View>
                <View style={[t.bgWhite, styles.smallRadius, t.p2]}>
                  <View style={[t.flexRow, t.alignCenter]}>
                    <Icon
                      style={[t.mR1, t.textSecondary, t.textBase]}
                      name="star"
                    />
                    <Text style={[t.fontM, t.textBase, t.fontBlack]}>
                      {course.rate}
                    </Text>
                  </View>
                  <Text style={[t.textXl, t.fontB, t.textHeader, t.mY2]}>
                    {course.name}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  radius: {
    borderRadius: 40,
  },
  card: {
    width: (width - 80) / 2,
    margin: 10,
  },
  smallRadius: {
    borderRadius: 20,
  },
  radiusUp: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  radiusDown: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Home;
