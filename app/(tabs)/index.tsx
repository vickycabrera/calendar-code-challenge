import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Calendar, ChallengeData, Customer } from '../models/ChallengeData';
import { styles } from './calendar/styles';
import { renderMonth } from './calendar/renderMonth';

export default function CalendarView() {
  const [events, setEvents] = useState<ChallengeData|[]>([]);
  const [customer, setCustomer] = useState<Customer|{}>({});

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge')
      setEvents(response.data.calendar)
      setCustomer(response.data.customer)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Calendar</Text>
      </View>
      <FlatList
        data={events}
        renderItem={({item}) => renderMonth(customer, item)}
        keyExtractor={(item: Calendar) =>`${item.month}-${item.year}`}
        contentContainerStyle={styles.parentListContainer}
      />
    </View>
  );
}
