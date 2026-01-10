import yogaImg from '../assets/img/yoga.jpeg'
import pilatesImg from '../assets/img/pilates.jpeg'
import hiitImg from '../assets/img/hiit.jpeg'
import boxingImg from '../assets/img/boxing.jpeg'
import spinningImg from '../assets/img/Spinning.jpg'
import zumbaImg from '../assets/img/Zumba.jpg'

export default {
  appName: 'GymReserve',
  heroSubtitle: 'Transform Your Body, Elevate Your Mind',
  ctaTitle: 'Ready to Start Your Fitness Journey?',
  ctaSubtitle: 'Join hundreds of members who have already transformed their lives',
  
  stats: [
    { icon: '💪', value: '500+', label: 'Active Members' },
    { icon: '🏋️', value: '50+', label: 'Weekly Classes' },
    { icon: '⭐', value: '4.9', label: 'Average Rating' },
    { icon: '🎯', value: '10+', label: 'Expert Trainers' }
  ],

  features: [
    {
      title: 'Easy Booking',
      iconClass: 'bi bi-calendar-check',
      bgClass: 'bg-primary',
      description: 'Reserve your favorite gym trainings with just a few clicks. Our intuitive platform makes booking hassle-free and quick.'
    },
    {
      title: 'Flexible Schedule',
      iconClass: 'bi bi-clock-history',
      bgClass: 'bg-success',
      description: 'Choose from multiple time slots throughout the day. Find the perfect training time that fits your busy lifestyle.'
    },
    {
      title: 'Track Reservations',
      iconClass: 'bi bi-list-check',
      bgClass: 'bg-info',
      description: 'Keep track of all your bookings in one place. Manage, modify, or cancel reservations effortlessly.'
    },
    {
      title: 'Quality Classes',
      iconClass: 'bi bi-star-fill',
      bgClass: 'bg-warning',
      description: 'Expert trainers and high-quality equipment ensure you get the best workout experience every time.'
    }
  ],

  trainingTypes: [
    {
      name: 'Yoga',
      emoji: '🧘',
      description: 'Find your inner peace and flexibility',
      duration: '60 min'
    },
    {
      name: 'Pilates',
      emoji: '🤸',
      description: 'Strengthen your core and posture',
      duration: '45 min'
    },
    {
      name: 'HIIT',
      emoji: '🔥',
      description: 'High-intensity interval training',
      duration: '30 min'
    },
    {
      name: 'Boxing',
      emoji: '🥊',
      description: 'Build strength and confidence',
      duration: '45 min'
    },
    {
      name: 'Spinning',
      emoji: '🚴',
      description: 'Indoor cycling for endurance',
      duration: '50 min'
    },
    {
      name: 'Zumba',
      emoji: '💃',
      description: 'Dance fitness party',
      duration: '60 min'
    }
  ],

  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'Yoga Enthusiast',
      avatar: '👩',
      text: 'GymReserve has completely transformed how I book my classes. The interface is so intuitive and the trainers are amazing!'
    },
    {
      name: 'Mike Chen',
      role: 'HIIT Regular',
      avatar: '👨',
      text: 'Best gym booking system ever! I love how easy it is to manage my schedule and never miss a workout.'
    },
    {
      name: 'Emma Davis',
      role: 'Boxing Member',
      avatar: '👧',
      text: 'The flexibility and variety of classes available is incredible. I can always find something that fits my schedule!'
    }
  ],

  trainings: [
    {
      id: 1,
      title: 'Yoga',
      slug: 'yoga',
      description: 'Relaxing and stretching exercises.',
      type: 'Relax',
      level: 'Beginner',
      duration: 60,
      timeSlots: ['08:00 - 09:00', '10:00 - 11:00'],
      image: yogaImg,
      isFavorite: false
    },
    {
      id: 2,
      title: 'Pilates',
      slug: 'pilates',
      description: 'Core strength and flexibility training.',
      type: 'Strength',
      level: 'Intermediate',
      duration: 60,
      timeSlots: ['09:30 - 10:30', '11:30 - 12:30'],
      image: pilatesImg,
      isFavorite: true
    },
    {
      id: 3,
      title: 'HIIT',
      slug: 'hiit',
      description: 'High intensity interval training.',
      type: 'Cardio',
      level: 'Advanced',
      duration: 45,
      timeSlots: ['11:00 - 11:45', '12:00 - 12:45'],
      image: hiitImg,
      isFavorite: true
    },
    {
      id: 4,
      title: 'Boxing',
      slug: 'boxing',
      description: 'Intense cardio and strength workout.',
      type: 'Combat',
      level: 'Intermediate',
      duration: 55,
      timeSlots: ['12:00 - 12:55', '13:00 - 13:55'],
      image: boxingImg,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Spinning',
      slug: 'spinning',
      description: 'Indoor cycling for endurance and cardio.',
      type: 'Cardio',
      level: 'Intermediate',
      duration: 50,
      timeSlots: ['07:00 - 07:50', '17:00 - 17:50', '19:00 - 19:50'],
      image: spinningImg,
      isFavorite: false
    },
    {
      id: 6,
      title: 'Zumba',
      slug: 'zumba',
      description: 'Dance fitness with Latin music.',
      type: 'Dance',
      level: 'Beginner',
      duration: 60,
      timeSlots: ['18:00 - 19:00', '19:30 - 20:30'],
      image: zumbaImg,
      isFavorite: false
    }
  ]
}