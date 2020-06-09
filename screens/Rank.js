import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SvgUri from 'react-native-svg-uri';

const Rank = () => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.item_box}>
          <SvgUri
            width="48"
            height="48"
            source={{
              uri:
                'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_bronze_blank.svg',
            }}
          />
        </View>
        <View style={styles.item_box}>
          <SvgUri
            width="80"
            height="80"
            source={{
              uri:
                'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_silver.svg',
            }}
          />
        </View>
        <View style={styles.item_box}>
          <SvgUri
            width="48"
            height="48"
            source={{
              uri:
                'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_locked.svg',
            }}
          />
        </View>
        <View style={styles.item_box}>
          <SvgUri
            width="48"
            height="48"
            source={{
              uri:
                'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_locked.svg',
            }}
          />
        </View>
        <View style={styles.item_box}>
          <SvgUri
            width="48"
            height="48"
            source={{
              uri:
                'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_locked.svg',
            }}
          />
        </View>
        <View style={styles.item_box}>
          <SvgUri
            width="48"
            height="48"
            source={{
              uri:
                'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_locked.svg',
            }}
          />
        </View>
        <View style={styles.item_box}>
          <SvgUri
            width="48"
            height="48"
            source={{
              uri:
                'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/badge_locked.svg',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    marginTop: 8,
  },
  item_box: {
    padding: 8,
    justifyContent: 'center',
  },
});

export default Rank;
