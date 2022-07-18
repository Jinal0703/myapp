import React from 'react';
import { Button } from 'react-bootstrap';
import {
	FaSistrix,
	FaPrint,
	FaSave,
	FaFileInvoice,
	FaDollarSign,
} from 'react-icons/fa';
import { BsFillPrinterFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiFillDelete } from 'react-icons/ai';

const ButtonGroupHeader = () => {
	return (
		<div className='row my-1'>
			<div className='col-12 col-md-6 col-xl-4 mb-1'>
				<Button variant='primary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaSistrix />
						Search
					</div>
				</Button>
				<Button variant='dark' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaPrint />
						Status
					</div>
				</Button>
				<Button variant='light' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<BsFillPrinterFill />
						Print Statement
					</div>
				</Button>
				<Button variant='light' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaPrint />
						Print Credit Memo
					</div>
				</Button>
			</div>
			<div className='col-12 col-md-6 col-xl-5 mb-1'>
				<Button variant='warning' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaFileInvoice />
						Invoices
					</div>
				</Button>
				<Button variant='light' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaFileInvoice />
						Memos
					</div>
				</Button>
				<Button variant='primary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaSistrix />
						Ship To
					</div>
				</Button>
				<Button variant='success' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaDollarSign />
						Payment
					</div>
				</Button>
				<Button variant='success' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaDollarSign />
						Sales Order
					</div>
				</Button>
				<Button variant='secondary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaDollarSign />
						Quotes
					</div>
				</Button>
			</div>
			<div className='col-12 col-md-6 col-xl-3 mb-1'>
				<Button variant='primary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaPrint />
						New
					</div>
				</Button>
				<Button variant='danger' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<AiFillDelete />
						Delete
					</div>
				</Button>
				<Button variant='success' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<FaSave />
						Save
					</div>
				</Button>
				<Button variant='secondary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'>
						<AiFillCloseCircle />
						Close
					</div>
				</Button>
			</div>
		</div>
	);
};

export default ButtonGroupHeader;
