import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Card, CardHeader, CardContent } from "../components/ui/card";
const { width } = Dimensions.get("window");

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <View
    style={[styles.sidebar, isOpen ? styles.sidebarOpen : styles.sidebarClosed]}
  >
    <TouchableOpacity style={styles.sidebarToggle} onPress={toggleSidebar}>
      <Icon name={isOpen ? "times" : "bars"} size={20} color="#ffffff" />
    </TouchableOpacity>
    {isOpen && (
      <>
        <View style={styles.sidebarHeader}>
          <Text style={styles.logoText}>Wekitsak</Text>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.navItem}>
            <Icon
              name="calendar-alt"
              size={20}
              color="#5A6268"
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Appointments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon
              name="users"
              size={20}
              color="#5A6268"
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Patients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon
              name="chart-bar"
              size={20}
              color="#5A6268"
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="cog" size={20} color="#5A6268" style={styles.navIcon} />
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </>
    )}
  </View>
);
const TopBar = () => (
  <View style={styles.topBar}>
    <Text style={styles.pageTitle}>Dashboard</Text>
    <View style={styles.topBarActions}>
      <TouchableOpacity style={styles.startConsultationButton}>
        <Icon
          name="video"
          size={16}
          color="#FFFFFF"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.avatar}
      />
    </View>
  </View>
);

const StatCard = ({ title, value, subtext, iconName, iconColor }) => (
  <Card style={styles.statCard}>
    <CardContent>
      <View style={styles.statCardHeader}>
        <Text style={styles.statCardTitle}>{title}</Text>
        <Icon name={iconName} size={24} color={iconColor} />
      </View>
      <Text style={[styles.statCardValue, { color: iconColor }]}>{value}</Text>
      <Text style={styles.statCardSubtext}>{subtext}</Text>
    </CardContent>
  </Card>
);

const AppointmentRow = ({ patient, time, type, status }) => (
  <View style={styles.appointmentRow}>
    <View style={styles.patientInfo}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1616002851413-ebcc9611139d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.patientAvatar}
      />
      <View>
        <Text style={styles.patientName}>{patient.name}</Text>
        <Text style={styles.patientDetails}>{patient.details}</Text>
      </View>
    </View>
    <Text style={styles.appointmentTime}>{time}</Text>
    <View
      style={[
        styles.appointmentType,
        { backgroundColor: type === "Video Call" ? "#E6F6E6" : "#FFF3E6" },
      ]}
    >
      <Text
        style={[
          styles.appointmentTypeText,
          { color: type === "Video Call" ? "#1F9254" : "#CC8925" },
        ]}
      >
        {type}
      </Text>
    </View>
    <View
      style={[
        styles.appointmentStatus,
        { backgroundColor: status === "Upcoming" ? "#FFF9E6" : "#E6F6E6" },
      ]}
    >
      <Text
        style={[
          styles.appointmentStatusText,
          { color: status === "Upcoming" ? "#CC9F25" : "#1F9254" },
        ]}
      >
        {status}
      </Text>
    </View>
    <TouchableOpacity>
      <Text style={styles.viewDetails}>View Details</Text>
    </TouchableOpacity>
  </View>
);

const PatientInsights = () => (
  <Card style={styles.insightsCard}>
    <CardHeader>
      <Text style={styles.cardTitle}>Patient Insights</Text>
    </CardHeader>
    <CardContent>
      <View style={styles.insightBar}>
        <View
          style={[
            styles.insightBarFill,
            { width: "70%", backgroundColor: "#00B8A9" },
          ]}
        />
        <Text style={styles.insightText}>70% Male</Text>
      </View>
      <View style={styles.insightBar}>
        <View
          style={[
            styles.insightBarFill,
            { width: "30%", backgroundColor: "#FF8C69" },
          ]}
        />
        <Text style={styles.insightText}>30% Female</Text>
      </View>
      <Text style={styles.insightDetails}>
        Most common age group: 30-45 years
      </Text>
      <Text style={styles.insightDetails}>
        Top concern: Cardiovascular health
      </Text>
    </CardContent>
  </Card>
);

const Tasks = () => (
  <Card style={styles.tasksCard}>
    <CardHeader>
      <Text style={styles.cardTitle}>Tasks</Text>
    </CardHeader>
    <CardContent>
      <View style={styles.taskItem}>
        <Icon name="check-square" size={20} color="#00B8A9" />
        <Text style={[styles.taskText, styles.taskCompleted]}>
          Review lab results for Priya Patel
        </Text>
      </View>
      <View style={styles.taskItem}>
        <Icon name="square" size={20} color="#00B8A9" />
        <Text style={styles.taskText}>
          Prepare presentation for medical conference
        </Text>
      </View>
      <View style={styles.taskItem}>
        <Icon name="square" size={20} color="#00B8A9" />
        <Text style={styles.taskText}>
          Follow up with Amit Singh about medication
        </Text>
      </View>
      <View style={styles.taskItem}>
        <Icon name="square" size={20} color="#00B8A9" />
        <Text style={styles.taskText}>Schedule team meeting for next week</Text>
      </View>
    </CardContent>
  </Card>
);

const DoctorDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(width > 768);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <View style={styles.container}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <View style={styles.mainContent}>
        <ScrollView style={styles.scrollView}>
          {/* <Text style={styles.pageTitle}>Dashboard</Text> */}
          <View style={styles.mainContent}>
            <TopBar />
            <ScrollView style={styles.scrollView}>
              <View style={styles.statsOverview}>
                <StatCard
                  title="Today's Appointments"
                  value="12"
                  subtext="4 video consultations"
                  iconName="calendar"
                  iconColor="#00B8A9"
                />
                <StatCard
                  title="New Patients"
                  value="5"
                  subtext="This week"
                  iconName="user-plus"
                  iconColor="#FF8C69"
                />
                <StatCard
                  title="Pending Reports"
                  value="7"
                  subtext="Require review"
                  iconName="file-medical-alt"
                  iconColor="#FFC107"
                />
                <StatCard
                  title="Average Rating"
                  value="4.8"
                  subtext="From 150 reviews"
                  iconName="star"
                  iconColor="#FFC107"
                />
              </View>

              <Card style={styles.appointmentsCard}>
                <CardHeader>
                  <Text style={styles.cardTitle}>Upcoming Appointments</Text>
                </CardHeader>
                <CardContent>
                  <AppointmentRow
                    patient={{
                      name: "Rahul Sharma",
                      details: "32 years, Male",
                    }}
                    time="10:00 AM"
                    type="Video Call"
                    status="Upcoming"
                  />
                </CardContent>
              </Card>

              <View style={styles.insightsAndTasks}>
                <PatientInsights />
                <Tasks />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "row",
  },

  sidebar: {
    backgroundColor: "#FFFFFF",

    borderRightWidth: 1,

    borderRightColor: "#E9ECEF",
  },

  sidebarOpen: {
    width: 250,
  },
  topBar: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
    // padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
  },

  sidebarClosed: {
    width: 0,
  },

  sidebarToggle: {
    padding: 16,

    backgroundColor: "#00B8A9",

    justifyContent: "center",

    alignItems: "center",
  },

  sidebarHeader: {
    padding: 16,
  },

  logoText: {
    fontSize: 24,

    fontWeight: "bold",

    color: "#00B8A9",
  },

  nav: {
    marginTop: 32,
  },

  navItem: {
    flexDirection: "row",

    alignItems: "center",

    padding: 12,

    paddingLeft: 16,
  },

  navItemActive: {
    backgroundColor: "#F8F9FA",
  },

  navIcon: {
    marginRight: 12,
  },

  navText: {
    fontSize: 16,

    color: "#5A6268",
  },

  mainContent: {
    flex: 1,

    padding: 16,
  },

  scrollView: {
    flex: 1,
  },

  pageTitle: {
    fontSize: 24,

    fontWeight: "bold",

    color: "#5A6268",

    marginBottom: 16,
  },

  topBarActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  startConsultationButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00B8A9",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    // Button size adjusts for smaller screens
    // width: width < 768 ? "100%" : "auto",
    justifyContent: width < 768 ? "center" : "flex-start",
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 16,
  },
  //   scrollView: {
  //     flex: 1,
  //     padding: 16,
  //   },
  statsOverview: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statCard: {
    width: width < 768 ? "48%" : "23%",
    marginBottom: 16,
  },
  statCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  statCardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5A6268",
  },
  statCardValue: {
    fontSize: 28,
    fontWeight: "bold",
  },
  statCardSubtext: {
    fontSize: 14,
    color: "#6C757D",
    marginTop: 4,
  },
  appointmentsCard: {
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5A6268",
  },
  appointmentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
  },
  patientInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  patientAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212529",
  },
  patientDetails: {
    fontSize: 14,
    color: "#6C757D",
  },
  appointmentTime: {
    fontSize: 14,
    color: "#212529",
  },
  appointmentType: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  appointmentTypeText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  appointmentStatus: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  appointmentStatusText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  viewDetails: {
    fontSize: 14,
    color: "#00B8A9",
  },
  insightsAndTasks: {
    flexDirection: width < 768 ? "column" : "row", // Stacks vertically on small screens
    justifyContent: "space-between",
  },
  insightsCard: {
    flex: 1,
    marginRight: width < 768 ? 0 : 12, // Removes margin for mobile
    marginBottom: width < 768 ? 16 : 0, // Adds bottom margin for mobile
  },
  tasksCard: {
    flex: 1,
    marginLeft: width < 768 ? 0 : 12, // Adjust margin for mobile
  },
  insightBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  insightBarFill: {
    height: 8,
    borderRadius: 4,
    flex: 1,
  },
  insightText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#6C757D",
  },
  insightDetails: {
    fontSize: 14,
    color: "#6C757D",
    marginTop: 8,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  taskText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#212529",
  },
  taskCompleted: {
    textDecorationLine: "line-through",
    color: "#6C757D",
  },
});
export default DoctorDashboard;
