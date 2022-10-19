import {Router} from 'express';


const router = Router();

//Rooms
router.get('/api/rooms')
router.get('/api/rooms/:id')
router.post('/api/rooms')
router.delete('/api/rooms/:id')
router.put('/api/rooms/:id')

//Devices
router.get('/api/devices')
router.get('/api/devices/:id')
router.post('/api/devices')
router.delete('/api/devices/:id')
router.put('/api/devices/:id')

//Instructors
router.get('/api/instructors')
router.get('/api/instructors/:id')
router.post('/api/instructors')
router.delete('/api/instructors/:id')
router.put('/api/instructors/:id')

//Members
router.get('/api/members')
router.get('/api/members/:id')
router.post('/api/members')
router.delete('/api/members/:id')
router.put('/api/members/:id')

//Reservations
router.get('/api/reservations')
router.get('/api/reservations/:id')
router.post('/api/reservations')
router.delete('/api/reservations/:id')
router.put('/api/reservations/:id')

//Squassh_Courts
router.get('/api/squash')
router.get('/api/squash/:id')
router.post('/api/squash')
router.delete('/api/squash/:id')
router.put('/api/squash/:id')

//Attends
router.get('/api/attends')
router.get('/api/attends/:id')
router.post('/api/attends')
router.delete('/api/attends/:id')
router.put('/api/attends/:id')

//Assigned
router.get('/api/assigned')
router.get('/api/assigned/:id')
router.post('/api/assigned')
router.delete('/api/assigned/:id')
router.put('/api/assigned/:id')

//Users
router.get('/api/users')
router.get('/api/users/:id')
router.post('/api/users')
router.delete('/api/users/:id')
router.put('/api/users/:id')





export default router;
