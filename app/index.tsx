import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Card } from "../components/ui/card";
import { CardHeader } from "../components/ui/card";
import { Link } from "expo-router";
import { CardContent } from "../components/ui/card";

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>Wekitsak</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerAction}>
            <Feather name="bell" color="#5A6268" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAction}>
            <Feather name="settings" color="#5A6268" size={24} />
          </TouchableOpacity>
          <Link href={"/profile"}>
            <View>
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={styles.headerAvatar}
              />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
};
const WelcomeSection = () => {
  return (
    <View style={styles.welcomeSection}>
      <Text style={styles.welcomeTitle}>Welcome back, Priya</Text>
    </View>
  );
};
const QuickActions = () => {
  return (
    <View style={styles.quickActions}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionGrid}>
        <TouchableOpacity style={styles.actionItem}>
          <Feather name="calendar" color="#00B8A9" size={32} />
          <Text style={styles.actionLabel}>Book Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Feather name="video" color="#00B8A9" size={32} />
          <Text style={styles.actionLabel}>Video Consult</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <MaterialCommunityIcons name="pill" color="#00B8A9" size={32} />
          <Text style={styles.actionLabel}>My Medicines</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <MaterialCommunityIcons name="test-tube" color="#00B8A9" size={32} />
          <Text style={styles.actionLabel}>Lab Tests</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const UpcomingAppointment = () => {
  return (
    <Card style={styles.appointmentCard}>
      <CardHeader style={styles.appointmentHeader}>
        <Text style={styles.sectionTitle}>Upcoming Appointment</Text>
      </CardHeader>
      <CardContent>
        <View style={styles.appointmentContent}>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.appointmentAvatar}
          />
          <View style={styles.appointmentDetails}>
            <Text style={styles.appointmentName}>Dr. Patel</Text>
            <Text style={styles.appointmentSpecialty}>Cardiologist</Text>
            <Text style={styles.appointmentTime}>Today, 10:00 AM</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.joinCallButton}>
          <Text style={styles.joinCallButtonText}>Join Video Call</Text>
        </TouchableOpacity>
      </CardContent>
    </Card>
  );
};

const HealthInsights = () => {
  return (
    <View style={styles.healthInsights}>
      <Text style={styles.sectionTitle}>Health Insights</Text>
      <View style={styles.insightsGrid}>
        <Card style={styles.insightCard}>
          <CardHeader style={styles.insightHeader}>
            <Text style={styles.insightTitle}>Heart Rate</Text>
            <Feather name="heart" color="#00B8A9" size={24} />
          </CardHeader>
          <CardContent>
            <Text style={styles.insightValue}>
              72 <Text style={styles.insightUnit}>bpm</Text>
            </Text>
            <Text style={styles.insightUpdated}>Last updated: 2 hours ago</Text>
          </CardContent>
        </Card>

        <Card style={styles.insightCard}>
          <CardHeader style={styles.insightHeader}>
            <Text style={styles.insightTitle}>Blood Pressure</Text>
            <MaterialCommunityIcons
              name="heart-pulse"
              color="#00B8A9"
              size={24}
            />
          </CardHeader>
          <CardContent>
            <Text style={styles.insightValue}>
              120/80 <Text style={styles.insightUnit}>mmHg</Text>
            </Text>
            <Text style={styles.insightUpdated}>Last updated: 1 day ago</Text>
          </CardContent>
        </Card>

        <Card style={styles.insightCard}>
          <CardHeader style={styles.insightHeader}>
            <Text style={styles.insightTitle}>Weight</Text>
            <Feather name="bar-chart" color="#00B8A9" size={24} />
          </CardHeader>
          <CardContent>
            <Text style={styles.insightValue}>
              65 <Text style={styles.insightUnit}>kg</Text>
            </Text>
            <Text style={styles.insightUpdated}>Last updated: 3 days ago</Text>
          </CardContent>
        </Card>
      </View>
    </View>
  );
};
const RecentActivities = () => {
  return (
    <Card style={styles.activitiesCard}>
      <CardHeader style={styles.sectionTitle}>
        <Text>Recent Activities</Text>
      </CardHeader>
      <CardContent>
        <View style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <MaterialCommunityIcons
              name="file-document"
              color="#00B8A9"
              size={24}
            />
          </View>
          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>
              Blood Test Results Uploaded
            </Text>
            <Text style={styles.activityTime}>3 days ago</Text>
          </View>
        </View>
        <View style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <Feather name="tablet" color="#00B8A9" size={24} />
          </View>
          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>Prescription Renewed</Text>
            <Text style={styles.activityTime}>1 week ago</Text>
          </View>
        </View>
        <View style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <MaterialCommunityIcons
              name="stethoscope"
              color="#00B8A9"
              size={24}
            />
          </View>
          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>
              Teleconsultation with Dr. Singh
            </Text>
            <Text style={styles.activityTime}>2 weeks ago</Text>
          </View>
        </View>
      </CardContent>
    </Card>
  );
};
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <AppHeader />
      <WelcomeSection />
      <QuickActions />
      <UpcomingAppointment />
      <HealthInsights />
      <RecentActivities />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingVertical: 16,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00B8A9",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerAction: {
    marginLeft: 16,
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  welcomeSection: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#5A6268",
  },
  quickActions: {
    marginTop: 32,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5A6268",
    marginBottom: 16,
  },
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionItem: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 16,
  },
  actionLabel: {
    marginTop: 8,
    fontSize: 14,
    color: "#5A6268",
  },
  appointmentCard: {
    marginTop: 32,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
  },
  appointmentHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
  },
  appointmentContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  appointmentAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  appointmentDetails: {
    flex: 1,
  },
  appointmentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5A6268",
  },
  appointmentSpecialty: {
    fontSize: 14,
    color: "#5A6268",
  },
  appointmentTime: {
    fontSize: 14,
    color: "#00B8A9",
    marginTop: 4,
  },
  joinCallButton: {
    backgroundColor: "#00B8A9",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  joinCallButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  healthInsights: {
    marginTop: 32,
  },
  insightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
  },
  insightCard: {
    width: "32%",
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  insightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  insightTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#5A6268",
  },
  insightValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00B8A9",
  },
  insightUnit: {
    fontSize: 10,
    color: "#5A6268",
  },
  insightUpdated: {
    fontSize: 14,
    color: "#5A6268",
    marginTop: 4,
  },
  activitiesCard: {
    marginTop: 32,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
  },
  activityIcon: {
    backgroundColor: "rgba(0, 184, 169, 0.1)",
    padding: 8,
    borderRadius: 8,
    marginRight: 16,
  },
  activityDetails: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5A6268",
  },
  activityTime: {
    fontSize: 14,
    color: "#5A6268",
    marginTop: 4,
  },
});

export default App;
