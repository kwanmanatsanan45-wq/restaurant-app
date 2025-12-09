import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../assets/style/ScreenSyles'

export default function HomeScreen() {
    
  return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.icon}></Text>
            <Text style={styles.title}>ร้านอาหารอร่อย</Text>
            <Text style={styles.subtitle}>ยินดีต้อนรับ</Text>

            <View style={styles.welcomeCard}>
                <Text style={styles.cardTitle}>เกี่ยวกับร้าน</Text>
                <Text style={styles.cardText}>
                    ร้านอาหารของเรามีหลายเมนูหลากหลาย{'\n'}
                    อาหารคาว ของหวาน และเครื่องดื่ม{'\n'}
                    ทั้งหมด 12 เมนู
                </Text>
            </View>

            <View style={styles.timeCard}>
                <Text style={styles.cardTitle}>เวลาทำการ</Text>
                <Text style={styles.cardText}>
                    จันทร์ - ศุกร์: 08:00 - 20:00{'\n'}
                    เสาร์ - อาทิตย์: 09:00 - 21:00
                </Text>
            </View>

            <View style={styles.contactCard}>
                <Text style={styles.cardTitle}>ติดต่อ</Text>
                <Text style={styles.cardText}>
                    โทร: 0965234991{'\n'}
                    Line: manatsanan{'\n'}
                    Facebook: ร้านอาหารอร่อย
                    </Text>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>วิธีสั่งอาหาร</Text>
                <Text style={styles.infoText}>
                    กดที่แท็ยด้านล่างเพื่อเลือกหมวดหมู่แต่ละประเภท
                </Text>
            </View>
        </View>
    </ScrollView>
  )
}