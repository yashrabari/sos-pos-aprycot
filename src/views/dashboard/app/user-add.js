import React from 'react'
import { Row, Col, Image, Form, Button } from 'react-bootstrap'
import Card from '../../../components/card'

import { Link } from 'react-router-dom'
// img
import avatars1 from '../../../assets/images/avatars/01.png'

const UserAdd = () => {
   return (
      <>
         <div>
            <Row>
               <Col xl="12" lg="8">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                           <h4 className="card-title"> Add New Employeer</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="new-user-info">
                           <form>
                              <div className="row">
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="fname">First Name:</Form.Label>
                                    <Form.Control type="text" id="fname" placeholder="First Name" />
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="lname">Last Name:</Form.Label>
                                    <Form.Control type="text" id="lname" placeholder="Last Name" />
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="add1">Street Address 1:</Form.Label>
                                    <Form.Control type="text" id="add1" placeholder="Street Address 1" />
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="add2">Street Address 2:</Form.Label>
                                    <Form.Control type="text" id="add2" placeholder="Street Address 2" />
                                 </Form.Group>
                                 <Form.Group className="form-group">
                                    <Form.Label>Role:</Form.Label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                       <option>Select</option>
                                       <option>Manager</option>
                                       <option>Cashier</option>
                                       <option>Waiter</option>
                                    </select>
                                 </Form.Group>
                                 <Form.Group className="col-md-6  form-group">
                                    <Form.Label htmlFor="mobno">Mobile Number:</Form.Label>
                                    <Form.Control type="text" id="mobno" placeholder="Mobile Number" />
                                 </Form.Group>
                                 <Form.Group className="col-md-6  form-group">
                                    <Form.Label htmlFor="altconno">Alternate Contact:</Form.Label>
                                    <Form.Control type="text" id="altconno" placeholder="Alternate Contact" />
                                 </Form.Group>
                                 <Form.Group className="col-md-6  form-group">
                                    <Form.Label htmlFor="email">Email:</Form.Label>
                                    <Form.Control type="email" id="email" placeholder="Email" />
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="pno">Pin Code:</Form.Label>
                                    <Form.Control type="text" id="pno" placeholder="Pin Code" />
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="pno">Aadhar-Card:</Form.Label>
                                    <div>
                                       <div className='relative'>
                                          <input className='block cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg' aria-describedby="user_avatar_help" id="user_avatar" type="file" style={{width: '100%', borderRadius: 20, paddingLeft: 10, backgroundColor: "#ffffff"}}/>
                                       </div>
                                    </div>
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="pno">Pancard:</Form.Label>
                                    <div>
                                       <div className='relative'>
                                          <input className='block cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg' aria-describedby="user_avatar_help" id="user_avatar" type="file" style={{width: '100%', borderRadius: 20, paddingLeft: 10, backgroundColor: "#ffffff"}}/>
                                       </div>
                                    </div>
                                 </Form.Group>
                                 <Form.Group className="col-md-12 form-group">
                                    <Form.Label htmlFor="city">Town/City:</Form.Label>
                                    <Form.Control type="text" id="city" placeholder="Town/City" />
                                 </Form.Group>
                              </div>
                              <Button type="button" variant="btn btn-primary" onClick={() =>{<Link to={"/app/user-list"}/>}}>Add Employeer</Button>
                           </form>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
      </>
   )

}

export default UserAdd;