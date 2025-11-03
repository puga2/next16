export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}
export const events: EventItem[] = [
    { image:'/images/event1.png' ,title:'Tech Innovators Conference 2024',slug:'React Summit US 2025',location:'New York',date:'2024-01-01',time:'10:00 AM '},
    { image:'/images/event2.png' ,title:'Global AI Summit 2024',slug:'Global AI Summit 2024',location:'San Francisco',date:'2024-02-01',time:'11:00 AM'},
    { image:'/images/event3.png' ,title:'Web Dev World Expo 2024',slug:'Web Dev World Expo 2024',location:'Los Angeles',date:'2024-03-01',time:'12:00 PM'},
    { image:'/images/event4.png' ,title:'Cloud Computing Conference 2024',slug:'Cloud Computing Conference 2024',location:'Seattle',date:'2024-04-01',time:'01:00 PM'},
    { image:'/images/event5.png' ,title:'Cybersecurity Forum 2024',slug:'Cybersecurity Forum 2024',location:'Washington D.C.',date:'2024-05-01',time:'02:00 PM'},
    { image:'/images/event6.png' ,title:'Blockchain Expo 2024',slug:'Blockchain Expo 2024',location:'San Francisco',date:'2024-06-01',time:'03:00 PM'},
];