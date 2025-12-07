import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

const PatientDashboard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER - Wahid Lofty Clinics with SMALLER SIZE */}
      <View style={styles.header}>
        <Text style={styles.clinicTitle}>Wahid Lofty Clinics</Text>
        <Text style={styles.welcomeText}>Welcome back, Sarah!</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* QUICK ACTIONS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <View style={styles.actionsGrid}>
            {/* Book Appointment */}
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/patient/book-appointment')}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.iconText}>📅</Text>
              </View>
              <Text style={styles.actionTitle}>Book Appointment</Text>
              <Text style={styles.actionDescription}>Schedule your visit</Text>
            </TouchableOpacity>

            {/* My Payments */}
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/patient/payments')}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.iconText}>💳</Text>
              </View>
              <Text style={styles.actionTitle}>My Payments</Text>
              <Text style={styles.actionDescription}>Payment history</Text>
            </TouchableOpacity>

            {/* Contact Us */}
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/patient/contact')}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.iconText}>📞</Text>
              </View>
              <Text style={styles.actionTitle}>Contact Us</Text>
              <Text style={styles.actionDescription}>Get in touch</Text>
            </TouchableOpacity>

            {/* My Reports */}
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/patient/reports')}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.iconText}>📊</Text>
              </View>
              <Text style={styles.actionTitle}>My Reports</Text>
              <Text style={styles.actionDescription}>View treatment history</Text>
            </TouchableOpacity>

            {/* Feedback */}
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/patient/feedback')}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.iconText}>💬</Text>
              </View>
              <Text style={styles.actionTitle}>Feedback</Text>
              <Text style={styles.actionDescription}>Share your experience</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* PERSONAL INFORMATION SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sarah Johnson</Text>
          <Text style={styles.sectionSubtitle}>Personal Information</Text>
          
          <View style={styles.infoCard}>
            <InfoRow label="Full Name" value="Sarah Johnson" />
            <InfoRow label="Email" value="sarah.johnson@example.com" />
            <InfoRow label="Phone" value="+1 (555) 123-4567" />
            <InfoRow label="Date of Birth" value="March 15, 1990" />
            <InfoRow label="Address" value="123 Main St, New York, NY" />
          </View>
        </View>

        {/* MEDICAL INFORMATION SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Information</Text>
          
          <View style={styles.medicalCard}>
            <View style={styles.medicalRow}>
              <Text style={styles.medicalLabel}>Patient ID:</Text>
              <Text style={styles.medicalValue}>PT-12345</Text>
            </View>
            <View style={styles.medicalRow}>
              <Text style={styles.medicalLabel}>Blood Type:</Text>
              <Text style={styles.medicalValue}>O+</Text>
            </View>
          </View>
        </View>

        {/* Add bottom padding for navigation bar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

// Helper Components
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}:</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20, // SMALLER: Reduced from 60
    paddingBottom: 15, // SMALLER: Reduced from 20
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  clinicTitle: {
    fontSize: 22, // SMALLER: Reduced from 28
    fontWeight: 'bold',
    color: '#2c3e50', // DARK COLOR FOR VISIBILITY
    textAlign: 'center',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 14, // SMALLER
    color: '#7f8c8d',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 20,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50', // DARK COLOR
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 15,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    fontSize: 20,
    color: '#ffffff',
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50', // DARK COLOR
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: '#555', // DARKER GRAY FOR VISIBILITY
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 15,
    color: '#555', // DARK COLOR
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 15,
    color: '#2c3e50', // DARK COLOR
    fontWeight: '400',
  },
  medicalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  medicalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  medicalLabel: {
    fontSize: 16,
    color: '#555', // DARK COLOR
    fontWeight: '600',
  },
  medicalValue: {
    fontSize: 16,
    color: '#2c3e50', // DARK COLOR
    fontWeight: '500',
  },
  bottomSpacer: {
    height: 80,
  },
});

export default PatientDashboard;