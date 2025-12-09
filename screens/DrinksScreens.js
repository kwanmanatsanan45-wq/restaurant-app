import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './../assets/style/ScreenSyles'
import { drinks } from './../data/menuData';

export default function DrinksScreens() {
  return (
     <ScrollView style={styles.container}>
           <View style={styles.content}>
             <Text style={styles.icon}></Text>
             <Text style={styles.title}>อาหารจานหลัก</Text>
             <Text style={styles.subtitle}>เมนูแนะนำ {drinks.length}</Text>
     
             {drinks.map((d)=> (
               <View key={d.id} style={styles.menuCard}>
                 <Text style={styles.menuEmoji}>🍸</Text>
                 <View style={styles.menuInfo}>
                   <Text style={styles.menuName}>{d.name}</Text>
                   <Text style={styles.menuPrice}>{d.price} ดอลล่า</Text>
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