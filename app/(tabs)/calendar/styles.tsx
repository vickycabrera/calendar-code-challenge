import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:"center",
        justifyContent: "center"
    },
    header: {
        height: 100,
        width:"100%",
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingBottom: 10,
        paddingTop: 20, 
        borderBottomColor: "#DCDCDC",
        borderBottomWidth: 0.5,
    },
    parentListContainer: {
        flexGrow: 1,
        paddingVertical: 26,
        paddingHorizontal: 18,
    },
    monthContainer: {
        flex: 1,
        width: "100%", 
        marginTop: 10,
    },
    eventCard: {
        backgroundColor: '#00B47D',
        borderRadius: 4,
        padding: 18,
        width: "90%",
    },
    dayContainer:{
        flex: 1,
        flexDirection:"row",
        marginBottom:4,
    },
    dateColumn:{
        flex:1,
        flexDirection: "column",
        alignItems:"center",
    },
    monthView: {
        flex: 1,
        margin: 20
    },
    completedCard:{
        backgroundColor:'#00B47D',
    },
    scheduledCard:{
        backgroundColor:'#006A4B',
    },
    unscheduledCard:{
        backgroundColor: "#011638"
    },
    defaultCard:{
        backgroundColor: "#848FA5"
    },
    locationView:{
        flexDirection:"row", 
        alignItems:"center", 
        marginTop:10
    },
    icons:{
        color:"#00B47D"
    },
    tbdText:{
        color:"#9000000", 
        fontWeight: "bold", 
        fontSize: 9
    },
    smallRegular:{
        fontSize: 12
    },
    smallBold:{
        fontSize: 12,
        fontWeight:"bold", 
    },
    title: {
        fontSize: 20,
        fontWeight:"bold", 
        color: "#C000000"
    },
    subtitle:{
        fontSize: 16,
        fontWeight:"bold", 
        color: "#C000000"
    },
    mediumRegular:{
        fontSize: 12,
        color: "#fff"
    },
    mediumBold:{
        fontSize: 12,
        fontWeight:"bold", 
        color: "#fff"
    }
})