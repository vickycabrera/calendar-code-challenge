import { MapPinIcon } from 'react-native-heroicons/solid';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Action, Customer } from '@/app/models/ChallengeData';

export const renderServiceCard = (customerInfo:Customer, item:Action) => {
    let cardStyle;
    let statusInfo
    switch (item.status) {
        case 'Completed':
        cardStyle = styles.completedCard;
        statusInfo = item.status
        break;
        case 'Scheduled':
        cardStyle = styles.scheduledCard;
        statusInfo = `${item.status} ${item.arrivalStartWindow} - ${item.arrivalEndWindow}`
        break;
        case 'Unscheduled':
        cardStyle = styles.unscheduledCard;
        statusInfo = "Schedule date & time TBD"
        break;
        default: 
        cardStyle = styles.defaultCard;
        statusInfo = ""
    }

    return (
        <View style={[styles.eventCard, cardStyle]}>
            <Text style={[styles.title, {color:"#fff"}]}>{item.name}</Text>
            {item.vendor && <Text style={styles.mediumRegular}>{item.vendor.vendorName}</Text>}
            {item.vendor && <Text style={styles.mediumBold}>{item.vendor.phoneNumber}</Text>}
            <View style={styles.locationView}>                   
                <MapPinIcon color="#fff" size={10}/>
                <Text style={styles.mediumRegular}>{customerInfo.street}</Text>
            </View>
            <Text style={styles.mediumRegular}>{statusInfo}</Text>
        </View>
    )
}