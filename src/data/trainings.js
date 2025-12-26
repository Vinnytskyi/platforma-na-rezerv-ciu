import yogaImg from './assets/img/yoga.jpeg';
import pilatesImg from './assets/img/pilates.jpeg';
import hiitImg from './assets/img/hiit.jpeg';
import boxingImg from './assets/img/boxing.jpeg';


export default {
  trainings: [
    {
      id: 1,
      title: 'Yoga',
      slug: 'yoga',
      description: 'Relaxing and stretching exercises.',
      timeSlots: ['08:00 - 09:00', '10:00 - 11:00'],
      duration: 60,
      image: yogaImg,
      favorites: false
    },
    {
      id: 2,
      title: 'Pilates',
      slug: 'pilates',
      description: 'Core strength and flexibility training.',
      timeSlots: ['09:30 - 10:30', '11:30 - 12:30'],
      duration: 60,
      image: pilatesImg,
      favorites: true
    },
    {
      id: 3,
      title: 'HIIT',
      slug: 'hiit',
      description: 'High intensity interval training.',
      timeSlots: ['11:00 - 11:45', '12:00 - 12:45'],
      duration: 45,
      image: hiitImg,
      favorites: true
    },
    {
      id: 4,
      title: 'Boxing',
      slug: 'boxing',
      description: 'Intense cardio and strength workout.',
      timeSlots: ['12:00 - 12:55', '13:00 - 13:55'],
      duration: 55,
      image: boxingImg,
      favorites: false
    }
  ]
}
