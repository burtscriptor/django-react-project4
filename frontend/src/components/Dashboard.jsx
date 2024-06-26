// Todo 
// finish styling 
// refactor code

import React from 'react'
import { useState, useEffect } from 'react'
import SessionsIndex from './SessionsIndex'
import api from '../api';
import Graph from './Graph';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../styles/DashBoard.css"



const Dashboard = ({ userName }) => {
    const [climbsArray, setClimbsArray] = useState([])
    const [climbsPerSession, setClimbsPerSession] = useState([])
    const [climbsByStyle, setClimbsByStyle] = useState([])
    const [climbsSent, setClimbsSent] = useState([])
    
   
    const [sessions, setSessions] = useState([])
    const [sessionsByType, setSessionsByType] = useState([])
   
    const [highestGrade, setHighestGrade] = useState([])
    const [gradeData, setGradeData] = useState([]);



useEffect(() => {
    api
    .get('api/climbs/')
    .then((res) => res.data)
    .then((data) => {
        setClimbsArray(data)
        console.log('climbsArray data', data)
        const sessionDataArray = data.reduce((acc, curr) => {
            const existingItem = acc.find(item => item.session === curr.session);
                if (existingItem) {
                    existingItem.count++
                } else {
                    acc.push({ session: curr.session, count: 1})
                }
                return acc;
            }, []);
            let count = 0
                data.forEach(function(climb)  {
                    if (climb.project_send_attempt === true && climb.sent === true){
                        count +1
                    };
                    return count;
                })
                setClimbsSent(count)
        const climbsByStyleArray = data.reduce((acc, curr) => {
            const existingItem = acc.find(item => item.style === curr.style)
                if (existingItem){
                    existingItem.count++
                }else{
                    acc.push({ style: curr.style, count: 1})
                }
                return acc;
        }, [])        
                
        const gradeDataArray = data.reduce((acc, curr) => {
            const existingItem = acc.find(item => item.grade === curr.grade)
                if (existingItem) {
                existingItem.count++
                } else {
                acc.push({ grade: curr.grade, count: 1})
                }
                return acc;
            }, []);
            
       gradeDataArray.sort((a,b) => a.grade - b.grade );
       const grade = []
       gradeDataArray.forEach((g) => {
        let number = parseInt(g.grade)
        grade.push(number)
       })    
       setClimbsByStyle(climbsByStyleArray)
       console.log('CBS' , climbsByStyleArray)
       setClimbsPerSession(sessionDataArray)
       setGradeData(gradeDataArray);
       setHighestGrade(grade)
      console.log('UN', userName)
        
    }); 
}, []);

useEffect(() => {
    const getSessions = async () => {
        api
            .get("api/session/")
            .then((res) => res.data)
            .then((data)=> {
                setSessions(data)
                console.log('sessonS', data)
                const sessionTypeCount = data.reduce((acc, curr) => {
                    const existingItem = acc.find(item => item.type === curr.type)
                    if (existingItem) {
                        existingItem.count ++
                    }else {
                        acc.push({ session: curr.type, count: 1})
                    }
                    return acc;
                }, []);
            setSessionsByType(sessionTypeCount);
            })

    }
    getSessions();
   
    
}, [])


 
    return (
        <>     
        <Container>
            <Row>
                <Col>
                   
                        <Card.Title id='overview' className="text-center">Dashboard</Card.Title>
             <hr ></hr>
                </Col>
            </Row>
            </Container>  
         <Container fluid className="mt-5">
            <Row className="justify-content-center"> 
            <Col className='text-center'> 
          
            <h5>Total climbs: {climbsArray.length}</h5>
            <h5>Total sessions: {sessions.length}</h5>
           
                </Col>
            <Col className='text-center'> 
            <h5>Highest grade: { Math.max(...highestGrade)}</h5>
            </Col>
            <Col className='text-center'> 
            
            <h5>Projects sent: {climbsSent} </h5><h5>Average per session:{climbsArray.length / sessions.length} </h5>
            
            </Col>
            
        </Row>
        </Container>
        <hr></hr>
        <Graph climbsPerSession={climbsPerSession} gradeData={gradeData} climbsArray={climbsArray} sessionsByType={sessionsByType} climbsByStyle={climbsByStyle} />
            <SessionsIndex sessions={sessions}  />
           
            </>       
    );

};

export default Dashboard;