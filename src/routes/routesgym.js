import {Router} from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users';
import { getInstructors, getInstructor, createInstructor, updateInstructor, deleteInstructor } from '../controllers/instructors';
import { getMember, getMembers, createMember, updateMember, deleteMember } from '../controllers/members';
import { getSquash, getSquashes, createSquash, updateSquash, deleteSquash } from '../controllers/squash';
import { getRoom, getRooms, createRoom, updateRoom, deleteRoom } from '../controllers/rooms';
import { getDevice, getDevices, updateDevice, createDevice, deleteDevice } from '../controllers/devices';
import { getReservation, getReservations, updateReservation, createReservation, deleteReservation } from '../controllers/reservation';
import { getAssigned, getAssigneds, createAssigned, updateAssigned, deleteAssigned } from '../controllers/assigned';
import { getAttend, getAttendes, createAttend, deleteAttend } from '../controllers/attends';
import { getClass, getClasses, deleteClass, updateClass, createClass } from '../controllers/classes';
import { Login } from '../controllers/login';
import { membClass, memNotSelectedClasses } from '../controllers/consults';

const router = Router();

//Rooms

router.get('/api/rooms', getRooms);
router.get('/api/rooms/:id', getRoom);
router.post('/api/rooms', createRoom);
router.delete('/api/rooms/:id', deleteRoom);
router.put('/api/rooms/:id', updateRoom);

//Devices
router.get('/api/devices', getDevices);
router.get('/api/devices/:id', getDevice);
router.post('/api/devices', createDevice);
router.delete('/api/devices/:id', deleteDevice);
router.put('/api/devices/:id', updateDevice);

//Instructors
router.get('/api/instructors', getInstructors)
router.get('/api/instructors/:id', getInstructor)
router.post('/api/instructors', createInstructor)
router.delete('/api/instructors/:id', deleteInstructor)
router.put('/api/instructors/:id', updateInstructor)

//Members
router.get('/api/members', getMembers)
router.get('/api/members/:id', getMember)
router.post('/api/members', createMember)
router.delete('/api/members/:id', deleteMember)
router.put('/api/members/:id', updateMember)

//Reservations
router.get('/api/reservations', getReservations)
router.get('/api/reservations/:id', getReservation)
router.post('/api/reservations', createReservation)
router.delete('/api/reservations/:id', deleteReservation)
router.put('/api/reservations/:id', updateReservation)

//Squassh_Courts
router.get('/api/squash', getSquashes)
router.get('/api/squash/:id', getSquash)
router.post('/api/squash', createSquash)
router.delete('/api/squash/:id', deleteSquash)
router.put('/api/squash/:id', updateSquash)

//Attends
router.get('/api/attends', getAttendes)
router.get('/api/attends/:id', getAttend)
router.post('/api/attends', createAttend)
router.delete('/api/attends/:id/:idc', deleteAttend)

//Assigned
router.get('/api/assigned', getAssigneds)
router.get('/api/assigned/:id', getAssigned)
router.post('/api/assigned', createAssigned)
router.delete('/api/assigned/:id', deleteAssigned)
router.put('/api/assigned/:id', updateAssigned)

//Users
router.get('/api/users', getUsers)
router.get('/api/users/:id', getUser)
router.post('/api/users', createUser)
router.delete('/api/users/:id', deleteUser)
router.put('/api/users/:id', updateUser)

//Classes
router.get('/api/classes', getClasses)
router.get('/api/classes/:id', getClass)
router.post('/api/classes', createClass)
router.delete('/api/classes/:id', deleteClass)
router.put('/api/classes/:id', updateClass)

//Login
router.get('/api/login/:user/:pass', Login)

//Consults
router.get('/api/consults/memclass/:id', membClass)
router.get('/api/consults/membnotc/:id', memNotSelectedClasses)



export default router;
