import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/colors';

import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const MainRegistration = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Get Started</Text>
            <Text style={styles.description}>
              Register yourself to get access
            </Text>
            <Text style={styles.descriptionTwo}>to our features</Text>
          </View>
          <View style={styles.inputFormContainer}>
            <View style={styles.boxContainer}>
              <View style={styles.box} />
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Hello Doctors !</Text>
              <Text style={styles.greetingDescription}>
                You are one step closer towards making your practice better
              </Text>
            </View>
            <View style={styles.boxContainer}>
              <View style={styles.InputFieldContainer}>
                <View style={styles.InputFieldHolder}>
                  <FontAwesome name="circle-thin" style={styles.circleIcon} />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor={Colors.black}
                    placeholder="Dr. Umar"
                  />
                </View>
                <View style={styles.InputFieldHolder}>
                  <FontAwesome name="circle-thin" style={styles.circleIcon} />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor={Colors.black}
                    placeholder="Pulmonologist"
                  />
                </View>
              </View>
            </View>
            <View styles={styles.clinicDetailsContainer}>
              <Text style={styles.clinicHeading}>Clinic Details</Text>
              <Text style={styles.clinicName}>Clinic Name*</Text>
              <TextInput style={styles.clinicInput} />
              <Text style={styles.clinicName}>Pin code*</Text>
              <TextInput style={styles.clinicInput} />
              <View style={styles.referralTextContainer}>
                <Text style={styles.referralName}>Referral code</Text>
                <Text style={styles.referralOptional}>(optional)</Text>
              </View>
              <TextInput style={styles.clinicInput} />
            </View>
            <View style={styles.privacyPolicyContainer}>
              <CheckBox
                tintColors={{
                  true: Colors.lightPurple,
                  false: Colors.slate_300,
                }}
                onChange={() => setToggleCheckBox(!toggleCheckBox)}
                value={toggleCheckBox}
              />
              <Text style={styles.privacyPolicy}>
                I agree to the{' '}
                <Text style={styles.privacyTerms}>Terms & service</Text> and
                <Text style={styles.privacyTerms}> Privacy Policy</Text>
              </Text>
            </View>
            <View style={styles.nextButtonContainer}>
              <TouchableOpacity
                onPressIn={() =>
                  navigation.navigate('PersonalDetailsRegistration')
                }
                style={styles.nextButton}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  container: {
    height: '100%',
    width: '90%',
    margin: '5%',
    // paddingTop: '5%',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.white,
    alignSelf: 'center',
  },
  description: {
    marginTop: '4%',
    // width: '52%',
    fontSize: 13,
    fontWeight: '300',
    color: Colors.white,
    alignSelf: 'center',
  },
  descriptionTwo: {
    alignSelf: 'center',
    // width: '25%',
    fontSize: 13,
    fontWeight: '300',
    color: Colors.white,
  },
  inputFormContainer: {
    height: 'auto',
    backgroundColor: Colors.white,
    // marginHorizontal: '3%',
    borderRadius: 25,
    marginBottom: '15%',
  },
  boxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    height: 125,
    width: 125,
    borderColor: Colors.black,
    borderWidth: 1,
    marginTop: '8%',
    marginBottom: '4%',
    // borderRadius: 100,
  },
  greetingContainer: {
    marginBottom: '5%',
    display: 'flex',
    alignItems: 'center',
  },
  greeting: {
    color: Colors.black,
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: '700',
  },
  greetingDescription: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '400',
  },
  InputFieldContainer: {
    width: '90%',
    marginTop: '4%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  InputFieldHolder: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '5%',
    gap: 8,
    marginBottom: '8%',
  },
  circleIcon: {
    fontSize: 15,
    color: Colors.black,
  },
  input: {
    color: Colors.gray_700,
  },
  clinicDetailsContainer: {
    width: '90%',
  },
  clinicHeading: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: '4%',
    marginHorizontal: '5%',
  },
  clinicName: {
    color: Colors.black,
    fontSize: 13,
    fontWeight: '400',
    marginHorizontal: '5%',
  },
  clinicInput: {
    marginHorizontal: '5%',
    borderBottomColor: Colors.slate_300,
    borderBottomWidth: 1.25,
    color: Colors.gray_700,
    paddingBottom: '1%',
    marginBottom: '3%',
  },
  referralTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  referralName: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: 16,
  },
  referralOptional: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: 14,
  },
  privacyPolicyContainer: {
    marginTop: '2%',
    marginHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
    color: Colors.black,
    alignItems: 'center',
    gap: 2,
  },
  privacyPolicy: {
    color: Colors.black,
    fontSize: 10.5,
  },
  privacyTerms: {
    color: Colors.lightRed,
  },
  nextButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8%',
    marginTop: '3%',
  },
  nextButton: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    marginVertical: '5%',
    backgroundColor: Colors.lightPurple,
    borderRadius: 30,
  },
  nextText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default MainRegistration;
