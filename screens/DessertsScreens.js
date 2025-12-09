import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import styles from './../assets/style/ScreenSyles'
import { desserts } from '../data/menuData';

export default function DessertsScreens() {
  return (
     <ScrollView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.icon}></Text>
            <Text style={styles.title}>ของหวาน</Text>
            <Text style={styles.subtitle}>เมนูแนะนำ {desserts.length}</Text>
    
            {desserts.map((k)=> (
              <View key={k.id} style={styles.menuCard}>
                <Text style={styles.menuEmoji}>🍪</Text>
                <View style={styles.menuInfo}>
                  <Text style={styles.menuName}>{k.name}</Text>
                  <Text style={styles.menuPrice}>{k.price} ดอลล่า</Text>
                </View>
                <View style={styles.menuButton}>
                  <Text style={styles.menuButtonText}>สั่ง</Text>
                </View>
                </View>
            ))}
          </View>
        </ScrollView>
  )
}