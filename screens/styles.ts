import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'transparent',
    height: height * 0.7,
  },
  headerAbove: {
    backgroundColor: '#171725',
    paddingTop: 60,
    paddingBottom: height / 5,
    paddingHorizontal: 12,
  },
  headerBelow: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    right: 16,
    left: 16,
  },
  backButton: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  arrow: {
    tintColor: '#171725',
    resizeMode: 'contain',
    height: 12,
    width: 6,
  },
  listItem: { height: height / 3.5, paddingLeft: 24 },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  titleDescription: {
    color: '#B5B5BE',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  shadow: {
    borderWidth: 1,
    borderColor: '#FAFAFB',
    shadowColor: 'rgba(23, 23, 37, 0.04)',
    shadowOffset: {
      width: 8,
      height: 12,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
  },
  balance: {
    color: '#B5B5BE',
    fontSize: 14,
    fontWeight: '600',
  },
  numberBalance: {
    color: '#171725',
    fontSize: 48,
    fontWeight: '400',
    marginTop: 8,
  },
  processBar: {
    backgroundColor: '#E2E2EA',
    height: 5,
    width: '100%',
    borderRadius: 8,
    marginVertical: 32,
  },
  processValue: {
    backgroundColor: '#0062FF',
    height: 5,
    width: '66%',
    borderRadius: 8,
  },
  description: {
    color: '#92929D',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  highlightButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 16,
  },
  highlightText: {
    color: '#0062FF',
    fontSize: 16,
    fontWeight: '400',
  },
  icon: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
  },
  buttonCoupon: {
    backgroundColor: '#171725',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 4,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  date: {
    marginTop: 16,
    textAlign: 'center',
    color: '#B5B5BE',
    fontSize: 14,
    fontWeight: '400',
  },
  wrapItem: {
    backgroundColor: 'white',
  },
  titleItem: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    paddingLeft: 24,
  },
  item: {
    backgroundColor: 'white',
    width: width / 2,
    marginRight: 24,
  },
  itemImage: {
    width: width / 2,
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 26,
  },
  wrapTitle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 16,
    alignItems: 'center',
  },
  itemMarker: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    marginRight: 4,
  },
  itemTitle: {
    color: '#0062FF',
    fontSize: 16,
    fontWeight: '600',
  },
  itemDes: {
    color: '#92929D',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 16,
    marginVertical: 10,
  },
  itemNote: {
    color: '#0062FF',
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 16,
  },
});