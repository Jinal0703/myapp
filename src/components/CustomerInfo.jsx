import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CustomerInfo = () => {
	return (
		<>
			<div className='row px-2'>
				<div className='col-12 col-lg-9'>
					<div className='d-flex flex-column'>
						<div className='row border mb-1'>
							<Form.Group className='mb-1 col-12 col-md-6 col-lg-4 '>
								<Form.Label>Customer</Form.Label>
								<Form.Select
									aria-label='Default select example'
									size='sm'>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className='mb-1 col-12 col-md-6 col-lg-4 '>
								<Form.Label>Name</Form.Label>
								<div className='d-flex align-items-center'>
									<Form.Select
										aria-label='Default select example'
										size='sm'>
										<option value='1'>John</option>
										<option value='2'>Joe</option>
										<option value='3'>Harry</option>
									</Form.Select>
									<Form.Check
										type='checkbox'
										id='disabledFieldsetCheck'
										className='ms-2'
									/>
								</div>
							</Form.Group>
							<Form.Group className='mb-1 col-12 col-md-6 col-lg-4 '>
								<Form.Label>Type</Form.Label>
								<Form.Select
									aria-label='Default select example'
									size='sm'>
									<option value='1'>One</option>
									<option value='2'>Two</option>
									<option value='3'>Three</option>
								</Form.Select>
							</Form.Group>
						</div>
						<div className='row border py-1'>
							<Form.Group className='mb-1 col-4'>
								<div className='d-flex align-items-center'>
									<Form.Label>Address1</Form.Label>
									<Form.Control
										type='text'
										className='ms-2'
										size='sm'
									/>
								</div>
							</Form.Group>
							<Form.Group className='mb-1 col-4'>
								<div className='d-flex align-items-center'>
									<Form.Label>Address2</Form.Label>
									<Form.Control
										type='text'
										className='ms-2'
										size='sm'
									/>
								</div>
							</Form.Group>
							<Form.Group className='mb-1 col-4'>
								<div className='d-flex align-items-center'>
									<Form.Label>Address3</Form.Label>
									<Form.Control
										type='text'
										className='ms-2'
										size='sm'
									/>
								</div>
							</Form.Group>
							<div className='d-flex flex-wrap col-12 '>
								<Form.Group className='mb-1 col-4  '>
									<div className='d-flex align-items-center'>
										<Form.Label>City</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label>State</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center '>
										<Form.Label>Zip</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
							</div>
							<div className='d-flex flex-wrap col-12'>
								<Form.Group className='mb-1 col-4 '>
									<div className='d-flex align-items-center '>
										<Form.Label>Country</Form.Label>
										<Form.Select
											className='mx-2'
											size='sm'
											aria-label='Default select example'>
											<option value='1'>India</option>
											<option value='2'>China</option>
											<option value='3'>Canada</option>
										</Form.Select>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4 '>
									<div className='d-flex align-items-center'>
										<Form.Label>Phone</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label>Fax</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
							</div>
							<div className='d-flex flex-wrap col-12'>
								<Form.Group className='mb-1 col-4 '>
									<div className='d-flex align-items-center'>
										<Form.Label>Province</Form.Label>
										<Form.Select
											className='mx-2'
											size='sm'
											aria-label='Default select example'>
											<option></option>
											<option value='1'>India</option>
											<option value='2'>China</option>
											<option value='3'>Canada</option>
										</Form.Select>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4 '>
									<div className='d-flex align-items-center'>
										<Form.Label className='text-nowrap'>
											Contact Person
										</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4 '>
									<div className='d-flex align-items-center'>
										<Form.Label>Cell</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
							</div>
							<div className='d-flex flex-wrap col-12 '>
								<Form.Group className='mb-1 col-4 '>
									<div className='d-flex align-items-center'>
										<Form.Label>Currency</Form.Label>
										<Form.Select
											className='mx-2'
											size='sm'
											aria-label='Default select example'>
											<option></option>
											<option value='1'>Rupees</option>
											<option value='2'>USD</option>
											<option value='3'>GPY</option>
										</Form.Select>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4 '>
									<div className='d-flex align-items-center'>
										<Form.Label>Website</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label>Buyer</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label>Accountant</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label className='text-nowrap'>
											DOB of Customer
										</Form.Label>
										<Form.Control
											type='date'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label className='text-nowrap'>
											Name of Spouse
										</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
							</div>
							<div className='d-flex flex-wrap col-12'>
								<Form.Group className='mb-1 col-4 '>
									<div className='d-flex align-items-center'>
										<Form.Label className='text-nowrap'>
											Title
										</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label className='text-nowrap'>
											Email-1
										</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label className='text-nowrap'>
											Email-2
										</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label>Owner</Form.Label>
										<Form.Control
											type='text'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label className='text-nowrap'>
											Date of Anniversary
										</Form.Label>
										<Form.Control
											type='date'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
								<Form.Group className='mb-1 col-4'>
									<div className='d-flex align-items-center'>
										<Form.Label className='text-nowrap'>
											DOB of Spouse
										</Form.Label>
										<Form.Control
											type='date'
											className='mx-2'
											size='sm'
										/>
									</div>
								</Form.Group>
							</div>
						</div>
					</div>
				</div>
				<div className='col-12 col-lg-3'>
					<div className='d-flex '>
						<Form.Group className='mb-1' controlId='customer'>
							<Form.Check
								type='checkbox'
								label='Customer is inactive'
							/>
						</Form.Group>
						<Form.Group className='mb-1 ms-2' controlId='partner'>
							<Form.Check type='checkbox' label='Partner' />
						</Form.Group>
						<Form.Group className='mb-1 ms-2' controlId='vendor'>
							<Form.Check type='checkbox' label='Vendor' />
						</Form.Group>
					</div>
					<Button>Copy shipto Info</Button>
					<Form.Group className='mb-1 '>
						<Form.Label>Notes</Form.Label>
						<Form.Control
							as='textarea'
							className=''
							style={{ height: '50px' }}
						/>
					</Form.Group>
					<Form.Group className='mb-1 '>
						<Form.Label>Popup Notes</Form.Label>
						<Form.Control
							as='textarea'
							className=''
							style={{ height: '50px' }}
						/>
					</Form.Group>
					<Form.Group className='mb-1 '>
						<Form.Label>Resale</Form.Label>
						<Form.Control
							as='textarea'
							className=''
							style={{ height: '50px' }}
						/>
					</Form.Group>
					<Button variant='secondary'>Print label</Button>
				</div>
			</div>
			<div className='row border mx-0 p-1 mt-1 '>
				<div className='col-12 col-md-6 col-lg-3'>
					<p>
						Date of Last Invoice: <span>31/12/22</span>
					</p>
					<p>
						Date of Last Payment: <span>31/12/22</span>
					</p>
					<p>
						Date of Last Memo: <span>31/12/22</span>
					</p>
				</div>
				<div className='col-12 col-md-6 col-lg-3'>
					<p>
						YTD Sales Carat: <span>0.00</span>
					</p>
					<p>
						YTD Memo Carat: <span>0.00</span>
					</p>
					<p>
						YTD Sales: <span>0.00</span>
					</p>
				</div>
				<div className='col-12 col-md-6 col-lg-3'>
					<p>
						Open Memo: <span>0.00</span>
					</p>
					<p>
						Balance Due: <span>0.00</span>
					</p>
					<p>
						YTD Memos: <span>0.00</span>
					</p>
				</div>
				<div className='col-12 col-md-6 col-lg-3'>
					<p>
						Avg Payment Days: <span>0.00</span>
					</p>
					<p>
						Avg Memo Days: <span>0.00</span>
					</p>
					<p>
						Avaliable Credit: <span>0.00</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default CustomerInfo;
