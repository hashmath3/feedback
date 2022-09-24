import React from 'react'
import './SaveResponse.css';
import Table from 'react-bootstrap/Table';
import BasicExample from '../table';



function SaveResponse() {

    const [userName, setUserName] = React.useState('');
    const [userMessage, setUserMessage] = React.useState('');
    const userResponse = [];
    const [allResponses, setAllResponses] = React.useState([]);
    const [stopInfiniteLoop, setStopInfiniteLoop] = React.useState(false);

    // Getting all the responses
    if(!stopInfiniteLoop) {
        fetch('https://first-c3008-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            for (const dataItem in data) {
                console.log(
                    data[dataItem].userName,
                    data[dataItem].userMessage
                );
                userResponse.push({userName: data[dataItem].userName, userMessage: data[dataItem].userMessage});
            }
            setAllResponses(userResponse);
            // setUserResponse(data);
         })
         setStopInfiniteLoop(true);
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleUserMessageChange = (event) => {
        setUserMessage(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('userName: ', userName);
        console.log('userMessage: ', userMessage);

        if(userName === '' && userMessage === '') {
            alert("Can't submit empty feedback");
            return;
        }

        // Create new responses (CRUD)
        fetch('https://first-c3008-default-rtdb.asia-southeast1.firebasedatabase.app/message.json',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: userName,
                    userMessage: userMessage
                }) 
            }
        ).then(res => {
            console.log('res: ', res);
            return res.json();
        }).then ( data => {
            console.log('data: ', data);
        })

        setUserName('');
        setUserMessage(''); 


        alert('submitted feedback')
    }
    

  return (
    <div className='container1'>
        <h1>Feedback</h1>
       
        <div className='container-box'>
            <div className='form-container'>
                <form onSubmit={handleSubmit} >
                    <input className='input-user-name' type="text" placeholder="Enter Name" onChange={handleUserNameChange} value={userName}/>
                    <input className='input-user-message' type="text" placeholder="Enter your message" onChange={handleUserMessageChange} value={userMessage} />
                    <button className='input-submit' type="submit" >Submit</button>
                </form>
            </div>

            <div className='response-container' >
            <Table striped bordered hover variant="dark">
                <thead>
        <tr>
          <th>S.No</th>
          <th> Name</th>
        
          <th>message</th>
        </tr>
      </thead>
      
                  {  allResponses && (
                        allResponses.map(item => { 
                            return (
                               
                                <tbody>
                            <tr className='response-item'>
                           
                            <td>{allResponses.indexOf(item)+1}</td>
                                <td className='response-name'>{item.userName} </td>
                                <td className='response-message'>{item.userMessage}</td>
                            </tr>
                            </tbody> )
                        } )
                    )
                }
               
    </Table>
            </div>
        
        </div>

    </div>
  )
}

export default SaveResponse