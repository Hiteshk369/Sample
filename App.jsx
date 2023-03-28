import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MainRegistration from './screens/Registration/MainRegistration';
import PersonalDetailsRegistration from './screens/Registration/PersonalDetailsRegistration';
import OtpKey from './screens/OTP/OtpKey';
import OtpVerification from './screens/OTP/OtpVerification';
import VerificationRegistration from './screens/Registration/VerificationRegistration';
import Dashboard from './screens/DashBoard/Dashboard';
import Summary from './screens/DashBoard/Summary';
import SummaryAppointment from './screens/DashBoard/SummaryAppointment';
import MainAppointment from './screens/Appointements/MainAppointment';
import AddAppointment from './screens/Appointements/AddAppointment';
import SellPackage from './screens/Package/SellPackage';
import CreateNewPackage from './screens/Package/CreateNewPackage';
import Connect from './screens/Appointements/Connect';
import MainProfilescreen from './screens/Profile/MainProfileScreen';
import AddClinic from './screens/Clinic/AddClinic';
import ClinicAppointmentDetails from './screens/Clinic/ClinicAppointmentDetails';


const App = () => {
  return (
    <SafeAreaView>
      <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
        {/* <PersonalDetailsRegistration /> */}
        {/* <MainRegistration /> */}
        {/* <Verification /> */}
        {/* <OtpKey /> */}
        {/* <OtpVerification /> */}
        {/* <VerificationRegistration /> */}
        {/* <Dashboard/> */}
        {/* <Summary/> */}
        {/* <SummaryAppointment/> */}
        {/* <MainAppointment/> */}
        {/* <AddAppointment/> */}
        {/* <SellPackage/> */}
        {/* <CreateNewPackage/> */}
        {/* <Connect/> */}
        {/* <MainProfilescreen/> */}
        {/* <AddClinic/> */}
        <ClinicAppointmentDetails/>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    width: '100%',
    padding: 10,
    position: 'relative',
  },
});

export default App;
