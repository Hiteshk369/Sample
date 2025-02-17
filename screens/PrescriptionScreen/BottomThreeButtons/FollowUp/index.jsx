import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import {useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../../constants/colors';

import CheckBox from '@react-native-community/checkbox';

const moreOptions = [
  {
    id: 1,
    name: '2001',
  },
  {
    id: 2,
    name: '2002',
  },
];

const FollowUp = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [moreOption, setMoreOption] = useState('More');
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.leftText}>
            <Pressable onPressIn={() => navigation.navigate('Prescribe')}>
              <MaterialIcons
                name="arrow-back-ios"
                color={Colors.white}
                style={styles.leftText}
              />
            </Pressable>
            <Text style={styles.leftText}>Add Followup</Text>
          </View>
          <View style={styles.rightText}>
            <FontAwesome
              name="video-camera"
              color={Colors.white}
              style={styles.videoIcon}
            />
            <Text style={styles.rightText}>Video Consult</Text>
            <MaterialIcons
              name="toggle-off"
              color={Colors.white}
              style={styles.toggleIcon}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.headerContainer}>
        <View style={styles.nameHeader}>
          <View style={styles.circle} />
          <View>
            <Text style={styles.headerBigText}>Sandeep R Reddy</Text>
            <Text style={styles.headerSmallText}>
              M {'  '}|{'  '} 32 Years {'  '}|{'  '} +918919797512
            </Text>
          </View>
          <MaterialIcons
            name="edit"
            color={Colors.darkPurple}
            style={styles.editIcon}
          />
        </View>
        <View style={styles.nameHeader}>
          <Text style={styles.bigText}> {'   '}Follow up date</Text>
          <Text style={styles.smallText}>04 Mar 23 . Saturday</Text>
        </View>
        <View style={styles.buttonsRowContainer}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>tomorrow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>After 1 week</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.activeButton}>
              <Text style={styles.activeButtonText}>After 3 days</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>After 2 week</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>After 5 days</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreButton}>
              <View style={styles.flexButton}>
                <TouchableOpacity
                  style={styles.rightDropDown}
                  onPressIn={() => setMoreDropdown(!moreDropdown)}>
                  <Text style={styles.textInput}>
                    {'  '}
                    {moreOption}
                  </Text>
                  {moreDropdown ? (
                    <Entypo name="chevron-thin-up" color="black" />
                  ) : (
                    <Entypo name="chevron-thin-down" color="black" />
                  )}
                </TouchableOpacity>
              </View>
              {moreDropdown ? (
                <View style={styles.dropDownArea}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                      data={moreOptions}
                      renderItem={({item, index}) => {
                        return (
                          <TouchableOpacity
                            style={styles.dropDownText}
                            onPressIn={() => {
                              setMoreOption(item.name);
                              setMoreDropdown(false);
                            }}>
                            <Text style={styles.dropDownTextColor}>
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </ScrollView>
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.slotFlexContainer}>
        <View style={styles.slotLeftContainer}>
          <Text style={styles.slotLeftText}>Time</Text>
          <Text style={styles.slotLeftLightText}>(optional)</Text>
        </View>
        <TouchableOpacity
          style={styles.slotRightText}
          onPressIn={() => {
            setisClicked(!isClicked);
          }}>
          {isClicked ? (
            <Text style={styles.selectSlotText}>Hide slot</Text>
          ) : (
            <Text style={styles.selectSlotText}>Select slot</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.slotRightContainer}>
        <TouchableOpacity
          onPressIn={() => {
            setisClicked(!isClicked);
          }}>
          {isClicked ? (
            <View style={styles.slotFlex}>
              <View style={styles.circle} />
              <View style={styles.selectSlotContainer}>
                <Text style={styles.fullText}>Slot Full !</Text>
                <Text style={styles.fullLightText}>
                  No empty slots found on this date{'\n'}Try another date.
                </Text>
              </View>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TextInput
          placeholderTextColor={Colors.black}
          style={styles.inputField}
          placeholder="Dry cough,Loss of appetite"
        />
      </View>
      <View style={styles.notifyContainer}>
        <Text style={styles.notifyHeadText}>Notify Patient via</Text>
        <View style={styles.notifyFlexText}>
          <CheckBox
            tintColors={{true: Colors.lightPurple, false: Colors.slate_300}}
            onChange={() => setToggleCheckBox(!toggleCheckBox)}
            value={toggleCheckBox}
          />
          <Text style={styles.textColor}>WhatsApp</Text>
          <CheckBox
            tintColors={{true: Colors.lightPurple, false: Colors.slate_300}}
            onChange={() => setToggleCheckBox(!toggleCheckBox)}
            value={toggleCheckBox}
          />
          <Text style={styles.textColor}>SMS</Text>
        </View>
      </View>
      <View style={styles.buttonsFlex}>
        <TouchableOpacity style={styles.bottomButtonsBackground}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeBottomButtonsBackground}>
          <Text style={styles.activeBottomButtonText}>Add Followup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  gradient: {
    height: 140,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20%',
    margin: '5%',
    justifyContent: 'space-between',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    gap: 10,
    color: Colors.white,
  },
  rightText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginLeft: '5%',
    fontSize: 16,
    gap: 10,
    color: Colors.white,
  },
  toggleIcon: {
    alignItems: 'center',
    fontSize: 35,
  },
  videoIcon: {
    alignItems: 'center',
    fontSize: 20,
  },
  nameHeader: {
    flexDirection: 'row',
    marginVertical: '5%',
    gap: 20,
    alignItems: 'center',
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
    marginHorizontal: '5%',
  },
  circle: {
    height: 50,
    width: 50,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBigText: {
    fontSize: 18,
    color: Colors.black,
  },
  headerSmallText: {
    fontSize: 13,
    marginTop: '2%',
    color: Colors.darkPurple,
  },
  editIcon: {
    fontSize: 20,
    marginLeft: '8%',
  },
  bigText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
  },
  smallText: {
    fontSize: 12,
    color: Colors.gray_400,
  },
  buttonsRowContainer: {
    flexDirection: 'row',
    width: '75%',
    paddingVertical: '1%',
    marginHorizontal: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  buttonsContainer: {
    paddingVertical: '1%',
  },
  Button: {
    // marginTop: '15%',
    marginBottom: '15%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: Colors.white,
    elevation: 1,
  },
  ButtonText: {
    color: Colors.black,
    fontWeight: '500',
  },
  activeButton: {
    // marginTop: '5%',
    marginBottom: '15%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.darkPurple,
  },
  activeButtonText: {
    fontWeight: '500',
    color: Colors.white,
  },
  flexButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'relative',
    gap: 10,
  },
  rightDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  textInput: {
    fontSize: 15,
    color: Colors.black,
  },
  dropDownArea: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    // alignSelf: 'flex-end',
    // justifyContent: 'space-between',
    paddingVertical: '1%',
    marginRight: '6%',
    // marginTop: '50%',
    position: 'absolute',
  },
  dropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  dropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
  },
  dropDown: {
    fontSize: 20,
  },
  moreButton: {
    marginBottom: '15%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonText: {
    color: Colors.darkPurple,
    fontWeight: '500',
    fontSize: 15,
  },
  slotFlex: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    margin: '5%',
    marginTop: '0%',
  },
  slotFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
    marginTop: '10%',
  },
  slotLeftContainer: {
    flexDirection: 'row',
    gap: 5,
    marginHorizontal: '3%',
  },
  slotLeftText: {
    fontSize: 16,
    color: Colors.black,
  },
  slotLeftLightText: {
    fontSize: 16,
    color: Colors.gray_400,
  },
  selectSlotText: {
    alignSelf: 'flex-end',
    color: Colors.darkPurple,
    fontWeight: '500',
  },
  selectSlotContainer: {
    marginHorizontal: '5%',
  },
  fullText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.black,
  },
  fullLightText: {
    fontSize: 13,
  },
  slotRightContainer: {
    flexDirection: 'row',
    // gap: 5,
    marginHorizontal: '5%',
  },
  slotRightText: {
    fontSize: 16,
    color: Colors.darkPurple,
  },
  card: {
    backgroundColor: Colors.purple_100,
    width: '90%',
    height: 170,
    marginTop: '0%',
    borderRadius: 20,
    margin: '5%',
  },
  inputField: {
    marginHorizontal: '5%',
    fontSize: 16,
    fontWeight: '500',
  },
  notifyContainer: {
    padding: '3%',
  },
  notifyHeadText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: '5%',
  },
  notifyFlexText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
  },
  textColor: {
    color: Colors.black,
    marginRight: '2%',
  },
  buttonsFlex: {
    borderTopWidth: 1,
    borderTopColor: Colors.gray_100,
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  bottomButtonsBackground: {
    width: '40%',
    marginVertical: '5%',
    paddingVertical: '4%',
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.darkPurple,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: Colors.darkPurple,
    alignItems: 'center',
  },
  activeBottomButtonsBackground: {
    width: '40%',
    marginVertical: '5%',
    paddingVertical: '4%',
    backgroundColor: Colors.darkPurple,
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBottomButtonText: {
    fontSize: 15,
    color: Colors.white,
    alignItems: 'center',
  },
});

export default FollowUp;
