import React, { useState } from 'react';
import LinkedList from './linkedlist-v'

const localList = new LinkedList()

function LinkedListController(props){

    const [linkedList, setLinkedList] = useState(localList);
    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");
    const [current, setCurrent] = useState('{ null }');
    const [total, setTotal] = useState(0);

    const handleSubjectChange = (e) => {
        setSubject(e.currentTarget.value);
    };
    const handleAmountChange = (e) => {
        setAmount(e.currentTarget.value);
    };
    const handleInsert = () => {
        if(!subject || !amount){
            alert('Please enter values into the appropriate fields.')
            return
        }
        linkedList.insert(subject, amount);
        setLinkedList(linkedList);
        setCurrent(linkedList.currentNode.show());
        setTotal(linkedList.total())
    }
    const handleDelete = () => {
        try{
            linkedList.delete();
            setLinkedList(linkedList);
            linkedList._length > 0 ? setCurrent(linkedList.currentNode.show()) : setCurrent('{ null }')
            setTotal(linkedList.total())
        } catch (err) {
            console.log(err)
        }
    }
    const handleTraversal = (direction) => {
        if(linkedList._length > 0) {
            switch(direction){
                case 'first':
                    linkedList.first();
                    break;
                case 'previous':
                    linkedList.previous();
                    break;
                case 'next':
                    linkedList.next();
                    break;
                case 'last':
                    linkedList.last();
                    break;
                default:
                    setLinkedList(linkedList)
            }
            setLinkedList(linkedList)
            setCurrent(linkedList.currentNode.show())
        }
    }

    return (
        <div className="w3-content w3-section">
            <h1 style={{color: 'white'}}>Linked List Manager</h1>
            <p style={{color: 'white'}}></p>
            <div className="w3-row-padding w3-margin-top" style={{minHeight: '10vh'}}>
                <span style={{color: '#00cc66'}}>Current Node:</span> { current } <br />
                Total of all Nodes: { total }
            </div>
            <div className="w3-row w3-row-padding w3-margin w3-white w3-border w3-round-small" style={{minWidth: '700px'}}>
                <h3>Control Panel</h3>
                <div className="w3-col s3 m2 l2 w3-center-align">
                    <i className="fa fa-angle-double-left fa-2x" title="First Record" onClick={() => handleTraversal('first')}></i>&nbsp;
                    <i className="fa fa-chevron-circle-left fa-2x" title="Previous Record"onClick={() => handleTraversal('previous')}></i><br />
                    <p className="w3-small">First | Previous</p>
                </div>
                <div className="w3-col s6 m8 l8 w3-left-align" style={{fontSize: '.8em', fontFamily: 'Verdana', lineHeight: '.9em'}}>
                    Subject: <input className="w3-input w3-small w3-border w3-round-small" type="text" onChange={handleSubjectChange} style={{height: '30px', width: '100%'}} /><br />
                    Amount: <input className="w3-input w3-small w3-border w3-round-small" type="number" onChange={handleAmountChange} style={{height: '30px', width: '100%'}} /><br />
                    <button className="w3-button w3-block w3-blue w3-ripple w3-padding" onClick={handleInsert} >+ Insert Record To List +</button><br />
                    <button className="w3-button w3-block w3-grey w3-ripple w3-padding" onClick={handleDelete}>- Delete Current Record -</button><br />
                </div>
                <div className="w3-col s3 m2 l2 w3-center-align">
                    <i className="fa fa-chevron-circle-right fa-2x" title="Next Record" onClick={() => handleTraversal('next')}></i>&nbsp;
                    <i className="fa fa-angle-double-right fa-2x" title="Last Record" onClick={() => handleTraversal('last')}></i><br />
                    <p className="w3-small">Next | Last</p>
                </div>
            </div>
        </div>
    )
}

export default LinkedListController;