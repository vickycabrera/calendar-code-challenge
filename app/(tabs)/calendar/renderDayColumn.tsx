import { View, Text } from "react-native"
import { styles } from "./styles"
import { CheckCircleIcon } from "react-native-heroicons/solid"
import { ClockIcon } from "react-native-heroicons/outline"

export const renderDayColumn=(status:string, scheduledDate:Date)=>{
    return (
        <View style={{width:"10%", alignItems:"center"}}>
            {status !== "Unscheduled" ?
            < >
                <Text style={[styles.tbdText,{marginBottom:5}]}>{scheduledDate.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()}</Text>
                <Text style={[styles.title, {marginBottom:8}]}>{scheduledDate.getDate()}</Text>
                {status === "Completed" ? 
                <CheckCircleIcon color={"#00B47D"}/>: 
                <ClockIcon color={"#00B47D"}/>}
            </>: 
                <Text style={styles.tbdText}>TBD</Text>
            }
        </View>
    )
}