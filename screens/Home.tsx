import { FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { petrol, rentalRebate, foodAndBeverage, Item } from '../constants/Data';
import styles from './styles';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const renderItemList = ({ item, index }: { item: Item; index: number }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.wrapTitle}>
          {item.marker && (
            <Image style={styles.itemMarker} source={item.marker} />
          )}
          <Text style={styles.itemTitle}> {item.title}</Text>
        </View>
        <Text style={styles.itemDes}>{item.description}</Text>
        {item.marker && <Text style={styles.itemNote}>Insufficient coins</Text>}
      </TouchableOpacity>
    );
  };
  const headerItem = (title: string) => {
    return <Text style={styles.titleItem}>{title}</Text>;
  };
  const header = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerAbove}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              style={styles.arrow}
              source={require('../assets/images/arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Silver Tier</Text>
          <Text style={styles.titleDescription}>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </Text>
        </View>
        <View style={[styles.headerBelow, { top: 240 }, styles.shadow]}>
          <Text style={styles.balance}>Available Coin balance</Text>
          <Text style={styles.numberBalance}>340</Text>
          <View style={styles.processBar}>
            <View style={styles.processValue} />
          </View>
          <Text style={styles.description}>
            {
              'You have paid rental fee for $1,200.\n Pay more $800 to achieve GoldTier.'
            }
          </Text>
          <TouchableOpacity style={styles.highlightButton}>
            <Text style={styles.highlightText}>View tier benefits</Text>
            <Image
              style={styles.icon}
              source={require('../assets/images/arrow-right.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCoupon}>
            <Text style={styles.textButton}>My Coupons</Text>
            <Image />
          </TouchableOpacity>
          <Text style={styles.date}>Updated : 02/11/2021</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.wrapItem}>
        {headerItem('Petrol')}
        <FlatList
          style={styles.listItem}
          horizontal
          data={petrol}
          renderItem={renderItemList}
          keyExtractor={(item, index) => index.toString()}
        />
        {headerItem('Rental Rebate')}
        <FlatList
          horizontal
          style={styles.listItem}
          data={rentalRebate}
          renderItem={renderItemList}
          keyExtractor={(item, index) => index.toString()}
        />
        {headerItem('Food and Beverage')}
        <FlatList
          horizontal
          style={styles.listItem}
          data={foodAndBeverage}
          renderItem={renderItemList}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <FlatList
        data={[1]}
        renderItem={renderItem}
        ListHeaderComponent={header}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
