import { ScrollView, View, Text } from "react-native"
import { styles } from "./styles"
import { renderServiceCard } from "./renderServiceCard"
import { Action, Calendar, Customer } from "@/app/models/ChallengeData"
import { renderDayColumn } from "./renderDayColumn"

export const renderMonth = (customer:Customer, item:Calendar) => {
    const getMonthName = (monthNumber:number) => {
        const dateObject = new Date()
        dateObject.setMonth(monthNumber - 1)
        return dateObject.toLocaleString('default', { month: 'long' })
    }

    return(
    <View style={styles.monthContainer}>
        <Text style={[styles.subtitle, {marginBottom:20}]}>{`${getMonthName(item.month)} ${item.year}`}</Text>
        <ScrollView style={{flex: 1}}>
            {!item.actions.length && 
                <View style={styles.dayContainer}>
                    <View style={{flex: 1, alignItems:"flex-end"}}>
                        <View style={[styles.eventCard, styles.defaultCard]}>
                            <Text style={[styles.subtitle, {color:"#fff"}]}>
                                No Maintenance Scheduled
                            </Text>
                        </View>
                    </View>
                </View>
            }
            {item.actions.map((item:Action, index:number) => {
                const scheduledDate= new Date(item.scheduledDate as string)
                return (
                <View key={index} style={styles.dayContainer}>
                    {renderDayColumn(item.status, scheduledDate)}
                    {renderServiceCard(customer,item)}
                </View>
            )})}
        </ScrollView>
    </View>
)}